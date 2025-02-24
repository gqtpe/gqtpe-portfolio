<script setup lang="ts">

</script>

<template>
  <section class="projects flex flex-col text-black items-center">
    <h3 class="text-4xl font-bold uppercase">Projects</h3>
    <div class="flex w-full h-full items-center gap-3 p-8">
      <div class="card w-1/3">
        <h3>Trello</h3>
        <img src="" alt="project-img"/>
        <p class="card__description">
          Todolist is a pet project for task management, created using modern web technologies. This project allows for convenient task management and supports user authorization.
        </p>
      </div>
      <div class="card w-1/3">
        <h3>Spotify</h3>
        <img src="" alt="project-img"/>
        <p class="card__description">
          A Spotify clone built with Next.js, offering a similar user experience to the original Spotify platform. This project integrates with the Spotify Web API to provide music streaming, playlists, and user interaction features.
        </p>
      </div>
      <div class="card w-1/3">
        <h3>Portfolio</h3>
        <img src="" alt="project-img"/>
        <p class="card__description">
          A Portfolio application build with Vue.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {

}
.card{
  height: 100%;
  border: 2px dotted black
}
</style>