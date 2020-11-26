import { ForbiddenError, UnauthorizedError } from "restify-errors";
import OktaJwtVerifier from "@okta/jwt-verifier";
import { loadConfiguration } from "../common";
import { getUserSession, updateUserSession } from "../lib/user";
const expectedAuthorizationTypes = ["okta", "sid"];
import { getLogger } from "../common";
const log = getLogger();

export async function demandKnownUser(req, res, next) {
    if (!req.headers.authorization) {
        log.error(
            `demandKnownUser: Authorization header not preset in request`
        );
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
            try {
                ({ session, user, expiresAt } = await getUserSession({
                    oktaToken: token,
                }));
            } catch (error) {
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
                await updateUserSession({
                    sessionId: session.id,
                    oktaToken: token,
                    oktaExpiry: jwt.claims.exp,
                });
                ({ session, user, expiresAt } = await getUserSession({
                    oktaToken: token,
                }));
            }
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
        log.error(
            `demandKnownUser: something just went wrong ${error.message}`
        );
        return next(new UnauthorizedError());
    }
}
