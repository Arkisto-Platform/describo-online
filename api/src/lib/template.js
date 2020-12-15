const models = require("../models");
const { Op } = require("sequelize");
import { getEntity, getEntityProperties } from "./entities";
import { groupBy } from "lodash";
import { Crate } from "./crate";

export async function insertTemplate({ userId, entityId, collectionId, name }) {
    if (entityId) {
        // locate the entity, freeze it and store it as a template
        let entity = await getEntity({ id: entityId, collectionId });
        let { properties } = await getEntityProperties({ id: entityId, collectionId });
        properties = properties.filter((p) => p.value);
        properties = groupBy(properties, "name");

        entity = {
            eid: entity.eid,
            etype: entity.etype,
            name: entity.name,
        };
        Object.keys(properties).forEach((property) => {
            entity[property] = properties[property].map((p) => p.value);
        });

        return await models.template.create({ userId, ...entity, src: entity });
    } else {
        // find the collection, freeze it and store it as a template
        let crate = new Crate();
        crate = await crate.exportCollectionAsROCrate({ collectionId });
        return await models.template.create({ userId, name, src: crate });
    }
}

export async function removeTemplate({ templateId, userId }) {
    await models.template.destroy({ where: { id: templateId, userId } });
}

export async function getTemplate({ userId, templateId }) {
    return await models.template.findOne({ where: { id: templateId, userId } });
}

export async function getTemplates({ userId, filter, page, limit, orderBy, orderDirection }) {
    let andClause = [{ userId }];
    let orClause = [];
    if (filter) {
        orClause = [
            { eid: { [Op.iLike]: `%${filter}%` } },
            { etype: { [Op.iLike]: `%${filter}%` } },
            { name: { [Op.iLike]: `%${filter}%` } },
        ];
    }
    if (orClause.length) {
        andClause.push({ [Op.or]: orClause });
    }

    let where = {
        [Op.and]: andClause,
    };
    where = {
        where,
        distinct: true,
        offset: page,
        limit,
        order: orderBy.map((p) => [p, orderDirection]),
    };

    let results = await models.template.findAndCountAll(where);
    let templates = results.rows.map((t) => t.get());
    return { templates, total: results.count };
}
