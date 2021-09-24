import { UnauthorizedError, ForbiddenError } from "restify-errors";
import { getUserSession } from "../lib/user";
const expectedAuthorizationTypes = ["okta", "sid"];
import { getLogger } from "./logger";
import { getApplication } from "../lib/session";
const log = getLogger();

export async function demandKnownUser(req, res, next) {
    if (!req.headers.authorization) {
        log.error(`demandKnownUser: Authorization header not preset in request`);
        return next(new UnauthorizedError());
    }
    let [authType, token] = req.headers.authorization.split(" ");
    if (!expectedAuthorizationTypes.includes(authType)) {
        log.error(
            `demandKnownUser: unknown authorization presented: expected okta || sid got authType`
        );
        return next(new UnauthorizedError());
    }
    try {
        let session, user, expiresAt;
        if (authType === "sid") {
            ({ session, user, expiresAt } = await getUserSession({
                sessionId: token,
            }));
        } else if (authType === "okta") {
            // try {
            ({ session, user, expiresAt } = await getUserSession({
                oktaToken: token,
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