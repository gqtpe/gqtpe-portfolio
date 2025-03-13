<script setup lang="ts">
import ava from "@/assets/img/ava_corrected.png"
import cv from "@/assets/CV.pdf";
import Button from "@/components/Button.vue";
import Section from "@/components/pages/About/Section.vue";
import DecryptedText from "@/components/bits/DecryptedText.vue";
import FallingItems from "@/components/bits/FallingItems.vue";
</script>

<template>
  <section class="flex flex-col">
    <h3 class="text-highlight-1 mb-4 max-sm:mb-0 self-start">who i am</h3>
    <div class="flex p-4 gap-4 mb-8  md:items-start max-md:flex-col items-center">
      <div class="flex flex-col items-center about__image basis-1/6 max-md:w-[50%]">
        <img v-motion-roll-visible-left loading="lazy" class="" :src="ava" alt="">
        <a class="mt-4" :href="cv" download="CV" target='_blank'>
          <Button color="secondary">Download CV</Button>
        </a>
      </div>
      <div class="about__info basis-5/6 max-md:text-center">
        <h3 class="uppercase mb-6 font-bold text-2xl">
          <DecryptedText text="i'm Nursain Temirtas" animateOn="view" use-original-chars-only></DecryptedText>
        </h3>
        <p v-motion-slide-visible-bottom class="text-sm text-gray-600">
          A Front-end developer with one year of freelance experience(1 year). I have strong skills in modern
          technologies like React, Vite,
          TypeScript, and Redux Toolkit. I build scalable and well-structured applications. I like learning new things,
          discussing ideas with the team,
          and finding the best solutions together. I also have some Back-end experience, which helps me understand the
          full development process and
          work better with Back-end developers. I'm constantly developing person, open-minded and dedicated
        </p>
        <div class="divider"/>
        <div  class="grid grid-cols-2 gap-8 max-md:flex flex-col">
          <div v-motion-slide-visible-bottom>
            <h3 class="section-title">Experience</h3>
            <Section
                title="Upwork"
                period="2023 - current"
                body="Developed web applications using React and Vite. Independently designed architecture, integrated APIs, and optimized performance. Worked with TypeScript, Redux Toolkit, and testing (TDD/BDD)"
            />
          </div>
          <div v-motion-slide-visible-bottom>
            <h3 class="section-title">Education</h3>
            <Section
                title="Kozybaev-Arizona University"
                period="2022 - current"
                body="Gained expertise in engineering and computational mathematics, focusing on numerical methods, optimization algorithms, data analysis, and mathematical modeling."
            />
          </div>
        </div>
      </div>
    </div>
    <div  class="stack flex flex-col items-center grow-1">
      <h4 v-motion-slide-visible-bottom class="section-title text-highlight-2 inline">My stack</h4>
      <FallingItems/>
    </div>

  </section>
</template>

<style>
.stack{
  min-height: 10rem;
}


.about__image {
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