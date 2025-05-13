<script setup lang="ts">
import {onMounted} from 'vue';
import {gsap} from 'gsap';
import SplitText from "gsap/SplitText"
import data from "./about.ts"
import Info from "@/components/pages/Home/About/Info.vue";

onMounted(() => {
  const split1 = SplitText.create('#animation1', {type: 'chars, lines, words'})
  gsap.from(split1.chars,{
    opacity: 0,
    y: 200,
    stagger: 0.04,
    duration: 0.5,
    ease: 'expo.out',
    scrollTrigger: {
      trigger: '#animation1',
      toggleActions: 'restart none resume pause',
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
  <section class="whoiam flex justify-center items-center" id="about">
    <div class="text-7xl font-black text-zinc-500" id="animation1">WHO I AM?</div>
  </section>
  <Info :info="data.info"/>
</template>
<style scoped>

#about {
  overflow: hidden;
  height: 50vh !important;
}
</style>