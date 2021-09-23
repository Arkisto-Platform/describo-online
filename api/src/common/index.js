import fetch from "node-fetch";
import { writeJSON } from "fs-extra";
import { cloneDeep } from "lodash";
const api = "http://localhost:8080";
import Chance from "chance";
const chance = new Chance();

export { loadConfiguration, filterPrivateInformation } from "./configuration";
export { getLogger } from "./logger";
export { getS3Handle } from "./getS3Handle";
export { saveCrate } from "./save-crate";
import { loadConfiguration } from ".";

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
