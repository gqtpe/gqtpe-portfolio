<script setup lang="ts">
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
</script>

<template>
  <Header/>
  <main class="content-wrapper w-full h-full bg-sky-50">
    <RouterView/>
  </main>
  <Footer/>
</template>

<style>
.content-wrapper{
  border: 2px dotted var(--color-sky-300);
}
.page-wrapper {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  border: 1px dashed black;
  @media (max-width: 1440px) {
    max-width: 1280px;
  }
  @media (max-width: 1280px) {
    max-width: 1024px;
  }
}
</style>
