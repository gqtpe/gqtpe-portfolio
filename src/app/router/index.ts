import {createRouter, createWebHistory} from "vue-router";
import {navbarLinks} from "@/shared/links.ts";
import {nextTick} from "vue";
import {routes} from "@/app/router/routes.ts";

declare global {
    interface Window {
        _smoother?: any
    }
}

const router = createRouter({
    history: createWebHistory(),//using default web history
    routes,
})

router.afterEach(async (to) => {
    await nextTick();

    const smoother = window._smoother;
    if (!smoother) return;
    const link = navbarLinks.find(t => t.path === to.path);
        if (link?.target) {
            if (to.path === '/') {
                smoother.scrollTo(0, true);
            } else {
                smoother.scrollTo(link.target, true, "top");
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