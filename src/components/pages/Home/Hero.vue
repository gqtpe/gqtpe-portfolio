<script setup lang="ts">
import gsap from "gsap";
import SplitText from "gsap/SplitText"
import {onMounted, useTemplateRef} from "vue";
import Subtitles from "@/components/common/Subtitles.vue";


const hero = useTemplateRef<null | Element>('hero-shuffle')
const subtitle = useTemplateRef<null | Element>('hero-shuffle-subtitle')
onMounted(() => {
  let tl = gsap.timeline({
    scrollTrigger:{
      trigger: '#hero-shuffle',
      markers: true,
      end: "top top",
      start: "bottom bottom",
      toggleActions: "play reset play reverse"
    }
  })
  const split = SplitText.create('#hero-shuffle', {type: 'chars'})
  const titleSplit = SplitText.create('#hero-shuffle-subtitle', {type: 'chars'})
  tl.from(split.chars, {
    stagger: {
      amount: 0.2,
      from: 'random'
    },
    duration: 0.5,
    yPercent: 'random([-100, 100])',
    opacity: 0
  })
  tl.from(titleSplit.chars, {
    opacity: 0,
    y: -20,
    stagger: 0.1,
    ease: "expoScale(0.5,7,none)",
  })

})
</script>

<template>
  <section class="home text-white text-center flex flex-col justify-center items-center">
    <h3 id="hero-shuffle-subtitle" class="uppercase">front-end developer</h3>
    <Subtitles :subtitles="['Welcome', 'Est. 2025']" :delay="2">
      <div>
        <h1 id="hero-shuffle" class="text-8xl uppercase font-black max-sm:text-5xl">nursain temirtas</h1>
      </div>
    </Subtitles>
  </section>
</template>

<style scoped>
.hero-shuffle{
  text-box: ex alphabetic;
}
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
