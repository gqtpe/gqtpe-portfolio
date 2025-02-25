import { createApp } from 'vue'
import './styles/main.css'
import App from './App.vue'
import router from "./router.ts";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaExpand, FaExternalLinkSquareAlt   } from "oh-vue-icons/icons";
addIcons(FaExpand, FaExternalLinkSquareAlt  );


createApp(App)
    .use(router)
    .component("v-icon", OhVueIcon)
    .mount('#app')
