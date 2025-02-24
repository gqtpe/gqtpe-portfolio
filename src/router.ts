import Home from "./components/pages/Home/Home.vue";
import About from "./components/pages/About/About.vue";
import {createRouter, createWebHistory} from "vue-router";
import Projects from "./components/pages/Projects/Projects.vue";


const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/projects', component: {Projects}}
]
export const links ={
    linkedin: "https://www.linkedin.com/in/temirtas-nursayyn-4090a0350/",
    github: "https://github.com/gqtpe",
    telegram: "https://t.me/gqtpe"
}

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;