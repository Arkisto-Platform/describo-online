require("regenerator-runtime");
import { createUser } from "../lib/user";
import { generateToken, verifyToken } from "./jwt";
import { loadConfiguration } from "../common";
const chance = require("chance").Chance();
import MockDate from "mockdate";
import { copy, move, readJSON, writeJSON } from "fs-extra";

describe("JWT tests", () => {
    let user, configuration;
    const userEmail = chance.email();
    const adminEmail = chance.email();
    beforeAll(async () => {
        user = {
            id: "x",
            email: chance.email(),
            name: chance.word(),
        };
    });
    it("should be able to create a jwt", async () => {
        let configuration = await loadConfiguration();
        let { token, expires } = await generateToken({ configuration, user });
        expect(token).toBeDefined;
        expect(expires).toBeDefined;
    });
    it("should be able to verify a jwt", async () => {
        let configuration = await loadConfiguration();
        let { token, expires } = await generateToken({ configuration, user });

        let data = await verifyToken({ token, configuration });
        expect(data.email).toEqual(user.email);
    });
    it("should throw because the jwt is expired", async () => {
        let configuration = await loadConfiguration();

        MockDate.set("2000-11-22");
        let { token, expires } = await generateToken({ configuration, user });
        MockDate.reset();

        try {
            let data = await verifyToken({ token, configuration });
        } catch (error) {
            expect(error.message).toBe("token expired");
        }
    });
    it("should throw because the jwt is unverified", async () => {
        let configuration = await loadConfiguration();
        let { token, expires } = await generateToken({ configuration, user });

        await copy(
            "/srv/configuration/development-configuration.json",
            "/srv/configuration/development-configuration-copy.json"
        );
        let config = await readJSON("/srv/configuration/development-configuration.json");
        config.api.session.secret = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
        await writeJSON("/srv/configuration/development-configuration.json", config);
        configuration = await loadConfiguration();
        try {
            let data = await verifyToken({ token, configuration });
        } catch (error) {
            expect(error.message).toBe("signature verification failed");
        }

        move(
            "/srv/configuration/development-configuration-copy.json",
            "/srv/configuration/development-configuration.json",
            { overwrite: true }
        );
    });
});
