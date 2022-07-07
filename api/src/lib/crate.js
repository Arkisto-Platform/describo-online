import fsExtraPkg from "fs-extra";
const { readJSON, writeJSON } = fsExtraPkg;
import { flattenDeep, isPlainObject, groupBy, isString, isArray, compact } from "lodash-es";
import { insertCollection, findCollection } from "./collections.js";
import {
    insertEntity,
    attachProperty,
    associate,
    getEntity,
    getEntityProperties,
} from "./entities.js";
import { loadClassDefinition, loadProfile } from "./profile.js";
import models from "../models/index.js";
import { syncLocalFileToRemote } from "../lib/file-browser.js";
import fetch from "node-fetch";
import validatorPkg from "validator";
const { isURL, isDataURI } = validatorPkg;

import { loadConfiguration, getLogger } from "../common/index.js";
const log = getLogger();

const rootDescriptorIdPrefix = "#:localid:describo:";
const rootDescriptors = ["ro-crate-metadata.json", "ro-crate-metadata.jsonld"];

export class Crate {
    constructor({ profile }) {
        if (profile) {
            this.profile = profile;
        } else {
            this.profile = {
                name: "schema.org",
                version: "latest",
                description: "All of schema.org",
                file: "schema.org",
            };
        }
    }

    async loadCrateFromFile({ file }) {
        let collection;
        log.debug(`loading crate file @ ${file}`);
        let crate = await readJSON(file);

        const { rootDataset, rootDescriptor } = this.getRootDataset({ crate });
        // console.log(rootDataset, rootDescriptor);

        // does the root descriptor have an identifier property?
        if (rootDescriptor.identifier) {
            // yes
            let identifier = this.asArray(rootDescriptor.identifier);
            identifier = identifier.filter((e) => {
                return isPlainObject(e) && e["@id"].match(rootDescriptorIdPrefix);
            });
            // is there a describo collection identifier
            if (identifier.length === 1) {
                // yes
                identifier = identifier.pop();
                identifier = identifier["@id"].split(rootDescriptorIdPrefix)[1];
                collection = await findCollection({ id: identifier });
                collection = collection.pop();
                if (!collection) {
                    // identifier found in crate but no matching collection
                    log.debug("Minting a new collection for this crate");
                    collection = await models.collection.create({
                        id: identifier,
                        name: rootDataset.name,
                    });
                }
            } else {
                //  no
                //  mint a new collection
                log.debug("Minting a new collection for this crate");
                collection = await insertCollection({
                    name: rootDataset.name,
                });
                rootDescriptor.identifier = flattenDeep([rootDescriptor.identifier]);
                log.debug("Adding collection identifier to crate");
                rootDescriptor.identifier.push({
                    "@id": `${rootDescriptorIdPrefix}${collection.id}`,
                });
                crate = this.updateRootDescriptor({ crate, rootDescriptor });
            }
        } else {
            // no
            //  mint a new collection
            log.debug("Minting a new collection for this crate");
            collection = await insertCollection({
                name: rootDataset.name,
            });

            // stamp the collection id into the root descriptor
            log.debug("Adding collection identifier to crate");
            rootDescriptor.identifier = [{ "@id": `${rootDescriptorIdPrefix}${collection.id}` }];
            crate = this.updateRootDescriptor({ crate, rootDescriptor });
        }

        await this.writeCrate({ file, crate });
        return { crate, collection };
    }

    getRootDescriptor({ crate }) {
        // return crate['@graph'].filter
        let rootDescriptor = crate["@graph"].filter((e) => rootDescriptors.includes(e["@id"]));
        if (rootDescriptor.length !== 1) {
            // throw new Error("The crate does not have exactly one root dataset descriptor");
            for (let descriptor of rootDescriptor) {
                let rootDataset = crate["@graph"].filter(
                    (e) => e["@id"] === descriptor.about["@id"]
                );
                if (rootDataset.length) return descriptor;
            }
        } else {
            rootDescriptor = rootDescriptor.pop();
            return rootDescriptor;
        }
    }

    getRootDataset({ crate }) {
        let rootDescriptor = this.getRootDescriptor({ crate });
        let rootDataset = crate["@graph"].filter((e) => e["@id"] === rootDescriptor.about["@id"]);
        if (rootDataset.length !== 1) {
            throw new Error("Unable to locate the root dataset");
        }
        rootDataset = rootDataset.pop();
        if (rootDataset["@id"] !== "./") rootDataset["@id"] = "./";
        if (rootDataset) return { rootDescriptor, rootDataset };
    }

    updateRootDescriptor({ crate, rootDescriptor }) {
        let graph = crate["@graph"].filter((e) => e["@id"] !== "ro-crate-metadata.json");
        graph = [rootDescriptor, ...graph];
        crate = { "@context": crate["@context"], "@graph": graph };
        return crate;
    }

    async writeCrate({ file, crate }) {
        await writeJSON(file, crate, { spaces: 2 });
    }

    async importCrateIntoDatabase({ collection, crate, sync = false, io }) {
        // check if collection already has entities and fail out if it does
        let count = await models.entity.count({
            where: { collectionId: collection.id },
        });
        if (count !== 0) {
            log.debug(`Crate already loaded into the DB - not reloading`);
            throw new Error("That collection is already loaded.");
        }

        const metadata = {
            context: crate["@context"],
            rootDescriptor: this.getRootDescriptor({ crate }),
        };
        collection = await models.collection.findOne({
            where: { id: collection.id },
        });
        await collection.update({ metadata });

        let entities = crate["@graph"].filter(
            (e) => !(rootDescriptors.includes(e["@id"]) && e["@type"] === "CreativeWork")
        );
        if (sync) {
            // wait for the creation - necessary for testing
            await this.createCrateEntities({ collection, entities, io });
        } else {
            // kick off the creation but don't wait around for it
            this.createCrateEntities({ collection, entities, io });
        }
        return collection;
    }

    async createCrateEntities({ collection, entities, io }) {
        const filterProperties = ["@id", "@type", "name", "uuid"];
        // iterate over the entities and create each one
        let i = 0;
        let total = entities.length;

        for (let entity of entities) {
            i += 1;
            if (i % 20 === 0) {
                io.emit("loadRouteHandler", {
                    msg: `loading entities: completed ${i} / ${total} entities`,
                });
            }
            if (isArray(entity["@type"])) entity["@type"] = entity["@type"].join(", ");
            if (isArray(entity.name)) entity.name = entity.name.join(", ");
            entity.uuid = (
                await insertEntity({ collectionId: collection.id, entity, profile: this.profile })
            ).id;
        }

        // now iterate over each entity
        const entitiesById = groupBy(entities, "@id");
        i = 0;
        for (let entity of entities) {
            // let profile = await loadProfile({ file: this.profile.file });
            const typeDefinition = await loadClassDefinition({
                classNames: [entity["@type"]],
                profile: this.profile,
            });

            i += 1;
            if (i % 20 === 0) {
                io.emit("loadRouteHandler", {
                    msg: `loading entity properties and relationships: completed ${i} / ${total} entities`,
                });
            }
            const properties = Object.keys(entity).filter((p) => !filterProperties.includes(p));
            for (let property of properties) {
                let data = this.asArray(entity[property]);
                let propertyDefinition;
                try {
                    propertyDefinition = typeDefinition.inputs.filter((i) => i.name === property);
                    propertyDefinition = propertyDefinition.length ? propertyDefinition[0] : {};
                } catch (error) {
                    propertyDefinition = {};
                }
                for (let value of data) {
                    if (isString(value)) {
                        await attachProperty({
                            typeDefinition: propertyDefinition,
                            collectionId: collection.id,
                            entityId: entity.uuid,
                            property,
                            value,
                        });
                    } else if (isPlainObject(value) && "@id" in value) {
                        let tgtEntityId = entitiesById[value["@id"]];
                        if (tgtEntityId && tgtEntityId.length) {
                            tgtEntityId = tgtEntityId.pop().uuid;
                            await associate({
                                typeDefinition: propertyDefinition,
                                collectionId: collection.id,
                                entityId: entity.uuid,
                                property,
                                tgtEntityId,
                            });
                        } else if (
                            !tgtEntityId &&
                            isURL(value["@id"], { protocols: ["http", "https", "ftp", "ftps"] })
                        ) {
                            let tgtEntity = await insertEntity({
                                collectionId: collection.id,
                                entity: { "@id": value["@id"], "@type": "URL" },
                                profile: this.profile,
                            });
                            await associate({
                                typeDefinition: propertyDefinition,
                                collectionId: collection.id,
                                entityId: entity.uuid,
                                property,
                                tgtEntityId: tgtEntity.id,
                            });
                        } else {
                            await attachProperty({
                                typeDefinition: propertyDefinition,
                                collectionId: collection.id,
                                entityId: entity.uuid,
                                property,
                                value: value["@id"],
                            });
                        }
                    }
                }
            }
        }

        // get root dataset and send loaded message
        if (io?.emit) io.emit("loadRouteHandler", { msg: `Loaded collection: ${collection.name}` });
    }

    async exportCollectionAsROCrate({ collectionId, sync = false }) {
        this.configuration = await loadConfiguration();
        const collection = await models.collection.findOne({
            where: { id: collectionId },
            attributes: ["id", "metadata", "updatedAt"],
        });
        let crate = {
            "@context": collection.metadata.context,
            "@graph": [
                {
                    ...collection.metadata.rootDescriptor,
                },
            ],
        };
        const entities = await collection.getEntities({
            attributes: ["id", "eid", "etype", "name"],
        });
        const idToEidMapping = entities.reduce((obj, e) => ({ ...obj, [e.id]: e.eid }), {});
        for (let entity of entities) {
            let { properties } = await getEntityProperties({
                id: entity.id,
                collectionId: collection.id,
            });
            properties = this.assembleProperties({
                idToEidMapping,
                properties,
            });
            entity = {
                "@id": this.mapId(entity.eid),
                "@type": entity.etype,
                name: entity.name,
                ...properties.forward,
                "@reverse": {
                    ...properties.reverse,
                },
            };
            crate["@graph"].push(entity);
        }
        // console.log(JSON.stringify(crate, null, 2));
        return { crate, updatedAt: collection.updatedAt };
    }

    async saveCrate({ session, user, resource, parent, localFile, crate }) {
        // write the file out locally
        await writeJSON(localFile, crate, { spaces: 2 });

        // sync it back to the remote
        syncLocalFileToRemote({
            session,
            user,
            resource,
            parent,
            localFile,
        });

        const configuration = await loadConfiguration();
        // console.log(configuration.api.applications);

        let endpoints = configuration.api.applications.map((application) => {
            if (!application.postCrateTo?.url) return undefined;
            return {
                url: application?.postCrateTo.url,
                headers: application?.postCrateTo.headers,
            };
        });
        endpoints = compact(endpoints);
        for (let endpoint of endpoints) {
            let response = await fetch(endpoint.url, {
                method: "POST",
                headers: endpoint.headers,
                body: JSON.stringify(crate),
            });
            if (response.status !== 200) {
                const error = await response.json();
                log.error(
                    `Error POST'ing the crate back to ${endpoint.url}: ${response.status} - ${error.message}`
                );
            }
        }
    }

    // ! Deprecated
    // ! This method tries to patch an on disk crate (localCrateFile) with changes applied to the DB
    // !  By its very it can't handle entity id updates b/c the id in the db is different to the id
    // !  on disk so we can't know what needs to be updated. DON'T USE THIS METHOD
    // !
    async updateCrate({ localCrateFile, collectionId, actions, debug = false }) {
        const collection = await models.collection.findOne({
            where: { id: collectionId },
            attributes: ["id", "metadata", "updatedAt"],
        });
        let entity;
        let crate = await readJSON(localCrateFile);
        // console.log(JSON.stringify(crate, null, 2));
        for (let action of actions) {
            if (debug) console.debug("action to apply", JSON.stringify(action, null, 2));
            let updates = [];
            if (action.name === "insert") {
                const entityId = action.entity.id;
                entity = await getEntity({ collectionId, id: entityId });
                crate = insertEntity({ crate, entity });
            }
            if (["insert", "update"].includes(action.name)) {
                // load context entity and schedule for update
                const entityId = action.entity.id;
                entity = await getEntity({ collectionId, id: entityId });
                updates.push(entity);

                // find all instances of context entity as target and schedule for update
                let properties = await models.property.findAll({
                    where: { tgtEntityId: entityId },
                });
                for (let property of properties) {
                    entity = await getEntity({ collectionId, id: property.entityId });
                    updates.push(entity);
                }
            }
            if (action.name === "remove") {
                crate = removeEntity({ crate, entity: action.entity });
            }

            for (let entity of updates) {
                if (debug) console.log("entity to update", entity.get());
                crate = updateEntity({ crate, entity });
                let { properties } = await getEntityProperties({ collectionId, id: entity.id });
                crate = await updateEntityProperties({
                    crate,
                    entity,
                    properties,
                });
            }
        }
        // console.log(JSON.stringify(crate, null, 2));
        return { crate, updatedAt: collection.updatedAt };

        function insertEntity({ crate, entity }) {
            crate["@graph"] = crate["@graph"].filter(
                (e) =>
                    !(
                        e["@id"] === (entity.eid ? entity.eid : entity.id) &&
                        e["@type"] === entity.etype
                    )
            );
            crate["@graph"].push({
                "@id": entity.eid ? entity.eid : entity.id,
                "@type": entity.etype,
                name: entity.name,
            });
            return crate;
        }

        function removeEntity({ crate, entity }) {
            crate["@graph"] = crate["@graph"].filter((e) => {
                return ![entity.eid, entity.id].includes(e["@id"]) && e["@id"] !== entity.etype;
            });
            return crate;
        }

        function updateEntity({ crate, entity }) {
            if (debug) console.log("crate as it is", JSON.stringify(crate, null, 2));

            crate["@graph"] = crate["@graph"].map((e) => {
                if (e["@id"] === entity.eid && e["@type"] === entity.etype) {
                    return {
                        name: entity.name,
                        "@id": entity.eid ? entity.eid : entity.id,
                        "@type": entity.etype,
                    };
                } else {
                    return e;
                }
            });
            return crate;
        }

        async function updateEntityProperties({ crate, entity, properties }) {
            // properties.forEach((p) => console.log(p.get()));
            const reverseProperties = groupBy(
                properties.filter((p) => p.direction === "R"),
                "name"
            );
            properties = groupBy(
                properties.filter((p) => p.direction !== "R"),
                "name"
            );

            for (let e of crate["@graph"]) {
                if (e["@id"] === entity.eid && e["@type"] === entity.etype) {
                    // found a match - add simple value properties and forward refs
                    for (let property of Object.keys(properties)) {
                        let data = [];
                        for (let entry of properties[property]) {
                            if (entry.value) data.push(entry.value);
                            if (entry.direction === "F") {
                                entry = await getEntity({
                                    collectionId,
                                    id: entry.tgtEntityId,
                                });
                                data.push({ "@id": entry.eid ? entry.eid : entry.id });
                            }
                        }
                        e[property] = data;
                    }

                    // found a match - add reverse refs
                    for (let property of Object.keys(reverseProperties)) {
                        if (reverseProperties[property].length) {
                            let data = [];
                            if (!e["@reverse"]) e["@reverse"] = {};
                            for (let entry of reverseProperties[property]) {
                                if (entry.direction === "R") {
                                    entry = await getEntity({
                                        collectionId,
                                        id: entry.tgtEntityId,
                                    });
                                    data.push({ "@id": entry.eid ? entry.eid : entry.id });
                                }
                            }
                            e["@reverse"][property] = data;
                        }
                    }
                }
            }

            return crate;
        }
    }

    asArray(data) {
        return flattenDeep([data]);
    }

    assembleProperties({ idToEidMapping, properties }) {
        let simpleProperties = properties.filter((p) => p.value);
        let forwardProperties = properties.filter((p) => p.direction === "F");
        let reverseProperties = properties.filter((p) => p.direction === "R");

        let forward = groupBy([...simpleProperties, ...forwardProperties], "name");
        for (let name of Object.keys(forward)) {
            forward[name] = forward[name].map((p) => {
                if (p.value) {
                    return p.value;
                } else if (p.tgtEntityId) {
                    return { "@id": this.mapId(idToEidMapping[p.tgtEntityId]) };
                }
            });
        }

        let reverse = groupBy(reverseProperties, "name");
        for (let name of Object.keys(reverse)) {
            reverse[name] = reverse[name].map((p) => {
                return { "@id": this.mapId(idToEidMapping[p.tgtEntityId]) };
            });
        }
        return { forward, reverse };
    }

    mapId(id) {
        const protocols = this.configuration.api.identifierURISchemes;
        if (isURL(id, { protocols })) {
            // is a valid url given the list of schemes defined in the config
            return encodeURI(id);
        } else if (isDataURI(id)) {
            // is a valid data uri like data:[<mediatype>][;base64],<data>
            return encodeURI(id);
        } else if (id.match(/^[a-z,A-z]+:/gm)) {
            // is a valid prefixed identifier: e.g. schema:Person
            return encodeURI(id);
        } else if (id.match(/^_:/gm)) {
            // is an empty node: e.g. _:identifier
            return encodeURI(id);
        } else if (id.match(/^.?\//gm)) {
            // starts with ./ or /
            return encodeURI(id);
        } else if (id.match(/^#/)) {
            // starts with #
            return encodeURI(id);
        } else {
            return encodeURI(`#${id}`);
        }
    }
}
