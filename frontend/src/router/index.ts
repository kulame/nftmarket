import type { RouteRecordRaw } from "vue-router";
import type {App} from "vue";
import {createRouter, createWebHashHistory} from "vue-router";


export const LoginRoute:RouteRecordRaw = {
    path:"/Login",
    name:"Login",
    component: () => import("../components/HelloWorld.vue"),
};

export const routes = [LoginRoute];

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

export function setupRouter(app:App<Element>){
    app.use(router);
}

export default router;