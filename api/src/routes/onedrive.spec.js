import "regenerator-runtime";
import fetch from "node-fetch";
import { loadConfiguration } from "../common";
import { writeJSON } from "fs-extra";
import { cloneDeep, isMatch } from "lodash";
import path from "path";
const api = "http://localhost:8080";
import models from "../models";

describe("Test onedrive api routes", () => {
    let sessionId;
    beforeAll(async () => {
        sessionId = await createSession();
    });
    test("it should be able to save a onedrive rclone configuration", async () => {
        const rcloneConfig = {
            type: "onedrive",
            token: {
                access_token: "some access token",
            },
            drive_id: "some drive id",
            drive_type: "business",
        };
        let response = await fetch(`${api}/onedrive/configuration`, {
            method: "POST",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rcloneConfig),
        });
        expect(response.status).toBe(200);
        let data = (await models.session.findOne({ where: { id: sessionId } }))
            .data;
        expect(isMatch(data.rclone.onedrive, rcloneConfig)).toBeTrue;
    });
});

async function createSession() {
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
