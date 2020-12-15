import { demandKnownUser } from "../middleware";
import { loadConfiguration } from "../common";
import OktaJwtVerifier from "@okta/jwt-verifier";
import { postSession } from "../lib/session";
import { createUser, createUserSession } from "../lib/user";
import { BadRequestError, UnauthorizedError, ForbiddenError } from "restify-errors";
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
    getEntitiesRouteHandler,
    getEntityPropertiesRouteHandler,
    findEntityRouteHandler,
    postEntityRouteHandler,
    putEntityRouteHandler,
    delEntityRouteHandler,
    postEntityPropertyRouteHandler,
    putEntityPropertyRouteHandler,
    delEntityPropertyRouteHandler,
    putEntityAssociateRouteHandler,
    postFilesRouteHandler,
} from "./entity";
import { loadRouteHandler } from "./load";
import {
    getTemplatesRouteHandler,
    getTemplateRouteHandler,
    postTemplateRouteHandler,
    delTemplateRouteHandler,
} from "./template";

import { getLogger } from "../common";
const log = getLogger();

export function setupRoutes({ server }) {
    server.get("/configuration", getConfiguration);
    server.post("/session/okta", createOktaSession);
    server.post("/session/application", createApplicationSession);
    server.get("/authenticated", route(isAuthenticated));
    server.post("/onedrive/configuration", route(saveUserOnedriveConfiguration));
    server.post("/folder/create", route(createFolderRouteHandler));
    server.post("/folder/read", route(readFolderRouteHandler));
    server.post("/folder/delete", route(deleteFolderRouteHandler));
    server.get("/definition", route(getTypeDefinitionRouteHandler));
    server.get("/definition/:name", route(getTypeDefinitionRouteHandler));
    server.get("/definition/lookup", route(lookupProfileRouteHandler));
    server.get("/profile/:profileId", route(getProfileRouteHandler));
    server.post("/profile", route(createProfileRouteHandler));
    server.put("/profile/:profileId", route(updateProfileRouteHandler));
    server.post("/load", route(loadRouteHandler));
    server.post("/entity/lookup", route(findEntityRouteHandler));
    server.get("/entity/:entityId", route(getEntityRouteHandler));
    server.get("/entity/:entityId/properties", route(getEntityPropertiesRouteHandler));
    server.get("/entity", route(getEntitiesRouteHandler));
    server.post("/entity", route(postEntityRouteHandler));
    server.put("/entity/:entityId", route(putEntityRouteHandler));
    server.del("/entity/:entityId", route(delEntityRouteHandler));
    server.post("/entity/:entityId/property", route(postEntityPropertyRouteHandler));
    server.put("/entity/:entityId/property/:propertyId", route(putEntityPropertyRouteHandler));
    server.del("/entity/:entityId/property/:propertyId", route(delEntityPropertyRouteHandler));
    server.put("/entity/:entityId/associate", route(putEntityAssociateRouteHandler));
    server.post("/files", route(postFilesRouteHandler));
    server.get("/template", route(getTemplatesRouteHandler));
    server.get("/template/:templateId", route(getTemplateRouteHandler));
    server.post("/template", route(postTemplateRouteHandler));
    server.del("/template/:templateId", route(delTemplateRouteHandler));

    if (process.env.NODE_ENV === "development") {
        // this is only for development of the capability to post back on save
        server.post("/save", (req, res, next) => {
            log.debug(`Crate POST'ed: ${req.body["@graph"][0]["@id"]}`);
            res.send({});
            return next();
        });
    }
}

function route(handler) {
    return [demandKnownUser, handler];
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
    let config = (await loadConfiguration()).ui;

    let token;
    try {
        token = req.headers.authorization.split("okta ").pop();
    } catch (error) {
        log.error(`createOktaSession: issue with authorization header: ${error.message}`);
        return next(new UnauthorizedError("Unable to get authorization from header"));
    }
    const oktaJwtVerifier = new OktaJwtVerifier({
        issuer: config.services.okta.issuer,
        clientId: config.services.okta.clientId,
        assertClaims: {
            cid: config.services.okta.clientId,
        },
    });
    let jwt;
    try {
        jwt = await oktaJwtVerifier.verifyAccessToken(token, "api://default");
    } catch (error) {
        log.error(`createOktaSession: okta token verification failure ${error.message}`);
        return next(new UnauthorizedError("Okta token verification failed"));
    }
    const email = req.body.email;
    const name = req.body.name;
    if (!email || !name) {
        log.error(`createOktaSession: email || name not provided`);
        return next(new BadRequestError());
    }

    await createUser({ name, email });
    let session = await createUserSession({
        email,
        data: {},
        oktaToken: token,
        oktaExpiry: jwt.claims.exp,
    });
    res.send({});
    return next();
}

async function createApplicationSession(req, res, next) {
    let authorization;
    try {
        authorization = req.headers.authorization.split("Bearer ").pop();
    } catch (error) {
        log.error(`createApplicationSession: issue with authorization header: ${error.message}`);
        return next(new BadRequestError("Unable to get authorization from header"));
    }
    const email = req.body.email;
    const name = req.body.name;
    if (!authorization || !email || !name) {
        log.error(`createApplicationSession: authorization || email || name not provided`);
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
