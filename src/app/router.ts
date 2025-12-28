import { createRouter, createWebHistory } from "vue-router";
import { navbarLinks } from "@/components/pages/Navbar/links";

interface Smoother {
    scrollTo: (target: string | HTMLElement | number, smooth?: boolean, position?: string) => void;
}

declare global {
    interface Window {
        _smoother?: Smoother;
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
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }

        const smoother = window._smoother;
        const link = navbarLinks.find((t) => t.path === to.path);

        if (!smoother) {
            return { top: 0 };
        }

        if (link && link.target) {
            const el = document.getElementById(link.target.slice(1));

            if (el) {
                let shouldSmooth = !link.disableSmooth;

                const isHomeContext = ['/', '/about'];
                if (isHomeContext.includes(to.path)) {
                    shouldSmooth = isHomeContext.includes(from.path);
                }

                smoother.scrollTo(el, shouldSmooth, "top");
                return; // Smoother берет управление на себя
            }
        }
        smoother.scrollTo(0, false, "top");
    },
});

export default router;