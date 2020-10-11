const models = require("../models");
const { cloneDeep, isString, isArray, isPlainObject } = require("lodash");
const sequelize = models.sequelize;

module.exports = {
    findEntity,
    insertEntity,
    removeEntity,
    associate,
    attachProperty,
};

async function insertEntity({ entity, collectionId }) {
    verifyEntity({ entity });
    const originalEntity = cloneDeep(entity);
    const entityProperties = Object.keys(entity).filter(
        (prop) => !["@id", "@type", "name"].includes(prop)
    );

    return await models.entity.create({
        eid: entity["@id"],
        etype: entity["@type"],
        name: entity["name"],
        collectionId,
    });

    function verifyEntity({ entity }) {
        if (!entity["@id"]) {
            throw new Error(`Entity missing '@id' property`);
        }
        if (!entity["@type"]) {
            throw new Error(`Entity missing '@type' property`);
        }
        if (!entity["name"]) {
            throw new Error(`Entity missing 'name' property`);
        }
    }
}

async function attachProperty({ entityId, property, value }) {
    return await models.property.create({
        name: property,
        value,
        entityId,
    });
}

async function associate({ entityId, property, tgtEntityId }) {
    let properties = [
        {
            name: property,
            tgtEntityId: tgtEntityId,
            direction: "F",
            entityId,
        },
        {
            name: property,
            tgtEntityId: entityId,
            direction: "R",
            entityId: tgtEntityId,
        },
    ];
    await models.property.bulkCreate(properties);
}

async function removeEntity({ id }) {
    await sequelize.transaction(async (t) => {
        entity = await models.entity.findOne({
            where: { id },
            include: [{ model: models.property }],
        });

        // find all the forward links
        let tgtEntityIds = entity.properties
            .filter((p) => p.direction === "F")
            .map((p) => p.tgtEntityId);

        // iterate over them and remove the reverse links from them
        for (let targetId of tgtEntityIds) {
            await models.property.destroy({
                where: { direction: "R", tgtEntityId: id, entityId: targetId },
            });
        }

        // finally, destroy the source entity
        await entity.destroy();
    });
}

async function findEntity({ "@id": eid, "@type": etype, collectionId }) {
    let where = {};
    if (collectionId) where.collectionId = collectionId;
    if (eid) where.eid = eid;
    if (etype) where.etype = etype;
    return (await models.entity.findAll({ where })).map((e) => e.get());
}
