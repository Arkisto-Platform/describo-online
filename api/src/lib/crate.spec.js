import "regenerator-runtime";
import { writeJSON, remove, ensureDir } from "fs-extra";
import { removeCollection, insertCollection } from "./collections";
import path from "path";
import { Crate } from "./crate";
import { isPlainObject, isMatch, cloneDeep } from "lodash";
import { attachProperty, associate, getEntity } from "./entities";
import models from "../models";

const testFiles = path.join("/tmp", "test-files");
describe("Test loading a crate from a file", () => {
    beforeEach(async () => {
        await ensureDir(testFiles);
    });
    afterAll(async () => {
        await remove(testFiles);
    });
    test("it does not have a describo identifier so one will be added - no identifier prop", async () => {
        let crate = {
            "@context": "https://w3id.org/ro/crate/1.1/context",
            "@graph": [
                {
                    "@type": "CreativeWork",
                    "@id": "ro-crate-metadata.json",
                    conformsTo: { "@id": "https://w3id.org/ro/crate/1.1" },
                    about: { "@id": "./" },
                },

                {
                    "@id": "./",
                    "@type": "Dataset",
                    name: "My crate",
                },
            ],
        };
        const testFileName = path.join(testFiles, "test1.json");
        await writeJSON(testFileName, crate);
        crate = new Crate();
        let { crate: newCrate, collection } = await crate.loadCrateFromFile({
            file: testFileName,
        });
        // console.log(newCrate["@graph"][0].identifier);
        expect(newCrate["@graph"][0].identifier).toEqual([
            {
                "@id": `#:localid:describo:${collection.id}`,
            },
        ]);

        await removeCollection({ id: collection.id });
    });
    test("it does not have a describo identifier so one will be added - existing identifier prop as string", async () => {
        let crate = {
            "@context": "https://w3id.org/ro/crate/1.1/context",
            "@graph": [
                {
                    "@type": "CreativeWork",
                    "@id": "ro-crate-metadata.json",
                    identifier: "ro-crate-metadata.json",
                    conformsTo: { "@id": "https://w3id.org/ro/crate/1.1" },
                    about: { "@id": "./" },
                },

                {
                    "@id": "./",
                    "@type": "Dataset",
                    name: "My crate",
                },
            ],
        };
        const testFileName = path.join(testFiles, "test2.json");
        await writeJSON(testFileName, crate);
        crate = new Crate();
        let { crate: newCrate, collection } = await crate.loadCrateFromFile({
            file: testFileName,
        });
        // console.log(newCrate["@graph"][0].identifier);
        expect(newCrate["@graph"][0].identifier).toEqual([
            "ro-crate-metadata.json",
            {
                "@id": `#:localid:describo:${collection.id}`,
            },
        ]);

        await removeCollection({ id: collection.id });
    });
    test("it does not have a describo identifier so one will be added - existing identifier prop as array", async () => {
        let crate = {
            "@context": "https://w3id.org/ro/crate/1.1/context",
            "@graph": [
                {
                    "@type": "CreativeWork",
                    "@id": "ro-crate-metadata.json",
                    identifier: ["ro-crate-metadata.json"],
                    conformsTo: { "@id": "https://w3id.org/ro/crate/1.1" },
                    about: { "@id": "./" },
                },

                {
                    "@id": "./",
                    "@type": "Dataset",
                    name: "My crate",
                },
            ],
        };
        const testFileName = path.join(testFiles, "test3.json");
        await writeJSON(testFileName, crate);
        crate = new Crate();
        let { crate: newCrate, collection } = await crate.loadCrateFromFile({
            file: testFileName,
        });
        // console.log(newCrate["@graph"][0].identifier);
        expect(newCrate["@graph"][0].identifier).toEqual([
            "ro-crate-metadata.json",
            {
                "@id": `#:localid:describo:${collection.id}`,
            },
        ]);

        await removeCollection({ id: collection.id });
    });
    test("it does not have a describo identifier so one will be added - existing identifier prop as object", async () => {
        let crate = {
            "@context": "https://w3id.org/ro/crate/1.1/context",
            "@graph": [
                {
                    "@type": "CreativeWork",
                    "@id": "ro-crate-metadata.json",
                    identifier: { "@id": "ro-crate-metadata.json" },
                    conformsTo: { "@id": "https://w3id.org/ro/crate/1.1" },
                    about: { "@id": "./" },
                },

                {
                    "@id": "./",
                    "@type": "Dataset",
                    name: "My crate",
                },
            ],
        };
        const testFileName = path.join(testFiles, "test4.json");
        await writeJSON(testFileName, crate);
        crate = new Crate();
        let { crate: newCrate, collection } = await crate.loadCrateFromFile({
            file: testFileName,
        });
        // console.log(newCrate["@graph"][0].identifier);
        expect(newCrate["@graph"][0].identifier).toEqual([
            { "@id": "ro-crate-metadata.json" },
            {
                "@id": `#:localid:describo:${collection.id}`,
            },
        ]);

        await removeCollection({ id: collection.id });
    });
    test("it does have a describo identifier so one will not be added - existing identifier prop as object", async () => {
        let crate = {
            "@context": "https://w3id.org/ro/crate/1.1/context",
            "@graph": [
                {
                    "@type": "CreativeWork",
                    "@id": "ro-crate-metadata.json",
                    identifier: {
                        "@id":
                            "#:localid:describo:e2302114-f1cb-405b-8b8f-53f987849028",
                    },
                    conformsTo: { "@id": "https://w3id.org/ro/crate/1.1" },
                    about: { "@id": "./" },
                },

                {
                    "@id": "./",
                    "@type": "Dataset",
                    name: "My crate",
                },
            ],
        };
        const testFileName = path.join(testFiles, "test5.json");
        await writeJSON(testFileName, crate);
        crate = new Crate();
        let { crate: newCrate, collection } = await crate.loadCrateFromFile({
            file: testFileName,
        });
        // console.log(newCrate["@graph"][0].identifier);
        expect(newCrate["@graph"][0].identifier).toEqual({
            "@id": `#:localid:describo:e2302114-f1cb-405b-8b8f-53f987849028`,
        });

        await removeCollection({ id: collection.id });
    });
    test("it should get the root descriptor", async () => {
        let crate = {
            "@context": "https://w3id.org/ro/crate/1.1/context",
            "@graph": [
                {
                    "@type": "CreativeWork",
                    "@id": "ro-crate-metadata.json",
                    conformsTo: { "@id": "https://w3id.org/ro/crate/1.1" },
                    about: { "@id": "./" },
                },

                {
                    "@id": "./",
                    "@type": "Dataset",
                    name: "My crate",
                },
            ],
        };
        let rootDescriptor = new Crate().getRootDescriptor({ crate });
        expect(rootDescriptor).toEqual(crate["@graph"][0]);
    });
    test("it should get the root dataset", async () => {
        let crate = {
            "@context": "https://w3id.org/ro/crate/1.1/context",
            "@graph": [
                {
                    "@type": "CreativeWork",
                    "@id": "ro-crate-metadata.json",
                    conformsTo: { "@id": "https://w3id.org/ro/crate/1.1" },
                    about: { "@id": "./" },
                },

                {
                    "@id": "./",
                    "@type": "Dataset",
                    name: "My crate",
                },
            ],
        };
        let { rootDescriptor, rootDataset } = new Crate().getRootDataset({
            crate,
        });
        expect(rootDataset).toEqual(crate["@graph"][1]);
    });
    test("it should update the crate root descriptor", async () => {
        let crate = {
            "@context": "https://w3id.org/ro/crate/1.1/context",
            "@graph": [
                {
                    "@type": "CreativeWork",
                    "@id": "ro-crate-metadata.json",
                    conformsTo: { "@id": "https://w3id.org/ro/crate/1.1" },
                    about: { "@id": "./" },
                },

                {
                    "@id": "./",
                    "@type": "Dataset",
                    name: "My crate",
                },
            ],
        };

        const newDescriptor = {
            "@type": "CreativeWork",
            "@id": "ro-crate-metadata.json",
            conformsTo: { "@id": "https://w3id.org/ro/crate/1.1" },
            about: { "@id": "./" },
        };

        crate = new Crate().updateRootDescriptor({
            crate,
            rootDescriptor: newDescriptor,
        });
        expect(crate["@graph"][0]).toEqual(newDescriptor);
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
        let collection = await insertCollection({ name: "test1" });
        let crateManager = new Crate();
        await crateManager.importCrateIntoDatabase({
            collection,
            crate,
            sync: true,
        });

        let entities = await models.entity.findAll({
            where: { collectionId: collection.id },
        });
        expect(entities.length).toEqual(1);
        await models.collection.destroy({ where: { id: collection.id } });
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
        let collection = await insertCollection({ name: "test1" });
        let crateManager = new Crate();
        try {
            await crateManager.importCrateIntoDatabase({
                collection,
                crate,
                sync: true,
            });
            // let collection = await importROCrate({ name, crate });
        } catch (error) {
            expect(error.message).toEqual(
                `The crate does not have exactly one root dataset descriptor`
            );
        }
        await models.collection.destroy({
            where: { id: collection.id },
        });
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
        let collection = await insertCollection({ name: "test1" });
        let crateManager = new Crate();
        try {
            await crateManager.importCrateIntoDatabase({
                collection,
                crate,
                sync: true,
            });
        } catch (error) {
            expect(error.message).toEqual(
                `The crate does not have exactly one root dataset descriptor`
            );
        }
        await models.collection.destroy({
            where: { id: collection.id },
        });
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
        let collection = await insertCollection({ name: "test1" });
        let crateManager = new Crate();
        await crateManager.importCrateIntoDatabase({
            collection,
            crate,
            sync: true,
        });

        try {
            await crateManager.importCrateIntoDatabase({
                collection,
                crate,
                sync: true,
            });
        } catch (error) {
            expect(error.message).toEqual("That collection is already loaded.");
        }
        await models.collection.destroy({
            where: { id: collection.id },
        });
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
        let collection = await insertCollection({ name: "test1" });
        let crateManager = new Crate();
        await crateManager.importCrateIntoDatabase({
            collection,
            crate,
            sync: true,
        });
        let entities = await models.entity.findAll({
            where: { collectionId: collection.id },
            raw: true,
            attributes: ["id"],
        });
        let properties = await models.property.findAll({
            raw: true,
            attributes: ["id"],
        });
        expect(entities.length).toEqual(2);
        expect(properties.length).toEqual(3);
        await models.collection.destroy({
            where: { id: collection.id },
        });
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
        let collection = await insertCollection({ name: "test1" });
        let crateManager = new Crate();
        await crateManager.importCrateIntoDatabase({
            collection,
            crate,
            sync: true,
        });
        let exportedCrate = await crateManager.exportCollectionAsROCrate({
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
        await models.collection.destroy({
            where: { id: collection.id },
        });
    });
    test("should assemble property values", async () => {
        let crateManager = new Crate();
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
        properties = crateManager.assembleProperties({
            properties,
            idToEidMapping,
        });
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

        properties = crateManager.assembleProperties({
            properties,
            idToEidMapping,
        });
        // // console.log(JSON.stringify(properties, null, 2));
        expect(properties.forward.author.length).toEqual(3);
        expect(
            properties.forward.author.filter((e) => isPlainObject(e)).length
        ).toEqual(1);

        ({ properties } = await getEntity({ id: entityB.id }));
        properties = crateManager.assembleProperties({
            properties,
            idToEidMapping,
        });
        // // console.log(JSON.stringify(properties, null, 2));
        expect(properties.reverse.author.length).toEqual(1);

        await models.collection.destroy({
            where: { id: collection.id },
        });
    });
});
