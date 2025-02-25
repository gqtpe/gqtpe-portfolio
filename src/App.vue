<script setup lang="ts">
import Header from '../src/components/Header/Header.vue';
import Footer from '../src/components/Footer/Footer.vue';
</script>

<template>
  <Header/>
  <main class="content-wrapper w-full h-full text-white inset-shadow-sm">
    <RouterView/>
  </main>
  <Footer/>
</template>

<style>
.content-wrapper {
}

main {
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  //box-shadow: rgba(175, 189, 183, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

section {
  height: 100%;
  scroll-snap-align: start;
}

.page-wrapper {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1440px) {
    max-width: 1280px;
  }
  @media (max-width: 1280px) {
    max-width: 1024px;
  }
}
</style>
