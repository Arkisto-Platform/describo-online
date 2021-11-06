import "regenerator-runtime";
import fetch from "node-fetch";
import { assembleOwncloudConfiguration, assembleS3Configuration } from "./session";
import models from "../models";
import Chance from "chance";
const chance = new Chance();

import { cloneDeep } from "lodash";
import { writeJSON } from "fs-extra";
import { loadConfiguration } from "../common";
import { getUserSession } from "../lib/user";
import { createSessionForTest } from "../common";

const api = "http://localhost:8080";
describe("Test session setup operations", () => {
    afterAll(async () => {
        await models.session.truncate();
        await models.sequelize.close();
    });
    test("it should be able to setup an owncloud session", async () => {
        let params = {
            url: "http://localhost:8000",
            access_token: "x",
            user_id: chance.guid(),
        };
        let config = assembleOwncloudConfiguration({ params });

        params = {
            url: "http://localhost:8000",
            folder: "a",
            access_token: "x",
            refresh_token: "y",
            user_id: chance.guid(),
        };
        config = assembleOwncloudConfiguration({ params });
    });
    test("it should fail to setup an owncloud session - missing required params", async () => {
        let params = {
            url: "http://localhost:8000",
            access_token: "x",
        };
        try {
            let config = assembleOwncloudConfiguration({ params });
        } catch (error) {
            expect(error.message).toMatch("user_id");
        }

        params = {
            url: "http://localhost:8000",
            folder: "a",
            refresh_token: "y",
            user_id: chance.guid(),
        };
        try {
            let config = assembleOwncloudConfiguration({ params });
        } catch (error) {
            expect(error.message).toMatch("access_token");
        }
    });
    test("it should not be able to setup an AWS s3 session - missing or incorrect params", async () => {
        let params = {
            provider: "AWS",
            awsAccessKeyId: "x",
        };
        try {
            let config = assembleS3Configuration({ params });
        } catch (error) {
            console.log(error.message);
            expect(error.message).toMatch("awsSecretAccessKey");
        }

        params = {
            provider: "Tmp",
            awsAccessKeyId: "x",
            awsSecretAccessKey: "y",
        };
        try {
            let config = assembleS3Configuration({ params });
        } catch (error) {
            expect(error.message).toMatch("'Provider' param must equal 'AWS' || 'Minio'");
        }

        params = {
            provider: "Minio",
            awsAccessKeyId: "x",
            awsSecretAccessKey: "y",
        };
        try {
            let config = assembleS3Configuration({ params });
        } catch (error) {
            expect(error.message).toMatch(
                "Missing required param when setting up Minio s3 config: 'url'"
            );
        }
    });
    test("it should be able to create a new session", async () => {
        const origConfig = await loadConfiguration();

        let testConfig = cloneDeep(origConfig);
        testConfig.api.applications = [{ name: "test", secret: "xxx" }];
        await writeJSON("/srv/configuration/development-configuration.json", testConfig);
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

        await writeJSON("/srv/configuration/development-configuration.json", origConfig);
    });
    test("it should be able to get the same session id", async () => {
        const origConfig = await loadConfiguration();

        let testConfig = cloneDeep(origConfig);
        testConfig.api.applications = [{ name: "test", secret: "xxx" }];
        await writeJSON("/srv/configuration/development-configuration.json", testConfig);
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
        let sessionId = response.sessionId;

        response = await fetch(`${api}/session/application`, {
            method: "POST",
            headers: {
                Authorization: "Bearer xxx",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        expect(response.status).toBe(200);
        response = await response.json();
        expect(sessionId).toEqual(response.sessionId);

        await writeJSON("/srv/configuration/development-configuration.json", origConfig);
    });
    test("it should be able to set up two different sessions", async () => {
        const origConfig = await loadConfiguration();
        let testConfig = cloneDeep(origConfig);
        testConfig.api.applications = [{ name: "test", secret: "xxx" }];
        await writeJSON("/srv/configuration/development-configuration.json", testConfig);

        let user = {
            email: chance.email(),
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
        const sessionId1 = response.sessionId;

        user = {
            email: chance.email(),
            name: "test user",
        };

        response = await fetch(`${api}/session/application`, {
            method: "POST",
            headers: {
                Authorization: "Bearer xxx",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        expect(response.status).toBe(200);
        response = await response.json();
        const sessionId2 = response.sessionId;
        expect(sessionId1).not.toEqual(sessionId2);

        await writeJSON("/srv/configuration/development-configuration.json", origConfig);
    });
    test("it should be able to update an existing session", async () => {
        const origConfig = await loadConfiguration();

        let testConfig = cloneDeep(origConfig);
        testConfig.api.applications = [{ name: "test", secret: "xxx" }];
        await writeJSON("/srv/configuration/development-configuration.json", testConfig);
        let user = {
            email: "test@test.com",
            name: "test user",
            session: {
                owncloud: {
                    url: "a",
                    access_token: "x",
                    user_id: "y",
                },
            },
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
        const sessionId = response.sessionId;

        response = await fetch(`${api}/session/application/${sessionId}`, {
            method: "PUT",
            headers: {
                Authorization: "Bearer xxx",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                session: { owncloud: { url: "2", access_token: "x", user_id: "y" } },
            }),
        });
        expect(response.status).toBe(200);
        response = await response.json();

        let s = await getUserSession({ sessionId });
        expect(s.session.data.service.owncloud.url).toEqual("2");

        await writeJSON("/srv/configuration/development-configuration.json", origConfig);
    });
    test("it should be able to get service configuration", async () => {
        let { user, sessionId } = await createSessionForTest();
        let response = await fetch(`${api}/entity/RootDataset`, {
            method: "GET",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
        });
        response = await fetch(`${api}/session/configuration/owncloud`, {
            method: "GET",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
        });
        response = await response.json();
        expect(response.configuration).toBeDefined;
    });
    test("it should be able to save service configuration in the session", async () => {
        let { user, sessionId } = await createSessionForTest();
        let response = await fetch(`${api}/entity/RootDataset`, {
            method: "GET",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
        });
        response = await fetch(`${api}/session/configuration/owncloud`, {
            method: "POST",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                service: "owncloud",
                url: "2",
            }),
        });
        response = await response.json();

        let s = await getUserSession({ sessionId });
        expect(s.session.data.service.owncloud.url).toEqual("2");
    });
});
