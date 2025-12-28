<script setup lang="ts">

import About from "./About/About.vue";
import data from "@/components/pages/Home/About/about.ts";
import Hero from "@/components/pages/Home/Hero.vue";
import WhoIam from "@/components/pages/Home/WhoIam.vue";
import PageHeaderRedirect from "@/components/common/PageHeaderRedirect/PageHeaderRedirect.vue";
import ProjectCards from "@/components/pages/Projects/ProjectCards.vue";
</script>

<template>
  <div class="home-page">
  <Hero id="home"/>
  <WhoIam title="who i am?"/>
  <About :info="data.info"/>
  <!--  <Stack/>-->
  <WhoIam title="projects"/>
  <ProjectCards/>
  <PageHeaderRedirect data-cursor-action="go to" :subtitles="['Go Ahead', 'Next Page']" text="contacts"
                      class="text-white bg-black" redirect="/contacts"/>
  </div>
</template>
<style>

</style>