const models = require("../models");
const { cloneDeep, isString, isArray, isPlainObject } = require("lodash");
const { Op } = require("sequelize");
const sequelize = models.sequelize;

module.exports = {
    findCollection,
    insertCollection,
    removeCollection,
};

async function insertCollection({ name, description }) {
    if (!name) {
        throw new Error("You must provide a collection name");
    }
    return await models.collection.create({
        name,
        description,
    });
}

async function removeCollection({ id }) {
    await sequelize.transaction(async (t) => {
        entity = await models.collection.findOne({
            where: { id },
            include: [
                {
                    model: models.entity,
                    include: [{ model: models.property }],
                },
            ],
        });
        await entity.destroy({ where: { id }, transaction: t, cascade: true });
    });
}

async function findCollection({ id, name }) {
    let where = {};
    if (id) where.id = id;
    if (name)
        where.name = {
            [Op.substring]: [name],
        };
    return (await models.collection.findAll({ where })).map((c) => c.get());
}
