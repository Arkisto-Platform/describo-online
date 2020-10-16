import "@/assets/tailwind.css";
import "element-ui/lib/theme-chalk/index.css";

import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";
import OneDrivePlugin from "../../plugins/onedrive";

Vue.use(ElementUI, { locale });
Vue.use(OneDrivePlugin);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
