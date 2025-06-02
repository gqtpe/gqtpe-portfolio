<script setup lang="ts">
import Home from "./Home.vue";
import About from "./About/About.vue";
import data from "@/components/pages/Home/About/about.ts";
import WhoIam from "@/components/pages/Home/About/WhoIam.vue";
import PageHeaderRedirect from "@/components/PageHeaderRedirect/PageHeaderRedirect.vue";

//helpers
// onMounted(() => {
//   console.log('HomePage')
// })
// onUpdated(() => {
//   console.log('HomePage updated')
// })
</script>

<template>
  <Home id="home"/>
  <WhoIam/>
  <About :info="data.info"/>
  <section id="projects-hello" class="projects-hello flex items-center justify-center w-full">
    <PageHeaderRedirect text="projects" redirect="/projects"/>
  </section>
</template>
<style scoped>

</style>