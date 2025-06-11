<script setup lang="ts">
import Velocity from "@/components/bits/Velocity.vue";
</script>

<template>
  <section id="stack-velocity" class="flex justify-center items-center ">
    <Velocity
        clas="flex items-center justify-center"
        :text="['Speed', 'reacts to your','scroll.']"
    />
  </section>
</template>

<style scoped>
section{
  background: var(--color-primary-500)
}
</style>