import { listFolder } from "../lib/file-browser.js";
import restifyErrorsPkg from "restify-errors";
const { BadRequestError } = restifyErrorsPkg;
import { getLogger, route } from "../common/index.js";
const log = getLogger();

export function setupRoutes({ server }) {
    // server.post("/folder/create", route(createFolderRouteHandler));
    server.post("/folder/read", route(readFolderRouteHandler));
    // server.post("/folder/delete", route(deleteFolderRouteHandler));
}
export async function readFolderRouteHandler(req, res, next) {
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

// export async function createFolderRouteHandler(req, res, next) {
//     const { resource, path: folderPath } = req.body;
//     if (!resource || !folderPath) {
//         log.error(`createFolderRouterHandler: resource || folderPath not provided`);
//         return next(new BadRequestError());
//     }
//     try {
//         await createFolder({
//             session: req.session,
//             user: req.user,
//             resource,
//             folderPath,
//         });
//     } catch (error) {
//         log.error(`createFolderRouterHandler: ${error.message}`);
//         return next(error);
//     }
//     res.send();
//     return next();
// }

// export async function deleteFolderRouteHandler(req, res, next) {
//     const { resource, path: folderPath } = req.body;
//     if (!resource || !folderPath) {
//         log.error(`createFolderRouterHandler: resource || folderPath not provided`);
//         return next(new BadRequestError());
//     }
//     try {
//         await deleteFolder({
//             session: req.session,
//             user: req.user,
//             resource,
//             folderPath,
//         });
//     } catch (error) {
//         log.error(`deleteFolderRouterHandler: ${error.message}`);
//         return next(error);
//     }
//     res.send();
//     return next();
// }
