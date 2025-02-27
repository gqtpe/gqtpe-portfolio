<script setup lang="ts">
import {aboutSVGs} from "@/assets/svg";
import Button from "@/components/Button.vue";
import cv from "@/assets/CV.pdf";
import ava from "@/assets/img/ava.jpg"
</script>

<template>
  <section class="text-black">
    <h3 class="text-highlight-1">who i am</h3>
    <h3 class="uppercase font-bold text-4xl">i'm Nursain Temirtas</h3>
    <div>
      <img :src="ava" alt="">
    </div>
    <p class="w-100">
      A Front-end developer with one year of freelance experience(1 year). I have strong skills in modern
      technologies like React, Vite,
      TypeScript, and Redux Toolkit. I build scalable and well-structured applications. I like learning new things,
      discussing ideas with the team,
      and finding the best solutions together. I also have some Back-end experience, which helps me understand the
      full development process and
      work better with Back-end developers. I'm constantly developing person, open-minded and dedicated
    </p>
    <div class="flex flex-wrap w-full gap-[10px]">
      <div v-for="item in aboutSVGs" class="skill">
        <img class="w-[2rem] h-[2rem]" :src="item" alt="icon">
      </div>
    </div>
    <a :href="cv" download="CV" target='_blank'>
      <Button color="secondary">Download CV</Button>
    </a>

  </section>
</template>

<style scoped>
.skill {
  background: white;
  border-radius: 50%;

}

</style>