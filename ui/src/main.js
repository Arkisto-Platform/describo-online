import "@/assets/tailwind.css";
import "element-ui/lib/theme-chalk/index.css";
import "@fortawesome/fontawesome-free/js/all";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoReplaceSvg = "nest";

import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";
import OneDrivePlugin from "../../plugins/onedrive";
import Auth from "@okta/okta-vue";

(async () => {
    let response = await fetch("/api/configuration");
    if (response.status === 200) {
        let { configuration } = await response.json();

        if (!configuration.services.okta) {
            console.log(`Okta configuration not found in configuration.json`);
            process.exit();
        }
        store.commit("saveConfiguration", { configuration });
        Vue.use(Auth, {
            ...configuration.services.okta,
        });
        Vue.use(ElementUI, { locale });
        Vue.use(OneDrivePlugin);
        Vue.config.productionTip = false;
        new Vue({
            router,
            store,
            render: (h) => h(App),
        }).$mount("#app");
    }
})();
