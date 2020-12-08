import "@/assets/tailwind.css";
import "element-ui/lib/theme-chalk/index.css";
import "@fortawesome/fontawesome-free/js/all";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoReplaceSvg = "nest";

import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import { store } from "./store";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";
import OneDrivePlugin from "../../plugins/onedrive";
import Auth from "@okta/okta-vue";
import log from "loglevel";
import prefix from "loglevel-plugin-prefix";
const level = process.env.NODE_ENV === "development" ? "debug" : "warn";
log.setLevel(level);
const prefixer = prefix.noConflict();
prefixer.reg(log);
prefixer.apply(log);
import { io } from "socket.io-client";
import HTTPService from "./components/http.service";
import { defaultSessionLifetime } from "./constants";

(async () => {
    let response = await fetch("/api/configuration");
    if (response.status === 200) {
        let { configuration } = await response.json();

        if (!configuration.services.okta) {
            console.error(`Okta configuration not found in configuration.json`);
            process.exit();
        }
        Vue.use(Auth, {
            ...configuration.services.okta,
        });
        Vue.use(ElementUI, { locale });
        Vue.use(OneDrivePlugin, {
            ...configuration.services.onedrive,
            log,
        });

        store.commit("saveConfiguration", { configuration });
        Vue.config.productionTip = false;
        Vue.prototype.$http = new HTTPService({ $auth: Vue.prototype.$auth });
        Vue.prototype.$log = log;
        Vue.prototype.$socket = io();

        const sessionCreate = Date.parse(store.state.session.create.valueOf()).valueOf() / 1000;
        if (new Date().valueOf() / 1000 > sessionCreate + defaultSessionLifetime) {
            store.commit("setTargetResource", { resource: undefined, folder: undefined });
        } else {
            // do we already have a onedrive session on the go? log it in again
            if (store.state?.target?.resource === "onedrive") {
                await Vue.prototype.onedriveAuthenticationManager.login();
            }
        }

        new Vue({
            router,
            store,
            render: (h) => h(App),
        }).$mount("#app");
    }
})();
