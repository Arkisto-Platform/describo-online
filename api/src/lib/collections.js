import models from "../models/index.js";
import { Op } from "sequelize";
const sequelize = models.sequelize;

export async function insertCollection({ name, description, metadata }) {
    if (!name) {
        throw new Error("You must provide a collection name");
    }
    return (
        await models.collection.create({
            name,
            description,
            metadata,
        })
    ).get();
}

export async function removeCollection({ id }) {
    await sequelize.transaction(async (t) => {
        await models.entity.destroy({
            where: { collectionId: id },
            include: [{ model: models.property }],
            transaction: t,
            cascade: true,
        });
        await models.collection.destroy({
            where: { id },
            transaction: t,
            cascade: true,
        });
    });
}

export async function findCollection({ id, name }) {
    let where = {};
    if (id) where.id = id;
    if (name)
        where.name = {
            [Op.substring]: [name],
        };
    let collections = await models.collection.findAll({ where });
    if (collections.length) {
        return collections.map((c) => c.get());
    }
    return [];
}

export async function getCollections({ page = 0, limit = 10 }) {
    let where = {
        where: {},
        offset: page,
        limit,
        order: [["updatedAt", "DESC"]],
    };
    return await models.collection.findAndCountAll(where);
}
