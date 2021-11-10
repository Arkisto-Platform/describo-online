import "regenerator-runtime";
import models from "../models";
import path from "path";
import { Buffer } from "buffer";
import {
    authenticate,
    whoami,
    listFolder,
    uploadFile,
    downloadFile,
} from "./file-browser_reva-api";
import { readFile } from "fs-extra";

describe("Test reva file management operations", () => {
    const username = "einstein";
    const password = "relativity";
    const gateway = "reva-gateway:19000";
    afterAll(async () => {
        await models.sequelize.close();
    });
    test("it should be able to authenticate to reva", async () => {
        let { token } = await authenticate({ gateway, username, password });
        expect(token).toBeDefined();
    });
    test("it should be able to get user data from a reva token", async () => {
        let { token } = await authenticate({
            gateway,
            username,
            password,
        });
        expect(token).toBeDefined();
        let { user } = await whoami({ token, gateway });
        expect(user.username).toEqual(username);
    });
    test("it should fail to get user data from a reva token", async () => {
        let { user } = await whoami({ token: "", gateway });
        expect(user).toEqual(false);
    });
    test("it should be able to list folders in reva", async () => {
        let { token } = await authenticate({ gateway, username, password });

        let { entries } = await listFolder({ gateway, token, folder: "/" });
        expect(entries.map((e) => e.path).sort()).toEqual(["home", "reva"]);
    });
    test("it should be able to upload a file to reva", async () => {
        let { token } = await authenticate({
            gateway,
            username,
            password,
        });

        await uploadFile({
            gateway,
            token,
            localFile: path.join(__dirname, "crate.js"),
            remoteFile: "/home/crate.js",
        });

        let { entries } = await listFolder({
            gateway,
            token,
            folder: "/home",
        });
        expect(entries.map((e) => e.path).includes("/home/crate.js")).toBeTrue;
    });
    test("it should be able to download a file from reva", async () => {
        let { token } = await authenticate({
            gateway,
            username,
            password,
        });

        await downloadFile({
            gateway,
            token,
            localFile: path.join("/tmp", "crate.js"),
            remoteFile: "/home/crate.js",
        });

        let buf1 = Buffer.from(await readFile(path.join("/tmp", "crate.js")));
        let buf2 = Buffer.from(await readFile(path.join(__dirname, "crate.js")));
        expect(buf1).toEqual(buf2);
    });
});
