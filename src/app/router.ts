import {createRouter, createWebHistory} from "vue-router";
import Projects from "@/components/pages/Projects/Projects.vue";
import HomePage from "@/components/pages/Home/HomePage.vue";


const routes = [
    {
        path: '/',
        component: HomePage,
        alias: '/about',
    },
    {
        path: '/projects',
        component: Projects,
    }


]

const router = createRouter({
    history: createWebHistory(),//using default web history
    routes
})
export default router;