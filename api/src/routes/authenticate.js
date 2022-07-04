import { route, routeAdmin, loadConfiguration, generateToken } from "../common/index.js";
import { authenticate as authenticateToReva, whoami } from "../lib/file-browser_reva-api.js";
import { createUser, createUserSession } from "../lib/user.js";

export async function setupRoutes({ server }) {
    server.get("/authenticated/user", route(isAuthenticated));
    server.get("/authenticated/admin", routeAdmin(isAuthenticated));
    server.post("/authenticate/reva", authenticateToRevaHandler);
    server.post("/authenticate/local", authenticateLocalUser);
}

async function isAuthenticated(req, res, next) {
    res.send({});
    next();
}

export async function authenticateToRevaHandler(req, res, next) {
    const { gateway, username, password, createSession } = req.body;
    let { token, user } = await authenticateToReva({ gateway, username, password });
    res.send({ token, user });
    next();
}

export async function authenticateLocalUser(req, res, next) {
    let configuration = await loadConfiguration();
    const name = "Local User";
    const email = "email@localhost.com";
    let user = await createUser({ name, email });
    let { token, expiry } = await generateToken({ configuration, user });
    await createUserSession({
        email,
        data: {},
        token,
        expiry,
    });
    res.send({ token });
}
