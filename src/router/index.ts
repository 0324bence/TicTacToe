import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import Menu from "../views/Menu.vue";
import Create from "../views/Create.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Menu",
        component: Menu
    },
    {
        path: "/create",
        name: "Create",
        component: Create
    },
    {
        path: "/:catchAll(.*)",
        redirect: "/"
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
