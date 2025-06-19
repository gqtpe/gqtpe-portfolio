<script setup lang="ts">
import gsap from "gsap";
import SplitText from "gsap/SplitText"
import {onMounted} from "vue";
import Subtitles from "@/components/common/Subtitles.vue";

onMounted(() => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#hero-shuffle',
      markers: true,
      end: "bottom top",
      start: "top bottom",
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
  <section class="home">
    <Subtitles :subtitles="['Welcome', 'Est. 2025']">
      <div>
        <h3 id="hero-shuffle-subtitle" class="uppercase">front-end developer</h3>
        <h1 id="hero-shuffle" class="">gqtpe</h1>
      </div>
    </Subtitles>
  </section>
</template>

<style scoped>
@reference "@/styles/tailwind.css";

.home {
  @apply font-main text-white text-center flex flex-col justify-center items-center;
  height: 100vh;
  width: 100vw;
  color: white;
  background-repeat: round;
  background-color: var(--color-primary-500);
  background-image: url("src/assets/img/background/home.png");
  @media (prefers-color-scheme: dark) {
    filter: grayscale(100%);
  }
}

#hero-shuffle {
  @apply whitespace-nowrap font-semibold md:text-[12rem] max-md:text-[8rem] max-sm:text-[6rem];
  font-size: clamp(3rem, 12vw, 12rem);
}

#hero-shuffle-subtitle {
  @apply uppercase;
  font-size: clamp(0.5rem, 6vw, 1rem);
}
</style>
