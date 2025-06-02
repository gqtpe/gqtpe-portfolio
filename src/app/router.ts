import {createRouter, createWebHistory} from "vue-router";
import Projects from "@/components/pages/Projects/Projects.vue";
import HomePage from "@/components/pages/Home/HomePage.vue";

declare global {
    interface Window {
        _smoother?: any
    }
}

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/projects',
        component: Projects,
    }
]

const router = createRouter({
    history: createWebHistory(),//using default web history
    scrollBehavior(to) {
        setTimeout(() => {
            const link = navbarLinks.find(t => t.path === to.path)
            if (link && link.target) {
                const el = document.getElementById(link.target.slice(1));
                if (el) {
                    return {
                        el,
                        top: 0,
                    }
                } else {
                    return {top: 0}
                }
            }
        }, 1000)
    },
    routes,
})
export default router;