<script setup lang="ts">
import Header from '@/components/Header/Header.vue'
import Side from "@/components/Side.vue";
import Footer from "@/components/Footer/Footer.vue"
import {useRoute} from "vue-router";

const route = useRoute()


const isLoaded = ref(false);
onMounted(() => {
  window.onload = () => setTimeout(()=>isLoaded.value = true,500)
});
</script>

<template>
  <Header/>
  <main class="w-full h-full text-white inset-shadow-sm flex">
    <Side v-if="!!route.path.slice(1) && !route.path.includes('/project/')" :title="route.path.slice(1)"/>
    <RouterView/>
  </main>
  <Footer/>
</template>

<style>

main {
  overflow-y: auto;
  @media (max-width: 1024px) {
    aside {
      display: none;
    }
    section{
      width: 100%;
    }
  }

}

section {
  @apply w-3/4;
  color: black;
  height: 100%;
  max-height:100%;
  overflow-y: auto;
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
