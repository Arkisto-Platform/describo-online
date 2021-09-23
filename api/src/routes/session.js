import models from "../models";
import { cloneDeep, omit } from "lodash";
import { loadConfiguration } from "../common";
import OktaJwtVerifier from "@okta/jwt-verifier";
import { postSession } from "../lib/session";
import { createUser, createUserSession } from "../lib/user";
import { BadRequestError, UnauthorizedError, ForbiddenError } from "restify-errors";
import { getOwncloudOauthToken, assembleOwncloudConfiguration } from "../lib/backend-owncloud";
import { getApplication } from "../lib/session";

import { getLogger } from "../common/logger";
const log = getLogger();

export async function createOktaSession(req, res, next) {
    let config = (await loadConfiguration()).ui;

    let token;
    try {
        token = req.headers.authorization.split("okta ").pop();
    } catch (error) {
        log.error(`createOktaSession: issue with authorization header: ${error.message}`);
        return next(new UnauthorizedError("Unable to get authorization from header"));
    }
    const oktaJwtVerifier = new OktaJwtVerifier({
        issuer: config.services.okta.issuer,
        clientId: config.services.okta.clientId,
        assertClaims: {
            cid: config.services.okta.clientId,
        },
    });
    let jwt;
    try {
        jwt = await oktaJwtVerifier.verifyAccessToken(token, "api://default");
    } catch (error) {
        log.error(`createOktaSession: okta token verification failure ${error.message}`);
        return next(new UnauthorizedError("Okta token verification failed"));
    }
    const email = req.body.email;
    const name = req.body.name;
    if (!email || !name) {
        log.error(`createOktaSession: email || name not provided`);
        return next(new BadRequestError());
    }

    await createUser({ name, email });
    let session = await createUserSession({
        email,
        data: {},
        oktaToken: token,
        oktaExpiry: jwt.claims.exp,
    });
    res.send({});
    return next();
}

export async function createApplicationSession(req, res, next) {
    const email = req.body.email;
    const name = req.body.name;
    const authorization = req.headers.authorization.split("Bearer ").pop();
    if (!authorization || !email || !name) {
        log.error(`createApplicationSession: authorization || email || name not provided`);
        return next(new BadRequestError());
    }

    try {
        let service = {};
        if (req.body.session?.owncloud) {
            service.owncloud = assembleOwncloudConfiguration({ params: req.body.session.owncloud });
        }
        let sessionId = await postSession({
            authorization,
            email,
            name,
            data: { service },
        });
        res.send({ sessionId });
        next();
    } catch (error) {
        log.error(`createApplicationSession: ${error.message}`);
        return next(new ForbiddenError());
    }
}

export async function updateApplicationSession(req, res, next) {
    const authorization = req.headers.authorization.split("Bearer ").pop();
    const { application } = await getApplication({ authorization });
    try {
        let session = await models.session.findOne({ where: { id: req.params.sessionId } });
        if (session.creator !== application.name) {
            return next(new ForbiddenError());
        }
        let service = session.data.service;
        if (req.body.session?.owncloud) {
            service.owncloud = assembleOwncloudConfiguration({ params: req.body.session.owncloud });
        }

        await session.update({ data: { ...session.data, ...service } });

        res.send({});
        next();
    } catch (error) {
        log.error(`updateApplicationSession: ${error.message}`);
        return next(new ForbiddenError());
    }
}

export async function saveServiceConfiguration(req, res, next) {
    await saveServiceConfigurationToSession({
        sessionId: req.session.id,
        config: req.body,
        serviceName: req.params.serviceName,
    });
    res.send({});
    next();
}

export async function getServiceConfiguration(req, res, next) {
    const privateConfiguration = ["clientSecret", "awsAccessKeyId", "awsSecretAccessKey"];
    let configuration = await loadConfiguration();
    configuration = configuration.api.services[req.params.serviceName].map((service) => {
        return omit(service, privateConfiguration);
    });

    res.send({ configuration });
    next();
}

export async function getSession(req, res, next) {
    res.send({ embeddedSession: req.session.creator ? true : false, session: req.session.data });
    next();
}

export async function getOauthToken(req, res, next) {
    let configuration = await loadConfiguration();

    let config;
    const serviceName = req.params.serviceName;
    try {
        let service = configuration.api.services[serviceName].filter(
            (s) => s.url === req.params.host
        )[0];
        switch (serviceName) {
            case "owncloud":
                config = await getOwncloudOauthToken({ service, code: req.params.code });
                // service = "owncloud";
                // await saveToSession({ sessionId: req.session.id, config, service: "owncloud" });
                await saveServiceConfigurationToSession({
                    sessionId: req.session.id,
                    config,
                    serviceName,
                });
                break;
        }
        res.send({});
        next();
    } catch (error) {
        console.log(error);
        return next(new BadRequestError(error.message));
    }
}

async function saveServiceConfigurationToSession({ sessionId, config, serviceName }) {
    // get the service configuration from the application configuration
    const configuration = await loadConfiguration();

    let serviceConfiguration = configuration.api.services[serviceName];
    if (serviceConfiguration) {
        serviceConfiguration = serviceConfiguration.filter((s) => {
            if (s.url) {
                return s.url === config.host;
            } else if (s.provider) {
                return s.provider === config.provider;
            }
        })[0];
    } else {
        serviceConfiguration = {};
    }

    // load the session model
    let session = await models.session.findOne({
        where: { id: sessionId },
    });

    // create the session struct
    let data = cloneDeep(session.data);
    data = {
        ...data,
        service: {
            [serviceName]: {
                ...config,
                ...serviceConfiguration,
            },
        },
    };
    // console.log(JSON.stringify(data, null, 2));

    // save the session
    await session.update({ data });
}
