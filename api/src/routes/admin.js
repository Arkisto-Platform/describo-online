import { UnauthorizedError, InternalServerError } from "restify-errors";
import { routeAdmin, getLogger } from "../common";
import { validateProfile } from "../lib/profile";

export async function setupRoutes({ server }) {
    server.post("/admin/login", loginRouteHandler);
    server.post("/admin/profile/validate", routeAdmin(checkProfileRouteHandler));
}

export async function loginRouteHandler(req, res, next) {
    if (!req.body.password || req.body.password !== process.env.ADMIN_PASSWORD) {
        return next(new UnauthorizedError());
    }
    res.send({});
    next();
}

export async function checkProfileRouteHandler(req, res, next) {
    let result;
    try {
        result = await validateProfile({ profile: req.body.profile });
    } catch (error) {
        console.log(error);
        return next(new InternalServerError());
    }

    res.send(result);
    next();
}
