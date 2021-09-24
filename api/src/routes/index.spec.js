import "regenerator-runtime";
import models from "../models";
import fetch from "node-fetch";
import { loadConfiguration } from "../common";
import { isMatch, cloneDeep } from "lodash";
import { writeJSON } from "fs-extra";
import path from "path";
import { getUserSession } from "../lib/user";
import { createSessionForTest } from "../common";

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
});
