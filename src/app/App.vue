<script setup lang="ts">
import { nextTick, ref, watch } from "vue";
import Loading from "@/components/common/Loading.vue";
import Header from "@/components/pages/Header.vue";
import "./App.css";
import Navbar from "@/components/pages/Navbar/Navbar.vue";
import { useLoadingMedia } from "@/app/hooks/useLoadingMedia.ts";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRoute } from "vue-router";
import { navbarLinks } from "@/components/pages/Navbar/links.ts";

const route = useRoute();
const { isLoaded } = useLoadingMedia();
const smoother = ref<any>(null);

watch(isLoaded, async (loaded) => {
  if (!loaded) return;

  await nextTick();

  if (!smoother.value) {
    ScrollTrigger.defaults({
      scroller: '#main',
      start: "top 80%",
      end: "top 10%",
    });

    const smootherObj = ScrollSmoother.create({
      wrapper: "#main-wrapper",
      content: "#main",
      smooth: 1,
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0,
    });

    smoother.value = smootherObj;
    window._smoother = smootherObj;

    const link = navbarLinks.find(t => t.path === route.path);
    if (link?.target) {
      window._smoother.scrollTo(link.target, true, "top");
    }
  }
});
</script>

<template>
  <Loading v-if="!isLoaded" />

  <template v-else>
    <Header>
      <Navbar />
    </Header>
    <div id="main-wrapper">
      <main id="main">
        <RouterView v-slot="{ Component }">
          <component :is="Component" />
        </RouterView>
      </main>
    </div>
  </template>
</template>

<style>
.half {
  min-height: 50vh !important;
  height: 50vh !important;
}
</style>
