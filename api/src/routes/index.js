import { demandKnownUser, demandValidApplication } from "../common/middleware";
import { loadConfiguration } from "../common";
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
    getEntityCountRouteHandler,
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
    getPresignedUrlRouteHandler,
} from "./entity";
import { loadRouteHandler } from "./load";
import {
    getTemplatesRouteHandler,
    getTemplateRouteHandler,
    postTemplateRouteHandler,
    delTemplateRouteHandler,
    postAddTemplateRouteHandler,
    postReplaceCrateWithTemplateRouteHandler,
} from "./template";

import {
    createOktaSession,
    createApplicationSession,
    updateApplicationSession,
    saveServiceConfiguration,
    getServiceConfiguration,
    getSession,
    getOauthToken,
} from "./session";

import { getLogger } from "../common/logger";
const log = getLogger();

export function setupRoutes({ server }) {
    server.get("/configuration", getConfiguration);
    server.get("/authenticated", route(isAuthenticated));
    server.post("/session/okta", createOktaSession);
    server.get("/session", route(getSession));
    server.post("/session/application", [demandValidApplication, createApplicationSession]);
    server.put("/session/application/:sessionId", [
        demandValidApplication,
        updateApplicationSession,
    ]);
    server.get("/session/configuration/:serviceName", route(getServiceConfiguration));
    server.post("/session/configuration/:serviceName", route(saveServiceConfiguration));
    server.post("/session/get-oauth-token/:serviceName", route(getOauthToken));
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
    server.get("/entity/count", route(getEntityCountRouteHandler));
    server.get("/entity", route(getEntitiesRouteHandler));
    server.post("/entity", route(postEntityRouteHandler));
    server.put("/entity/:entityId", route(putEntityRouteHandler));
    server.del("/entity/:entityId", route(delEntityRouteHandler));
    server.post("/entity/:entityId/property", route(postEntityPropertyRouteHandler));
    server.put("/entity/:entityId/property/:propertyId", route(putEntityPropertyRouteHandler));
    server.del("/entity/:entityId/property/:propertyId", route(delEntityPropertyRouteHandler));
    server.put("/entity/:entityId/associate", route(putEntityAssociateRouteHandler));
    server.post("/files", route(postFilesRouteHandler));
    server.post("/s3/presigned-url", route(getPresignedUrlRouteHandler));
    server.get("/template", route(getTemplatesRouteHandler));
    server.get("/template/:templateId", route(getTemplateRouteHandler));
    server.post("/template", route(postTemplateRouteHandler));
    server.del("/template/:templateId", route(delTemplateRouteHandler));
    server.post("/template/add", route(postAddTemplateRouteHandler));
    server.post("/template/replace", route(postReplaceCrateWithTemplateRouteHandler));

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
