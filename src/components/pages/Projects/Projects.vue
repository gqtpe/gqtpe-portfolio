<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";
import projects from "./projects";
</script>

<template>
  <PageHeaderRedirect
      variant="header"
      text="projects"
      :subtitles="['ss', 'ss']"
  />
  <section v-for="project in projects">

  </section>
</template>

<style scoped></style>