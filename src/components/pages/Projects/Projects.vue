<script setup lang="ts">

import Side from "../../Side.vue";
import ProjectCard from "./ProjectCard.vue";

type Projects = {
  title: string
  image: string
  description: string
  id: number
}
const imageAddress = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHBwcHCAcHBwcHBwoHBwcHCA8ICQYKFREiFhURHx8YHSggGBolGx8TITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg0NDy0ZFRkrLSsrKy03KysrKzctKysrKysrKys3KysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEFBP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANBFHQykFAQAAAAAAFBBQEBQRQAABFAEFAQUQRQEQUAAARQEUAAFUABFAAABFARQAAAAAAAAAAAAAAQABAAAAAAAAABVAAAAAAEUAAAAAAAAAAAAAAAAQABAAAAAAAAABVAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQAAAAAVQAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAAAAFUAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAAAABVAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAQAAAVQAAAAAAQBRFAAAAAAAAAAAAAAAAAAQABAAAAAEVQAAAAAAABUAURQBAFEUAAEVAFEAURQAAAAAEAAQAAEFUAAAAAAAAAAAAAAVAFQAVAAAAVAFBAUAAAABEBFBAFUAAAAAAAAAAAAAAAAAAAAAAAAABQABFQABAAEAVQAAAAAAAAAAAAAAAAAAAAAAAABAUBEUAAARQB//9k="
const projects: Projects[] = [
  {
    id: 1,
    title: 'Trello',
    description: 'Todolist is a pet project for task management, created using modern web technologies. This project allows for convenient task management and supports user authorization.',
    image: imageAddress,
  },
  {
    id: 2,
    title: 'Spotify',
    description: 'A Spotify clone built with Next.js, offering a similar user experience to the original Spotify platform. This project integrates with the Spotify Web API to provide music streaming, playlists, and user interaction features.',
    image: imageAddress,
  },
  {
    id: 3,
    title: 'Portfolio',
    description: ' A Portfolio application build with Vue.',
    image: imageAddress,
  }
]

</script>

<template>
  <section class="projects flex">
    <Side title="my Projects"/>
    <div class="flex flex-col overflow-hidden h-full w-3/4 text-black items-start">

      <h3 class="inline-block text-xl uppercase text-white bg-secondary-500 p-1">latest work</h3>
      <div class="flex flex-col items-start p-8 gap-8 h-full">
        <h3 class="uppercase font-bold text-2xl border-b-4 border-t-4 border-primary-500 border-dashed">my projects</h3>
        <div class="cards grid grid-cols-4 gap-2 ">
          <ProjectCard v-for="project in projects" :title="project.title" :image="project.image"
                       :description="project.description" :key="project.id"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {

}

</style>