<script setup lang="ts">
import { nextTick, ref, watch, computed } from "vue"; // добавил computed
import Header from "@/components/pages/Header.vue";
import "./App.css";
import Navbar from "@/components/pages/Navbar/Navbar.vue";
import { useLoadingMedia } from "@/app/hooks/useLoadingMedia.ts";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRoute } from "vue-router";
import { navbarLinks } from "@/components/pages/Navbar/links.ts";
import MagicCursor from "@/components/common/MagicCursor.vue";
import CountUp from "@/components/common/CountUp.vue";
import { useIsMobile } from "@/app/hooks/useIsMobile.ts";

const route = useRoute();
const isMobile = useIsMobile();
const { isLoaded: resourcesLoaded } = useLoadingMedia();
const animationFinished = ref(false);
const onAnimationEnd = () => {
  animationFinished.value = true;
}
const isReady = computed(() => {
  return resourcesLoaded.value && animationFinished.value;
});

const smoother = ref<any>(null);
watch(isReady, async (ready) => {
  if (!ready) return;

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
      normalizeScroll: true, // Часто помогает на мобильных, но тестируйте
      smoothTouch: 0.1, // Лучше ставить небольшое значение для touch, 0 отключает совсем
    });

    smoother.value = smootherObj;
    window._smoother = smootherObj;

    // Скролл к якорю при первой загрузке
    const link = navbarLinks.find(t => t.path === route.path);
    if (link?.target) {
      // Небольшой таймаут, чтобы GSAP успел расчитать высоту
      setTimeout(() => smootherObj.scrollTo(link.target!, true, "top"), 500);
    }
  }
});

// Обработка смены страниц (если у вас нет логики в router/index.ts)
watch(() => route.fullPath, async () => {
  if (window._smoother) {
    await nextTick();
    ScrollTrigger.refresh();
    window._smoother.refresh();
  }
});
</script>

<template>
  <div v-if="!isReady" class="loading-wrapper flex items-center justify-center p-6">
    <CountUp :onEnd="onAnimationEnd"/>
  </div>

  <template v-else>
    <Header>
      <Navbar/>
    </Header>
    <div id="main-wrapper">
      <main id="main">
        <RouterView v-slot="{ Component }">
          <component :is="Component" />
        </RouterView>
      </main>
      <MagicCursor v-if="!isMobile"/>
    </div>
  </template>
</template>

<style>
.loading-wrapper {
  width: 100vw;
  height: 100vh;
  background: var(--color-black);
  color: white;
}

.half {
  min-height: 50vh !important;
  height: 50vh !important;
  @media(max-width: 768px){
    min-height: 30vh !important;
    height: 30vh !important;
  }
}
</style>
