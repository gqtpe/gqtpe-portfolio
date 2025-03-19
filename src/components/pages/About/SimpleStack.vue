<script setup lang="ts">
import { aboutSVGs } from "@/assets/svg";
</script>

<template>
  <div class="wrapper">
      <img loading="lazy" v-for="svg in aboutSVGs" :src="svg" alt="stack-item">
  </div>
</template>

<style scoped>
  .wrapper{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    img{
      width: 2rem;
    }
  }
</style>