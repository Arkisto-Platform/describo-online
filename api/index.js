require("regenerator-runtime");
const restify = require("restify");
const server = restify.createServer();
const models = require("./src/models");
const { setupRoutes } = require("./src/routes");
const { loadConfiguration } = require("./src/common");

(async () => {
    let configuration;
    try {
        configuration = await loadConfiguration();
    } catch (error) {
        console.error("configuration.json not found - stopping now");
        process.exit();
    }
    await models.sequelize.sync();

    setupRoutes({ server });
    server.pre(restify.plugins.pre.dedupeSlashes());
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
    server.listen(configuration.api.port, function () {
        console.log("ready on %s", server.url);
    });
})();
