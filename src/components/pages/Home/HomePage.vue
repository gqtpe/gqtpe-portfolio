<script setup lang="ts">

import About from "./About/About.vue";
import data from "@/components/pages/Home/About/about.ts";
import Hero from "@/components/pages/Home/Hero.vue";
import WhoIam from "@/components/pages/Home/WhoIam.vue";
import PageHeaderRedirect from "@/components/common/PageHeaderRedirect/PageHeaderRedirect.vue";
import ProjectCards from "@/components/pages/Projects/ProjectCards.vue";
import Stack from "@/components/pages/Home/Stack.vue";
</script>

<template>
  <Hero id="home"/>
  <WhoIam/>
  <About :info="data.info"/>
  <Stack/>
  <ProjectCards/>
  <PageHeaderRedirect :subtitles="['Go Ahead', 'Next Page']" text="projects"
                      class="text-white" redirect="/projects"/>
</template>
<style>

</style>