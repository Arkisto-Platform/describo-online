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

export async function getTemplates({ userId, eid, etype, name, fuzzy = true }) {
    // TODO add pagination and ordering
    let andClause = [{ userId }];
    const orClause = [];
    if (etype) {
        let clause = {
            etype: fuzzy ? { [Op.iLike]: `%${etype}%` } : { [Op.eq]: etype },
        };
        if (fuzzy) orClause.push(clause);
        if (!fuzzy) andClause.push(clause);
    }
    if (eid) {
        let clause = {
            eid: fuzzy ? { [Op.iLike]: `%${eid}%` } : { [Op.eq]: eid },
        };
        if (fuzzy) orClause.push(clause);
        if (!fuzzy) andClause.push(clause);
    }
    if (name) {
        let clause = {
            name: fuzzy ? { [Op.iLike]: `%${name}%` } : { [Op.eq]: name },
        };
        if (fuzzy) orClause.push(clause);
        if (!fuzzy) andClause.push(clause);
    }
    if (orClause.length) {
        andClause.push({ [Op.or]: orClause });
    }

    let where = {
        [Op.and]: andClause,
    };
    let templates = await models.template.findAll({ where, limit: 10 });
    return templates.map((e) => e.get());
}
