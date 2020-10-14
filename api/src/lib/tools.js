import { insertCollection, findCollection } from "./collections";
import { insertEntity, attachProperty, associate, getEntity } from "./entities";
import { groupBy, flattenDeep, isPlainObject, isString } from "lodash";
import models from "../models";

module.exports = {
    importROCrate,
    exportCollectionAsROCrate,
    __assembleProperties,
};

async function importROCrate({ name, description, crate, sync = false }) {
    let collection = await createCrateCollection({ name, description, crate });

    let entities = crate["@graph"].filter(
        (e) =>
            !(
                ["ro-crate-metadata.json", "ro-crate-metadata.jsonld"].includes(
                    e["@id"]
                ) && e["@type"] === "CreativeWork"
            )
    );
    if (sync) {
        // wait for the creation - necessary for testing
        await createCrateEntities({ collection, entities });
    } else {
        // kick off the creation but don't wait around for it
        createCrateEntities({ collection, entities });
    }
    return collection;
}

async function createCrateCollection({ crate, name, description }) {
    const context = crate["@context"];

    let rootDescriptor = crate["@graph"].filter(
        (e) =>
            ["ro-crate-metadata.json", "ro-crate-metadata.jsonld"].includes(
                e["@id"]
            ) && e["@type"] === "CreativeWork"
    );
    if (!rootDescriptor || rootDescriptor.length !== 1) {
        throw new Error(
            `That crate is rejected as there isn't exactly one root dataset descriptor`
        );
    }
    rootDescriptor = rootDescriptor.pop();

    // if (!rootDescriptor.description) {
    //     rootDescriptor.description =
    //         "Made with Describo Online: https://uts-eresearch.github.io/describo-online/";
    // }
    let collectionId;
    if (rootDescriptor.describoCollectionId) {
        collectionId = rootDescriptor.collectionId;
        let collection = await findCollection({ id: collectionId });
        if (collection) {
            throw new Error(
                `A collection with that identifier already exists - it cannot be imported again`
            );
        }
    }
    const metadata = {
        context,
        rootDescriptor,
    };
    let collection = await insertCollection({
        name,
        description,
        metadata,
    });
    return collection;
}

async function createCrateEntities({ collection, entities }) {
    const filterProperties = ["@id", "@type", "name", "uuid"];
    // iterate over the entities and create each one
    for (let entity of entities) {
        entity.uuid = (
            await insertEntity({ collectionId: collection.id, entity })
        ).id;
    }

    // now iterate over each entity
    const entitiesById = groupBy(entities, "@id");
    for (let entity of entities) {
        const properties = Object.keys(entity).filter(
            (p) => !filterProperties.includes(p)
        );
        for (let property of properties) {
            let data = asArray(entity[property]);
            for (let value of data) {
                if (isString(value)) {
                    await attachProperty({
                        entityId: entity.uuid,
                        property,
                        value,
                    });
                } else if (isPlainObject(value) && "@id" in value) {
                    const tgtEntityId = entitiesById[value["@id"]].pop().uuid;
                    await associate({
                        entityId: entity.uuid,
                        property,
                        tgtEntityId,
                    });
                }
            }
        }
    }
}

function asArray(data) {
    return flattenDeep([data]);
}

async function exportCollectionAsROCrate({ collectionId, sync = false }) {
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
    const idToEidMapping = entities.reduce(
        (obj, e) => ({ ...obj, [e.id]: e.eid }),
        {}
    );
    for (let entity of entities) {
        entity = await getEntity({ id: entity.id });
        let properties = __assembleProperties({
            idToEidMapping,
            properties: entity.properties,
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

function __assembleProperties({ idToEidMapping, properties }) {
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
