<script setup lang="ts">

defineProps<{svgs: string[]}>()
</script>

<template>
  <div class="wrapper gap-1">
    <div v-for="(svg) in svgs">
      <img :src="svg" alt="stack-item" >
    </div>
    </div>
</template>

<style scoped>
  .wrapper{
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
    img{
      transition: filter, 0.2s ease-in-out;
      &:hover{
        filter: brightness(0.8);
      }
      user-select: none;
      moz-user-select: none;
      -webkit-user-drag: none;
      moz-webkit-user-drag: none;
      width: 4rem;
    }
  }
</style>