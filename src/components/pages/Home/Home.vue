<script setup lang="ts">
import gsap from "gsap";
import {SplitText} from "gsap/SplitText"
import {onBeforeMount, onMounted, useTemplateRef} from "vue";

const hero = useTemplateRef('hero')
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

</script>

<template>
  <section class="">

  </section>
</template>

<style scoped>
</style>
