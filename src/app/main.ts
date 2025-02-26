import router from "./router.ts";
import { createApp } from 'vue';
import './main.css';
import App from './App.vue';
import {OhVueIcon} from "./ohh-vue.ts";



createApp(App)
    .use(router)
    .component("v-icon", OhVueIcon)
    .mount('#app')
