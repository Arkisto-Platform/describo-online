const models = require("../models");
const { Op } = require("sequelize");
const sequelize = models.sequelize;

export async function insertEntity({ entity, collectionId }) {
    verifyEntity({ entity });
    entity = await models.entity.create({
        eid: entity["@id"] ? entity["@id"] : entity.eid,
        etype: entity["@type"] ? entity["@type"] : entity.etype,
        name: entity["name"],
        collectionId,
    });
    if (!entity.eid) {
        entity = await entity.update({
            eid: entity.id,
        });
    }
    return entity;

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
    await models.property.destroy({
        where: { id: propertyId },
    });
    await models.property.destroy({
        where: { tgtEntityId: entityId },
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

export async function findEntity({ eid, etype, name, collectionId }) {
    // TODO add pagination and ordering
    let nameClause, eidClause;
    let andClause = [{ collectionId }];
    const orClause = [];
    if (etype) {
        andClause.push({ etype });
    }
    if (eid) {
        eidClause = {
            eid: { [Op.iLike]: `%${eid}%` },
        };
        orClause.push(eidClause);
    }
    if (name) {
        nameClause = {
            name: { [Op.iLike]: `%${name}%` },
        };
        orClause.push(nameClause);
    }
    if (orClause.length) {
        andClause.push({ [Op.or]: orClause });
    }

    let where = {
        [Op.and]: andClause,
    };
    let entities = await models.entity.findAll({ where, limit: 10 });
    return entities.map((e) => e.get());
}

export async function getEntity({ id, collectionId }) {
    return await models.entity.findOne({
        where: { id, collectionId },
    });
}

export async function getEntityProperties({ id, collectionId }) {
    let entity = await models.entity.findOne({
        where: { id, collectionId },
        include: [
            {
                model: models.property,
                required: false,
            },
        ],
    });
    return { properties: entity.properties };
}
