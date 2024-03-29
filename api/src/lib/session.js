import { loadConfiguration } from "../common/index.js";
import pkg from "restify-errors";
const { ForbiddenError } = pkg;
import { createUser, createUserSession } from "./user.js";

export async function postSession({ authorization, email, name, data }) {
    let { application } = await getApplication({ authorization });

    // find user by email and create a session for them
    let user = await createUser({ email, name });
    let session = await createUserSession({ email, data, creator: application.name });
    return session.id;
}

export async function getApplication({ authorization }) {
    const api = (await loadConfiguration()).api;

    const application = api?.applications.filter((a) => a.secret === authorization).pop();
    if (!application) {
        throw new ForbiddenError();
    }
    return { application };
}
