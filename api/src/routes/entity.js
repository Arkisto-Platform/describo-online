import { demandKnownUser } from "../middleware";
import { BadRequestError, ForbiddenError } from "restify-errors";
import {
    getEntity,
    findEntity,
    insertEntity,
    updateEntity,
    removeEntity,
} from "../lib/entities";
import { getLogger } from "../common";
const log = getLogger();

export function setupEntityRoutes({ server }) {
    server.get("/entity/:entityId", demandKnownUser, getEntityRouteHandler);
    server.post("/entity", demandKnownUser, postEntityRouteHandler);
    server.put("/entity/:entityId", demandKnownUser, putEntityRouteHandler);
    server.del("/entity/:entityId", demandKnownUser, delEntityRouteHandler);
}

async function getEntityRouteHandler(req, res, next) {
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

    let entity;
    try {
        if (req.params.entityId === "RootDataset") {
            entity = (
                await findEntity({
                    "@id": "./",
                    "@type": "Dataset",
                    collectionId,
                })
            ).pop();
            entity = await getEntity({ id: entity.id, collectionId });
        } else {
            entity = await getEntity({ id: req.params.entityId, collectionId });
        }

        const properties = entity.properties.map((p) => p.get());
        entity = entity.get();
        entity.properties = properties;
        if (req.query?.simple) {
            delete entity.properties;
        }
        res.send({ entity });
        next();
    } catch (error) {
        console.log(error);
        log.error(`getEntityRouteHandler: ${error.message}`);
        return next(new ForbiddenError());
    }
}

async function postEntityRouteHandler(req, res, next) {
    const collectionId = req.session.data?.current?.collectionId;
    if (!collectionId) {
        return next(new ForbiddenError());
    }
    let entity = req.body.entity;
    try {
        entity = await insertEntity({ entity, collectionId });
        res.send({ entity: entity.get() });
        return next();
    } catch (error) {
        log.error(`postEntityRouteHandler: ${error.message}`);
        return next(new BadRequestError(error.message));
    }
}

async function putEntityRouteHandler(req, res, next) {
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
        let entity = await updateEntity({ entityId, name, eid });
        res.send({ entity });
        return next();
    } catch (error) {
        log.error(`putEntityRouteHandler: ${error.message}`);
        return next(new BadRequestError(error.message));
    }
    res.send({});
    next();
}

async function delEntityRouteHandler(req, res, next) {
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
        await removeEntity({ id: entityId });
        res.send({});
        next();
    } catch (error) {
        log.error(`delEntityRouteHandler: ${error.message}`);
        return next(new BadRequestError(error.message));
    }
}
