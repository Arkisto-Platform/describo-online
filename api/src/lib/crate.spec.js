import "regenerator-runtime";
import { writeJSON, remove, ensureDir } from "fs-extra";
import { removeCollection, insertCollection } from "./collections.js";
import path from "path";
import { Crate } from "./crate.js";
import { isPlainObject, isMatch, flattenDeep } from "lodash-es";
import {
    insertEntity,
    attachProperty,
    associate,
    removeEntity,
    removeProperty,
    updateEntity,
    getEntity,
    getEntityProperties,
} from "./entities.js";
import models from "../models/index.js";
import Chance from "chance";
const chance = new Chance();
const profile = {
    name: "schema.org",
    version: "latest",
    description: "All of schema.org",
    file: "schema.org",
};

const testFiles = path.join("/tmp", "test-files");
describe("Test loading a crate from a file", () => {
    beforeEach(async () => {
        await ensureDir(testFiles);
    });
    afterAll(async () => {
        await remove(testFiles);
        await models.sequelize.close();
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
        crate = new Crate({ profile });
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
        crate = new Crate({ profile });
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
        crate = new Crate({ profile });
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
        crate = new Crate({ profile });
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
                        "@id": "#:localid:describo:e2302114-f1cb-405b-8b8f-53f987849028",
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
        crate = new Crate({ profile });
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
        let rootDescriptor = new Crate({ profile }).getRootDescriptor({ crate });
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
        let { rootDescriptor, rootDataset } = new Crate({ profile }).getRootDataset({
            crate,
        });
        expect(rootDataset).toEqual(crate["@graph"][1]);

        crate = {
            "@context": "https://w3id.org/ro/crate/1.1/context",
            "@graph": [
                {
                    "@type": "CreativeWork",
                    "@id": "ro-crate-metadata.json",
                    conformsTo: { "@id": "https://w3id.org/ro/crate/1.1" },
                    about: { "@id": "something" },
                },

                {
                    "@id": "something",
                    "@type": "Dataset",
                    name: "My crate",
                },
            ],
        };
        ({ rootDescriptor, rootDataset } = new Crate({ profile }).getRootDataset({
            crate,
        }));
        expect(rootDataset).toEqual(crate["@graph"][1]);
    });
    test("it should not find the root dataset", async () => {
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
                    "@id": "something else",
                    "@type": "Dataset",
                    name: "My crate",
                },
            ],
        };
        try {
            let { rootDescriptor, rootDataset } = new Crate({ profile }).getRootDataset({
                crate,
            });
        } catch (error) {
            expect(error.message).toEqual(`Unable to locate the root dataset`);
        }
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

        crate = new Crate({ profile }).updateRootDescriptor({
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
        let crateManager = new Crate({ profile });
        await crateManager.importCrateIntoDatabase({
            collection,
            crate,
            sync: true,
        });

        let entities = await models.entity.findAll({
            where: { collectionId: collection.id },
        });
        expect(entities.length).toEqual(1);
        await removeCollection({ id: collection.id });
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
        let crateManager = new Crate({ profile });
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
        await removeCollection({ id: collection.id });
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
        let crateManager = new Crate({ profile });
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
        await removeCollection({ id: collection.id });
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
        let crateManager = new Crate({ profile });
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
        await removeCollection({ id: collection.id });
    });
    test("should load simple crate with one dataset and one entity", async () => {
        const name = "asdsadkgsdfgsdf";
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
        const collection = await insertCollection({ name });
        let crateManager = new Crate({ profile });
        await crateManager.importCrateIntoDatabase({
            collection,
            crate,
            sync: true,
        });
        let entities = await models.entity.findAll({
            where: { collectionId: collection.id },
            attributes: ["id"],
            include: [{ model: models.property, attributes: ["id"], raw: true }],
        });
        expect(entities.length).toEqual(2);
        let properties = entities.map((e) => e.properties);
        expect(flattenDeep(properties).length).toEqual(3);

        await removeCollection({ id: collection.id });
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
                    "@id": "#person1",
                    "@type": "Person",
                    name: "a person",
                },
            ],
        };
        let collection = await insertCollection({ name: "test1" });
        let crateManager = new Crate({ profile });
        await crateManager.importCrateIntoDatabase({
            collection,
            crate,
            sync: true,
        });
        let exportedCrate = await crateManager.exportCollectionAsROCrate({
            collectionId: collection.id,
            sync: true,
        });

        crate["@graph"].forEach((entry) => {
            let exportedEntry = exportedCrate.crate["@graph"].filter(
                (e) => e["@id"] === entry["@id"]
            );
            expect(exportedEntry.length).toEqual(1);
            exportedEntry = exportedEntry.pop();
            expect(isMatch(exportedEntry, entry)).toBeTrue;
        });

        await removeCollection({ id: collection.id });
    });
    test("should assemble property values", async () => {
        let crateManager = new Crate({ profile });
        const collection = await models.collection.create({
            name: chance.name(),
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
            collectionId: collection.id,
            entityId: entityA.id,
            property: "author",
            value: "personA",
        });
        await attachProperty({
            collectionId: collection.id,
            entityId: entityA.id,
            property: "author",
            value: "personB",
        });

        // test 1 - should return an array with two strings
        // let properties = await models.property.findAll({
        //     where: { entityId: entityA.id },
        // })   ;
        let { properties } = await getEntityProperties({
            id: entityA.id,
            collectionId: collection.id,
        });
        let entities = await models.entity.findAll({
            raw: true,
            attributes: ["id", "eid"],
        });
        let idToEidMapping = entities.reduce((obj, e) => ({ ...obj, [e.id]: e.eid }), {});
        properties = crateManager.assembleProperties({
            properties,
            idToEidMapping,
        });
        expect(properties.forward.author.sort()).toEqual(["personA", "personB"]);

        // test 2 - should return an array with two strings an object
        await associate({
            collectionId: collection.id,
            entityId: entityA.id,
            property: "author",
            tgtEntityId: entityB.id,
        });
        ({ properties } = await getEntityProperties({
            id: entityA.id,
            collectionId: collection.id,
        }));
        entities = await models.entity.findAll({
            raw: true,
            attributes: ["id", "eid"],
        });
        idToEidMapping = entities.reduce((obj, e) => ({ ...obj, [e.id]: e.eid }), {});

        properties = crateManager.assembleProperties({
            properties,
            idToEidMapping,
        });
        // // console.log(JSON.stringify(properties, null, 2));
        expect(properties.forward.author.length).toEqual(3);
        expect(properties.forward.author.filter((e) => isPlainObject(e)).length).toEqual(1);

        ({ properties } = await getEntityProperties({
            id: entityB.id,
            collectionId: collection.id,
        }));
        properties = crateManager.assembleProperties({
            properties,
            idToEidMapping,
        });
        // // console.log(JSON.stringify(properties, null, 2));
        expect(properties.reverse.author.length).toEqual(1);

        await removeCollection({ id: collection.id });
    });
    // ! This is using a deprecated method
    test.skip("it should correctly save the crate data after a change - patch crate", async () => {
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

        crate = new Crate({ profile });
        let { crate: newCrate, collection } = await crate.loadCrateFromFile({
            file: testFileName,
        });
        const collectionId = collection.id;

        await crate.importCrateIntoDatabase({ collection, crate: newCrate, sync: true });

        let rootDataset = await models.entity.findOne({
            where: { collectionId: collection.id, eid: "./" },
        });

        // update the name property of an entity
        rootDataset.name = "new name";
        let entity = await rootDataset.save();

        let updatedCrate = await save([{ name: "update", entity: entity.get() }]);
        expect(updatedCrate.crate["@graph"][1].name).toEqual("new name");
        await writeJSON(testFileName, updatedCrate.crate);

        // attach simple property - description - with a value
        let property = await attachProperty({
            collectionId,
            entityId: entity.id,
            property: "description",
            value: "text",
            typeDefinition: {},
        });
        updatedCrate = await save([{ name: "update", entity: entity.get() }]);
        expect(updatedCrate.crate["@graph"][1].description).toEqual(["text"]);
        await writeJSON(testFileName, updatedCrate.crate);

        // attach the same simple property - description - with another value
        property = await attachProperty({
            collectionId,
            entityId: entity.id,
            property: "description",
            value: "new",
            typeDefinition: {},
        });
        updatedCrate = await save([{ name: "update", entity: entity.get() }]);
        expect(updatedCrate.crate["@graph"][1].description).toEqual(["text", "new"]);
        await writeJSON(testFileName, updatedCrate.crate);

        // remove a simple property
        property = await removeProperty({
            collectionId,
            entityId: entity.id,
            propertyId: property.id,
        });
        updatedCrate = await save([{ name: "update", entity: entity.get() }]);
        expect(updatedCrate.crate["@graph"][1].description).toEqual(["text"]);
        await writeJSON(testFileName, updatedCrate.crate);

        // add an entity to the collection
        let newEntity = await insertEntity({
            collectionId,
            entity: { name: "test", etype: "Person" },
            profile,
        });
        updatedCrate = await save([{ name: "insert", entity: newEntity }]);
        expect(updatedCrate.crate["@graph"].length).toEqual(3);
        expect(updatedCrate.crate["@graph"][2].name).toEqual("test");
        expect(updatedCrate.crate["@graph"][2]["@type"]).toEqual("Person");
        await writeJSON(testFileName, updatedCrate.crate);

        // associate an entity to the root dataset
        property = await associate({
            collectionId,
            entityId: rootDataset.id,
            property: "author",
            tgtEntityId: newEntity.id,
        });
        updatedCrate = await save([{ name: "update", entity: rootDataset }]);
        expect(updatedCrate.crate["@graph"][1].author).toEqual([{ "@id": newEntity.id }]);
        expect(updatedCrate.crate["@graph"][2]["@reverse"]).toEqual({ author: [{ "@id": "./" }] });
        await writeJSON(testFileName, updatedCrate.crate);

        // remove a property
        let p = await models.property.findOne({
            where: { entityId: rootDataset.id, name: "author", direction: "F" },
        });

        let updated, removed;
        ({ updated } = await removeProperty({
            collectionId,
            entityId: rootDataset.id,
            propertyId: p.id,
        }));
        let actions = updated.map((eid) => ({ name: "update", entity: { id: eid } }));
        updatedCrate = await save(actions);
        expect(updatedCrate.crate["@graph"][1].author).toBeUndefined;
        expect(updatedCrate.crate["@graph"][2]["@reverse"]).toBeUndefined;
        await writeJSON(testFileName, updatedCrate.crate);

        // remove an entity
        //   but first re-associate it to the root
        await associate({
            collectionId,
            entityId: rootDataset.id,
            property: "author",
            tgtEntityId: newEntity.id,
        });
        updatedCrate = await save([{ name: "update", entity: rootDataset }]);
        await writeJSON(testFileName, updatedCrate.crate);

        //  now remove the whole entity
        ({ updated, removed } = await removeEntity({ collectionId, entityId: newEntity.id }));
        actions = updated.map((eid) => ({ name: "update", entity: { id: eid } }));
        actions = [...actions, { name: "remove", entity: removed }];
        updatedCrate = await save(actions);
        expect(updatedCrate.crate["@graph"].length).toBe(2);
        expect(updatedCrate.crate["@graph"][1].name).toBe("new name");
        await writeJSON(testFileName, updatedCrate.crate);

        // console.log(JSON.stringify(updatedCrate["@graph"], null, 2));

        await removeCollection({ id: collection.id });

        async function save(actions) {
            return await crate.updateCrate({
                localCrateFile: testFileName,
                collectionId,
                actions,
            });
        }
    });
    test("it should correctly save the crate data after an entity changes @id or name - export full crate", async () => {
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

        crate = new Crate({ profile });
        let { crate: newCrate, collection } = await crate.loadCrateFromFile({
            file: testFileName,
        });
        const collectionId = collection.id;

        await crate.importCrateIntoDatabase({ collection, crate: newCrate, sync: true });

        let rootDataset = await models.entity.findOne({
            where: { collectionId: collection.id, eid: "./" },
        });
        let updatedCrate, property;

        // add an entity to the collection and associate it to the root dataset
        let newEntity = await insertEntity({
            collectionId,
            entity: { name: "test", etype: "Person" },
            profile,
        });
        updatedCrate = await save();
        await writeJSON(testFileName, updatedCrate.crate);

        property = await associate({
            collectionId,
            entityId: rootDataset.id,
            property: "author",
            tgtEntityId: newEntity.id,
        });
        updatedCrate = await save();
        await writeJSON(testFileName, updatedCrate.crate);

        // update the id and name properties of an entity
        const patch = { name: chance.word(), eid: chance.url() };
        newEntity = await updateEntity({
            collectionId,
            entityId: newEntity.id,
            ...patch,
        });
        updatedCrate = await save();
        rootDataset = updatedCrate.crate["@graph"].filter((e) => e["@id"] === "./");
        expect(rootDataset.length).toBe(1);
        expect(rootDataset[0].author).toEqual([{ "@id": patch.eid }]);
        let e = updatedCrate.crate["@graph"].filter((e) => e["@id"] === patch.eid);
        expect(e.length).toBe(1);
        expect(e[0]["@id"]).toEqual(patch.eid);
        expect(e[0].name).toEqual(patch.name);
        expect(e[0]["@reverse"]).toEqual({ author: [{ "@id": "./" }] });
        await writeJSON(testFileName, updatedCrate.crate);

        await removeCollection({ id: collection.id });

        async function save() {
            return await crate.exportCollectionAsROCrate({
                collectionId,
            });
        }
    });
    test("handling object property values that point outside of a crate - succeed on http", async () => {
        const name = "asdsadkgsdfgsdf";
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
                    contributor: [{ "@id": "http://schema.org/Person" }],
                },
            ],
        };
        const collection = await insertCollection({ name });
        let crateManager = new Crate({ profile });
        await crateManager.importCrateIntoDatabase({
            collection,
            crate,
            sync: true,
        });
        let entities = await models.entity.findAll({
            where: { collectionId: collection.id, etype: "URL" },
        });
        expect(entities.length).toEqual(1);

        await removeCollection({ id: collection.id });
    });
    test("handling object property values that point outside of a crate - succeed on ftps", async () => {
        const name = "asdsadkgsdfgsdf";
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
                    contributor: [{ "@id": "ftps://schema.org/Person" }],
                },
            ],
        };
        const collection = await insertCollection({ name });
        let crateManager = new Crate({ profile });
        await crateManager.importCrateIntoDatabase({
            collection,
            crate,
            sync: true,
        });
        let entities = await models.entity.findAll({
            where: { collectionId: collection.id, etype: "URL" },
        });
        expect(entities.length).toEqual(1);

        await removeCollection({ id: collection.id });
    });
    test("handling object property values that point outside of a crate - fail on arcp", async () => {
        const name = "asdsadkgsdfgsdf";
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
                    contributor: [{ "@id": "arcp://schema.org/Person" }],
                },
            ],
        };
        const collection = await insertCollection({ name });
        let crateManager = new Crate({ profile });
        await crateManager.importCrateIntoDatabase({
            collection,
            crate,
            sync: true,
        });
        let entities = await models.entity.findAll({
            where: { collectionId: collection.id, etype: "URL" },
        });
        expect(entities.length).toEqual(0);

        entities = await models.entity.findAll({
            where: { collectionId: collection.id },
            include: [{ model: models.property }],
        });
        expect(entities[0].properties.filter((p) => p.name === "contributor")[0].value).toMatch(
            /arcp\:/
        );

        await removeCollection({ id: collection.id });
    });
});
