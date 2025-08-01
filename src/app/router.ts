import {createRouter, createWebHistory} from "vue-router";
import Projects from "@/components/pages/Projects/Projects.vue";
import HomePage from "@/components/pages/Home/HomePage.vue";
import {navbarLinks} from "@/components/pages/Navbar/links.ts";
import Contacts from "@/components/pages/Contacts/Contacts.vue";
import Project from "@/components/pages/Projects/Project/Project.vue";
import NotFound from "@/components/pages/NotFound.vue";

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
    },
    {
        path: '/contacts',
        component: Contacts,
    },
    {path: '/project/:name', component: Project},
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
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
                    smooth = (from.path === '/about') || (from.path === '/');
                }
                window._smoother.scrollTo(el, smooth, "top")
            } else {
                window._smoother.scrollTo(0, false, "top")
            }
        }

    },
    routes,
})
export default router;