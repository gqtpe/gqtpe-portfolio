<script setup lang="ts">
import {onMounted} from 'vue';
import {gsap} from 'gsap';
import SplitText from "gsap/SplitText"

onMounted(() => {
  const split1 = SplitText.create('#animation1', {type: 'chars, lines, words'})
  gsap.from(split1.chars, {
    opacity: 0,
    y: 200,
    delay:0.5,
    stagger: 0.04,
    duration: 0.5,
    ease: 'expo.out',
    scrollTrigger: {
      trigger: '#animation1',
      toggleActions: 'resume pause resume pause',
    }
  });

});
</script>

<style scoped>
section {
  color: white;
}
</style>

<template>
  <section class="half flex justify-center items-center" id="whoiam">
    <div class="text-7xl font-black text-zinc-500" id="animation1">WHO I AM?</div>
  </section>
</template>
<style scoped>
#whoiam {
  background: white;
  @media (prefers-color-scheme: dark) {
    background: black;
  }
}
</style>