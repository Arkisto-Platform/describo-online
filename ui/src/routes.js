import Vue from "vue";
import VueRouter from "vue-router";
import ShellComponent from "@/components/Shell.component.vue";
import LogoutComponent from "@/components/Logout.component.vue";
import LoginComponent from "@/components/Login.component.vue";
import ApplicationLoginComponent from "@/components/ApplicationLogin.component.vue";
import { isAuthenticated } from "./components/http.service";

Vue.use(VueRouter);

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
        path: "/application",
        component: ApplicationLoginComponent,
    },
];

const router = new VueRouter({
    mode: "history",
    base: "/",
    routes,
});
router.beforeEach(onAuthRequired);

async function onAuthRequired(to, from, next) {
    if (to.meta?.requiresAuth) {
        let isAuthed;
        try {
            isAuthed = await isAuthenticated();
            if (!isAuthed && from.name !== "login") return next({ path: "/login" });
            return next();
        } catch (error) {
            if (!isAuthed && from.name !== "login") return next({ path: "/login" });
        }
    } else {
        next();
    }
}

export default router;
