<script setup lang="ts">
import projects from "@/components/pages/Projects/projects.ts";
import PageHeaderRedirect from "@/components/PageHeaderRedirect/PageHeaderRedirect.vue";
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


<style scoped>
.projects-hello {
  background: var(--color-zinc-800);
}

.projects-hello {
  color: white;
}
</style>
<!--    <h3 class="text-highlight-1">latest work</h3>-->
<!--    <h6 class="text-comment px-8 pt-4">"Hi! I build scalable, user-friendly web applications. Here are some-->
<!--      of my latest projects."</h6>-->
<!--    <div class="flex flex-col items-start p-8 gap-8">-->
<!--      <h3 class="text-highlight-2">my projects</h3>-->
<!--      <div class="cards w-full grid grid-cols-3 gap-2 max-md:grid-cols-2 max-sm:flex flex-col">-->
<!--        <ProjectCard v-for="project in projects"-->
<!--                     :project="project"-->
<!--                     :key="project.id"-->
<!--        />-->
<!--      </div>-->
<!--    </div>-->