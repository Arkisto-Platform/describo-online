import { demandKnownUser } from "../middleware";
import { listFolder, createFolder, deleteFolder } from "../lib/file-browser";
import { BadRequestError } from "restify-errors";

export function setupFileBrowserRoutes({ server }) {
    server.post("/folder/create", demandKnownUser, createFolderRouteHandler);
    server.post("/folder/read", demandKnownUser, readFolderRouteHandler);
    server.post("/folder/delete", demandKnownUser, deleteFolderRouteHandler);
}

async function readFolderRouteHandler(req, res, next) {
    const { resource, path: folderPath } = req.body;
    if (!resource) {
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
        return next(error);
    }
    res.send({ content });
    return next();
}

async function createFolderRouteHandler(req, res, next) {
    const { resource, path: folderPath } = req.body;
    if (!resource || !folderPath) {
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
        return next(error);
    }
    res.send();
    return next();
}

async function deleteFolderRouteHandler(req, res, next) {
    const { resource, path: folderPath } = req.body;
    if (!resource || !folderPath) {
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
        console.log(error);
        return next(error);
    }
    res.send();
    return next();
}
