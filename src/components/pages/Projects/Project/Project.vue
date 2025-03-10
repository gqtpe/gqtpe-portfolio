<script setup lang="ts">
import projects from "@/components/pages/Projects/projects.ts";
import DecryptedText from "@/components/bits/DecryptedText.vue";
import type {ProjectName} from "@/components/pages/Projects/types.ts";
import Slide from "@/components/Splide.vue";

const props = defineProps<{
  projectName: ProjectName
}>()
const project = projects[props.projectName]

</script>

<template>
  <section class="project-page text-black flex flex-col items-center">
    <h2 class="text-3xl font-black uppercase self-start">
      <DecryptedText
          :speed="50"
          :use-original-chars-only="true"
          animate-on="view"
          revealDirection="start"
          :text="project.title"
      />
    </h2>
    <p class="text-comment text-sm self-start">
      <DecryptedText
          :speed="100"
          :use-original-chars-only="true"
          animate-on="view"
          revealDirection="start"
          :text="project.description"
      />
    </p>
    <div class="w-[50%]">
      <Slide v-if="project.images"  :images="project.images"/>
    </div>
    <!--       {{JSON.stringify(project)}}-->
    <!--       {{JSON.stringify(route)}}-->
  </section>
</template>

<style>
.project-page {
  max-width: 100vw;
  width: 100% !important;
}
</style>