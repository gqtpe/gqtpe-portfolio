<script setup lang="ts">
import Home from "./Home.vue";
import About from "./About/About.vue";
import {nextTick, onMounted} from "vue";
import {useRoute} from "vue-router";
import data from "@/components/pages/Home/About/about.ts";
import WhoIam from "@/components/pages/Home/About/WhoIam.vue";
import {navbarLinks} from "@/components/Navbar/links.ts";

const {scroll} = defineProps<{ scroll: (target: string) => void }>()
const route = useRoute()

onMounted(async () => {
  const aboutPath = '/about';
  const aboutLink = navbarLinks.find(t=>t.href === aboutPath);
  if(aboutLink && (route.path === aboutLink.href) && aboutLink.target){
    await nextTick()
    scroll(aboutLink.target)
  }
})
</script>

<template>
  <Home id="home"/>
  <WhoIam/>
  <About :info="data.info"/>

</template>
