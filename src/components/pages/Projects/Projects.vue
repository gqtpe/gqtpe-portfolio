<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";
import projects from "./projects.ts";
</script>

<template>
  <section class="text-black">
      <h3 class="text-highlight-1">latest work</h3>
      <h6 class="text-comment px-8">"Hi! I build scalable, user-friendly web applications. Here are some
        of my latest projects."</h6>
      <div class="flex flex-col items-start p-8 gap-8">
        <h3 class="text-highlight-2">my projects</h3>
        <div class="cards w-full grid grid-cols-3 gap-2 max-lg:grid-cols-1">
          <ProjectCard v-for="project in projects"
                       :project="project"
                       :key="project.id"
          />
        </div>
      </div>
  </section>
</template>

<style scoped></style>