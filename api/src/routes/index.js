import { loadConfiguration, route } from "../common";

import { setupRoutes as setupLoadRoutes } from "./load";
import { setupRoutes as setupFileRoutes } from "./file-browser";
import { setupRoutes as setupAdminRoutes } from "./admin";
import { setupRoutes as setupSessionRoutes } from "./session";
import { setupRoutes as setupProfileRoutes } from "./profile";
import { setupRoutes as setupEntityRoutes } from "./entity";
import { setupRoutes as setupTemplateRoutes } from "./template";

import { getLogger } from "../common/logger";
const log = getLogger();

export function setupRoutes({ server }) {
    setupLoadRoutes({ server });
    setupFileRoutes({ server });
    setupAdminRoutes({ server });
    setupSessionRoutes({ server });
    setupProfileRoutes({ server });
    setupEntityRoutes({ server });
    setupTemplateRoutes({ server });
    server.get("/configuration", getConfiguration);
    server.get("/authenticated", route(isAuthenticated));
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
