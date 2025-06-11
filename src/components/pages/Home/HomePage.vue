<script setup lang="ts">

import About from "./About/About.vue";
import data from "@/components/pages/Home/About/about.ts";
import Hero from "@/components/pages/Home/Hero.vue";
import WhoIam from "@/components/pages/Home/WhoIam.vue";
import PageHeaderRedirect from "@/components/common/PageHeaderRedirect/PageHeaderRedirect.vue";


//helpers
// onMounted(() => {
//   console.log('HomePage')
// })
// onUpdated(() => {
//   console.log('HomePage updated')
// })
</script>

<template>
  <Hero id="home"/>
  <WhoIam/>
  <About :info="data.info"/>
  <section id="projects-hello" class="projects-hello flex items-center justify-center w-full">
    <PageHeaderRedirect text="projects" redirect="/projects"/>
  </section>
</template>
