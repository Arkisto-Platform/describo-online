import "regenerator-runtime";
import "@/assets/tailwind.css";
import "element-plus/dist/index.css";
import "@fortawesome/fontawesome-free/js/all";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoReplaceSvg = "nest";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import ElementPlus from "element-plus";

import OktaPlugin from "./plugins/okta";
import OneDrivePlugin from "./plugins/onedrive";
import OwncloudPlugin from "./plugins/owncloud";
import S3Plugin from "./plugins/s3";
import RevaPlugin from "./plugins/reva";
import ViewerPlugin from "./plugins/viewers";

import log from "loglevel";
import prefix from "loglevel-plugin-prefix";
const level = process.env.NODE_ENV === "development" ? "debug" : "warn";
log.setLevel(level);
const prefixer = prefix.noConflict();
prefixer.reg(log);
prefixer.apply(log);
import { io } from "socket.io-client";
import { HTTPService } from "./components/http.service";
export const $http = new HTTPService({
    router,
    loginPath: "/login",
});

export const app = createApp(App);

(async () => {
    let response = await fetch("/api/configuration");
    if (response.status === 200) {
        let { configuration } = await response.json();

        app.config.globalProperties.$http = $http;
        app.provide("$http", app.config.globalProperties.$http);

        app.config.globalProperties.$log = log;
        app.provide("$log", app.config.globalProperties.$log);

        app.config.globalProperties.$socket = io();
        app.provide("$socket", app.config.globalProperties.$socket);

        app.use(store);
        app.use(router);
        app.use(ElementPlus);

        // enable defined components
        app.use(ViewerPlugin);
        enableOkta({ app, log, router, configuration });
        enableOnedrive({ app, log, configuration });
        enableOwncloud({ app, log, router, configuration });
        enableS3({ app, log, configuration });
        enableReva({ app, log, configuration });

        store.commit("saveConfiguration", { configuration });
        app.config.productionTip = false;
        app.mount("#app");
    }
})();

function enableOkta({ app, log, router, configuration }) {
    if (configuration.services.okta) {
        app.use(OktaPlugin, {
            ...configuration.services.okta,
            log,
            router,
        });
    }
}

function enableOnedrive({ app, log, configuration }) {
    if (configuration.services.onedrive) {
        app.use(OneDrivePlugin, {
            ...configuration.services.onedrive,
            log,
            $http: app.config.globalProperties.$http,
            configuration: "/session/configuration/onedrive",
        });
    }
}

function enableOwncloud({ app, log, router, configuration }) {
    if (configuration.services.owncloud) {
        app.use(OwncloudPlugin, {
            router,
            log,
            $http: app.config.globalProperties.$http,
            configuration: "/session/configuration/owncloud",
            oauthToken: "/session/get-oauth-token/owncloud",
        });
    }
}

function enableS3({ app, log, configuration }) {
    if (configuration.services.s3) {
        app.use(S3Plugin, {
            log,
            $http: app.config.globalProperties.$http,
            configuration: "/session/configuration/s3",
        });
    }
}

function enableReva({ app, log, configuration }) {
    if (configuration.services.reva) {
        app.use(RevaPlugin, {
            log,
            $http: app.config.globalProperties.$http,
            configuration: configuration.services.reva,
            configurationRoute: "/session/configuration/reva",
            authenticationRoute: "/authenticate/reva",
        });
    }
}
