<script setup>
import Side from "../../Side.vue";
import {aboutSVGs} from "../../../assets/svg/index.js";
import Button from "../../Button.vue";
</script>

<template>
  <section class="flex text-black">
    <Side title="About"/>
    <div class="flex flex-col gap-4 items-start">
      <h3 class="inline-block text-xl uppercase text-white bg-primary-500 p-1">who i am</h3>
      <div class="p-4">
        <h3 class="uppercase font-bold text-4xl">i'm Nursain Temirtas</h3>
        <p class="w-100">
          A Front-end developer with one year of freelance experience(1 year). I have strong skills in modern
          technologies like React, Vite,
          TypeScript, and Redux Toolkit. I build scalable and well-structured applications. I like learning new things,
          discussing ideas with the team,
          and finding the best solutions together. I also have some Back-end experience, which helps me understand the
          full development process and
          work better with Back-end developers. I'm constantly developing person, open-minded and dedicated
        </p>
        <div>
          <div class="flex flex-wrap w-100 gap-[10px]">
            <div v-for="item in aboutSVGs" class="skill">
              <img class="w-[2rem] h-[2rem]" :src="item" alt="icon">
            </div>
          </div>
        </div>
        <Button color="secondary">Download CV</Button>
      </div>
    </div>

  </section>
</template>

<style scoped>
.skill {
  background: white;
  padding: 0.75rem;
  border: 2px solid black;
  border-radius: 50%;

}

</style>