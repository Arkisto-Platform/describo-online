import Vue from "vue";
import VueRouter from "vue-router";
import ShellComponent from "@/components/Shell.component.vue";
import LogoutComponent from "@/components/Logout.component.vue";
// import OktaLoginComponent from "@/components/OktaLogin.component.vue";
// import OktaLoginCallbackComponent from "@/components/OktaLoginCallback.component.vue";
import {OktaLoginCallbackComponent} from '../../plugins/okta';
import ApplicationLoginComponent from "@/components/ApplicationLogin.component.vue";
import TemplateListManagerComponent from "@/components/template-list/Shell.component.vue";
import LoginComponent from "@/components/Login.component.vue";
import AuthService from "./components/auth.service";
const authService = new AuthService({});

Vue.use(VueRouter);
Vue.use(OktaLoginCallbackComponent, {});
// if (configuration.services.onedrive) {
//     Vue.use(OktaLoginComponent, {});
//     Vue.use(OktaLoginCallback, {});
// }

const routes = [
    {
        path: "/",
        name: "root",
        component: ShellComponent,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/templates",
        name: "templates",
        component: TemplateListManagerComponent,
        meta: {
            requiresAuth: true,
        },
    },
    {
        name: "login",
        path: "/login",
        component: LoginComponent,
    },
    {
        name: "logout",
        path: "/logout",
        component: LogoutComponent,
    },
    {
        path: "/okta-login",
        component: OktaLoginCallbackComponent,
    },
    {
        path: "/application",
        component: ApplicationLoginComponent,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
router.beforeEach(onAuthRequired);

async function onAuthRequired(from, to, next) {
    if (to.name === "logout" || from.name === "logout") {
        next();
    } else if (
        (from.matched.some((r) => r.meta.requiresAuth) ||
            to.matched.some((r) => r.meta.requiresAuth)) &&
        !(await authService.isAuthenticated())
    ) {
        next({ path: "/login" });
    } else {
        next();
    }
}

export default router;
