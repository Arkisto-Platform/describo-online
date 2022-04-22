import Vue from "vue";
import VueRouter from "vue-router";
import ShellComponent from "@/components/Shell.component.vue";
import ManageCollectionShellComponent from "@/components/ManageCollectionShell.component.vue";
import SelectTargetComponent from "@/components/SelectTarget.component.vue";
import LogoutComponent from "@/components/Logout.component.vue";
import LoginComponent from "@/components/Login.component.vue";
import ApplicationLoginComponent from "@/components/ApplicationLogin.component.vue";
import AdminComponent from "@/components/admin/Shell.component.vue";
import AdminLoginComponent from "@/components/admin/Login.component.vue";
import AdminManagementShellComponent from "@/components/admin/ManagementShell.component.vue";
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
        children: [
            {
                name: "select-target",
                path: "select-target",
                component: SelectTargetComponent,
            },
            {
                name: "collection",
                path: "collection",
                component: ManageCollectionShellComponent,
                children: [
                    { name: "build", path: "build", component: ManageCollectionShellComponent },
                    { name: "files", path: "files", component: ManageCollectionShellComponent },
                    {
                        name: "entities",
                        path: "entities",
                        component: ManageCollectionShellComponent,
                    },
                    {
                        name: "templates",
                        path: "templates",
                        component: ManageCollectionShellComponent,
                    },
                ],
            },
        ],
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
    {
        path: "/admin",
        component: AdminComponent,
        children: [
            { path: "/admin/login", component: AdminLoginComponent },
            { path: "/admin/collections", component: AdminManagementShellComponent },
            { path: "/admin/profiles", component: AdminManagementShellComponent },
        ],
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
            isAuthed = await isAuthenticated({ router });
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
