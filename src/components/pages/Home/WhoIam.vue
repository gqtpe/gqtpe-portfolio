<script setup lang="ts">
import {onMounted} from 'vue';
import {gsap} from 'gsap';
import SplitText from "gsap/SplitText"

onMounted(() => {
  const split1 = SplitText.create('#whoiam', {type: 'chars, lines, words'})
  gsap.from(split1.chars, {
    y: 200,
    opacity: 0,
    stagger: 0.04,
    scrollTrigger: {
      id: 'whoIam',
            markers: true,
      trigger: '#whoiam-wrapper',
      toggleActions: 'play none none reset',
      start: "top 90%",
      end: "bottom top",
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
    <div class="text-7xl font-black text-zinc-500" id="whoiam">WHO I AM<span id="whoiam-symbol">?</span></div>
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
</style>