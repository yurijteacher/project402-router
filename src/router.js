import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
    path: "/",
    name: "home",
    component:()=>import('./components/ProductItems')
    },
    {
    path: "/category",
    name: "category",
    component:()=>import('./components/CategoryMain')
    },
    {
        path: "/item",
        name: "item",
        component:()=>import('./components/ItemProduct')
        },
        {
            path: "/store",
            name: "store",
            component:()=>import('./components/CategoryItems')
            },

];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
