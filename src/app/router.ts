import {createRouter, createWebHistory} from "vue-router";
import Projects from "@/components/pages/Projects/Projects.vue";
import HomePage from "@/components/pages/Home/HomePage.vue";
import {navbarLinks} from "@/components/pages/Navbar/links.ts";

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
        path: '/about',
        component: HomePage,
    },
    {
        path: '/projects',
        component: Projects,
    }
]

const router = createRouter({
    history: createWebHistory(),//using default web history
    scrollBehavior(to, from) {
        const link = navbarLinks.find(t => t.path === to.path)
        if (link && link.target) {
            const el = document.getElementById(link.target.slice(1));
            if (el && window._smoother) {
                let smooth = true
                if(link.disableSmooth){
                    smooth = false
                }
                if((link.path === '/about') || (link.path === '/') ){
                    if((from.path === '/about')||(from.path === '/')){
                        smooth = true;
                    }else{
                        smooth = false
                    }
                }
                debugger;
                window._smoother.scrollTo(el, smooth, "top")
            } else {
                window._smoother.scrollTo(0, false, "top")
            }
        }

    },
    routes,
})
export default router;