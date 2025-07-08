<script setup lang="ts">
import {onMounted} from 'vue';
import {gsap} from 'gsap';
import SplitText from "gsap/SplitText"
import {useIsMobile} from "@/app/hooks/useIsMobile.ts";
const isMobile = useIsMobile()
onMounted(() => {

  const split1 = SplitText.create('#whoiam', {type: 'chars, lines, words'})
  const tl = gsap.timeline({
    scrollTrigger: {
      id: 'whoIam',
      trigger: '#whoiam',
      toggleActions: 'play none none reset',
      start: "top bottom",
      end: "bottom top",
    }
  })
  tl.from(split1.chars, {
    y: 200,
    opacity: 0,
    stagger: 0.04,
    duration: 0.5,
  })
  tl.to('#whoiam', {
    scaleY: isMobile?15:10,
    yPercent: 175,
    scrollTrigger: {
      trigger: '#whoiam-wrapper',
      scrub: true,
      start: 'top center',
      end: '150% center',
      pinSpacing: false,
    }
  })
});
</script>

<style scoped>
section {
  color: white;
}
</style>

<template>
  <section class="half flex justify-center items-center" id="whoiam-wrapper">
    <div class=" text-center font-black text-zinc-300 uppercase" id="whoiam">who i am?</div>
  </section>
</template>
<style scoped>
#whoiam-wrapper {

  overflow: hidden;
  background: white;
  @media (prefers-color-scheme: dark) {
    background: black;
  }
}

#whoiam {
  white-space: nowrap;
  z-index: 2;

  font-size: clamp(3rem, 6vw, 4rem);
  position: absolute;
  mix-blend-mode: difference;
}
</style>