import { ensureDir } from "fs-extra";
const util = require("util");
import { spawn } from "child_process";
const exec = util.promisify(require("child_process").exec);
import { NotFoundError, InternalServerError, UnauthorizedError } from "restify-errors";
import path from "path";
import { orderBy } from "lodash";
import { getLogger } from "../common/logger";
import * as rclone from "./file-browser_rclone";
import * as revaapi from "./file-browser_reva-api";
const log = getLogger();
const localCachePath = "/srv/tmp";

export async function listFolder({ session, user, resource, folderPath }) {
    let { configuration } = await setup({ user, session, resource });

    try {
        let content = [];
        if (resource === "reva" && configuration.mode === "api") {
            content = await revaapi.listFolder({
                gateway: configuration.gateway,
                token: configuration.token,
                folder: folderPath,
            });
            return orderBy(content.entries, "name");
        } else {
            content = await rclone.listFolder({ session, user, resource, folderPath });
            return content;
        }
    } catch (error) {
        handleError(error);
    }
}

export async function syncRemoteFileToLocal({ session, user, resource, parent, name }) {
    let { workingDirectory, configuration } = await setup({ user, session, resource });

    let localPath;
    try {
        if (resource === "reva" && configuration.mode === "api") {
            localPath = await revaapi.downloadFile({
                gateway: configuration.gateway,
                token: configuration.token,
                remoteFile: path.join(parent, name),
                localFile: path.join(workingDirectory, "current", name),
            });
        } else {
            localPath = await rclone.syncRemoteFileToLocal({
                session,
                user,
                resource,
                parent,
                name,
            });
        }
        return localPath;
    } catch (error) {
        handleError(error);
    }
}

export async function syncLocalFileToRemote({ session, user, resource, parent, localFile }) {
    let { configuration } = await setup({ user, session, resource });

    try {
        if (resource === "reva" && configuration.mode === "api") {
        } else {
            await rclone.syncLocalFileToRemote({
                session,
                user,
                resource,
                parent,
                localFile,
            });
        }
    } catch (error) {
        handleError(error);
    }
}

export async function setup({ session, user, resource }) {
    // use resource to see if we have a suitable rclone configuration
    if (!session.data.service) {
        throw new NotFoundError("No session data");
    }
    let configuration = session?.data?.service[resource];
    if (!configuration) {
        // fail not found error if not
        throw new NotFoundError("No session data");
    }
    const folderPath = localWorkingDirectory({ user });
    await ensureDir(folderPath);
    await ensureDir(path.join(folderPath, "current"));
    return { workingDirectory: folderPath, configuration };
}

export function localWorkingDirectory({ user }) {
    return path.join(localCachePath, user.id);
}

function handleError(error) {
    console.error(error);
    if (error.message.match("InvalidAuthenticationToken: Access token has expired")) {
        throw new UnauthorizedError(error.message);
    } else {
        throw new InternalServerError(error.message);
    }
}
