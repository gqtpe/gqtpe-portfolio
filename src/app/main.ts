import router from "./router";
import { createApp } from 'vue';
import './main.css';
import '@/styles/tailwind.css';
import App from './App.vue';
import {OhVueIcon} from "./ohh-vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import {MotionPlugin} from "@vueuse/motion";
import gsap from "gsap";
import SplitText from "gsap/SplitText"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollSmoother from "gsap/ScrollSmoother"
//gsap plugins initialization
gsap.registerPlugin(SplitText,ScrollTrigger, ScrollSmoother)


createApp(App)
    .use(router)
    .component("v-icon", OhVueIcon)
    .component("splide-wrapper",Splide)
    .component("slide", SplideSlide)
    .use(MotionPlugin)
    .mount('#app')
