<script setup lang="ts">
import projects from "@/components/pages/Projects/projects.ts";
import DecryptedText from "@/components/bits/DecryptedText.vue";
import type {ProjectName} from "@/components/pages/Projects/types.ts";
import Slide from "@/components/common/Splide.vue";
import Pills from "@/components/pages/Projects/Project/Pills.vue";

const props = defineProps<{
  projectName: ProjectName
}>()
const project = projects[props.projectName]

</script>

<template>
  <section class=" page-wrapper project-page text-black flex flex-col items-center">
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
      {{project.description}}
    </p>
    <div class="project-page__content">
        <Slide class="project-page__slider" :images="project.images"/>
        <aside class="project-page__aside">
          <a v-if="project.links.url" :href="project.links.url" class="flex items-center">
            <v-icon
                :scale="1.5"
                name="bi-link-45deg"
            />
            <span class="text-link-1 ">{{project.links.url.split('//')[1]}}</span>
          </a>
          <div v-else class="helper">(preview link not provided)</div>
          <Pills class="project-page__pills" :pills="project.pills"/>
        </aside>
    </div>
    <!--       {{JSON.stringify(project)}}-->
    <!--       {{JSON.stringify(route)}}-->
  </section>
</template>

<style lang="scss">
.project-page {
  padding-top: 1rem;
  width: 100% !important;
  &__aside{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  &__content {
    width: 100%;
    margin: 1rem 0;
    align-self:flex-start;
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    .slider {
      flex-grow: 1;
    }
    @media(max-width: 40rem){
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__slider {
    max-width: 60rem;
    min-width: 20rem;
    min-height: 20rem;
    padding: 2rem;
  }

  &__pills {
    width: 20rem;
  }
}
.helper{
  color: var(--color-gray-400)
}

</style>