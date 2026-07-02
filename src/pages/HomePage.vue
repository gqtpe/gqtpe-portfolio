<script setup lang="ts">

import Hero from "@/components/Hero.vue";
import WhoIam from "@/components/WhoIam.vue";
import PageHeaderRedirect from "@/components/PageHeaderRedirect/PageHeaderRedirect.vue";
import AboutHero from "@/pages/About/AboutHero.vue";
import {useHome} from "@/shared/sanity/useHome.ts";

const home = useHome()
</script>

<template>
  <div class="home-page">
    <Hero id="home"/>
    <WhoIam :title="home.whoAmITitle"/>
    <section class="min-h-screen relative overflow-hidden w-full px-4 md:px-10">
      <div class="about-bg absolute inset-0 -z-10 w-full h-full bg-no-repeat bg-cover bg-[url('/about.jpg')] grayscale"></div>
      <AboutHero />
    </section>
    <!--    <WhoIam title="projects"/>-->
    <!--    <ProjectCards/>-->
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
    <PageHeaderRedirect :subtitles="['Go Ahead', 'Next Page']" text="contacts"
                        class="text-white bg-black" redirect="/contacts"/>
  </div>
</template>
<style>

</style>