import { readJSON } from "fs-extra";
import { setupOnedriveRoutes } from "./onedrive";

export function setupRoutes({ server }) {
    server.get("/configuration", async (req, res, next) => {
        let configuration = await readJSON("./configuration.json");
        res.send({ configuration });
        next();
    });
    setupOnedriveRoutes({ server });
}
