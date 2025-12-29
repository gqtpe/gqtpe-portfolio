import { createRouter, createWebHistory } from "vue-router";
import { navbarLinks } from "@/components/pages/Navbar/links";
import {nextTick} from "vue";

declare global {
    interface Window {
        _smoother?: any
    }
}

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/pages/Home/HomePage.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/components/pages/Home/HomePage.vue'),
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import('@/components/pages/Projects/Projects.vue'),
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('@/components/pages/Contacts/Contacts.vue'),
    },
    {
        path: '/project/:name',
        name: 'project-details',
        component: () => import('@/components/pages/Projects/Project/Project.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/components/pages/NotFound.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),//using default web history
    routes,
})

router.afterEach(async (to, from) => {
    await nextTick();

    const smoother = window._smoother;
    if (!smoother) return;
    const isHomeContext = (path: string) => path === '/' || path === '/about';
    const isSamePageNavigation = isHomeContext(to.path) && isHomeContext(from.path);
    const link = navbarLinks.find(t => t.path === to.path);

    if (isSamePageNavigation) {
        if (link?.target) {
            if (to.path === '/') {
                smoother.scrollTo(0, true);
            } else {
                smoother.scrollTo(link.target, true, "top");
            }
        }
    } else {
        smoother.scrollTo(0, false);

        ScrollTrigger.refresh();
        if (link?.target) {

            setTimeout(() => {
                const el = document.querySelector(link.target!);
                if (el) {
                    smoother.scrollTo(el, false, "top");
                }
            }, 100);
        }
    }
});
export default router;