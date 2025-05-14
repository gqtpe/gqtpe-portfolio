<script setup lang="ts">
import {nextTick, onMounted, ref, watch} from "vue";
import Loading from "@/components/Loading.vue";
import Home from "@/components/pages/Home/Home.vue";
import Header from "@/components/Header.vue"
import About from "@/components/pages/About/About.vue";
import "./App.css"
import Navbar from "@/components/Navbar/Navbar.vue";
import {useLoadingMedia} from "@/app/hooks/useLoadingMedia.ts";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";


const {isLoaded} = useLoadingMedia();
const smoother = ref<any>(null);
onMounted(() => {
  watch(isLoaded, async (newIsLoaded) => {
    await nextTick();
    if (newIsLoaded && !smoother.value) {
      ScrollTrigger.defaults({
        scroller: '#main',
        start: "top 80%",
        end: "top 10%",
      })

      smoother.value = ScrollSmoother.create({
        wrapper: "#main-wrapper",
        content: "#main",
        smooth: 1, // Скорость плавности
        effects: true, // Включение эффектов (опционально)
        normalizeScroll: true // Нормализация скролла для мобильных устройств

      });

    }
  });

})

const scrollTo = (target: string) => {
  if (!smoother.value) {
    console.warn("ScrollSmoother not initialized");
    return;
  }
  const el = document.querySelector(target);
  if (!el) {
    console.warn(`Target element '${target}' not found in DOM`);
    return;
  }

  smoother.value.scrollTo(target, true, "top end");
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
        <About/>
      </main>
    </div>
  </template>
  <template v-if="!isLoaded">
    <Loading/>
  </template>
</template>
<style>
</style>

