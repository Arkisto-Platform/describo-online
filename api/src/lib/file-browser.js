import { ensureDir, open, write, close, pathExists, remove } from "fs-extra";
const util = require("util");
import { spawn } from "child_process";
const exec = util.promisify(require("child_process").exec);
import { NotFoundError, InternalServerError, UnauthorizedError } from "restify-errors";
import path from "path";
import { camelCase, uniqBy } from "lodash";
import { getLogger } from "../common/logger";
const log = getLogger();
const localCachePath = "/srv/tmp";

export async function listFolder({ session, user, resource, folderPath }) {
    let cwd = await setup({ user, session, resource });

    log.debug(`List folder: ${resource} ${folderPath}`);
    try {
        let args = ["lsjson"];
        if (folderPath) {
            args.push(`${resource}:${folderPath}`);
        } else {
            args.push(`${resource}:`);
        }
        let content = await runCommand({ cwd, args });
        content = processOutput(content, folderPath);
        return uniqBy(content, "path");
    } catch (error) {
        handleError(error);
    }

    function processOutput(content) {
        return content.map((entry) => {
            for (let key of Object.keys(entry)) {
                entry[camelCase(key)] = entry[key];
                delete entry[key];
            }
            if (entry.isDir) entry.children = [];
            entry.isLeaf = !entry.isDir;
            entry.parent = folderPath;
            return entry;
        });
    }
}

export async function createFolder({ session, user, resource, folderPath }) {
    let cwd = await setup({ user, session, resource });
    try {
        let args = ["mkdir", `${resource}:${folderPath}`];
        await runCommand({ cwd, args });
    } catch (error) {
        handleError(error);
    }
}

export async function deleteFolder({ session, user, resource, folderPath }) {
    let cwd = await setup({ user, session, resource });
    try {
        let args = ["purge", `${resource}:${folderPath}`];
        await runCommand({ cwd, args });
    } catch (error) {
        handleError(error);
    }
}

export async function syncRemoteFileToLocal({ session, user, resource, parent, name }) {
    let cwd = await setup({ user, session, resource });

    const rcloneSrc = `${resource}:${path.join(parent, name)}`;
    const rcloneTgt = path.join(cwd, "current");

    if (await pathExists(rcloneTgt)) {
        await remove(rcloneTgt);
    }
    await ensureDir(rcloneTgt);

    let args = ["copy", "--no-traverse", rcloneSrc, rcloneTgt];
    log.debug(`syncRemoteFileToLocal: rclone ${JSON.stringify(args)}`);
    try {
        await runCommand({ cwd, args });
        return path.join(rcloneTgt, name);
    } catch (error) {
        log.error(`syncRemoteFileToLocal: ${error.message}`);
        console.log(error);
    }
}

export async function syncLocalFileToRemote({ session, user, resource, parent, localFile }) {
    let cwd = await setup({ user, session, resource });

    const rcloneSrc = localFile;
    const rcloneTgt = `${resource}:${parent}`;

    let args = ["copy", "--no-traverse", rcloneSrc, rcloneTgt];
    log.debug(`syncLocalFileToRemote: rclone ${JSON.stringify(args)}`);
    try {
        await runCommand({ cwd, args });
    } catch (error) {
        log.error(`syncLocalFileToRemote: ${error.message}`);
        console.log(error);
    }
}

export async function setup({ session, user, resource }) {
    // use resource to see if we have a suitable rclone configuration
    if (!session.data.service) {
        throw new NotFoundError("No session data");
    }
    let rcloneConfiguration = session?.data?.service[resource];
    if (!rcloneConfiguration) {
        // fail not found error if not
        throw new NotFoundError("No session data");
    }

    // write rclone configuration to disk
    return await writeRcloneConfiguration({
        resource,
        rcloneConfiguration,
        user,
    });
}

export function localWorkingDirectory({ user }) {
    return path.join(localCachePath, user.id);
}

async function writeRcloneConfiguration({ resource, rcloneConfiguration, user }) {
    // console.log("rclone configuration", JSON.stringify(rcloneConfiguration, null, 2));
    const folderPath = localWorkingDirectory({ user });
    const filePath = path.join(folderPath, "rclone.conf");
    await ensureDir(folderPath);
    const fd = await open(filePath, "w");
    switch (resource) {
        case "onedrive":
            await write(fd, `[onedrive]\n`);
            await write(fd, `type = onedrive\n`);
            await write(fd, `token = ${JSON.stringify(rcloneConfiguration.token)}\n`);
            await write(fd, `drive_id = ${rcloneConfiguration.drive_id}\n`);
            await write(fd, `drive_type = ${rcloneConfiguration.token.access_token}\n`);
            break;
        case "owncloud":
            await write(fd, `[owncloud]\n`);
            await write(fd, `type = webdav\n`);
            await write(
                fd,
                `url = ${rcloneConfiguration.url}/files/${rcloneConfiguration.user_id}\n`
            );
            await write(fd, `vendor = owncloud\n`);
            await write(fd, `bearer_token = ${rcloneConfiguration.access_token}\n`);
        case "reva":
            let response = await exec(`${rclone()} obscure ${rcloneConfiguration.password}`);
            const obscuredPassword = response.stdout;
            await write(fd, `[reva]\n`);
            await write(fd, `type = webdav\n`);
            await write(fd, `vendor = other\n`);
            await write(fd, `url = ${rcloneConfiguration.url}\n`);
            await write(fd, `user = ${rcloneConfiguration.username}\n`);
            await write(fd, `pass = ${obscuredPassword}\n`);
        case "s3":
            if (rcloneConfiguration.provider === "AWS") {
                await write(fd, "[s3]\n");
                await write(fd, `type = s3\n`);
                await write(fd, `provider = AWS\n`);
                await write(fd, `env_auth = false\n`);
                await write(fd, `access_key_id = ${rcloneConfiguration.awsAccessKeyId}\n`);
                await write(fd, `secret_access_key = ${rcloneConfiguration.awsSecretAccessKey}\n`);
                await write(fd, `region = ${rcloneConfiguration.region}\n`);
                await write(fd, `location_constraint = \n`);
                await write(fd, `acl = private\n`);
                await write(fd, `server_side_encryption = \n`);
                await write(fd, `storage_class = \n`);
            } else if (rcloneConfiguration.provider === "Minio") {
                await write(fd, "[s3]\n");
                await write(fd, `type = s3\n`);
                await write(fd, `provider = Minio\n`);
                await write(fd, `env_auth = false\n`);
                await write(fd, `access_key_id = ${rcloneConfiguration.awsAccessKeyId}\n`);
                await write(fd, `secret_access_key = ${rcloneConfiguration.awsSecretAccessKey}\n`);
                await write(fd, `region = us-east-1\n`);
                await write(fd, `endpoint = ${rcloneConfiguration.url}\n`);
                await write(fd, `location_constraint = \n`);
                await write(fd, `server_side_encryption = \n`);
            }
    }
    await close(fd);
    return folderPath;
}

async function runCommand({ cwd, args }) {
    let content = await new Promise((resolve, reject) => {
        let content = "";
        let error = "";
        args = ["--config", "./rclone.conf", ...args];
        const s = spawn(rclone(), args, { cwd });

        s.stdout.on("data", function (msg) {
            content += msg.toString();
        });
        s.stderr.on("data", function (msg) {
            error += msg.toString();
        });
        s.on("close", (code) => {
            if (!code) {
                if (content) resolve(JSON.parse(content));
                resolve();
            }
            reject(new Error(error));
        });
    });
    return content;
}

function rclone() {
    if (process.env.NODE_ENV === "production") {
        return "/srv/bin/rclone";
    } else {
        return "/srv/api/bin/rclone";
    }
}

function handleError(error) {
    if (error.message.match("InvalidAuthenticationToken: Access token has expired")) {
        throw new UnauthorizedError(error.message);
    } else {
        console.error(error);
        throw new InternalServerError(error.message);
    }
}
