<script setup lang="ts">

import Side from "../../Side.vue";
import ProjectCard from "./ProjectCard.vue";
import projects from "./projects.ts";
</script>

<template>
  <section class="projects flex">
    <Side title="my Projects"/>
    <div class="flex flex-col overflow-hidden h-full w-3/4 text-black items-start">

      <h3 class="inline-block text-xl uppercase text-white bg-secondary-500 p-1">latest work</h3>
      <div class="flex flex-col items-start p-8 gap-8 h-full">
        <h3 class="uppercase font-bold text-2xl border-b-4 border-t-4 border-primary-500 border-dashed">my projects</h3>
        <div class="cards grid grid-cols-4 gap-2 ">
          <ProjectCard v-for="project in projects" :title="project.title" :image="project.image"
                       :description="project.description" :key="project.id"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {

}

</style>