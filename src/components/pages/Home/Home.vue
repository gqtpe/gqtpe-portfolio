<script setup lang="ts">
import gsap from "gsap";
import {SplitText} from "gsap/SplitText"
import {onBeforeMount, onMounted, useTemplateRef} from "vue";

const hero = useTemplateRef('hero')
const subtitle = useTemplateRef('title')
onBeforeMount(() => {
  gsap.registerPlugin(SplitText)
})
onMounted(() => {
  if (hero.value) {
    const split = SplitText.create(hero.value, {type: 'chars, lines, words'})
    gsap.from(split.chars, {
      stagger: {
        amount: 0.2,
        from: 'random'
      },
      duration: 0.5,
      yPercent: 'random([-100, 100])',
      opacity: 0
    })
  }
  if(subtitle.value){
    const titleSplit = SplitText.create(subtitle.value, {type: 'chars, lines, words'})
    gsap.from(titleSplit.chars, {
      delay: 1,
      opacity: 0,
      y:-20,
      stagger: 0.2,
      ease: "expoScale(0.5,7,none)",

</script>

<template>
  <section class="">

  </section>
</template>

<style scoped>
</style>
