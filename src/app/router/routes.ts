export const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/HomePage.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/pages/AboutPage.vue'),
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import('@/pages/ProjectsPage.vue'),
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('@/pages/ContactsPage.vue'),
    },
    {
        path: '/project/:name',
        name: 'project-details',
        component: () => import('@/pages/ProjectPage.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/pages/NotFoundPage.vue'),
    },
];