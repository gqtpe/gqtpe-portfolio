<script setup lang="ts">
import { nextTick, ref, watch, computed } from "vue";
import Header from "@/app/layout/Header.vue";
import "./RootLayout.css";
import Navbar from "@/app/layout/Navbar.vue";
import { useLoadingMedia } from "@/app/hooks/useLoadingMedia.ts";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRoute } from "vue-router";
import { navbarLinks } from "@/shared/links.ts";
import MagicCursor from "@/components/bits/MagicCursor.vue";
import CountUp from "@/components/bits/CountUp.vue";
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

const smoother = ref<ScrollSmoother | null>(null);

// Логика инициализации скролла
watch(isReady, async (ready) => {
  if (!ready) return;

  // Ждем полного рендера DOM (включая вложенные компоненты ProjectCards)
  await nextTick();

  if (!smoother.value) {

    // Создаем смузер
    const smootherObj = ScrollSmoother.create({
      wrapper: "#main-wrapper",
      content: "#main",
      smooth: 1,
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0.1,
    });

    smoother.value = smootherObj;
    window._smoother = smootherObj;

    // --- КРИТИЧЕСКИ ВАЖНОЕ ИСПРАВЛЕНИЕ ---
    // В этот момент ProjectCards уже создал свои триггеры, но они "смотрят" не туда.
    // Вызываем refresh(), чтобы GSAP понял: "Ого, теперь у нас ScrollSmoother!"
    // и пересчитал все start/end координаты с учетом трансформаций.
    ScrollTrigger.refresh();

    // Скролл к якорю (если переход был по ссылке)
    const link = navbarLinks.find(t => t.path === route.path);
    if (link?.target) {
      setTimeout(() => smootherObj.scrollTo(link.target!, true, "top"), 100);
    }
  }
});

// Обработка переходов между страницами
watch(() => route.fullPath, async () => {
  if (window._smoother) {
    // Ждем, пока Vue подменит контент
    await nextTick();

    // Сначала scrollTop(0), чтобы не дергало старую позицию
    // (опционально, зависит от дизайна)
    window._smoother.scrollTo(0, false);

    // Обновляем смузер (пересчет высоты страницы)
    // и триггеры (пересчет позиций анимаций)
    ScrollTrigger.refresh();
  }
});
</script>

<template>
  <div v-if="!isReady" class="loading-wrapper flex items-center justify-center p-6">
    <CountUp :onEnd="onAnimationEnd"/>
  </div>

  <template v-else>
    <div class="fixed-header">
      <Header>
        <Navbar/>
      </Header>
    </div>

    <div id="main-wrapper">
      <div id="main">
        <RouterView v-slot="{ Component }">
          <component :is="Component" />
        </RouterView>
      </div>
    </div>

    <MagicCursor v-if="!isMobile"/>
  </template>
</template>

<style>
/* --- ОБЯЗАТЕЛЬНЫЕ СТИЛИ ДЛЯ SCROLLSMOOTHER --- */
#main-wrapper {
  overflow: hidden;
  position: fixed; /* ВАЖНО: Фиксируем враппер */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

#main {
  width: 100%;
  /* height: auto; - ScrollSmoother сам это контролирует, но можно оставить */
  will-change: transform; /* Оптимизация производительности */
}

/* Header должен быть поверх всего */
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999; /* Выше чем контент */
  pointer-events: none; /* Чтобы клики проходили сквозь пустые места хедера */
}
/* Вернуть клики элементам внутри хедера */
.fixed-header > * {
  pointer-events: auto;
}

.loading-wrapper {
  width: 100vw;
  height: 100vh;
  background: var(--color-black);
  color: white;
  position: fixed;
  z-index: 1000;
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