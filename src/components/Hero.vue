<template>
  <section class="home">
    <div class="absolute w-[100vw] h-[100vh] overflow-hidden top-0 left-0">
      <Dither
          :wave-speed="0.1"
          :wave-frequency="2.5"
          :wave-amplitude="0.2"
          :wave-color="[1,1,1]"
          :background-color="[0,0,0]"
          :color-num="4"
          :pixel-size="3"
          :disable-animation="isMobile"
          :enable-mouse-interaction="isMobile"
          :mouse-radius="1"
      />
    </div>
    <Subtitles :subtitles="['Welcome', 'Est. 2025']" class="text-white">
      <div>
        <h3 id="hero-shuffle-subtitle" class="uppercase">front-end developer</h3>
        <h1 id="hero-shuffle" class="">gqtpe</h1>
      </div>
    </Subtitles>
  </section>
</template>
<script setup lang="ts">
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { onMounted, onUnmounted, nextTick } from "vue";
import Subtitles from "@/components/bits/Subtitles.vue";
import Dither from "@/components/bits/Dither.vue";
import {useIsMobile} from "@/app/hooks/useIsMobile.ts";

const isMobile = useIsMobile()
// Переменная для хранения контекста GSAP (нужна для правильной очистки)
let ctx: gsap.Context;
const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
onMounted(async () => {
  await document.fonts.ready;
  await nextTick();
  ctx = gsap.context(() => {
    const split = new SplitText('#hero-shuffle', { type: 'chars' });
    const titleSplit = new SplitText('#hero-shuffle-subtitle', { type: 'chars' });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero-shuffle',
        end: "bottom top",
        start: "top bottom",
        toggleActions: "play reset play reverse"
      }
    });

    tl.from(split.chars, {
      stagger: {
        amount: 0.2,
        from: 'random'
      },
      yPercent: 'random([-100, 100])',
      opacity: 0,
      duration: 1
    });

    tl.from(titleSplit.chars, {
      opacity: 0,
      y: -20,
      stagger: 0.05,
      ease: "expoScale(0.5,7,none)",
    }, "<");

  })
});
onUnmounted(() => {
  if (ctx) ctx.revert();
});
</script>
<style scoped>
@reference "@/styles/tailwind.css";

.home {
@apply font-main text-white text-center flex flex-col justify-center items-center;
  height: 100vh;
  width: 100vw;
  color: white;
  position: relative;
/*  background-repeat: round;
   background-size: cover;
   background-color: var(--color-primary-500);
   background-image: url("/home.jpg");
   @media (prefers-color-scheme: dark) {
     filter: grayscale(100%);
   }*/

}

#hero-shuffle {
  @apply whitespace-nowrap font-semibold md:text-[12rem] max-md:text-[8rem] max-sm:text-[6rem];

  font-size: clamp(3rem, 12vw, 12rem);
  user-select: none;

}

#hero-shuffle-subtitle {
  @apply uppercase;
  user-select: none;
  font-size: clamp(0.5rem, 6vw, 1rem);
}
@media(max-width: 768px){
  #hero-shuffle{
    font-size: 8rem;
  }
  #hero-shuffle-subtitle{
    font-size: 1.5rem;
  }
}
</style>
