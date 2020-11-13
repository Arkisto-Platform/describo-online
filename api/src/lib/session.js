import { loadConfiguration } from "../common";
import { ForbiddenError } from "restify-errors";
import { createUser, createUserSession } from "./user";

export async function postSession({ authorization, email, name }) {
    const api = (await loadConfiguration()).api;

    const authorizedApplication = api?.applications.filter(
        (a) => a.secret === authorization
    ).length
        ? true
        : false;
    if (!authorizedApplication) {
        throw new ForbiddenError();
    }

    // find user by email and create a session for them
    let user = await createUser({ email, name });
    let session = await createUserSession({ email, data: {} });
    return session.id;
}
