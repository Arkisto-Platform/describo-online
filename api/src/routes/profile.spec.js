import "regenerator-runtime";
import fetch from "node-fetch";
import models from "../models";
import { createSessionForTest } from "../common";

const chance = require("chance").Chance();
const api = "http://localhost:8080";

describe("Test profile handling routes", () => {
    let sessionId, user;
    beforeAll(async () => {
        ({ user, sessionId } = await createSessionForTest());
    });
    afterAll(async () => {
        await models.user.destroy({ where: { email: user.email } });
        await models.sequelize.close();
    });
    test("it should be able to load installed profiles", async () => {
        let response = await fetch(`${api}/profile`, {
            method: "GET",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
        });
        expect(response.status).toEqual(200);
        let { profiles } = await response.json();
        expect(profiles.length).toEqual(1);
    });
    test("it should be able to save a selected profile to the session", async () => {
        let { profile, response } = await setupSessionProfile({ sessionId });
        expect(response.status).toEqual(200);

        let session = await models.session.findOne({ where: { id: sessionId } });
        expect(session.get("data").profile).toEqual(profile);
    });
    test("it should be able to lookup a definition", async () => {
        let { profile, response } = await setupSessionProfile({ sessionId });
        response = await fetch(`${api}/definition/Dataset`, {
            method: "GET",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
        });
        expect(response.status).toEqual(200);
        let { definition } = await response.json();
        expect(definition.inputs.length).toEqual(132);
    });
    test("it should be able to lookup a definition", async () => {
        let { profile, response } = await setupSessionProfile({ sessionId });
        response = await fetch(`${api}/definition/Dataset`, {
            method: "GET",
            headers: {
                Authorization: `sid ${sessionId}`,
                "Content-Type": "application/json",
            },
        });
        // expect(response.status).toEqual(200);
        let { definition } = await response.json();
        expect(definition.inputs.length).toEqual(132);
    });
});

async function setupSessionProfile({ sessionId }) {
    let profile = {
        name: "schema.org",
        version: "latest",
        description: "All of schema.org",
        file: "schema.org",
    };
    let response = await fetch(`${api}/profile`, {
        method: "POST",
        headers: {
            Authorization: `sid ${sessionId}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ profile }),
    });
    return { profile, response };
}
