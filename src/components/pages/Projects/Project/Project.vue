<script setup lang="ts">
import {useRoute} from "vue-router";
import projects from "@/components/pages/Projects/projects.ts";
import DecryptedText from "@/components/bits/DecryptedText.vue";
import type {ProjectName} from "@/components/pages/Projects/types.ts";

const props = defineProps<{
  projectName: ProjectName
}>()
const route = useRoute()
const project = projects[props.projectName]
</script>

<template>
  <section class="project text-black">
    <h2 class="text-3xl font-black uppercase">
      <DecryptedText
          :speed="50"
          :use-original-chars-only="true"
          animate-on="view"
          revealDirection="start"
          :text="project.title"
      />
    </h2>
    <p class="text-comment text-sm">
      <DecryptedText
          :speed="100"
          :use-original-chars-only="true"
          animate-on="view"
          revealDirection="start"
          :text="project.description"
      />
    </p>
    <div v-if="project.images" class="flex flex-row w-full  justify-start items-start gap-4 scroll-x p-4">
      <div class="w-[30%] flex flex-col items-center" v-for="image in project.images">
        <img class="border-2 mb-2 border-primary-500" :src="image.url" :alt="project.id">
        <div v-if="image.title">{{image.title}}</div>
      </div>
    </div>
    <!--   {{JSON.stringify(project)}}-->
       {{JSON.stringify(route)}}
  </section>
</template>

<style scoped>
.project {
  max-width: 100vw;
  width: 100% !important;
}

</style>