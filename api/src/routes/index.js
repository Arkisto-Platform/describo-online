import { loadConfiguration, route, getLogger } from "../common/index.js";
import { setupRoutes as setupAuthenticationRoutes } from "./authenticate.js";
import { setupRoutes as setupLoadRoutes } from "./load.js";
import { setupRoutes as setupFileRoutes } from "./file-browser.js";
import { setupRoutes as setupAdminRoutes } from "./admin.js";
import { setupRoutes as setupSessionRoutes } from "./session.js";
import { setupRoutes as setupProfileRoutes } from "./profile.js";
import { setupRoutes as setupEntityRoutes } from "./entity.js";
import { setupRoutes as setupTemplateRoutes } from "./template.js";
const log = getLogger();

export function setupRoutes({ server }) {
    setupAuthenticationRoutes({ server });
    setupLoadRoutes({ server });
    setupFileRoutes({ server });
    setupAdminRoutes({ server });
    setupSessionRoutes({ server });
    setupProfileRoutes({ server });
    setupEntityRoutes({ server });
    setupTemplateRoutes({ server });
    server.get("/configuration", getConfiguration);
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
