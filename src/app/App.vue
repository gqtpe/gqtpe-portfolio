<script setup lang="ts">
import {nextTick, onMounted, ref, watch} from "vue";
import Loading from "@/components/Loading.vue";
import Header from "@/components/Header.vue"
import "./App.css"
import Navbar from "@/components/Navbar/Navbar.vue";
import {useLoadingMedia} from "@/app/hooks/useLoadingMedia.ts";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "@/components/Footer/Footer.vue";
import Button from "@/components/Button.vue";
import {useRouter} from "vue-router";

const router = useRouter()
const {isLoaded} = useLoadingMedia();
const smoother = ref<any>(null);
onMounted(() => {
  router.forward()
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
      smoother.value = smootherObj;
      window._smoother = smootherObj; // 💡 Глобально доступен
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
      <Navbar/>
    </Header>
    <div id="main-wrapper">
      <main id="main">
        <RouterView v-slot="{ Component }">
          <component
              :is="Component"
          />
        </RouterView>
        <section class="next-page half flex items-center justify-center bg-zinc-800">
          <RouterLink to="">
            <Button color="secondary" size="large" class-name="uppercase">Next Page</Button>
          </RouterLink>
        </section>
        <Footer class="half">
        </Footer>
      </main>
    </div>

  </template>
  <template v-if="!isLoaded">
    <Loading/>
  </template>
</template>
<style>
.half {
  height: 50vh !important;
  overflow: hidden !important;
}

</style>

