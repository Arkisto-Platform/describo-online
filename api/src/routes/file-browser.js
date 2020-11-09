import { demandKnownUser } from "../middleware";
import { listFolder, createFolder, deleteFolder } from "../lib/file-browser";
import { BadRequestError } from "restify-errors";
import { getLogger } from "../common";
const log = getLogger();

export function setupFileBrowserRoutes({ server }) {
    server.post("/folder/create", demandKnownUser, createFolderRouteHandler);
    server.post("/folder/read", demandKnownUser, readFolderRouteHandler);
    server.post("/folder/delete", demandKnownUser, deleteFolderRouteHandler);
}

async function readFolderRouteHandler(req, res, next) {
    const { resource, path: folderPath } = req.body;
    if (!resource) {
        log.error(`readFolderRouterHandler: resource not provided`);
        return next(new BadRequestError());
    }
    let content;
    try {
        content = await listFolder({
            session: req.session,
            user: req.user,
            resource,
            folderPath,
        });
    } catch (error) {
        log.error(`readFolderRouterHandler: ${error.message}`);
        return next(error);
    }
    res.send({ content });
    return next();
}

async function createFolderRouteHandler(req, res, next) {
    const { resource, path: folderPath } = req.body;
    if (!resource || !folderPath) {
        log.error(
            `createFolderRouterHandler: resource || folderPath not provided`
        );
        return next(new BadRequestError());
    }
    try {
        await createFolder({
            session: req.session,
            user: req.user,
            resource,
            folderPath,
        });
    } catch (error) {
        log.error(`createFolderRouterHandler: ${error.message}`);
        return next(error);
    }
    res.send();
    return next();
}

async function deleteFolderRouteHandler(req, res, next) {
    const { resource, path: folderPath } = req.body;
    if (!resource || !folderPath) {
        log.error(
            `createFolderRouterHandler: resource || folderPath not provided`
        );
        return next(new BadRequestError());
    }
    try {
        await deleteFolder({
            session: req.session,
            user: req.user,
            resource,
            folderPath,
        });
    } catch (error) {
        log.error(`deleteFolderRouterHandler: ${error.message}`);
        return next(error);
    }
    res.send();
    return next();
}
