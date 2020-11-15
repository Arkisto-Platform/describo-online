import { demandKnownUser } from "../middleware";
import { BadRequestError, ConflictError } from "restify-errors";
import {
    listFolder,
    syncRemoteFileToLocal,
    syncLocalFileToRemote,
} from "../lib/file-browser";
import { Crate } from "../lib/crate";
import { updateUserSession } from "../lib/user";
import { getLogger } from "../common";
const log = getLogger();

const validCrateFileNames = [
    "ro-crate-metadata.json",
    "ro-crate-metadata.jsonld",
];

export function setupLoadRoutes({ server }) {
    server.post("/load", demandKnownUser, loadRouteHandler);
}

async function loadRouteHandler(req, res, next) {
    req.io.emit("loadRouteHandler", {
        msg: "loading crate",
        stage: 1,
        total: 7,
    });
    const { resource, folder, id } = req.body;
    if (!resource | !(folder || id)) {
        return next(
            new BadRequestError(`Must specify 'resource' and 'folder' || 'id'`)
        );
    }
    let crate, collection, content, localFile;
    try {
        req.io.emit("loadRouteHandler", {
            msg: "looking for ro crate file in target",
            stage: 2,
            total: 7,
        });
        content = await listFolder({
            session: req.session,
            user: req.user,
            resource,
            folderPath: folder,
        });
        let crateFile = content.filter((e) =>
            validCrateFileNames.includes(e.name)
        );

        const crateManager = new Crate();
        if (crateFile.length === 0) {
            // stamp a new crate file and load it back to the resource
            req.io.emit("loadRouteHandler", {
                msg: "no crate file found - stamping a new one",
                stage: 3,
                total: 7,
            });
        } else if (crateFile.length > 1) {
            // handle error - how ?
            return next(
                new ConflictError(
                    "There is more than one crate file in that folder. There must be one only."
                )
            );
        } else {
            crateFile = crateFile.pop();

            req.io.emit("loadRouteHandler", {
                msg: "copying crate file from remote",
                stage: 3,
                total: 7,
            });
            // otherwise 1 file - copy it locally and carry on
            localFile = await syncRemoteFileToLocal({
                session: req.session,
                user: req.user,
                resource,
                parent: crateFile.parent,
                name: crateFile.name,
            });
            // console.log(localFile);

            req.io.emit("loadRouteHandler", {
                msg: "loading the crate file",
                stage: 4,
                total: 7,
            });
            ({ crate, collection } = await crateManager.loadCrateFromFile({
                file: localFile,
            }));
        }

        // stamp the current collection id into the session
        log.debug("Setting the collection id in the user session");
        req.io.emit("loadRouteHandler", {
            msg: "setting up the user session",
            stage: 5,
            total: 7,
        });
        await updateUserSession({
            sessionId: req.session.id,
            data: { current: { collectionId: collection.id } },
        });

        // sync the local file back to the remote
        req.io.emit("loadRouteHandler", {
            msg: "sync'ing the crate file back to the remote",
            stage: 6,
            total: 7,
        });
        await syncLocalFileToRemote({
            session: req.session,
            user: req.user,
            resource,
            parent: crateFile.parent,
            localFile,
        });

        //  load the crate into the database
        log.debug("Loading the crate data into the database");
        req.io.emit("loadRouteHandler", {
            msg: "loading the crate data into the database",
            stage: 7,
            total: 7,
        });
        await crateManager.importCrateIntoDatabase({ collection, crate });
    } catch (error) {
        if (error.message !== "That collection is already loaded.") {
            console.log(error);
            log.error(`readFolderRouterHandler: ${error.message}`);
            return next(error);
        }
    }
    res.send({
        collection: {
            id: collection.id,
            name: collection.name,
            description: collection.description,
        },
    });
    next();
}
