<script setup lang="ts">

import About from "./About/About.vue";
import data from "@/components/pages/Home/About/about.ts";
import Hero from "@/components/pages/Home/Hero.vue";
import WhoIam from "@/components/pages/Home/WhoIam.vue";
import PageHeaderRedirect from "@/components/common/PageHeaderRedirect/PageHeaderRedirect.vue";
import ProjectCards from "@/components/pages/Projects/ProjectCards.vue";

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
  <ProjectCards/>
  <PageHeaderRedirect data-cursor-action="go to" :subtitles="['Go Ahead', 'Next Page']" text="projects"
                      class="text-white" redirect="/projects"/>
</template>
<style>

</style>