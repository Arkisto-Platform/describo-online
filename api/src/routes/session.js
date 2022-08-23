import models from "../models/index.js";
import restifyErrorsPkg from "restify-errors";
const { BadRequestError, UnauthorizedError, ForbiddenError } = restifyErrorsPkg;
import { cloneDeep, omit, difference, merge } from "lodash-es";
import {
    route,
    demandValidApplication,
    loadConfiguration,
    filterPrivateInformation,
    getLogger,
    generateToken,
} from "../common/index.js";
import OktaJwtVerifier from "@okta/jwt-verifier";
import { postSession, getApplication } from "../lib/session.js";
import { createUser, createUserSession } from "../lib/user.js";
import { getOwncloudOauthToken } from "../lib/backend-owncloud.js";
import { whoami } from "../lib/file-browser_reva-api.js";
import { loadInstalledProfiles } from "../lib/profile.js";

const log = getLogger();

export async function setupRoutes({ server }) {
    server.get("/session", route(getSession));
    server.post("/session/okta", createOktaSession);
    server.post("/session/reva", createRevaSession);
    server.post("/session/application", [demandValidApplication, createApplicationSession]);
    server.put("/session/application/:sessionId", [
        demandValidApplication,
        updateApplicationSession,
    ]);
    server.post("/session/get-oauth-token/:serviceName", route(getOauthToken));

    // get :service configuration
    server.get("/session/configuration/:service", route(getServiceConfigurationHandler));

    // create :service configuration
    server.post("/session/configuration/:service", route(saveServiceConfigurationHandler));

    // delete :service configuration
    server.del("/session/configuration/:service", route(deleteServiceConfigurationHandler));

    // update :service folder configuration
    server.put(
        "/session/configuration/:service/update-folder",
        route(updateServiceConfigurationFolderHandler)
    );
}

export async function getSession(req, res, next) {
    let session = filterPrivateInformation({ session: req.session.data });
    if (session) {
        session = {
            embeddedSession: req.session.creator ? true : false,
            session,
        };

        // we don't need the inline profile on the UI so remove it
        delete session.session?.profile?.inline;
        res.send(session);
        next();
    } else {
        res.send({});
        next();
    }
}

export async function createOktaSession(req, res, next) {
    let configuration = await loadConfiguration();

    let token, expiry;
    try {
        token = req.headers.authorization.split("Bearer ").pop();
    } catch (error) {
        log.error(`createOktaSession: issue with authorization header: ${error.message}`);
        return next(new UnauthorizedError("Unable to get authorization from header"));
    }
    const oktaJwtVerifier = new OktaJwtVerifier({
        issuer: configuration.ui.services.okta.issuer,
        clientId: configuration.ui.services.okta.clientId,
        assertClaims: {
            cid: configuration.ui.services.okta.clientId,
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

    let user = await createUser({ name, email });
    ({ token, expiry } = await generateToken({ configuration, user }));
    await createUserSession({
        email,
        data: {},
        token,
        expiry,
    });
    res.send({ token });
    return next();
}

export async function createRevaSession(req, res, next) {
    let configuration = await loadConfiguration();

    let token, expiry;
    try {
        token = req.headers.authorization.split("Bearer ").pop();
    } catch (error) {
        log.error(`createRevaSession: issue with authorization header: ${error.message}`);
        return next(new UnauthorizedError("Unable to get authorization from header"));
    }
    let response = await whoami({ token, gateway: req.body.gateway });
    if (!response.user) {
        return next(new UnauthorizedError("Reva token verification failed"));
    }

    const email = req.body.email;
    const name = req.body.name;
    if (!email || !name) {
        log.error(`createSession: email || name not provided`);
        return next(new BadRequestError());
    }

    let user = await createUser({ name, email });
    ({ token, expiry } = await generateToken({ configuration, user }));
    await createUserSession({
        email,
        data: {},
        token,
        expiry,
    });
    res.send({ token });
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
        let data = {};
        let service = {};

        // set up the service configuration
        if (req.body.service?.owncloud) {
            service.owncloud = assembleOwncloudConfiguration({ params: req.body.service.owncloud });
        } else if (req.body.service?.s3) {
            service.s3 = assembleS3Configuration({ params: req.body.service.s3 });
        } else if (req.body.service?.local) {
            service.local = { provider: "local", folder: req.body.service.local.folder };
        }
        data.service = service;

        // set up the profile
        let profiles = await loadInstalledProfiles({});
        let profile;
        if (req.body?.profile?.inline) {
            data.profile = {
                file: "inline",
                inline: req.body.profile.inline,
            };
        } else if (req.body?.profile?.file) {
            profile = profiles.filter((p) => p.file === req.body.profile.file);
            if (profile.length) {
                data.profile = profile[0];
            }
        }

        // setup up any configuration
        else
            data.configuration = {
                allowProfileChange:
                    req.body?.configuration?.allowProfileChange === undefined
                        ? true
                        : req.body.configuration.allowProfileChange,
                allowServiceChange:
                    req.body?.configuration?.allowServiceChange === undefined
                        ? true
                        : req.body.configuration.allowServiceChange,
            };

        let sessionId = await postSession({
            authorization,
            email,
            name,
            data,
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
        } else if (req.body.session?.s3) {
            service.s3 = assembleS3Configuration({ params: req.body.session.s3 });
        }

        await session.update({ data: { ...session.data, ...service } });

        res.send({});
        next();
    } catch (error) {
        log.error(`updateApplicationSession: ${error.message}`);
        return next(new ForbiddenError());
    }
}

export async function getServiceConfigurationHandler(req, res, next) {
    // const privateConfiguration = ["clientSecret", "awsAccessKeyId", "awsSecretAccessKey"];
    let configuration = await loadConfiguration();
    // configuration = configuration.api.services[req.params.serviceName].map((service) => {
    //     return omit(service, privateConfiguration);
    // });
    configuration = filterPrivateInformation({ configuration });
    configuration = configuration.api.services[req.params.service];

    res.send({ configuration });
    next();
}

export async function saveServiceConfigurationHandler(req, res, next) {
    await saveServiceConfigurationToSession({
        sessionId: req.session.id,
        config: req.body,
        serviceName: req.params.service,
    });
    res.send({});
    next();
}

export async function deleteServiceConfigurationHandler(req, res, next) {
    let session = await models.session.findOne({ where: { id: req.session.id } });
    delete session.data.service[req.params.service];
    delete session.data.current;
    session.changed("data", true);
    await session.save();
    res.send({});
    next();
}

export async function updateServiceConfigurationFolderHandler(req, res, next) {
    let session = await models.session.findOne({ where: { id: req.session.id } });
    let service = session.data.service[req.params.service];
    if (req.body.folder) {
        service.folder = req.body.folder;
    } else {
        delete service.folder;
    }

    let patch = merge(session.data, { service: { [req.params.service]: service } });
    session.data = patch;
    session.changed("data", true);
    await session.save();

    res.send({});
    return next();
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
    session = await session.update({ data });
}

export function assembleOwncloudConfiguration({ params }) {
    const requiredParams = ["url", "access_token", "user_id"];
    const optionalParams = ["folder", "refresh_token"];

    let definedParams = Object.keys(params);
    const missingRequiredParams = difference(requiredParams, definedParams);
    if (missingRequiredParams.length) {
        const msg = `Missing required params when setting up owncloud config: ${missingRequiredParams}`;
        log.error(msg);
        throw new BadRequestError(msg);
    }
    const unusedParams = difference(definedParams, [...requiredParams, ...optionalParams]);
    if (unusedParams.length) {
        log.warn(`Extra params defined for owncloud config but not used: ${unusedParams}`);
    }
    return {
        url: params.url,
        folder: params.folder,
        access_token: params.access_token,
        refresh_token: params.refresh_token,
        user_id: params.user_id,
    };
}

export function assembleS3Configuration({ params }) {
    const requiredParams = ["provider", "awsAccessKeyId", "awsSecretAccessKey"];
    const optionalParams = ["region", "folder", "url"];
    if (!params.region) params.region = "us-east-1";

    if (!params.provider) {
        const msg = `Missing required param when setting up s3 config: 'provider'`;
        log.error(msg);
        throw new BadRequestError(msg);
    }
    if (!["Minio", "AWS"].includes(params.provider)) {
        const msg = `'Provider' param must equal 'AWS' || 'Minio'`;
        log.error(msg);
        throw new BadRequestError(msg);
    }

    let definedParams = Object.keys(params);
    const missingRequiredParams = difference(requiredParams, definedParams);
    if (missingRequiredParams.length) {
        const msg = `Missing required params when setting up s3 config: ${missingRequiredParams}`;
        log.error(msg);
        throw new BadRequestError(msg);
    }
    if (params.provider === "Minio" && !params.url) {
        const msg = `Missing required param when setting up Minio s3 config: 'url'`;
        log.error(msg);
        throw new BadRequestError(msg);
    }
    const unusedParams = difference(definedParams, [...requiredParams, ...optionalParams]);
    if (unusedParams.length) {
        log.warn(`Extra params defined for s3 config but not used: ${unusedParams}`);
    }
    return {
        provider: params.provider,
        url: params.url,
        folder: params.folder,
        awsAccessKeyId: params.awsAccessKeyId,
        awsSecretAccessKey: params.awsSecretAccessKey,
        region: params.region,
    };
}
