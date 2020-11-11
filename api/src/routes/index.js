import { demandKnownUser } from "../middleware";
import { loadConfiguration } from "../common";
import { postSession as postSessionController } from "../controllers/session";
import { createUser, createUserSession } from "../lib/user";
import { BadRequestError, ForbiddenError } from "restify-errors";
import { setupOnedriveRoutes } from "./onedrive";
import { setupFileBrowserRoutes } from "./file-browser";
import { setupProfileHandlingRoutes } from "./profile";
import { getLogger } from "../common";
const log = getLogger();

export function setupRoutes({ server }) {
    server.get("/configuration", getConfiguration);
    server.get("/authenticated", demandKnownUser, isAuthenticated);
    server.post("/session/okta", createOktaSession);
    server.post("/session/application", createApplicationSession);
    setupOnedriveRoutes({ server });
    setupFileBrowserRoutes({ server });
    setupProfileHandlingRoutes({ server });
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
        let sessionId = await postSessionController({
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
