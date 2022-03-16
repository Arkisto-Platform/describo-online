import models from "../models";
import { loadInstalledProfiles, loadProfile, loadClassDefinition } from "../lib/profile";
import { BadRequestError } from "restify-errors";
import { route, getLogger } from "../common";
import path from "path";
const log = getLogger();

export async function setupRoutes({ server }) {
    server.post("/definition", route(postTypeDefinitionRouteHandler));
    server.get("/definition/lookup", route(lookupProfileRouteHandler));
    server.get("/profile", route(loadInstalledProfilesRouteHandler));
    server.post("/profile", route(saveProfileRouteHandler));
}

export async function postTypeDefinitionRouteHandler(req, res, next) {
    try {
        // let profile = await loadProfile({ file: req.session.data.profile.file });
        let definition = await loadClassDefinition({
            classNames: req.params.types,
            profile: req.session.data.profile,
        });
        res.send({ definition });
        return next(0);
    } catch (error) {
        console.log(error);
        log.error(`getTypeDefinition: ${error.message}`);
        return next(new BadRequestError());
    }
}

export async function lookupProfileRouteHandler(req, res, next) {
    try {
        let { query } = req.query;
        // let matches = await lookupProfile({ collectionId, query });
        let profile = await loadProfile({ file: req.session.data.profile.file });
        res.send({ matches });
        return next(0);
    } catch (error) {
        log.error(`lookupProfileRouteHandler: ${error.message}`);
        return next(new BadRequestError());
    }
}

export async function loadInstalledProfilesRouteHandler(req, res, next) {
    let profilePath;
    if (req.query.testing) profilePath = path.join("/srv", "testing-profiles");
    let profiles = await loadInstalledProfiles({ profilePath });
    res.send({ profiles });
    next();
}

export async function saveProfileRouteHandler(req, res, next) {
    let session = await models.session.findOne({ where: { id: req.session.id } });
    await session.update({ data: { ...req.session.data, profile: req.body.profile } });
    res.send({});
    return next();
}
