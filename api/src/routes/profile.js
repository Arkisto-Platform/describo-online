import { demandKnownUser } from "../middleware";
import { getProfile, createProfile, updateProfile } from "../lib/profile";
import { BadRequestError, InternalServerError } from "restify-errors";

export function setupProfileHandlingRoutes({ server }) {
    server.get("/profile/:profileId", demandKnownUser, getProfileRouteHandler);
    server.post("/profile", demandKnownUser, createProfileRouteHandler);
    server.put(
        "/profile/:profileId",
        demandKnownUser,
        updateProfileRouteHandler
    );
}

async function getProfileRouteHandler(req, res, next) {
    const profileId = req.params.profileId;
    if (!profileId) {
        return next(new BadRequestError());
    }
    try {
        let profile = await getProfile({ profileId });
        res.send({ profile });
        return next();
    } catch (error) {
        return next(new InternalServerError());
    }
}

async function createProfileRouteHandler(req, res, next) {
    let { name, profile, collectionId } = req.body;
    if (!name || !profile || !collectionId) {
        return next(new BadRequestError());
    }
    try {
        profile = await createProfile({ collectionId, name, profile });
    } catch (error) {
        return next(new BadRequestError());
    }
    res.send({ profile });
    return next();
}

async function updateProfileRouteHandler(req, res, next) {
    const profileId = req.params.profileId;
    if (!profileId) {
        return next(new BadRequestError());
    }
    let { name, profile } = req.body;
    if (!name && !profile) {
        return next(new BadRequestError());
    }
    try {
        profile = await updateProfile({ profileId, name, profile });
    } catch (error) {
        return next(new BadRequestError());
    }
    res.send({ profile });
    return next();
}
