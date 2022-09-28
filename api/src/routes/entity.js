import restifyErrorsPkg from "restify-errors";
const { BadRequestError, NotFoundError, ForbiddenError } = restifyErrorsPkg;
import { route, saveCrate, getLogger, getS3Handle, Message } from "../common/index.js";
import {
    getEntity,
    getEntityCount,
    getEntities,
    getEntityProperties,
    findEntity,
    insertEntity,
    updateEntity,
    removeEntity,
    attachProperty,
    updateProperty,
    removeProperty,
    associate,
    insertFilesAndFolders,
} from "../lib/entities.js";
import { loadClassDefinition } from "../lib/profile.js";
import { isArray, isPlainObject, isString, flattenDeep } from "lodash-es";
const log = getLogger();

export async function setupRoutes({ server }) {
    server.post("/entity/lookup", route(findEntityRouteHandler));
    server.get("/entity", route(getEntitiesRouteHandler));
    server.get("/entity/:entityId", route(getEntityRouteHandler));
    server.get("/entity/:entityId/properties", route(getEntityPropertiesRouteHandler));
    server.get("/entity/count", route(getEntityCountRouteHandler));
    server.post("/entity", route(postEntityRouteHandler));
    server.put("/entity/:entityId", route(putEntityRouteHandler));
    server.del("/entity/:entityId", route(delEntityRouteHandler));
    server.post("/entity/:entityId/property", route(postEntityPropertyRouteHandler));
    server.put("/entity/:entityId/property/:propertyId", route(putEntityPropertyRouteHandler));
    server.del("/entity/:entityId/property/:propertyId", route(delEntityPropertyRouteHandler));
    server.put("/entity/:entityId/associate", route(putEntityAssociateRouteHandler));
    server.post("/files", route(postFilesRouteHandler));
    server.post("/s3/presigned-url", route(getPresignedUrlRouteHandler));
    server.post("/session/entities", route(postEntitiesHandler));
}

export async function getEntityRouteHandler(req, res, next) {
    const collectionId = req.session.data?.current?.collectionId;
    if (!collectionId) {
        return next(new ForbiddenError("No collection loaded"));
    }

    if (!req.params.entityId) {
        return next(
            new BadRequestError(
                `You must provide an entityId to lookup or the special value 'RootDataset'`
            )
        );
    }

    let entity;
    try {
        if (req.params.entityId === "RootDataset") {
            let entities = await findEntity({
                eid: "./",
                etype: "Dataset",
                collectionId,
            });
            entity = entities.pop();
            if (!entity) {
                return next(new NotFoundError(`Root dataset not found`));
            }
            entity = await getEntity({ id: entity.id, collectionId });
        } else {
            entity = await getEntity({ id: req.params.entityId, collectionId });
        }

        res.send({ entity });
        next();
    } catch (error) {
        log.error(`getEntityRouteHandler: ${error.message}`);
        return next(new ForbiddenError());
    }
}

export async function getEntityCountRouteHandler(req, res, next) {
    const collectionId = req.session.data?.current?.collectionId;
    if (!collectionId) {
        return next(new ForbiddenError("No collection loaded"));
    }

    try {
        let count = await getEntityCount({ collectionId });
        res.send({ count });
        next();
    } catch (error) {
        log.error(`getEntityRouteHandler: ${error.message}`);
        return next(new ForbiddenError());
    }
}

export async function getEntitiesRouteHandler(req, res, next) {
    const collectionId = req.session.data?.current?.collectionId;
    if (!collectionId) {
        return next(new ForbiddenError("No collection loaded"));
    }

    let filter = req.query.filter;
    let page = req.query.page;
    let limit = req.query.limit;
    let orderBy = req.query.orderBy.split(",");
    let orderDirection = req.query.direction;

    try {
        let results = await getEntities({
            collectionId,
            filter,
            page,
            limit,
            orderByProperties: orderBy,
            orderDirection,
        });
        res.send({ ...results });
        next();
    } catch (error) {
        log.error(`getEntitiesRouteHandler: ${error.message}`);
        return next(new ForbiddenError());
    }
}

export async function getEntityPropertiesRouteHandler(req, res, next) {
    const collectionId = req.session.data?.current?.collectionId;
    if (!collectionId) {
        return next(new ForbiddenError("No collection loaded"));
    }

    if (!req.params.entityId) {
        return next(
            new BadRequestError(
                `You must provide an entityId to lookup or the special value 'RootDataset'`
            )
        );
    }

    let entity, properties;
    try {
        if (req.params.entityId === "RootDataset") {
            entity = (
                await findEntity({
                    eid: "./",
                    etype: "Dataset",
                    collectionId,
                })
            ).pop();
            if (!entity) {
                return next(new NotFoundError(`Root dataset not found`));
            }
            ({ properties } = await getEntityProperties({
                id: entity.id,
                collectionId,
            }));
        } else {
            ({ properties } = await getEntityProperties({
                id: req.params.entityId,
                collectionId,
            }));
        }

        properties = properties.map((p) => p.get());
        res.send({ properties });
        next();
    } catch (error) {
        log.error(`getEntityPropertiesRouteHandler: ${error.message}`);
        return next(new ForbiddenError());
    }
}

export async function findEntityRouteHandler(req, res, next) {
    const collectionId = req.session.data?.current?.collectionId;
    if (!collectionId) {
        return next(new ForbiddenError("No collection loaded"));
    }

    let find = { collectionId };
    try {
        let { hierarchy, eid, etype, name, limit } = req.body;
        find = { collectionId, hierarchy, eid, etype, name, limit };
    } catch (error) {}
    try {
        let entities = await findEntity(find);
        res.send({ entities });
        next();
    } catch (error) {
        log.error(`findEntityRouteHandler: ${error.message}`);
        return next(new ForbiddenError());
    }
}

export async function postEntityRouteHandler(req, res, next) {
    const collectionId = req.session.data?.current?.collectionId;
    if (!collectionId) {
        return next(new ForbiddenError());
    }
    let entity = req.body.entity;
    try {
        entity = await insertEntity({ entity, collectionId, profile: req.session.data.profile });
        if (!req.headers["x-testing"]) {
            await saveCrate({
                session: req.session,
                user: req.user,
                collectionId,
                actions: [{ name: "insert", entity }],
            });
        }
        res.send({ entity });
        return next();
    } catch (error) {
        log.error(`postEntityRouteHandler: ${error.message}`);
        return next(new BadRequestError(error.message));
    }
}

export async function putEntityRouteHandler(req, res, next) {
    const collectionId = req.session.data?.current?.collectionId;
    if (!collectionId) {
        return next(new ForbiddenError());
    }
    if (!req.params.entityId) {
        return next(
            new BadRequestError(
                `You must provide an entityId to lookup or the special value 'RootDataset'`
            )
        );
    }
    let entityId = req.params.entityId;
    let { name, eid } = req.body;
    try {
        let entity = await updateEntity({ collectionId, entityId, name, eid });
        if (!req.headers["x-testing"]) {
            await saveCrate({
                session: req.session,
                user: req.user,
                collectionId,
            });
        }
        res.send({ entity });
        return next();
    } catch (error) {
        log.error(`putEntityRouteHandler: ${error.message}`);
        return next(new BadRequestError(error.message));
    }
}

export async function delEntityRouteHandler(req, res, next) {
    const collectionId = req.session.data?.current?.collectionId;
    if (!collectionId) {
        return next(new ForbiddenError());
    }
    if (!req.params.entityId) {
        return next(
            new BadRequestError(
                `You must provide an entityId to lookup or the special value 'RootDataset'`
            )
        );
    }
    let entityId = req.params.entityId;
    try {
        let { updated, removed } = await removeEntity({ entityId, collectionId });
        let actions = updated.map((eid) => ({ name: "update", entity: { id: eid } }));
        actions = [...actions, { name: "remove", entity: removed.get() }];
        if (!req.headers["x-testing"]) {
            await saveCrate({
                session: req.session,
                user: req.user,
                collectionId,
                actions,
            });
        }
        res.send({});
        next();
    } catch (error) {
        console.log(error);
        log.error(`delEntityRouteHandler: ${error.message}`);
        return next(new BadRequestError(error.message));
    }
}

export async function postEntityPropertyRouteHandler(req, res, next) {
    const collectionId = req.session.data?.current?.collectionId;
    if (!collectionId) {
        return next(new ForbiddenError());
    }
    let entityId = req.params.entityId;
    let { property, value } = req.body;
    try {
        property = await attachProperty({
            collectionId,
            entityId,
            property,
            value,
        });
        if (!req.headers["x-testing"]) {
            await saveCrate({
                session: req.session,
                user: req.user,
                collectionId,
                actions: [{ name: "update", entity: { id: entityId } }],
            });
        }

        res.send({ property: property.get() });
        return next();
    } catch (error) {
        log.error(`postEntityPropertyRouteHandler: ${error.message}`);
        return next(new BadRequestError(error.message));
    }
}

export async function putEntityPropertyRouteHandler(req, res, next) {
    const collectionId = req.session.data?.current?.collectionId;
    if (!collectionId) {
        return next(new ForbiddenError());
    }
    const { entityId, propertyId } = req.params;
    let { value } = req.body;
    try {
        let property = await updateProperty({
            collectionId,
            entityId,
            propertyId,
            value,
        });
        if (!req.headers["x-testing"]) {
            await saveCrate({
                session: req.session,
                user: req.user,
                collectionId,
                actions: [{ name: "update", entity: { id: entityId } }],
            });
        }

        res.send({ property: property.get() });
        return next();
    } catch (error) {
        log.error(`putEntityPropertyRouteHandler: ${error.message}`);
        return next(new BadRequestError(error.message));
    }
}

export async function delEntityPropertyRouteHandler(req, res, next) {
    const collectionId = req.session.data?.current?.collectionId;
    if (!collectionId) {
        return next(new ForbiddenError());
    }
    const { entityId, propertyId } = req.params;
    try {
        await removeProperty({
            collectionId,
            entityId,
            propertyId,
        });
        if (!req.headers["x-testing"]) {
            await saveCrate({
                session: req.session,
                user: req.user,
                collectionId,
                actions: [{ name: "update", entity: { id: entityId } }],
            });
        }

        res.send({});
        return next();
    } catch (error) {
        log.error(`delEntityPropertyRouteHandler: ${error.message}`);
        return next(new BadRequestError(error.message));
    }
}

export async function putEntityAssociateRouteHandler(req, res, next) {
    const collectionId = req.session.data?.current?.collectionId;
    if (!collectionId) {
        return next(new ForbiddenError());
    }
    let entityId = req.params.entityId;
    try {
        let { property, tgtEntityId } = req.body;

        property = await associate({
            collectionId,
            entityId,
            property,
            tgtEntityId,
        });
        if (!req.headers["x-testing"]) {
            await saveCrate({
                session: req.session,
                user: req.user,
                collectionId,
                actions: [{ name: "update", entity: { id: entityId } }],
            });
        }

        res.send({});
        return next();
    } catch (error) {
        log.error(`putEntityPropertyRouteHandler: ${error.message}`);
        return next(new BadRequestError(error.message));
    }
}

export async function postFilesRouteHandler(req, res, next) {
    const collectionId = req.session.data?.current?.collectionId;
    if (!collectionId) {
        return next(new ForbiddenError());
    }
    let files = req.body.files;
    if (!files) {
        return next(new BadRequestError("You must provide an array of files to add"));
    }
    try {
        let actions = await insertFilesAndFolders({ collectionId, files });
        if (!req.headers["x-testing"]) {
            await saveCrate({
                session: req.session,
                user: req.user,
                collectionId,
                actions,
            });
        }
        res.send({});
        return next();
    } catch (error) {
        log.error(`postFilesRouteHandler: ${error.message}`);
        return next(new BadRequestError(error.message));
    }
}

export async function getPresignedUrlRouteHandler(req, res, next) {
    let target = req.body.file;
    const bucket = target.split("/")[1];

    const handle = await getS3Handle({
        sessionId: req.session.id,
        publicUrl: true,
        bucket,
    });
    if (["AWS"].includes(handle.config.provider)) {
        target = target.split("/").slice(2).join("/");
    }
    // const target = req.params.file.replace();
    let url = await handle.bucket.getPresignedUrl({ target });
    res.send({ url });
    return next();
}

export async function postEntitiesHandler(req, res, next) {
    if (!req.session.data?.current?.collectionId) {
        log.error(`No current collection loaded for calling session`);
        return next(new BadRequestError(`No current collection loaded for calling session`));
    }
    if (!req.session.data.profile) {
        log.error(`No profile defined for calling session`);
        return next(new BadRequestError(`No profile defined for calling session`));
    }
    const message = new Message({ io: req.io, path: "entityUpdatedHandler" });
    const collectionId = req.session.data.current.collectionId;
    const profile = req.session.data.profile;

    let entities;
    if (isArray(req.body)) {
        entities = [...req.body];
    } else if (isPlainObject(req.body)) {
        entities = [req.body];
    }

    // add all of the new entities if we can
    let actions = [];
    let insertions = {
        good: [],
        bad: [],
    };
    for (let entity of entities) {
        try {
            let e = await insertEntity({
                entity,
                collectionId,
                profile: req.session.data.profile,
            });
            entity = { ...entity, id: e.id };
            actions.push({ name: "insert", entity });
            insertions.good.push(entity);
        } catch (error) {
            log.error(`Failed to insert or locate ${JSON.stringify(entity)}`);
            insertions.bad.push(entity);
        }
    }

    // for all of the inserted entries, add their properties
    for (let entity of insertions.good) {
        let properties = Object.keys(entity).filter(
            (p) => !["id", "@id", "@type", "name"].includes(p)
        );
        const typeDefinition = await loadClassDefinition({
            classNames: [entity["@type"]],
            profile,
        });
        for (let property of properties) {
            let propertyDefinition;
            try {
                propertyDefinition = typeDefinition.inputs.filter((i) => i.name === property);
                propertyDefinition = propertyDefinition.length ? propertyDefinition[0] : {};
            } catch (error) {
                propertyDefinition = {};
            }
            let data = flattenDeep([entity[property]]);
            for (let instance of data) {
                if (isString(instance)) {
                    await attachProperty({
                        typeDefinition: propertyDefinition,
                        collectionId,
                        entityId: entity.id,
                        property,
                        value: instance,
                    });
                } else if (isPlainObject(instance) && "@id" in instance) {
                    let tgtEntity = await findEntity({ eid: instance["@id"], collectionId });
                    if (tgtEntity.length === 1) tgtEntity = tgtEntity.pop();
                    await associate({
                        typeDefinition: propertyDefinition,
                        collectionId,
                        entityId: entity.id,
                        property,
                        tgtEntityId: tgtEntity.id,
                    });
                }
            }
        }
        actions.push({ name: "update", entity });
    }
    await saveCrate({
        session: req.session,
        user: req.user,
        collectionId,
        actions,
    });
    await new Promise((resolve) => setTimeout(resolve, 500));

    res.send({ insertions });
    next();
}
