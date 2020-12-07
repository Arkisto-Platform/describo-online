import { readJSON, writeJSON } from "fs-extra";
import { flattenDeep, isPlainObject, groupBy, isString, isArray } from "lodash";
import { insertCollection, findCollection } from "./collections";
import {
    insertEntity,
    attachProperty,
    associate,
    getEntity,
    getEntityProperties,
} from "./entities";
import models from "../models";

import { getLogger } from "../common";
const log = getLogger();

const rootDescriptorIdPrefix = "#:localid:describo:";
const rootDescriptors = ["ro-crate-metadata.json", "ro-crate-metadata.jsonld"];

export class Crate {
    constructor() {}

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
                        description: rootDataset.description,
                    });
                }
            } else {
                //  no
                //  mint a new collection
                log.debug("Minting a new collection for this crate");
                collection = await insertCollection({
                    name: rootDataset.name,
                    description: rootDataset.description,
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
                description: rootDataset.description,
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
        for (let entity of entities) {
            if (!entity.name) entity.name = entity["@id"] ? entity["@id"] : entity["@type"];
            if (isArray(entity["@type"])) entity["@type"] = entity["@type"].join(", ");
            if (isArray(entity.name)) entity.name = entity.name.join(", ");
            entity.uuid = (await insertEntity({ collectionId: collection.id, entity })).id;
        }

        // now iterate over each entity
        const entitiesById = groupBy(entities, "@id");
        let i = 0;
        let total = entities.length;
        for (let entity of entities) {
            i += 1;
            if (i % 20 === 0) {
                io.emit("loadRouteHandler", { msg: `loaded ${i} / ${total} entities into the DB` });
            }
            const properties = Object.keys(entity).filter((p) => !filterProperties.includes(p));
            for (let property of properties) {
                let data = this.asArray(entity[property]);
                for (let value of data) {
                    if (isString(value)) {
                        await attachProperty({
                            collectionId: collection.id,
                            entityId: entity.uuid,
                            property,
                            value,
                        });
                    } else if (isPlainObject(value) && "@id" in value) {
                        // const tgtEntityId = entitiesById[value["@id"]].pop()
                        //     .uuid;
                        let tgtEntityId = entitiesById[value["@id"]];
                        if (tgtEntityId.length) {
                            tgtEntityId = tgtEntityId.pop().uuid;
                            await associate({
                                collectionId: collection.id,
                                entityId: entity.uuid,
                                property,
                                tgtEntityId,
                            });
                        }
                    }
                }
            }
        }
    }

    async exportCollectionAsROCrate({ collectionId, sync = false }) {
        const collection = await models.collection.findOne({
            where: { id: collectionId },
            attributes: ["id", "metadata"],
            include: [
                {
                    model: models.entity,
                    raw: true,
                    attributes: ["id", "eid"],
                },
            ],
        });
        let crate = {
            "@context": collection.metadata.context,
            "@graph": [
                {
                    ...collection.metadata.rootDescriptor,
                    describoCollectionId: collection.id,
                },
            ],
        };
        const entities = collection.entities.map((e) => e.get());
        const idToEidMapping = entities.reduce((obj, e) => ({ ...obj, [e.id]: e.eid }), {});
        for (let entity of entities) {
            entity = await getEntity({
                id: entity.id,
                collectionId: collection.id,
            });
            let { properties } = await getEntityProperties({
                id: entity.id,
                collectionId: collection.id,
            });
            properties = this.assembleProperties({
                idToEidMapping,
                properties,
            });
            entity = {
                "@id": entity.eid,
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
        return crate;
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
                    return { "@id": idToEidMapping[p.tgtEntityId] };
                }
            });
        }

        let reverse = groupBy(reverseProperties, "name");
        for (let name of Object.keys(reverse)) {
            reverse[name] = reverse[name].map((p) => {
                return { "@id": idToEidMapping[p.tgtEntityId] };
            });
        }
        return { forward, reverse };
    }
}
