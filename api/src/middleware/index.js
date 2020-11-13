import { ForbiddenError } from "restify-errors";
import { readJSON } from "fs-extra";
import OktaJwtVerifier from "@okta/jwt-verifier";
import { loadConfiguration } from "../common";
import { createUser, getUserSession, createUserSession } from "../lib/user";
const expectedAuthorizationTypes = ["okta", "sid"];
import { getLogger } from "../common";
const log = getLogger();

export async function demandKnownUser(req, res, next) {
    if (!req.headers.authorization) {
        log.error(
            `demandKnownUser: Authorization header not preset in request`
        );
        return next(new ForbiddenError());
    }
    let [authType, token] = req.headers.authorization.split(" ");
    if (!expectedAuthorizationTypes.includes(authType)) {
        log.error(
            `demandKnownUser: unknown authorization presented: expected okta || sid got authType`
        );
        return next(new ForbiddenError());
    }
    try {
        if (authType === "sid") {
            let { session, user } = await getUserSession({ sessionId: token });
            if (session?.id && user?.email) {
                req.user = user;
                req.session = session;
                return next();
            }
        } else if (authType === "okta") {
            let config = (await loadConfiguration()).ui;
            const oktaJwtVerifier = new OktaJwtVerifier({
                issuer: config.services.okta.issuer,
                clientId: config.services.okta.clientId,
                assertClaims: {
                    cid: config.services.okta.clientId,
                },
            });
            const jwt = await oktaJwtVerifier.verifyAccessToken(
                token,
                "api://default"
            );
            let { session, user } = await getUserSession({
                email: jwt.claims.sub,
            });
            if (session?.id && user?.email) {
                req.user = user;
                req.session = session;
                return next();
            }
        }
        return next(new ForbiddenError());
    } catch (error) {
        return next(new ForbiddenError());
    }
}
