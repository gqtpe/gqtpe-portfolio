<script setup lang="ts">
import Home from "./Home.vue";
import About from "./About/About.vue";
import {nextTick, onMounted} from "vue";

type Props = {
  scrollTo?: string
  scroll: () => void
}
const {scroll, scrollTo} = defineProps<Props>()
onMounted(async () => {
  await nextTick();
  if (scrollTo) {
    scroll(scrollTo)
  }
})
</script>

<template>
  <Home id="home"/>
  <About/>
</template>

<style scoped>

</style>