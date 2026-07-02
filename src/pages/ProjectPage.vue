<script setup lang="ts">
import projects from "@/shared/const/projects.ts";
import type {ProjectName} from "@/shared/const/project-types.ts";
import DecryptedText from "@/components/bits/DecryptedText.vue";
import PageHeaderRedirect from "@/components/PageHeaderRedirect/PageHeaderRedirect.vue";
import Splide from "@/shared/ui/Splide.vue";
import Pills from "@/components/Pills.vue";
import Button from "@/shared/ui/Button.vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()
const project = projects[route.params.name as ProjectName]

if (!project) {
  router.replace({name: 'not-found'})
}
</script>

<template>
  <template v-if="project">
    <PageHeaderRedirect
        class="header bg-gray-200 text-black"
        :subtitles="['Case Study', 'Details']"
        :text="project.title"
    />
    <section class="bg-gray-200 px-5 pb-16 project-page min-h-screen text-black flex flex-col items-center">
      <div class="project-page__content">
        <aside class="project-page__aside">
          <h2 class="text-4xl md:text-5xl font-black uppercase">
            <DecryptedText
                :speed="50"
                :use-original-chars-only="true"
                animate-on="view"
                revealDirection="start"
                :text="project.title"
            />
          </h2>
          <p class="text-base md:text-lg max-w-[28rem]">{{ project.description }}</p>
          <Pills :pills="project.pills"/>
          <div class="project-page__links flex flex-wrap gap-2 mt-2">
            <a
                v-for="link in project.links"
                :key="link.url"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Button variant="black" size="large">
                <v-icon :name="link.icon"/>
                {{ link.name }}
              </Button>
            </a>
          </div>
        </aside>
        <div v-if="project.images && project.images.length" class="project-page__slider">
          <Splide :images="project.images"/>
        </div>
      </div>
    </section>
  </template>
</template>

<style lang="scss">
.project-page {
  padding-top: 1rem;
  width: 100% !important;

  &__content {
    width: 100%;
    max-width: 80rem;
    margin: 2rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;

    @media(max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
    }
  }

  &__aside {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    flex: 0 0 20rem;
    @media(max-width: 768px) {
      flex: 1 1 auto;
      align-items: center;
      text-align: center;
    }
  }

  &__slider {
    flex: 1 1 auto;
    min-width: 20rem;
    min-height: 20rem;
  }

  &__pills {
    width: 20rem;

  }
}

.helper {
  color: var(--color-gray-400)
}

</style>
