<script setup lang="ts">
import {onMounted} from 'vue';
import {gsap} from 'gsap';
import SplitText from "gsap/SplitText"

onMounted(() => {

  const split1 = SplitText.create('#whoiam', {type: 'chars, lines, words'})
  const tl = gsap.timeline({
    scrollTrigger: {
      id: 'whoIam',
      /*       markers: true,*/
      trigger: '#whoiam-wrapper',
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
  // tl.set('#whoiam-ghost', { autoAlpha: 1 })
  //     .set('#whoiam', { autoAlpha: 0 });
  // tl.to('#whoiam-ghost', {
  //   scale: 0.5,
  //   filter: 'brightness(200%)',
  //   scrollTrigger: {
  //     trigger: '#whoiam-ghost',
  //     scrub: true,
  //     start: 'bottom center',
  //     pin: true,
  //     end: '+40%'
  //   }
  // })
/*  tl.to('#question-symbol',{
    rotate: 27,
    xPercent: 100,
    opacity: 0,
    scrollTrigger:{
      trigger: '#question-symbol',
      scrub: true,
      markers: true,
      start: 'top center',
      end: '50vh',
    }
  })*/
});
</script>

<style scoped>
section {
  color: white;
}
</style>

<template>
  <section class="half flex justify-center items-center" id="whoiam-wrapper">
    <div class="text-7xl font-black text-zinc-500" id="whoiam">WHO I AM?</div>
    <div class="text-7xl font-black text-zinc-500" id="whoiam-ghost"><span id="question-symbol">WHO </span>I AM<span id="question-symbol">?</span></div>
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
#whoiam-ghost{
  opacity: 0;
  position: absolute;
}
</style>