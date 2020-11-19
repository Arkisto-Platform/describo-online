const models = require("../models");
const { cloneDeep, isString, isArray, isPlainObject } = require("lodash");
const sequelize = models.sequelize;

export async function insertEntity({ entity, collectionId }) {
    verifyEntity({ entity });
    try {
        return await models.entity.create({
            eid: entity["@id"] ? entity["@id"] : entity.eid,
            etype: entity["@type"] ? entity["@type"] : entity.etype,
            name: entity["name"],
            collectionId,
        });
    } catch (error) {
        console.log(error);
    }

    function verifyEntity({ entity }) {
        // if (!entity["@id"]) {
        //     throw new Error(`Entity missing '@id' property`);
        // }
        if (!entity["@type"] && !entity.etype) {
            throw new Error(`Entity missing '@type' property`);
        }
        if (!entity["name"]) {
            throw new Error(`Entity missing 'name' property`);
        }
    }
}

export async function updateEntity({ entityId, name, eid }) {
    let entity = await models.entity.findOne({ where: { id: entityId } });

    if (!entity) {
        throw new Error(`Unable to find an entity with that id`);
    }

    let update = {};
    if (name) update.name = name;
    if (eid) update.eid = eid;
    return (await entity.update(update)).get();
}

export async function attachProperty({
    collectionId,
    entityId,
    property,
    value,
}) {
    let entity = await getEntity({ id: entityId, collectionId });
    if (!entity) {
        throw new Error(`You don't have permission to access that entity`);
    }
    return await models.property.create({
        name: property,
        value,
        entityId,
    });
}

export async function updateProperty({
    collectionId,
    entityId,
    propertyId,
    value,
}) {
    let entity = await getEntity({ id: entityId, collectionId });
    if (!entity) {
        throw new Error(`You don't have permission to access that entity`);
    }
    let property = await models.property.findOne({
        where: { id: propertyId },
    });
    property.value = value;
    return await property.save();
}

export async function removeProperty({ collectionId, entityId, propertyId }) {
    let entity = await getEntity({ id: entityId, collectionId });
    if (!entity) {
        throw new Error(`You don't have permission to access that entity`);
    }
    let property = await models.property.destroy({
        where: { id: propertyId },
    });
}

export async function associate({
    collectionId,
    entityId,
    property,
    tgtEntityId,
}) {
    let entity = await getEntity({ id: entityId, collectionId });
    if (!entity) {
        throw new Error(`You don't have permission to access that entity`);
    }
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

export async function removeEntity({ id }) {
    await sequelize.transaction(async (t) => {
        await models.entity.destroy({
            where: { id },
            include: [{ model: models.property }],
            transaction: t,
        });
        // remove properties where this entity is the target
        await models.property.destroy({
            where: { tgtEntityId: id },
            transaction: t,
        });
        // remove properties associated to this entity
        await models.property.destroy({
            where: { entityId: id },
            transaction: t,
        });
    });
}

export async function findEntity({ eid, etype, collectionId }) {
    // TODO - add pagination!
    let where = {};
    if (collectionId) where.collectionId = collectionId;
    if (eid) where.eid = eid;
    if (etype) where.etype = etype;
    return (await models.entity.findAll({ where })).map((e) => e.get());
}

export async function getEntity({ id, collectionId }) {
    return await models.entity.findOne({
        where: { id, collectionId },
        include: [
            {
                model: models.property,
                required: false,
            },
        ],
    });
}
