import { loadConfiguration, route } from "../common";
import {
    readFolderRouteHandler,
    createFolderRouteHandler,
    deleteFolderRouteHandler,
} from "./file-browser";

import { setupRoutes as setupLoadRoutes } from "./load";
import { setupRoutes as setupAdminRoutes } from "./admin";
import { setupRoutes as setupSessionRoutes } from "./session";
import { setupRoutes as setupProfileRoutes } from "./profile";
import { setupRoutes as setupEntityRoutes } from "./entity";
import { setupRoutes as setupTemplateRoutes } from "./template";

import { getLogger } from "../common/logger";
const log = getLogger();

export function setupRoutes({ server }) {
    setupAdminRoutes({ server });
    setupSessionRoutes({ server });
    setupProfileRoutes({ server });
    setupEntityRoutes({ server });
    setupTemplateRoutes({ server });
    setupLoadRoutes({ server });
    server.get("/configuration", getConfiguration);
    server.get("/authenticated", route(isAuthenticated));
    server.post("/folder/create", route(createFolderRouteHandler));
    server.post("/folder/read", route(readFolderRouteHandler));
    server.post("/folder/delete", route(deleteFolderRouteHandler));

    if (process.env.NODE_ENV === "development") {
        // this is only for development of the capability to post back on save
        server.post("/save", (req, res, next) => {
            log.debug(`Crate POST'ed: ${req.body["@graph"][0]["@id"]}`);
            res.send({});
            return next();
        });
    }
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
