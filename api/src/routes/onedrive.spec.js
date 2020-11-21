import "regenerator-runtime";
import fetch from "node-fetch";
import { isMatch } from "lodash";
import { createSessionForTest } from "../common";
const api = "http://localhost:8080";
import models from "../models";

describe("Test onedrive api routes", () => {
    let user, sessionId;
    beforeAll(async () => {
        ({ user, sessionId } = await createSessionForTest());
    });
    afterAll(async () => {
        await models.user.destroy({ where: { email: user.email } });
        await models.sequelize.close();
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
