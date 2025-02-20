import Home from "./components/pages/Home/Home.vue";
import About from "./components/pages/About/About.vue";
import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {path: '/about', component: About},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;