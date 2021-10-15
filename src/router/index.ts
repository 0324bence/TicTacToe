import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import Menu from "../views/Menu.vue";
import Create from "../views/Create.vue";
import Join from "../views/Join.vue";

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
        path: "/join",
        name: "Join",
        component: Join
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
