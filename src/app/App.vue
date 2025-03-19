<script setup lang="ts">
import {nextTick, onMounted, ref} from "vue";
import Header from "@/components/Header/Header.vue";
import Side from "@/components/Side.vue";
import Footer from "@/components/Footer/Footer.vue";
import Loading from "@/components/Loading.vue";

//value for detect all fonts and images is loaded
const isLoaded = ref(false);
onMounted(async () => {
  await nextTick(); // Ждём рендеринг
  await waitForFontsAndImages();
  setTimeout(() => {
    isLoaded.value = true

  }, 500);
});

async function waitForFontsAndImages() {
  //waiting all fonts is loaded
  await document.fonts.ready;
  //waiting all images is loaded
  const images = Array.from(document.images).map(
      (img) =>
          img.complete
              ? Promise.resolve()
              : new Promise((resolve) => (img.onload = img.onerror = resolve))
  );

  await Promise.all(images);
}
</script>

<template>
  <template v-if="isLoaded" v-motion-roll-visible-top>
    <Header/>
    <main class="w-full h-full text-white inset-shadow-sm flex">
      <Side :except="['/project/', '/']"/>
      <RouterView/>
    </main>
    <Footer/>
  </template>
  <template v-if="!isLoaded"><Loading/></template>
</template>

<style>

main {
  overflow-y: auto;
  @media (max-width: 1024px) {
    aside {
      display: none;
    }

    section {
      width: 100%;
    }
  }

}

section {
  @apply w-3/4;
  color: black;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
}


</style>
