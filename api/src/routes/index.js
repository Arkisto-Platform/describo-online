import { demandKnownUser } from "../middleware";
import { loadConfiguration } from "../common";
import { postSession } from "../lib/session";
import { createUser, createUserSession } from "../lib/user";
import { BadRequestError, ForbiddenError } from "restify-errors";
import { saveUserOnedriveConfiguration } from "./onedrive";
import {
    readFolderRouteHandler,
    createFolderRouteHandler,
    deleteFolderRouteHandler,
} from "./file-browser";

import {
    getProfileRouteHandler,
    lookupProfileRouteHandler,
    createProfileRouteHandler,
    updateProfileRouteHandler,
    getTypeDefinitionRouteHandler,
} from "./profile";
import {
    getEntityRouteHandler,
    getEntityPropertiesRouteHandler,
    findEntityRouteHandler,
    postEntityRouteHandler,
    putEntityRouteHandler,
    delEntityRouteHandler,
    postEntityPropertyRouteHandler,
    putEntityPropertyRouteHandler,
    delEntityPropertyRouteHandler,
    putEntityAssociateRouteHandler,
} from "./entity";
import { loadRouteHandler } from "./load";

import { getLogger } from "../common";
const log = getLogger();

export function setupRoutes({ server }) {
    server.get("/configuration", getConfiguration);
    server.get("/authenticated", demandKnownUser, isAuthenticated);
    server.post("/session/okta", createOktaSession);
    server.post("/session/application", createApplicationSession);

    server.post(
        "/onedrive/configuration",
        demandKnownUser,
        saveUserOnedriveConfiguration
    );

    server.post("/folder/create", demandKnownUser, createFolderRouteHandler);
    server.post("/folder/read", demandKnownUser, readFolderRouteHandler);
    server.post("/folder/delete", demandKnownUser, deleteFolderRouteHandler);

    server.get(
        "/definition/:name",
        demandKnownUser,
        getTypeDefinitionRouteHandler
    );
    server.get(
        "/definition/lookup",
        demandKnownUser,
        lookupProfileRouteHandler
    );
    server.get("/profile/:profileId", demandKnownUser, getProfileRouteHandler);
    server.post("/profile", demandKnownUser, createProfileRouteHandler);
    server.put(
        "/profile/:profileId",
        demandKnownUser,
        updateProfileRouteHandler
    );

    server.post("/load", demandKnownUser, loadRouteHandler);

    server.post("/entity/lookup", demandKnownUser, findEntityRouteHandler);
    server.get("/entity/:entityId", demandKnownUser, getEntityRouteHandler);
    server.get(
        "/entity/:entityId/properties",
        demandKnownUser,
        getEntityPropertiesRouteHandler
    );
    server.post("/entity", demandKnownUser, postEntityRouteHandler);
    server.put("/entity/:entityId", demandKnownUser, putEntityRouteHandler);
    server.del("/entity/:entityId", demandKnownUser, delEntityRouteHandler);
    server.post(
        "/entity/:entityId/property",
        demandKnownUser,
        postEntityPropertyRouteHandler
    );
    server.put(
        "/entity/:entityId/property/:propertyId",
        demandKnownUser,
        putEntityPropertyRouteHandler
    );
    server.del(
        "/entity/:entityId/property/:propertyId",
        demandKnownUser,
        delEntityPropertyRouteHandler
    );
    server.put(
        "/entity/:entityId/associate",
        demandKnownUser,
        putEntityAssociateRouteHandler
    );
}

async function getConfiguration(req, res, next) {
    let configuration = await loadConfiguration();
    res.send({ configuration: configuration.ui });
    return next();
}

async function isAuthenticated(req, res, next) {
    res.send({});
    next();
}

async function createOktaSession(req, res, next) {
    const email = req.body.email;
    const name = req.body.name;
    if (!email || !name) {
        log.error(`createOktaSession: email || name not provided`);
        return next(new BadRequestError());
    }

    await createUser({ name, email });
    await createUserSession({ email, data: {} });
    res.send({});
    return next();
}

async function createApplicationSession(req, res, next) {
    let authorization;
    try {
        authorization = req.headers.authorization.split("Bearer ").pop();
    } catch (error) {
        log.error(
            `createApplicationSession: issue with authorization header: ${error.message}`
        );
        return next(
            new BadRequestError("Unable to get authorization from header")
        );
    }
    const email = req.body.email;
    const name = req.body.name;
    if (!authorization || !email || !name) {
        log.error(
            `createApplicationSession: authorization || email || name not provided`
        );
        return next(new BadRequestError());
    }

    try {
        let sessionId = await postSession({
            authorization,
            email,
            name,
        });
        res.send({ sessionId });
        next();
    } catch (error) {
        log.error(`createApplicationSession: ${error.message}`);
        return next(new ForbiddenError());
    }
}
