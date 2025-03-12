import router from "./router";
import { createApp } from 'vue';
import './main.css';
import '@/styles/tailwind.css';
import App from './App.vue';
import {OhVueIcon} from "./ohh-vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import {MotionPlugin} from "@vueuse/motion";


createApp(App)
    .use(router)
    .component("v-icon", OhVueIcon)
    .component("splide-wrapper",Splide)
    .component("slide", SplideSlide)
    .use(MotionPlugin)
    .mount('#app')
