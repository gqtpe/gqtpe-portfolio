<script setup lang="ts">
import {aboutSVGs} from "@/assets/svg";
import ava from "@/assets/img/ava.jpg"
import cv from "@/assets/CV.pdf";
import Button from "@/components/Button.vue";
import Section from "@/components/pages/About/Section.vue";
</script>

<template>
  <section class="flex flex-col">
    <h3 class="text-highlight-1 mb-4 max-sm:mb-0 self-start">who i am</h3>
    <div class="flex p-4 gap-4 mb-20  sm:items-start max-sm:flex-col items-center">
      <div class="flex flex-col items-center about__image basis-1/6 max-sm:w-[50%]">
        <img loading="lazy" class="" :src="ava" alt="">
        <a class="mt-4" :href="cv" download="CV" target='_blank'>
          <Button color="secondary">Download CV</Button>
        </a>
      </div>
      <div class="about__info basis-5/6 max-sm:text-center">
        <h3 class="hero-title">
          <DecryptedText text="i'm Nursain Temirtas" animateOn="view" use-original-chars-only></DecryptedText>
        </h3>
        <p class="body">
          A Front-end developer with one year of freelance experience(1 year). I have strong skills in modern
          technologies like React, Vite,
          TypeScript, and Redux Toolkit. I build scalable and well-structured applications. I like learning new things,
          discussing ideas with the team,
          and finding the best solutions together. I also have some Back-end experience, which helps me understand the
          full development process and
          work better with Back-end developers. I'm constantly developing person, open-minded and dedicated
        </p>
        <div class="divider"/>
        <div class="grid grid-cols-2 gap-8 max-sm:flex flex-col">
          <div>
            <h3 class="section-title">Experience</h3>
            <Section
                title="Upwork"
                period="2023 - current"
                body="Developed web applications using React and Vite. Independently designed architecture, integrated APIs, and optimized performance. Worked with TypeScript, Redux Toolkit, and testing (TDD/BDD)"
            />
          </div>
          <div>
            <h3 class="section-title">Education</h3>
            <Section
                title="Kozybaev-Arizona Universit"
                period="2022 - current"
                body="Gained expertise in engineering and computational mathematics, focusing on numerical methods, optimization algorithms, data analysis, and mathematical modeling."
            />
          </div>
        </div>
        <a class="mt-4" :href="cv" download="CV" target='_blank'>
          <Button color="secondary">Download CV</Button>
        </a>
      </div>
    </div>
    <div class="stack flex flex-col items-center grow-1 pb">
      <h4 class="section-title text-highlight-2 inline">My stack</h4>
      <div  class="flex flex-wrap items-center justify-center w-full gap-[10px]">
        <div v-for="item in aboutSVGs" class="skill">
          <img class="w-[2rem] h-[2rem]" :src="item" alt="icon">
        </div>
      </div>
    </div>

  </section>
</template>

<style>
@import "tailwindcss";

.hero-title {
  @apply uppercase mb-6 font-bold text-2xl;
}

.section-title {
  @apply text-xl font-bold mb-2;
}

.subtitle {
  @apply text-sm font-bold
}

.body {
  @apply text-sm text-gray-600;
}

.about__image {
  overflow: hidden;

  img {
    border-radius: 1rem;
    aspect-ratio: 1/1;
  }
}


.skill {
  background: white;
  border-radius: 50%;

}

</style>