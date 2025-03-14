<script setup lang="ts">
import CountUp from "@/components/CountUp.vue";
</script>

<template>
  <div class="wrapper flex items-center justify-center p-6">
    <CountUp :endValue="100" :duration="0.6" />

  </div>
</template>

<style scoped>
.wrapper{
  width: 100vw;
  height: 100vh;
 background: var(--color-black);
  color: white;

}
</style>