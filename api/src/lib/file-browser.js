import { ensureDir, open, write, close } from "fs-extra";
import { spawn } from "child_process";
import {
    NotFoundError,
    InternalServerError,
    UnauthorizedError,
} from "restify-errors";
import path from "path";
import { camelCase } from "lodash";

export async function listFolder({ session, user, resource, folderPath }) {
    let cwd = await setup({ user, session, resource });

    try {
        let args = ["lsjson"];
        if (folderPath) {
            args.push(`${resource}:${folderPath}`);
        } else {
            args.push(`${resource}:`);
        }
        let content = await runCommand({ cwd, args });
        return processOutput(content, folderPath);
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

async function setup({ session, user, resource }) {
    // use resource to see if we have a suitable rclone configuration
    let rcloneConfiguration = session.data?.rclone[resource];
    if (!rcloneConfiguration) {
        // fail not found error if not
        throw new NotFoundError();
    }

    // write rclone configuration to disk
    return await writeRcloneConfiguration({
        rcloneConfiguration,
        userId: user.id,
    });
}

async function writeRcloneConfiguration({ rcloneConfiguration, userId }) {
    const folderPath = path.join(`/srv/tmp/${userId}`);
    const filePath = path.join(folderPath, "rclone.conf");
    await ensureDir(folderPath);
    const fd = await open(filePath, "w");
    await write(fd, `[${rcloneConfiguration.type}]\n`);
    await write(fd, `type = ${rcloneConfiguration.type}\n`);
    await write(fd, `token = ${JSON.stringify(rcloneConfiguration.token)}\n`);
    await write(fd, `drive_id = ${rcloneConfiguration.drive_id}\n`);
    await write(fd, `drive_type = ${rcloneConfiguration.drive_type}\n`);
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
    if (
        error.message.match(
            "InvalidAuthenticationToken: Access token has expired"
        )
    ) {
        throw new UnauthorizedError(error.message);
    } else {
        console.error(error);
        throw new InternalServerError(error.message);
    }
}
