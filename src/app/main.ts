import router from "./router";
import { createApp } from 'vue';
import './main.css';
import App from './App.vue';
import {OhVueIcon} from "./ohh-vue";



createApp(App)
    .use(router)
    .component("v-icon", OhVueIcon)
    .mount('#app')
