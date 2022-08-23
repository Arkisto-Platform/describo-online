import models from "../models/index.js";
import { Op } from "sequelize";
const sequelize = models.sequelize;
import path from "path";
import { cloneDeep, orderBy, flattenDeep, uniqBy, isArray } from "lodash-es";
import { loadProfile, loadClassDefinition } from "./profile.js";

export async function insertEntity({ entity, collectionId, profile }) {
    verifyEntity({ entity });
    profile = await loadProfile({ profile });

    let hierarchy;
    try {
        ({ hierarchy } = await loadClassDefinition({
            className: entity["@type"] ? entity["@type"] : entity.etype,
            profile,
        }));
    } catch (error) {
        hierarchy = [entity["@type"] ? entity["@type"] : entity.etype, "Thing"];
    }
    let where = {
        collectionId,
    };
    if (entity["@id"]) where.eid = entity["@id"];
    if (entity.eid) where.eid = entity.eid;
    if (entity["@type"]) where.etype = entity["@type"];
    if (entity.etype) where.etype = entity.etype;
    if (entity.name) where.name = entity.name;

    entity = await models.entity.findOrCreate({
        where,
        defaults: where,
    });
    entity = entity[0];
    if (!entity.eid) {
        entity = await entity.update({
            eid: entity.id,
        });
    }
    return entity.get();

    function verifyEntity({ entity }) {
        if (!entity["@type"] && !entity.etype) {
            throw new Error(`Entity missing '@type' property`);
        }
    }
}

export async function updateEntity({ collectionId, entityId, name, eid }) {
    let entity = await getEntity({ id: entityId, collectionId });
    if (!entity) {
        throw new Error(`You don't have permission to access that entity`);
    }

    let update = {};
    if (name) update.name = name;
    if (eid) update.eid = eid;

    entity = (await entity.update(update)).get();
    return entity;
}

export async function attachProperty({ collectionId, entityId, property, value, typeDefinition }) {
    let entity = await getEntity({ id: entityId, collectionId });
    if (!entity) {
        throw new Error(`You don't have permission to access that entity`);
    }
    let fqname = typeDefinition?.id ? typeDefinition.id : "";
    property = await models.property.create({
        name: property,
        definition: { id: fqname },
        value,
        entityId,
    });
    return property;
}

export async function updateProperty({ collectionId, entityId, propertyId, value }) {
    let entity = await getEntity({ id: entityId, collectionId });
    if (!entity) {
        throw new Error(`You don't have permission to access that entity`);
    }
    let property = await models.property.findOne({
        where: { id: propertyId },
    });
    property.value = value;
    property = await property.save();
    return property;
}

export async function removeProperty({ collectionId, entityId, propertyId }) {
    let entity = await getEntity({ id: entityId, collectionId });
    if (!entity) {
        throw new Error(`You don't have permission to access that entity`);
    }
    let property = await models.property.findOne({ where: { id: propertyId } });
    await models.property.destroy({
        where: { id: propertyId },
    });
    if (property.tgtEntityId) {
        await models.property.destroy({
            where: { tgtEntityId: entityId },
        });
    }
    return { updated: [property.entityId, property.tgtEntityId] };
}

export async function associate({ collectionId, entityId, property, tgtEntityId, typeDefinition }) {
    let entity = await getEntity({ id: entityId, collectionId });
    if (!entity) {
        throw new Error(`You don't have permission to access that entity`);
    }
    let fqname = typeDefinition?.id ? typeDefinition.id : "";
    let properties = [
        {
            name: property,
            definition: { id: fqname },
            tgtEntityId: tgtEntityId,
            direction: "F",
            entityId,
        },
        {
            name: property,
            definition: { id: fqname },
            tgtEntityId: entityId,
            direction: "R",
            entityId: tgtEntityId,
        },
    ];
    for (let property of properties) {
        await models.property.findOrCreate({
            where: property,
            defaults: property,
        });
    }

    // await models.property.bulkCreate(properties);
}

export async function removeEntity({ entityId, collectionId }) {
    let entity = await getEntity({ id: entityId, collectionId });
    if (!entity) {
        throw new Error(`You don't have permission to access that entity`);
    }
    let targetIds = await models.property.findAll({
        where: { tgtEntityId: entityId },
        attributes: ["entityId"],
        raw: true,
    });
    targetIds = targetIds.map((t) => t.entityId);
    await sequelize.transaction(async (t) => {
        await models.entity.destroy({
            where: { id: entityId },
            include: [{ model: models.property }],
            transaction: t,
        });
        // remove properties where this entity is the target
        await models.property.destroy({
            where: { tgtEntityId: entityId },
            transaction: t,
        });
        // remove properties associated to this entity
        await models.property.destroy({
            where: { entityId },
            transaction: t,
        });
    });
    return { removed: entity, updated: targetIds };
}

export async function findEntity({
    limit = 10,
    eid,
    etype,
    name,
    hierarchy,
    collectionId,
    fuzzy = true,
}) {
    // TODO add pagination and ordering
    let andClause = [{ collectionId }];
    const orClause = [];
    if (hierarchy) {
        let clause = {
            etype: fuzzy ? { [Op.iLike]: `%${hierarchy}%` } : { [Op.eq]: etype },
        };
        andClause.push(clause);
    }
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
    let entities = await models.entity.findAll({ where, limit: 10 });
    return entities.map((e) => e.get());
}

export async function getEntity({ id, collectionId }) {
    return await models.entity.findOne({
        where: { id, collectionId },
    });
}

export async function getEntityCount({ collectionId }) {
    return await models.entity.count({ where: { collectionId } });
}

export async function getEntities({
    collectionId,
    filter,
    page = 0,
    limit = 10,
    orderByProperties = ["name"],
    orderDirection = "ASC",
}) {
    let where;
    if (!filter) {
        where = { collectionId };
    } else {
        where = {
            [Op.and]: [
                {
                    collectionId,
                    [Op.or]: [
                        {
                            eid: {
                                [Op.iLike]: `%${filter}%`,
                            },
                        },
                        {
                            name: {
                                [Op.iLike]: `%${filter}%`,
                            },
                        },
                    ],
                },
            ],
        };
    }
    where = {
        where,
        include: [{ model: models.property }],
        distinct: true,
        offset: page,
        limit,
        order: orderByProperties.map((p) => [p, orderDirection]),
    };
    let results = await models.entity.findAndCountAll(where);
    let entities = results.rows.map((e) => {
        let isConnected = e.properties.filter((p) => p.direction === "R");
        let data = e.get();
        delete data.properties;
        return { ...data, isConnected: isConnected.length ? true : false };
    });
    entities = entities.map((e) => {
        delete e.collectionId;
        return e;
    });
    return { total: results.count, entities };
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

export async function insertFilesAndFolders({ collectionId, files }) {
    files = cloneDeep(files);
    let actions = [];

    const propertiesFilter = [
        "path",
        "parent",
        "isDir",
        "isLeaf",
        "name",
        "id",
        "disabled",
        "children",
    ];
    const datasetFilterProperties = ["contentSize", "encodingFormat"];
    const propertyMap = {
        size: "contentSize",
        modTime: "dateModified",
        mimeType: "encodingFormat",
    };

    // let datasets = files.filter((f) => f.isDir);
    // files = files.filter((f) => !f.isDir);

    // do all datasets (folders) then do the files
    // files = [...datasets, ...files];
    files = generateParentPaths({ files });

    for (let file of files) {
        if (file.parent) file.parent = file.parent.replace(/^\//, "");
        let clause = {
            collectionId,
            eid: file.parent ? path.join(file.parent, file.path) : `${file.path}`,
            etype: file.isDir ? "Dataset" : "File",
        };
        let defaults = {
            name: file.parent ? path.join(file.parent, file.path) : `${file.path}`,
        };
        let entity = await models.entity.findOrCreate({
            where: clause,
            defaults: { ...clause, ...defaults },
        });
        actions.push({ name: entity[1] ? "insert" : "update", entity: { id: entity[0].id } });
        entity = entity[0];

        let properties = Object.keys(file).filter((p) => {
            return !propertiesFilter.includes(p);
        });

        properties = properties
            .map((p) => ({
                name: propertyMap[p],
                value: String(file[p]),
                entityId: entity.id,
            }))
            .filter((property) => property.name);

        if (entity.etype === "Dataset") {
            properties = properties.filter((p) => !datasetFilterProperties.includes(p.name));
        }
        for (let property of properties) {
            let clause = {
                name: property.name,
                value: property.value,
                entityId: property.entityId,
            };
            await models.property.findOrCreate({ where: clause, defaults: clause });
        }

        file.entity = entity.get();
    }

    // create the hasPart associations
    for (let file of files) {
        // find the parent entity
        let parent;
        if (!file.parent) {
            //  if parent is undefined attach it to the root dataset
            parent = await findEntity({ collectionId, eid: "./", etype: "Dataset", fuzzy: false });
            parent = parent.filter((p) => p.eid === "./" && p.etype === "Dataset").pop();
        } else {
            //  otherwise find the parent and associate to that
            parent = await findEntity({
                collectionId,
                eid: file.parent,
                etype: "Dataset",
                fuzzy: false,
            });
            parent = parent.filter((p) => p.eid === file.parent && p.etype === "Dataset").pop();
        }

        let association = {
            collectionId,
            entityId: parent.id,
            property: "hasPart",
            tgtEntityId: file.entity.id,
        };
        actions.push({ name: "update", entity: { id: parent.id } });
        await associate(association);
    }
    return uniqBy(actions, "entity.id");
}

export function generateParentPaths({ files }) {
    // console.log(files);
    let folders = [];
    let paths = files.map((f) => {
        if (f.parent) {
            return generatePathComponent(f.parent, folders);
        }
    });
    files = orderBy(flattenDeep([...files, folders]), ["isDir"], ["desc"]);
    return files;

    function generatePathComponent(pathComponent, accumulator) {
        accumulator.push({
            path: path.basename(pathComponent),
            parent: path.dirname(pathComponent) === "." ? undefined : path.dirname(pathComponent),
            isDir: true,
        });
        if (![".", "/"].includes(path.dirname(pathComponent))) {
            return generatePathComponent(path.dirname(pathComponent), accumulator);
        }
    }
}
