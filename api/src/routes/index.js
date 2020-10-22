import { setupOnedriveRoutes } from "./onedrive";
import { demandKnownUser } from "../middleware";
import { loadConfiguration } from "../common";
import { postSession as postSessionController } from "../controllers/session";
import { createUser, createUserSession } from "../lib/user";
import { BadRequestError, ForbiddenError } from "restify-errors";

export function setupRoutes({ server }) {
    server.get("/configuration", getConfiguration);
    server.get("/authenticated", demandKnownUser, isAuthenticated);
    server.post("/session/okta", createOktaSession);
    server.post("/session/application", createApplicationSession);
    setupOnedriveRoutes({ server });
}

async function getConfiguration(req, res, next) {
    let configuration = await loadConfiguration();
    configuration.ui.services.okta.issuer = `${configuration.ui.services.okta.domain}/oauth2/default`;
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
        return next(new BadRequestError());
    }

    await createUser({ name, email });
    await createUserSession({ email, data: {} });
    res.send({});
    return next();
}

async function createApplicationSession(req, res, next) {
    const authorization = req.headers.authorization.split("Bearer ").pop();
    const email = req.body.email;
    const name = req.body.name;
    if (!authorization || !email || !name) {
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
        return next(new ForbiddenError());
    }
}
