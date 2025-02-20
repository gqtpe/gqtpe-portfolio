<script setup lang="ts">

</script>

<template>
  <nav class="flex justify-around w-1/2 ">
    <div class="flex link justify-center grow h100">
      <RouterLink to="/">Home</RouterLink>
    </div>
    <div class="flex link justify-center grow h100">
      <RouterLink to="/about">About</RouterLink>
    </div>
    <div class="flex link justify-center grow h100">
      <RouterLink to="/projects">Projects</RouterLink>
    </div>
    <div class="flex link justify-center grow h100">
      <RouterLink to="/projects">Joker</RouterLink>
    </div>
  </nav>
</template>

<style scoped>

.link a{
  padding: 0.4rem 0.25rem;
  transition: background 1s ease, color 0.5s ease-in-out;
  border-radius: 0.125rem;
}

.link:hover a{
  color: var(--white);
  background-color: var(--black);

}
</style>