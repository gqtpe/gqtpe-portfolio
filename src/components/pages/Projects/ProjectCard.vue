<script setup lang="ts">
import {cutFrom} from "@/utils/cutFrom";
import type {Project} from "@/components/pages/Projects/types";
import {getPopupPreset} from "@/motion/motion-presets.ts";


type Props = {
  project: Project
}
</script>

<template>
  <div class="card" v-motion="getPopupPreset({delay: project.id*100, variant: 'visibleOnce'})">
    <div class="card__image relative overflow-hidden flex items-center justify-center">
      <v-icon
          :name="project.icon"
          class="card__icon"
          fill="var(--color-gray-900)"
      />
      <div v-if="(!!project.links)"
           class="card__actions absolute left-0 bottom-0 flex items-center justify-center gap-2">
        <RouterLink v-if="!!project.links.path" :to="project.links.path" class="card-action">
          <v-icon
              :scale="1.5"
              :hover="true"
              speed="fast"
              animation="flash"
              name="fa-expand"/>
        </RouterLink>
        <a v-if="!!project.links.url" target="_blank" class="card-action" :href="project.links.url">
          <v-icon
              :scale="1.5"
              :hover="true"
              speed="fast"
              animation="flash"
              name="fa-external-link-square-alt"/>
        </a>
        <a v-if="!!project.links.github" target="_blank" class="card-action" :href="project.links.github">
          <v-icon
              :scale="1.5"
              :hover="true"
              speed="fast"
              animation="flash"
              name="bi-github"/>
        </a>
      </div>
    </div>
    <div class="card__description">
      <RouterLink :to="project.links.path || '#'"><h3 class="text-link-1 text-lg ">{{ project.title }}</h3></RouterLink>
      <p class="text-xs text-gray-500">{{ cutFrom(project.description) }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  min-width: 10rem;
}

.card__actions {
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  transform: translateX(-20%);
  height: 20%;
  opacity: 0;
  transition: opacity 0.1s ease-out, transform 0.1s ease-in-out;

  .card-action {
    background: var(--color-gray-900);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.card__description {
  padding: 0.5rem;
  margin-right: 1rem;
}

.card__icon {
  font-size: 3rem !important;
  width: 3rem !important;
  height: 3rem !important;
  @media (max-width: 1440px) {
    width: 5rem !important;
    height: 5rem !important;
  }
}

.card__image {
  background: linear-gradient(135deg, var(--color-secondary-200) 0%, var(--color-primary-200) 100%);
  aspect-ratio: 16/9;

  &:hover {
    .card__actions {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>