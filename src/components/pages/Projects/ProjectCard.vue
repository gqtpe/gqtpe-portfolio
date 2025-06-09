<script setup lang="ts">
import type {Project} from "@/components/pages/Projects/types";
import {RouterLink} from "vue-router";


type Props = {
  project: Project
}
defineProps<Props>()

const isHTTPLink = (url: string) => /^https?:\/\//.test(url)

const getLinkProps = (link) => {
  if (isHTTPLink(link.url)) {
    return {
      is: 'a',
      href: link.url,
      target: '_blank',
    }
  } else {
    return {
      is: RouterLink,
      to: link.url,
      target: '_self',
    }
  }
}
</script>

<template>
  <section class="project-card flex justify-center items-center">
    <div class="flex flex-col items-center">
      <v-icon
          :name="project.icon"
          class="card__icon"
          fill="var(--color-gray-900)"
      />
<!--      <div v-if="(!!project.links)" class="card__actions left-0 bottom-0 flex items-center justify-center gap-2">-->
<!--        <component-->
<!--            v-for="link in project.links"-->
<!--            :key="link.url"-->
<!--            v-bind="getLinkProps(link)"-->
<!--            class="card-action"-->
<!--        >-->
<!--          <v-icon-->
<!--              :scale="1.5"-->
<!--              hover-->
<!--              speed="fast"-->
<!--              animation="flash"-->
<!--              :name="link.icon"-->
<!--          />-->
<!--        </component>-->
<!--      </div>-->
    </div>
  </section>
</template>

<style scoped>
section {
  border-bottom: 1px solid black;
}

.card__actions {
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  height: 20%;
  transition: opacity 0.1s ease-out, transform 0.1s ease-in-out;

  .card-action {
    background: var(--color-gray-900);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.card__icon {
  font-size: 3rem !important;
  width: 10rem !important;
  height: 10rem !important;
  @media (max-width: 1440px) {
    width: 20rem !important;
    height: 20rem !important;
  }
}
</style>