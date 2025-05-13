<script setup lang="ts">

defineProps<{svgs: string[]}>()
</script>

<template>
  <div class="wrapper gap-1">
    <div v-for="(svg) in svgs"  v-motion-pop-visible-once>
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