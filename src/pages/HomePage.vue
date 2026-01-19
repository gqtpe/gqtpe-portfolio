<script setup lang="ts">

import About from "./AboutPage.vue";
import Hero from "@/components/Hero.vue";
import WhoIam from "@/components/WhoIam.vue";
import PageHeaderRedirect from "@/components/PageHeaderRedirect/PageHeaderRedirect.vue";
import ProjectCards from "@/components/ProjectCards.vue";
</script>

<template>
  <div class="home-page">
    <Hero id="home"/>
    <WhoIam title="who i am?"/>
    <About/>
    <WhoIam title="projects"/>
    <ProjectCards/>
    <!--    <ScrollVelocity-->
    <!--        :const="['React', 'Vue', 'Redux', ]"-->
    <!--        :velocity="100"-->
    <!--        :damping="50"-->
    <!--        :stiffness="400"-->
    <!--        :velocity-mapping="{ input: [0, 1000], output: [0, 5] }"-->
    <!--        class-name="custom-scroll-text"-->
    <!--        parallax-class-name="custom-parallax"-->
    <!--        scroller-class-name="custom-scroller"-->
    <!--    />-->
    <PageHeaderRedirect data-cursor-action="go to" :subtitles="['Go Ahead', 'Next Page']" text="contacts"
                        class="text-white bg-black" redirect="/contacts"/>
  </div>
</template>
<style>

</style>