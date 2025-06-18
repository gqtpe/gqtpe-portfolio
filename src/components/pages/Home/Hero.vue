<script setup lang="ts">
import gsap from "gsap";
import SplitText from "gsap/SplitText"
import {onMounted, useTemplateRef} from "vue";



const hero = useTemplateRef<null | Element>('hero')
const subtitle = useTemplateRef<null | Element>('title')
onMounted(() => {
  if (hero.value) {
    const split = SplitText.create(hero.value, {type: 'chars, lines, words'})
    gsap.from(split.chars, {
      stagger: {
        amount: 0.2,
        from: 'random'
      },
      scrollTrigger: {
        trigger: hero.value,
      },
      duration: 0.5,
      yPercent: 'random([-100, 100])',
      opacity: 0
    })
  }
  if (subtitle.value) {
    const titleSplit = SplitText.create(subtitle.value, {type: 'chars, lines, words'})
    gsap.from(titleSplit.chars, {
      delay: 1,
      opacity: 0,
      y: -20,
      stagger: 0.1,
      scrollTrigger: {
        trigger: hero.value,
        toggleActions: 'play none restart none',
      },
      ease: "expoScale(0.5,7,none)",
    })
  }
})
</script>

<template>
  <section class="home text-white text-center flex flex-col justify-center items-center">
    <h1 ref="hero" class=" text-8xl font-black uppercase max-sm:text-5xl">nursain temirtas</h1>
    <h3 ref="title" class="uppercase">front-end developer</h3>
  </section>
</template>

<style scoped>
.home {
  color: white;
  background-repeat: round;
  background-color: var(--color-primary-500);
  background-image: url("src/assets/img/background/home.png");
  @media (prefers-color-scheme: dark) {
    filter: grayscale(100%);
  }
}

</style>
