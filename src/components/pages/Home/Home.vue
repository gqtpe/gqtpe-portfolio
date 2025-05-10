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
        toggleActions: 'restart none restart none',
        markers: true,

      },

      duration: 0.5,
      yPercent: 'random([-100, 100])',
      opacity: 0
    })
  }
  if (subtitle.value) {
    const titleSplit = SplitText.create(subtitle.value, {type: 'chars, lines, words'})
    gsap.from(titleSplit.chars, {
      delay: 0.5,
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
  <section class="home">
      <h3 ref="title" class="uppercase">hello there</h3>
      <h1 ref="hero" class=" text-8xl font-black uppercase">nursain temirtas</h1>

  </section>
</template>

<style scoped>
.home {
  color: white;
  text-align: center;
  background-color: hsla(0, 100%, 50%, 1);
  background-image: var(--section1);
  @media (prefers-color-scheme: dark) {
    filter: grayscale(100%);
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.home_hero {
  width: 100%;
  border: 1px solid red;
  height: 20rem;

}
</style>
