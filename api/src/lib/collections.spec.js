const {
    findCollection,
    insertCollection,
    removeCollection,
} = require("./collections");
const { insertEntity, attachProperty } = require("./entities");
const models = require("../models");
const chance = require("chance").Chance();

describe("Test collection management operations", () => {
    beforeEach(async () => {
        await models.property.truncate({ cascade: true });
        await models.entity.truncate({ cascade: true });
        await models.collection.truncate({ cascade: true });
    });
    test("it should be able to create a new collection", async () => {
        let collection = await insertCollection({
            name: "test",
            description: "awesome",
        });
        let c = await models.collection.findOne({
            where: { id: collection.id },
        });
        expect(collection.id).toEqual(c.id);
    });
    test("it should not be able to create a new collection", async () => {
        try {
            await insertCollection({
                description: "awesome",
            });
        } catch (error) {
            expect(error.message).toBe("You must provide a collection name");
        }
    });
    test("it should fail creating a second collection with the same name as another", async () => {
        await insertCollection({
            name: "test",
            description: "awesome",
        });
        try {
            await insertCollection({
                name: "test",
                description: "awesome",
            });
        } catch (error) {
            expect(error.name).toEqual("SequelizeUniqueConstraintError");
        }
    });
    test("it should be able to find a collection by id", async () => {
        const name = chance.sentence();
        let collection = await insertCollection({
            name,
            description: "awesome",
        });
        const result = await findCollection({ id: collection.id });
        expect(result.length).toEqual(1);
        expect(result[0].id).toEqual(collection.id);
    });
    test("it should be able to find a collection by name", async () => {
        const name = chance.sentence();
        let collection = await insertCollection({
            name,
            description: "awesome",
        });
        const result = await findCollection({ name: name.slice(5, 10) });
        expect(result.length).toEqual(1);
        expect(result[0].id).toEqual(collection.id);
    });
    test("it should be able to remove a collection and associated entites w/ associated props 1", async () => {
        let collection = await insertCollection({
            name: "test",
            description: "awesome",
        });
        let entity = {
            "@id": "1'",
            "@type": "Person",
            name: "a person",
        };
        entity = await insertEntity({ entity, collectionId: collection.id });
        let property = await attachProperty({
            entityId: entity.id,
            property: "author",
            value: "test",
        });
        await removeCollection({ id: collection.id });
        collection = await models.collection.findOne({
            where: { id: collection.id },
        });
        expect(collection).toBeNull;
        entity = await models.entity.findAll();
        expect(entity.length).toEqual(0);
        property = await models.property.findAll();
        expect(property.length).toEqual(0);
    });
    test("it should be able to remove a collection and associated entites w/ associated props 2", async () => {
        let collection1 = await insertCollection({
            name: "test",
            description: "awesome",
        });
        let entity = {
            "@id": "1'",
            "@type": "Person",
            name: "a person",
        };
        entity = await insertEntity({
            entity,
            collectionId: collection1.id,
        });
        let property = await attachProperty({
            entityId: entity.id,
            property: "author",
            value: "test",
        });

        let collection2 = await insertCollection({
            name: "collection 2",
            description: "awesome",
        });
        entity = {
            "@id": "1'",
            "@type": "Person",
            name: "a person",
        };
        entity = await insertEntity({
            entity,
            collectionId: collection2.id,
        });
        property = await attachProperty({
            entityId: entity.id,
            property: "author",
            value: "test",
        });

        await removeCollection({ id: collection1.id });
        let collections = await models.collection.findAll();
        expect(collections.length).toEqual(1);
        let entities = await models.entity.findAll();
        expect(entities.length).toEqual(1);
        let properties = await models.property.findAll();
        expect(properties.length).toEqual(1);
    });
});
