import models from "../models";
import { loadInstalledProfiles, loadProfile, loadClassDefinition } from "../lib/profile";
import { BadRequestError } from "restify-errors";
import { route, getLogger } from "../common";
const log = getLogger();

export async function setupRoutes({ server }) {
    server.get("/definition/:name", route(getTypeDefinitionRouteHandler));
    server.get("/definition/lookup", route(lookupProfileRouteHandler));
    server.get("/profile", route(loadInstalledProfilesRouteHandler));
    server.post("/profile", route(saveProfileRouteHandler));
}

export async function getTypeDefinitionRouteHandler(req, res, next) {
    try {
        let name = req.params.name;
        let profile = await loadProfile({ file: req.session.data.profile.file });

        let definition = await loadClassDefinition({ className: name, profile });
        res.send({ definition });
        return next(0);
    } catch (error) {
        log.error(`getTypeDefinition: ${error.message}`);
        return next(new BadRequestError());
    }
}

export async function lookupProfileRouteHandler(req, res, next) {
    try {
        let { query } = req.query;
        // let matches = await lookupProfile({ collectionId, query });
        let profile = await loadProfile({ file: req.session.data.profile.file });
        console.log(profile);
        res.send({ matches });
        return next(0);
    } catch (error) {
        log.error(`lookupProfileRouteHandler: ${error.message}`);
        return next(new BadRequestError());
    }
}

export async function loadInstalledProfilesRouteHandler(req, res, next) {
    let profiles = await loadInstalledProfiles({});
    res.send({ profiles });
    next();
}

export async function saveProfileRouteHandler(req, res, next) {
    let session = await models.session.findOne({ where: { id: req.session.id } });
    await session.update({ data: { ...req.session.data, profile: req.body.profile } });
    res.send({});
    return next();
}
