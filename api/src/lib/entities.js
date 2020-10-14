const models = require("../models");
const { cloneDeep, isString, isArray, isPlainObject } = require("lodash");
const sequelize = models.sequelize;

module.exports = {
    findEntity,
    updateEntity,
    getEntity,
    insertEntity,
    removeEntity,
    associate,
    attachProperty,
};

async function insertEntity({ entity, collectionId }) {
    verifyEntity({ entity });
    try {
        return await models.entity.create({
            eid: entity["@id"],
            etype: entity["@type"],
            name: entity["name"],
            collectionId,
        });
    } catch (error) {
        console.log(error);
    }

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

async function updateEntity({ entityId, name, eid }) {
    let entity = await models.entity.findOne({ where: { id: entityId } });

    if (!entity) {
        throw new Error(`Unable to find an entity with that id`);
    }

    let update = {};
    if (name) update.name = name;
    if (eid) update.eid = eid;
    return (await entity.update(update)).get();
}

async function attachProperty({ entityId, property, value }) {
    return await models.property.create({
        name: property,
        value,
        entityId,
    });
}

async function associate({ entityId, property, tgtEntityId }) {
    await sequelize.transaction(async (t) => {
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
        await models.property.bulkCreate(properties, { transaction: t });
    });
}

async function removeEntity({ id }) {
    await sequelize.transaction(async (t) => {
        await models.entity.destroy({
            where: { id },
            include: [{ model: models.property }],
            transaction: t,
        });
        await models.property.destroy({
            where: { tgtEntityId: id },
            transaction: t,
        });
    });
}

async function findEntity({ "@id": eid, "@type": etype, collectionId }) {
    let where = {};
    if (collectionId) where.collectionId = collectionId;
    if (eid) where.eid = eid;
    if (etype) where.etype = etype;
    return (await models.entity.findAll({ where })).map((e) => e.get());
}

async function getEntity({ id }) {
    return await models.entity.findOne({
        where: { id },
        include: [
            {
                model: models.property,
                required: false,
            },
        ],
    });
}
