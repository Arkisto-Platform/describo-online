import restifyErrorsPkg from "restify-errors";
const { BadRequestError, ConflictError } = restifyErrorsPkg;
import {
    listFolder,
    setup,
    localWorkingDirectory,
    syncRemoteFileToLocal,
    syncLocalFileToRemote,
} from "../lib/file-browser.js";
import { Crate } from "../lib/crate.js";
import { updateUserSession } from "../lib/user.js";
import path from "path";
import fsExtraPkg from "fs-extra";
const { writeJSON, ensureDir } = fsExtraPkg;
import { Message, getLogger, route } from "../common/index.js";
const log = getLogger();

const defaultCrateFileName = "ro-crate-metadata.json";
const validCrateFileNames = ["ro-crate-metadata.json", "ro-crate-metadata.jsonld"];

const crateMetadata = {
    "@context": "https://w3id.org/ro/crate/1.1/context",
    "@graph": [
        {
            "@type": "CreativeWork",
            "@id": "ro-crate-metadata.json",
            conformsTo: { "@id": "https://w3id.org/ro/crate/1.1" },
            about: { "@id": "./" },
        },
        {
            "@id": "./",
            "@type": "Dataset",
            name: "my Research Object Crate",
        },
    ],
};

export async function setupRoutes({ server }) {
    server.get("/load/:service", route(loadRouteHandler));
}

export async function loadRouteHandler(req, res, next) {
    const message = new Message({
        io: req.io,
        path: "loadRouteHandler",
        clientId: req.query?.clientId,
    });
    message.emit({
        msg: "loading crate",
        stage: 1,
        total: 7,
    });

    const resource = req.params.service;
    const folder = req.session.data.service[resource].folder;
    if (!resource || !folder) {
        return next(new BadRequestError(`Must specify 'resource' and 'folder'`));
    }
    let crate, collection, content, localFile;
    try {
        message.emit({
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
        let crateFile = content.filter((e) => validCrateFileNames.includes(e.name));

        const crateManager = new Crate({ profile: req.session.data.profile });
        if (crateFile.length === 0) {
            // stamp a new crate file and load it back to the resource
            message.emit({
                msg: "no crate file found - stamping a new one",
                stage: 3,
                total: 7,
            });

            const { workingDirectory, configuration } = await setup({
                session: req.session,
                user: req.user,
                resource,
            });
            localFile = path.join(workingDirectory, "current", defaultCrateFileName);
            await ensureDir(path.join(workingDirectory, "current"));
            await writeJSON(localFile, crateMetadata);

            crateFile = {
                parent: folder,
                name: defaultCrateFileName,
            };
        } else if (crateFile.length > 1) {
            // handle error - how ?
            return next(
                new ConflictError(
                    "There is more than one crate file in that folder. There must be one only."
                )
            );
        } else {
            crateFile = crateFile.pop();

            message.emit({
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
        }

        message.emit({
            msg: "loading the crate file",
            stage: 4,
            total: 7,
        });

        ({ crate, collection } = await crateManager.loadCrateFromFile({
            file: localFile,
        }));

        // stamp the current collection id into the session
        log.debug("Setting the collection id in the user session");
        message.emit({
            msg: "setting up the user session",
            stage: 5,
            total: 7,
        });
        let session = await updateUserSession({
            sessionId: req.session.id,
            data: {
                current: {
                    collectionId: collection.id,
                    local: {
                        file: localFile,
                        workingDirectory: path.join(
                            localWorkingDirectory({
                                user: req.user,
                            }),
                            "current"
                        ),
                    },
                    remote: {
                        resource,
                        parent: folder,
                        name: crateFile.name,
                    },
                },
            },
        });

        // sync the local file back to the remote
        message.emit({
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
        message.emit({
            msg: "loading the crate data into the database",
            stage: 7,
            total: 7,
        });
        let sync = true;
        if (crate["@graph"].length > 1000) sync = false;
        await crateManager.importCrateIntoDatabase({ collection, crate, sync, io: req.io });
    } catch (error) {
        if (error.message !== "That collection is already loaded.") {
            log.error(`loadRouteHandler: ${error.message}`);
            return next(error);
        }
    }
    message.emit({ msg: `Loaded collection: ${collection.name}` });
    res.send({
        collection: {
            id: collection.id,
            name: collection.name,
            description: collection.description,
        },
    });
    next();
}
