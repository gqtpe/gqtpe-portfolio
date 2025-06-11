<script setup lang="ts">
import gsap from "gsap";

import {onMounted, useTemplateRef} from "vue";

type Props = {
  text: string[]
}
const velocityEl = useTemplateRef<HTMLDivElement | null>("velocity")
const {text} = defineProps<Props>()

onMounted(() => {
  if (velocityEl.value) {
    console.log(velocityEl.value.clientWidth)
  }
  gsap.set('.velocity', {
    xPercent: -110,
  })
  gsap.fromTo('.velocity', {
    xPercent: -110,

  },{
    repeat: -1,
    duration: 10,
    xPercent: 110,

  })
})

</script>

<template>
  <div class="velocity__wrapper"  ref="velocity">
    <div class="velocity flex gap-12 flex-nowrap">
      <div class="velocity__item" v-for="item in text">{{ item }}</div>
    </div>
  </div>
</template>

<style scoped>
.velocity__wrapper{
  border: 1px solid red;
  overflow: hidden;
}
.velocity {
  border: #e6b600 1px solid;
  color: black;
}

.velocity__item {
  color: #e6b600;
  font-weight: 900;
  font-size: 3rem;
}
</style>