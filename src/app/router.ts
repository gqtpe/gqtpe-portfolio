import Home from "@/components/pages/Home/Home.vue";
import About from "@/components/pages/About/About.vue";
import {createRouter, createWebHistory} from "vue-router";
import Projects from "@/components/pages/Projects/Projects.vue";
import Project from "@/components/pages/Projects/Project/Project.vue";
import Contacts from "@/components/pages/Contacts/Contacts.vue";


const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {
        path: '/projects',
        component: Projects,
    },
    {
        path: '/project/:projectName',
        component: Project,
        props: true,
    },
    {
        path: '/contacts',
        component: Contacts
    }
]

const router = createRouter({
    history: createWebHistory(),//using default web history
    routes
})
export default router;