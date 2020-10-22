import Vue from "vue";
import VueRouter from "vue-router";
import ShellComponent from "@/components/Shell.component.vue";
import OktaLoginComponent from "@/components/OktaLogin.component.vue";
import OktaLoginCallbackComponent from "@/components/OktaLoginCallback.component.vue";
import ApplicationLoginComponent from "@/components/ApplicationLogin.component.vue";
import AuthService from "./components/auth.service";
const authService = new AuthService({});

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: ShellComponent,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/login",
        component: OktaLoginComponent,
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
    if (
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
