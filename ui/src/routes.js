import Vue from "vue";
import VueRouter from "vue-router";
import ShellComponent from "@/components/Shell.component.vue";
// import OnedriveCallbackComponent from "@/components/onedrive/callback.component.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: ShellComponent,
    },
    // {
    //     path: "/ondrive-callback",
    //     component: OnedriveCallbackComponent,
    // },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
