import { demandKnownUser } from "../middleware";

export function setupOnedriveRoutes({ server }) {
    server.post(
        "/onedrive/configuration",
        demandKnownUser,
        saveUserOnedriveConfiguration
    );
}

async function saveUserOnedriveConfiguration(req, res, next) {
    console.log(req.body);
    res.send();
    next();
}
