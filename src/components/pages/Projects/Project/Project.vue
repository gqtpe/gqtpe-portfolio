<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute()
console.log(route)
</script>

<template>
  <section class="text-black">
  {{JSON.stringify(route, null, 2)}}
  </section>
</template>

<style scoped>


</style>