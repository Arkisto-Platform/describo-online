import { UnauthorizedError, ForbiddenError } from "restify-errors";
import { verifyToken, loadConfiguration } from ".";
import { getUserSession } from "../lib/user";
const expectedAuthorizationTypes = ["Bearer", "sid"];
import { getLogger } from "./logger";
import { getApplication } from "../lib/session";
import models from "../models";
const log = getLogger();

export async function demandKnownUser(req, res, next) {
    if (!req.headers.authorization) {
        log.error(`demandKnownUser: Authorization header not present in request`);
        return next(new UnauthorizedError());
    }
    let [authType, token] = req.headers.authorization.split(" ");
    if (!expectedAuthorizationTypes.includes(authType)) {
        log.error(
            `demandKnownUser: unknown authorization presented: expected ${expectedAuthorizationTypes} got ${authType}`
        );
        return next(new UnauthorizedError());
    }
    try {
        let session, user, expiresAt;
        if (authType === "sid") {
            ({ session, user, expiresAt } = await getUserSession({
                sessionId: token,
            }));
        } else if (authType === "Bearer") {
            try {
                let configuration = await loadConfiguration();
                await verifyToken({ token, configuration });
            } catch (error) {
                return next(new UnauthorizedError("Token invalid or expired"));
            }
            ({ session, user, expiresAt } = await getUserSession({
                token,
            }));
        }

        if (session?.id && user?.email) {
            if (new Date().valueOf() / 1000 > expiresAt) {
                // session has expired!
                await models.session.destroy({ where: { id: session.id } });
                log.error(`demandKnownUser: session expired`);
                return next(new UnauthorizedError());
            }
            req.user = user;
            req.session = session;

            return next();
        } else {
            log.error(`demandKnownUser: no session or user retrieved`);
            return next(new UnauthorizedError());
        }
    } catch (error) {
        log.error(`demandKnownUser: something just went wrong ${error.message}`);
        return next(new UnauthorizedError());
    }
}

export async function demandAdmin(req, res, next) {
    if (!req.headers.authorization) {
        log.error(`demandKnownUser: Authorization header not present in request`);
        return next(new UnauthorizedError());
    }
    let [authType, token] = req.headers.authorization.split(" ");
    try {
        if (token !== process.env.ADMIN_PASSWORD) {
            return next(new UnauthorizedError());
        }
    } catch (error) {
        log.error(`demandKnownUser: something just went wrong ${error.message}`);
        return next(new UnauthorizedError());
    }
    next();
}

export async function demandValidApplication(req, res, next) {
    let authorization, application;
    try {
        authorization = req.headers.authorization.split("Bearer ").pop();
    } catch (error) {
        log.error(`createApplicationSession: issue with authorization header: ${error.message}`);
        return next(new BadRequestError("Unable to get authorization from header"));
    }

    try {
        ({ application } = await getApplication({ authorization }));
    } catch (error) {
        log.error(
            `createApplicationSession: caller not an authorised application - authorization: ${authorization}`
        );
        return next(new ForbiddenError());
    }
    next();
}

export async function updateCollectionMetadata(req, res, next) {
    if (req.route.path.match("/entity") && req.route.method !== "GET") {
        const collectionId = req.session.data?.current?.collectionId;
        if (collectionId) {
            let collection = await models.collection.findOne({ where: { id: collectionId } });
            collection.changed("updatedAt", true);
            collection.save();
        }
    }
    next();
}

export function route(handler) {
    return [demandKnownUser, updateCollectionMetadata, handler];
}

export function routeAdmin(handler) {
    return [demandAdmin, handler];
}
