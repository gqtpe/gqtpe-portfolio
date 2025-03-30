<script setup lang="ts">
import {getPopupPreset} from "@/motion/motion-presets.ts";

defineProps<{svgs: string[]}>()
</script>

<template>
  <div class="wrapper gap-1">
    <div v-for="(svg,i) in svgs"  v-motion="getPopupPreset({delay: i * 50, variant: 'visible' })" >
      <img  :src="svg" alt="stack-item" >
    </div>
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