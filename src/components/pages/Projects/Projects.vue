<script setup lang="ts">
import PageHeaderRedirect from "@/components/common/PageHeaderRedirect/PageHeaderRedirect.vue";
import projectCards from "@/components/pages/Projects/projectCards.ts";
</script>

<template>
  <PageHeaderRedirect
      variant="header"
      text="projects"
      class="bg-black text-white"
      :subtitles="['Designs', 'Portfolio']"
  />
  <div class="projects">
    <div v-for="project in projectCards" class="project">
      <div class="image-wp">
        <img :src="project.img" class="project-img" alt="project-img">
      </div>
      <div class="project-content">
        <div class="project-year">{{ project.year }}</div>
          <RouterLink  :to="project.path" class="icon-wp glass" data-cursor-action="open">
            <v-icon :name="project.icon" class="project-icon"/>
          </RouterLink>
      </div>
    </div>
  </div>

  <PageHeaderRedirect data-cursor-action="go to" :subtitles="['Go Ahead', 'Next Page']" text="contacts"
                      class="text-white bg-black" redirect="/contacts"/>
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
        .project-year, .icon-wp {
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
    &:active{
      filter: brightness(0.8);
    }
    width: 30%;
    transition: opacity 0.3s ease, filter 0.3s ease;
    opacity: 0;
    @media(max-width: 768px){
      opacity: 1;
    }
  }

  .project-year {
    transition: opacity 0.3s ease-in-out;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    background: black;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    color: white;
    opacity: 0;
    @media(max-width: 768px){
      opacity: 1;
    }
  }
}

.header {
  color: white;
  background: var(--color-zinc-900);
}
</style>