const restify = require("restify");
const server = restify.createServer();
const models = require("./src/models");

(async () => {
    await models.sequelize.sync();

    server.listen(8080, function () {
        console.log("ready on %s", server.url);
    });
})();
