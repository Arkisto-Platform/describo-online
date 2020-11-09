import path from "path";
import fetch from "node-fetch";
import { readJSON, writeJSON } from "fs-extra";
import { cloneDeep } from "lodash";
const api = "http://localhost:8080";

export async function loadConfiguration() {
    let configuration =
        process.env.NODE_ENV === "development"
            ? path.resolve(
                  path.join(__dirname, "..", "..", "configuration.json")
              )
            : "/srv/configuration.json";
    configuration = await readJSON(configuration);
    configuration.ui.services.okta.issuer = `${configuration.ui.services.okta.domain}/oauth2/default`;
    return configuration;
}

export async function createSessionForTest() {
    const origConfig = await loadConfiguration();

    let testConfig = cloneDeep(origConfig);
    testConfig.api.applications = [{ name: "test", secret: "xxx" }];
    await writeJSON(path.join("../../configuration.json"), testConfig);
    let user = {
        email: "test@test.com",
        name: "test user",
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
    await writeJSON(path.join("../../configuration.json"), origConfig);
    return response.sessionId;
}
