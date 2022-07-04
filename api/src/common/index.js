export { loadConfiguration, filterPrivateInformation } from "./configuration.js";
export { route, routeAdmin, demandKnownUser, demandValidApplication } from "./middleware.js";
export { getLogger } from "./logger.js";
export { getS3Handle } from "./getS3Handle.js";
export { saveCrate } from "./save-crate.js";
export { generateToken, verifyToken } from "./jwt.js";
export { Message } from "./message.js";

import fetch from "node-fetch";
import fsExtraPkg from "fs-extra";
const { writeJSON } = fsExtraPkg;
import { cloneDeep } from "lodash-es";
const api = "http://localhost:8080";
import Chance from "chance";
const chance = new Chance();

import { loadConfiguration } from "./configuration.js";

export async function createSessionForTest() {
    const origConfig = await loadConfiguration();

    let testConfig = cloneDeep(origConfig);
    testConfig.api.applications = [{ name: "test", url: "localhost:8000", secret: "xxx" }];
    await writeJSON("/srv/configuration/development-configuration.json", testConfig);
    let user = {
        email: chance.email(),
        name: chance.name(),
    };

    let response = await fetch(`${api}/session/application`, {
        method: "POST",
        headers: {
            Authorization: "Bearer xxx",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    response = await response.json();
    await writeJSON("/srv/configuration/development-configuration.json", origConfig);
    return { sessionId: response.sessionId, user };
}
