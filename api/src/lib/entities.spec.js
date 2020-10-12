const {
    findEntity,
    insertEntity,
    removeEntity,
    associate,
    attachProperty,
} = require("./entities");
const models = require("../models");
const { flattenDeep } = require("lodash");

describe("Test entity and property management operations", () => {
    beforeEach(async () => {
        await models.property.truncate({ cascade: true });
        await models.entity.truncate({ cascade: true });
        await models.collection.truncate({ cascade: true });
    });
    afterAll(async () => {
        await models.sequelize.close();
    });
    test("it should be able to create an entity", async () => {
        const collection = await models.collection.create({ name: "test" });
        let entity = {
            "@id": "1",
            "@type": "Person",
            name: "test",
        };
        entity = await insertEntity({ entity, collectionId: collection.id });
        let result = await models.entity.findAll();
        expect(result.length).toEqual(1);
        expect(result[0].id).toEqual(entity.id);
    });
    test("it should not be able to create an entity - missing @id", async () => {
        const collection = await models.collection.create({
            name: "test",
        });
        let entity = {
            "@type": "Person",
            name: "test",
        };
        try {
            entity = await insertEntity({
                entity,
                collectionId: collection.id,
            });
        } catch (error) {
            expect(error.message).toEqual(`Entity missing '@id' property`);
        }
    });
    test("it should not be able to create an entity - missing @type", async () => {
        const collection = await models.collection.create({
            name: "test",
        });
        let entity = {
            "@id": "Person",
            name: "test",
        };
        try {
            entity = await insertEntity({
                entity,
                collectionId: collection.id,
            });
        } catch (error) {
            expect(error.message).toEqual(`Entity missing '@type' property`);
        }
    });
    test("it should be able to create a property attached to an entity", async () => {
        const collection = await models.collection.create({
            name: "test",
        });
        let entity = {
            "@id": "1",
            "@type": "Person",
            name: "test",
        };
        entity = await insertEntity({
            entity,
            collectionId: collection.id,
        });
        let property = await attachProperty({
            entityId: entity.id,
            property: "author",
            value: "something",
        });
        entity = await models.entity.findOne({
            where: { id: entity.id },
            include: [{ model: models.property }],
        });
        expect(entity.properties.length).toEqual(1);
    });
    test("it should be able to attach the same property multiple time with different values", async () => {
        const collection = await models.collection.create({
            name: "test",
        });
        let entity = {
            "@id": "1",
            "@type": "Person",
            name: "test",
        };
        entity = await insertEntity({
            entity,
            collectionId: collection.id,
        });
        let property = await attachProperty({
            entityId: entity.id,
            property: "author",
            value: "something",
        });
        roperty = await attachProperty({
            entityId: entity.id,
            property: "author",
            value: "something else",
        });
        entity = await models.entity.findOne({
            where: { id: entity.id },
            include: [{ model: models.property }],
        });
        expect(entity.properties.length).toEqual(2);
    });
    test("it should be able to link two entities", async () => {
        const collection = await models.collection.create({
            name: "test",
        });
        let entityA = {
            "@id": "A",
            "@type": "Person",
            name: "A",
        };
        entityA = await insertEntity({
            entity: entityA,
            collectionId: collection.id,
        });
        let entityB = {
            "@id": "B",
            "@type": "Person",
            name: "B",
        };
        entityB = await insertEntity({
            entity: entityB,
            collectionId: collection.id,
        });
        await associate({
            entityId: entityA.id,
            property: "author",
            tgtEntityId: entityB.id,
        });
        let entities = await models.entity.findAll({
            include: [{ model: models.property }],
        });
        entityA = entities.filter((e) => e.name === "A")[0];
        entityB = entities.filter((e) => e.name === "B")[0];
        propsA = entityA.properties[0].get();
        propsB = entityB.properties[0].get();
        expect(propsA.entityId).toEqual(entityA.id);
        expect(propsA.tgtEntityId).toEqual(entityB.id);
        expect(propsA.direction).toEqual("F");

        expect(propsB.entityId).toEqual(entityB.id);
        expect(propsB.tgtEntityId).toEqual(entityA.id);
        expect(propsB.direction).toEqual("R");
    });
    test("it should be able to remove an entity and all associated properties", async () => {
        const collection = await models.collection.create({
            name: "test",
        });
        let entity = {
            "@id": "A",
            "@type": "Person",
            name: "A",
        };
        entity = await insertEntity({
            entity,
            collectionId: collection.id,
        });
        let property = await attachProperty({
            entityId: entity.id,
            property: "author",
            value: "something",
        });
        entity = await models.entity.findOne({
            where: { id: entity.id },
            include: [{ model: models.property }],
        });
        await removeEntity({ id: entity.id });
        entity = await models.entity.findAll();
        property = await models.property.findAll();
        expect(entity.length).toBe(0);
        expect(property.length).toBe(0);
    });
    test("it should be able to remove an entity and all associations - forward and reverse 1", async () => {
        const collection = await models.collection.create({
            name: "test",
        });
        let entityA = {
            "@id": "A",
            "@type": "Person",
            name: "A",
        };
        entityA = await insertEntity({
            entity: entityA,
            collectionId: collection.id,
        });
        let entityB = {
            "@id": "B",
            "@type": "Person",
            name: "B",
        };
        entityB = await insertEntity({
            entity: entityB,
            collectionId: collection.id,
        });
        await associate({
            entityId: entityA.id,
            property: "author",
            tgtEntityId: entityB.id,
        });
        await removeEntity({ id: entityA.id });
        let entities = await models.entity.findAll({
            include: [{ model: models.property }],
        });
        expect(entities.length).toEqual(1);
        property = entities.pop().properties.pop();
        expect(property).toBeUndefined();
    });
    test("it should be able to remove an entity and all associations - forward and reverse 2", async () => {
        const collection = await models.collection.create({
            name: "test",
        });
        let entityA = {
            "@id": "A",
            "@type": "Person",
            name: "A",
        };
        entityA = await insertEntity({
            entity: entityA,
            collectionId: collection.id,
        });
        let entityB = {
            "@id": "B",
            "@type": "Person",
            name: "B",
        };
        entityB = await insertEntity({
            entity: entityB,
            collectionId: collection.id,
        });
        let entityC = {
            "@id": "C",
            "@type": "Person",
            name: "C",
        };
        entityC = await insertEntity({
            entity: entityC,
            collectionId: collection.id,
        });
        await associate({
            entityId: entityA.id,
            property: "author",
            tgtEntityId: entityB.id,
        });
        await associate({
            entityId: entityB.id,
            property: "author",
            tgtEntityId: entityC.id,
        });
        await removeEntity({ id: entityA.id });
        let entities = await models.entity.findAll({
            include: [{ model: models.property }],
        });
        expect(entities.length).toEqual(2);
        entities.forEach((e) => {
            expect(e.properties.length).toEqual(1);
        });
        let links = entities.map((e) => e.properties.map((i) => i.direction));
        expect(flattenDeep(links).sort()).toEqual(["F", "R"]);
    });
});
