import "regenerator-runtime";
import { promisify } from "util";
import fetch from "node-fetch";
import util from "util";
import { pipeline } from "stream";
const streamPipeline = util.promisify(pipeline);
import { createWriteStream, createReadStream, stat } from "fs-extra";
import path from "path";
import { getLogger } from "../common/logger";
const log = getLogger();

import { credentials, Metadata } from "grpc";
import { GatewayAPIClient } from "@cs3org/node-cs3apis/cs3/gateway/v1beta1/gateway_api_grpc_pb";
const {
    AuthenticateRequest,
    WhoAmIRequest,
} = require("@cs3org/node-cs3apis/cs3/gateway/v1beta1/gateway_api_pb");
import {
    ListContainerRequest,
    StatRequest,
    InitiateFileUploadRequest,
    InitiateFileDownloadRequest,
    MoveRequest,
} from "@cs3org/node-cs3apis/cs3/storage/provider/v1beta1/provider_api_pb";
import { Reference } from "@cs3org/node-cs3apis/cs3/storage/provider/v1beta1/resources_pb";

export async function authenticate({ username, password, gateway }) {
    const client = new GatewayAPIClient(gateway, credentials.createInsecure(), {});
    const { authenticate } = promisifyAll(client);

    let req = new AuthenticateRequest();
    req.setType("basic");
    req.setClientId(username);
    req.setClientSecret(password);
    let response = await authenticate(req);
    let token = response.getToken();
    let user = response.getUser().toObject();
    return { token, user };
}

export async function whoami({ token, gateway }) {
    const client = new GatewayAPIClient(gateway, credentials.createInsecure(), {});
    const { whoAmI } = promisifyAll(client);
    let req = new WhoAmIRequest();
    req.setToken(token);
    let response = (await whoAmI(req)).toObject();
    return response.user ? { user: response.user } : { user: false };
}

export async function listFolder({ gateway, token, folder = "/" }) {
    folder = path.normalize(folder);

    const meta = new Metadata();
    meta.set("x-access-token", token);
    folder = path.normalize(folder);

    log.debug(`List folder: reva api ${folder}`);
    const client = new GatewayAPIClient(gateway, credentials.createInsecure(), {});
    const { listContainer, stat } = promisifyAll(client);

    let ref = new Reference().setPath(folder);
    let req = new ListContainerRequest();
    req.setRef(ref);
    let containers = await listContainer(req, meta);
    let children = containers.getInfosList().map((container) => container.getPath());

    let entries = [];
    for (let child of children) {
        ref = new Reference().setPath(child);
        req = new StatRequest();
        req.setRef(ref);
        let info = (await stat(req, meta)).toObject().info;
        entries.push({
            path: path.basename(info.path),
            name: path.basename(info.path),
            size: info.mimeType.match("unix-directory") ? -1 : info.size,
            mimeType: info.mimeType.match("unix-directory") ? "inode/directory" : info.mimeType,
            isDir: info.mimeType.match("unix-directory") ? true : false,
            children: info.mimeType.match("unix-directory") ? [] : false,
            isLeaf: info.mimeType.match("unix-directory") ? false : true,
            parent: path.normalize(folder),
        });
    }
    return { entries };
}

export async function downloadFile({ gateway, token, remoteFile, localFile }) {
    const meta = new Metadata();
    meta.set("x-access-token", token);

    const client = new GatewayAPIClient(gateway, credentials.createInsecure(), {});
    const { initiateFileDownload } = promisifyAll(client);

    const ref = new Reference().setPath(remoteFile);

    let req = new InitiateFileDownloadRequest();
    req.setRef(ref);
    const download = await initiateFileDownload(req, meta);
    const protocol = download.getProtocolsList().filter((protocol) => {
        return protocol.toObject().protocol === "simple";
    })[0];

    let response = await fetch(protocol.getDownloadEndpoint(), {
        method: "GET",
        headers: {
            "x-access-token": token,
            "X-Reva-Transfer": protocol.getToken(),
        },
    });
    if (response.status !== 200) {
        throw new Error(`File download from ${remoteFile} failed`);
    }
    log.debug(`syncRemoteFileToLocal: revaapi ${remoteFile} -> ${localFile}`);
    await streamPipeline(response.body, createWriteStream(localFile));
    return localFile;
}

export async function uploadFile({ gateway, token, localFile, remoteFile }) {
    const meta = new Metadata();
    meta.set("x-access-token", token);

    const client = new GatewayAPIClient(gateway, credentials.createInsecure(), {});
    const { initiateFileUpload, move } = promisifyAll(client);

    const fileStat = await stat(localFile);

    // setting up to upload to reva
    let ref = new Reference().setPath(remoteFile);
    let req = new InitiateFileUploadRequest();
    req.setRef(ref);
    const upload = await initiateFileUpload(req, meta);
    const protocol = upload.getProtocolsList().filter((protocol) => {
        return protocol.toObject().protocol === "simple";
    })[0];

    // upload the file to reva
    let response = await fetch(protocol.getUploadEndpoint(), {
        method: "PUT",
        headers: {
            "x-access-token": token,
            "Upload-Length": fileStat.size,
            "X-Reva-Transfer": protocol.getToken(),
        },
        body: createReadStream(localFile),
    });
    if (response.status !== 200) {
        throw new Error(`File upload to ${remoteFile} failed`);
    }

    // move uploaded file into place
    log.debug(`syncLocalFileToRemote: revaapi ${localFile} -> ${remoteFile}`);
    let target = JSON.parse(
        new Buffer(protocol.getToken().split(".")[1], "base64").toString("ascii")
    )
        .target.split("/")
        .pop();
    let sourceRef = new Reference().setPath(`/home/${target}`);
    let targetRef = new Reference().setPath(remoteFile);
    req = new MoveRequest();
    req.setSource(sourceRef);
    req.setDestination(targetRef);
    await move(req, meta);
}

function promisifyAll(client) {
    const to = {};
    for (var k in client) {
        if (typeof client[k] != "function") continue;
        to[k] = promisify(client[k].bind(client));
    }
    return to;
}
