import "regenerator-runtime";
import fetch from "node-fetch";
import { loadConfiguration } from "../common";
import { isMatch, cloneDeep } from "lodash";
import { writeJSON } from "fs-extra";
import path from "path";
import { getUserSession } from "../lib/user";

describe("Test routes - index.js", () => {
    const api = "http://localhost:8080";
    afterAll(async () => {
        await models.sequelize.close();
    });

    test("it should be able get the UI configuration", async () => {
        let response = await fetch(`${api}/configuration`);
        let config = await loadConfiguration();
        if (response.status === 200) {
            response = await response.json();
            expect(isMatch(response.configuration, config.ui)).toBeTrue;
        }
    });

    test("it should be able to create a new session", async () => {
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
        expect(response.status).toBe(200);
        response = await response.json();
        let s = await getUserSession({ email: user.email });
        expect(s.session.id).toEqual(response.sessionId);

        await writeJSON(path.join("../../configuration.json"), origConfig);
    });

    test("it should be able to create a session and login - bypassing okta auth", async () => {
        const origConfig = await loadConfiguration();

        let testConfig = cloneDeep(origConfig);
        testConfig.api.applications = [{ name: "test", secret: "xxx" }];
        await writeJSON(path.join("../../configuration.json"), testConfig);
        const user = {
            email: "test2@test.com",
            name: "test user 2",
        };

        let response = await fetch(`${api}/session/application`, {
            method: "POST",
            headers: {
                Authorization: "Bearer xxx",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        expect(response.status).toBe(200);
        let { sessionId } = await response.json();

        response = await fetch(`${api}/authenticated`, {
            method: "GET",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
        });
        expect(response.status).toBe(200);
        await writeJSON(path.join("../../configuration.json"), origConfig);
    });
});
