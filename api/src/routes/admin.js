import { UnauthorizedError, InternalServerError } from "restify-errors";
import { routeAdmin, getLogger } from "../common";
import { validateProfile } from "../lib/profile";
import { getCollections, removeCollection } from "../lib/collections";

export async function setupRoutes({ server }) {
    server.post("/admin/login", loginRouteHandler);
    server.post("/admin/profile/validate", routeAdmin(checkProfileRouteHandler));
    server.post("/admin/collections", routeAdmin(getCollectionsRouteHandler));
    server.del("/admin/collections/:collectionId", routeAdmin(deleteCollectionRouteHandler));
}

export async function loginRouteHandler(req, res, next) {
    if (!req.body.password || req.body.password !== process.env.ADMIN_PASSWORD) {
        return next(new UnauthorizedError());
    }
    res.send({});
    next();
}

export async function checkProfileRouteHandler(req, res, next) {
    let result;
    try {
        result = await validateProfile({ profile: req.body.profile });
    } catch (error) {
        console.log(error);
        return next(new InternalServerError());
    }

    res.send(result);
    next();
}

export async function getCollectionsRouteHandler(req, res, next) {
    let { page, limit } = req.query;
    let results = await getCollections({ page, limit });
    res.send({ total: results.count, collections: results.rows.map((c) => c.get()) });
    next();
}

export async function deleteCollectionRouteHandler(req, res, next) {
    await removeCollection({ id: req.params.collectionId });
    res.send({});
    next();
}
