<script setup lang="ts">
import {nextTick, onMounted, ref, watch} from "vue";
import Loading from "@/components/Loading.vue";
import Home from "@/components/pages/Home/Home.vue";
import Header from "@/components/Header.vue"
import "./App.css"
import Navbar from "@/components/Navbar/Navbar.vue";
import {useLoadingMedia} from "@/app/hooks/useLoadingMedia.ts";
import ScrollSmoother from "gsap/ScrollSmoother";


const {isLoaded} = useLoadingMedia();
const smoother = ref<any>(null);
onMounted(() => {
  watch(isLoaded, async (newIsLoaded) => {
    //loading is fulfilled and
    await nextTick();
    if (newIsLoaded && !smoother.value && !ScrollTrigger.isTouch) {
      smoother.value = ScrollSmoother.create({
        wrapper: "#main-wrapper",
        content: "#main",
      });

    }
  });

})

const scrollTo = (target: string) => {
  debugger;
  smoother.value?.scrollTo(target, true, "center center")
}
</script>

<template>
  <template v-if="isLoaded">
    <Header>
      <Navbar :scrollTo="scrollTo"/>
    </Header>
    <div id="main-wrapper">
      <main id="main">
        <Home id="home"/>
        <section id="about"></section>
        <section id="projects"></section>
      </main>
    </div>
  </template>
  <template v-if="!isLoaded">
    <Loading/>
  </template>
</template>

