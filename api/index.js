import "regenerator-runtime";
import restify from "restify";
import models from "./src/models/index.js";
import { setupRoutes } from "./src/routes/index.js";
import { loadConfiguration, getLogger, getInstallationBasePath } from "./src/common/index.js";
import * as periodicProcesses from "./src/periodic-processes/index.js";
import fsExtraPkg from "fs-extra";
const { pathExists, writeJson } = fsExtraPkg;
const server = restify.createServer();
const log = getLogger();
import { Server } from "socket.io";
import fetchPkg from "node-fetch";
import corsMiddleware from "restify-cors-middleware2";
const fetch = fetchPkg;
import path from "path";

// DEVELOPER NOTE
//
//  Do not import fetch anywhere in your code. Use global.fetch
//   instead.
//
//  This way, jest fetch mock will override fetch when you need it to.
// global.fetch = require("node-fetch");

(async () => {
    let configuration;
    try {
        configuration = await loadConfiguration();
    } catch (error) {
        log.error(`${error.message} - stopping now`);
        process.exit();
    }
    await models.sequelize.sync();

    if (process.env.NODE_ENV === "development") {
        server.use((req, res, next) => {
            log.debug(`${req.route.method}: ${req.route.path}`);
            return next();
        });
    }
    let io = new Server(server.server, {});
    server.use((req, res, next) => {
        req.io = io;
        return next();
    });
    server.use(restify.plugins.dateParser());
    if (process.env.NODE_ENV === "development") {
        const cors = corsMiddleware({
            preflightMaxAge: 5, //Optional
            origins: ["http://localhost:8080"],
            allowHeaders: ["Content-Type", "Authorization"],
            exposeHeaders: ["Content-Type", "Authorization"],
        });

        server.pre(cors.preflight);
        server.use(cors.actual);
    }
    server.use(restify.plugins.queryParser());
    server.use(restify.plugins.jsonp());
    server.use(restify.plugins.gzipResponse());
    server.use(
        restify.plugins.bodyParser({
            maxBodySize: 0,
            mapParams: true,
            mapFiles: false,
            overrideParams: false,
            multiples: true,
            hash: "sha1",
            rejectUnknown: true,
            requestBodyOnGet: false,
            reviver: undefined,
            maxFieldsSize: 2 * 1024 * 1024,
        })
    );
    setupRoutes({ server });

    // kick off periodic processes to run every
    log.info(
        `Running periodic processes every ${configuration.api.periodicProcessInterval / 60} minutes`
    );
    setInterval(runPeriodicProcesses, configuration.api.periodicProcessInterval * 1000);

    log.info(`Get type definitions`);
    await getTypeDefinitions({ configuration });

    const app = server.listen(configuration.api.port, function () {
        console.log("ready on %s", server.url);
    });
})();

async function runPeriodicProcesses() {
    for (let process of Object.keys(periodicProcesses)) {
        log.info(`Kick off: ${process}`);
        await periodicProcesses[process]();
    }
}

async function getTypeDefinitions({ configuration }) {
    let typeDefinitions = path.join(getInstallationBasePath(), "type-definitions.json");
    if (!(await pathExists(typeDefinitions)) && configuration.api?.typeDefinitions) {
        let response = await fetch(configuration.api?.typeDefinitions);
        await writeJson(typeDefinitions, await response.json());
    }
    let typeDefinitionsLookup = path.join(
        getInstallationBasePath(),
        "type-definitions-lookup.json"
    );
    if (!(await pathExists(typeDefinitionsLookup)) && configuration.api?.typeDefinitionsLookup) {
        let response = await fetch(configuration.api?.typeDefinitionsLookup);
        await writeJson(typeDefinitionsLookup, await response.json());
    }
}
