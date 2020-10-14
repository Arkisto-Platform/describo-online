import "regenerator-runtime";
import {
    importROCrate,
    exportCollectionAsROCrate,
    __assembleProperties,
} from "./tools";
import models from "../models";
import { attachProperty, associate, getEntity } from "./entities";
import { isPlainObject, isMatch, cloneDeep } from "lodash";
import Op from "sequelize";

describe("test importing ro-crates", () => {
    beforeEach(async () => {
        await models.property.truncate({ cascade: true });
        await models.entity.truncate({ cascade: true });
        await models.collection.truncate({ cascade: true });
    });
    afterAll(async () => {
        await models.sequelize.close();
    });
    test("should load a simple crate without entities", async () => {
        const name = "my collection";
        const crate = {
            "@context": ["https://w3id.org/ro/crate/1.1/context"],
            "@graph": [
                {
                    "@type": "CreativeWork",
                    "@id": "ro-crate-metadata.json",
                    conformsTo: {
                        "@id": "https://w3id.org/ro/crate/1.1",
                    },
                    about: { "@id": "./" },
                },
                {
                    "@id": "./",
                    "@type": "Dataset",
                    name: "dataset",
                },
            ],
        };
        let collection = await importROCrate({ name, crate });
        const c = await models.collection.findOne({
            where: { id: collection.id },
        });
        expect(c.id).toEqual(collection.id);
    });
    test("should fail to load a simple crate without root descriptor", async () => {
        const name = "my collection";
        const crate = {
            "@context": ["https://w3id.org/ro/crate/1.1/context"],
            "@graph": [
                {
                    "@id": "./",
                    "@type": "Dataset",
                    name: "dataset",
                },
            ],
        };
        try {
            let collection = await importROCrate({ name, crate });
        } catch (error) {
            expect(error.message).toEqual(
                `That crate is rejected as there isn't exactly one root dataset descriptor`
            );
        }
    });
    test("should fail to load a simple crate without multiple root descriptors", async () => {
        const name = "my collection";
        const crate = {
            "@context": ["https://w3id.org/ro/crate/1.1/context"],
            "@graph": [
                {
                    "@type": "CreativeWork",
                    "@id": "ro-crate-metadata.json",
                    conformsTo: {
                        "@id": "https://w3id.org/ro/crate/1.1",
                    },
                    about: { "@id": "./" },
                },
                {
                    "@type": "CreativeWork",
                    "@id": "ro-crate-metadata.json",
                    conformsTo: {
                        "@id": "https://w3id.org/ro/crate/1.1",
                    },
                    about: { "@id": "./" },
                },
                {
                    "@id": "./",
                    "@type": "Dataset",
                    name: "dataset",
                },
            ],
        };
        try {
            let collection = await importROCrate({ name, crate });
        } catch (error) {
            expect(error.message).toEqual(
                `That crate is rejected as there isn't exactly one root dataset descriptor`
            );
        }
    });
    test("should fail to re-load a collection ", async () => {
        const name = "my test collection";
        const crate = {
            "@context": ["https://w3id.org/ro/crate/1.1/context"],
            "@graph": [
                {
                    "@type": "CreativeWork",
                    "@id": "ro-crate-metadata.json",
                    conformsTo: {
                        "@id": "https://w3id.org/ro/crate/1.1",
                    },
                    about: { "@id": "./" },
                },
                {
                    "@id": "./",
                    "@type": "Dataset",
                    name: "dataset",
                },
            ],
        };
        let collection = await importROCrate({ name, crate });

        crate["@graph"][0].describoCollectionId = collection.id;
        try {
            collection = await importROCrate({ name, crate });
        } catch (error) {
            expect(error.message).toEqual(
                `A collection with that identifier already exists - it cannot be imported again`
            );
        }
    });
    test("should load simple crate with one dataset and one entity", async () => {
        const name = "my collection";
        const crate = {
            "@context": ["https://w3id.org/ro/crate/1.1/context"],
            "@graph": [
                {
                    "@type": "CreativeWork",
                    "@id": "ro-crate-metadata.json",
                    conformsTo: {
                        "@id": "https://w3id.org/ro/crate/1.1",
                    },
                    about: { "@id": "./" },
                },
                {
                    "@id": "./",
                    "@type": "Dataset",
                    name: "dataset",
                    author: "Person",
                    contributor: [{ "@id": "person1" }],
                },
                {
                    "@id": "person1",
                    "@type": "Person",
                    name: "a person",
                },
            ],
        };
        let collection = await importROCrate({ name, crate, sync: true });
        let entities = await models.entity.findAll({
            raw: true,
            attributes: ["id"],
        });
        let properties = await models.property.findAll({
            raw: true,
            attributes: ["id"],
        });
        expect(entities.length).toEqual(2);
        expect(properties.length).toEqual(3);
    });
    test("should export a simple crate with one dataset and one entity", async () => {
        const name = "my collection";
        const crate = {
            "@context": ["https://w3id.org/ro/crate/1.1/context"],
            "@graph": [
                {
                    "@type": "CreativeWork",
                    "@id": "ro-crate-metadata.json",
                    conformsTo: {
                        "@id": "https://w3id.org/ro/crate/1.1",
                    },
                    about: { "@id": "./" },
                },
                {
                    "@id": "./",
                    "@type": "Dataset",
                    name: "dataset",
                    author: ["Person", { "@id": "person1" }],
                },
                {
                    "@id": "person1",
                    "@type": "Person",
                    name: "a person",
                },
            ],
        };
        let collection = await importROCrate({
            name,
            crate: cloneDeep(crate),
            sync: true,
        });
        let exportedCrate = await exportCollectionAsROCrate({
            collectionId: collection.id,
            sync: true,
        });
        // console.log(exportedCrate);

        crate["@graph"].forEach((entry) => {
            let exportedEntry = exportedCrate["@graph"].filter(
                (e) => e["@id"] === entry["@id"]
            );
            expect(exportedEntry.length).toEqual(1);
            exportedEntry = exportedEntry.pop();
            expect(isMatch(exportedEntry, entry)).toBeTrue;
        });
    });
    test("should assemble property values", async () => {
        const collection = await models.collection.create({
            name: "collection1",
        });
        const entityA = await models.entity.create({
            name: "entityA",
            eid: "1",
            etype: "person",
            collectionId: collection.id,
        });
        const entityB = await models.entity.create({
            name: "entityB",
            eid: "2",
            etype: "person",
            collectionId: collection.id,
        });
        await attachProperty({
            entityId: entityA.id,
            property: "author",
            value: "personA",
        });
        await attachProperty({
            entityId: entityA.id,
            property: "author",
            value: "personB",
        });

        // test 1 - should return an array with two strings
        // let properties = await models.property.findAll({
        //     where: { entityId: entityA.id },
        // })   ;
        let properties = (await getEntity({ id: entityA.id })).properties;
        let entities = await models.entity.findAll({
            raw: true,
            attributes: ["id", "eid"],
        });
        let idToEidMapping = entities.reduce(
            (obj, e) => ({ ...obj, [e.id]: e.eid }),
            {}
        );
        properties = __assembleProperties({ properties, idToEidMapping });
        expect(properties.forward.author.sort()).toEqual([
            "personA",
            "personB",
        ]);

        // test 2 - should return an array with two strings an object
        await associate({
            entityId: entityA.id,
            property: "author",
            tgtEntityId: entityB.id,
        });
        ({ properties } = await getEntity({ id: entityA.id }));
        entities = await models.entity.findAll({
            raw: true,
            attributes: ["id", "eid"],
        });
        idToEidMapping = entities.reduce(
            (obj, e) => ({ ...obj, [e.id]: e.eid }),
            {}
        );
        properties = __assembleProperties({ properties, idToEidMapping });
        // // console.log(JSON.stringify(properties, null, 2));
        expect(properties.forward.author.length).toEqual(3);
        expect(
            properties.forward.author.filter((e) => isPlainObject(e)).length
        ).toEqual(1);

        ({ properties } = await getEntity({ id: entityB.id }));
        properties = __assembleProperties({ properties, idToEidMapping });
        // // console.log(JSON.stringify(properties, null, 2));
        expect(properties.reverse.author.length).toEqual(1);
    });
});
