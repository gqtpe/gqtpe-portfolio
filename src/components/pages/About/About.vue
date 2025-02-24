<script setup lang="ts">
import {aboutSVGs} from "../../../assets/svg";
</script>

<template>
  <section class="flex items-center px-4">
    <div class="block bg-black p-4">
      <h2 class="text-5xl uppercase font-bold">About</h2>
      <p>
        Iam a Front-end developer with one year of freelance experience(1 year). I have strong skills in modern
        technologies like React, Vite,
        TypeScript, and Redux Toolkit. I build scalable and well-structured applications. I like learning new things,
        discussing ideas with the team,
        and finding the best solutions together. I also have some Back-end experience, which helps me understand the
        full development process and
        work better with Back-end developers. I'm constantly developing person, open-minded and dedicated
      </p>


    </div>
    <div>
      <h6 class="text-2xl underline text-black">Libraries and Tools</h6>
      <div class="flex flex-wrap gap-[10px]">
        <div v-for="item in aboutSVGs" class="skill shadow-2xl">
          <img class="w-[3rem] h-[3rem]" :src="item" alt="icon">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill{
  background: white;
  padding: 0.75rem;
  border-radius: 50%;

}
.block {
  width: 50%;
  height: 80%;
}
</style>