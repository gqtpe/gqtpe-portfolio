<script setup lang="ts">
import PageHeaderRedirect from "@/components/common/PageHeaderRedirect/PageHeaderRedirect.vue";
import projectCards from "@/components/pages/Projects/projectCards.ts";
</script>

<template>
  <PageHeaderRedirect
      variant="header"
      text="projects"
      class="header"
      :subtitles="['Designs', 'Portfolio']"
  />
  <div class="projects">
    <div v-for="project in projectCards" class="project">
      <div class="image-wp">
        <img :src="project.img" class="project-img" alt="project-img">
      </div>
      <div class="project-content">
        <div class="project-year">{{ project.year }}</div>
        <div class="icon-wp glass" data-cursor-action="open">
          <v-icon :name="project.icon" class="project-icon">
          </v-icon>
        </div>
      </div>
    </div>
  </div>


</template>


<style scoped>
.image-wp {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.projects {
  background: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  position: relative;

  .project {
    min-height: 80vh;
    min-width: 40vh;
    aspect-ratio: 1/1;
    border-radius: 0.25rem;
    overflow: hidden;
    position: relative;

    &:hover {
      .project-year,.icon-wp {
        opacity: 1;
      }

      .project-img {
        transform: scale(100%);
      }
    }
  }

  .project-content {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .project-img {
    transition: transform 0.3s ease-in-out;
    transform: scale(120%);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .project-icon {
    color: black;
    width: 100%;
    height: 100%;
    font-size: 2rem;

  }

  .icon-wp {
    opacity: 0;
    width: 30%;
    height: 30%;
    transition: opacity 0.3s ease;
  }

  .project-year {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    background: black;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    color: white;
  }
}

.header {
  color: white;
  background: var(--color-zinc-900);
}
</style>