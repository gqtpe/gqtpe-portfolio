<script setup lang="ts">

</script>

<template>
<div class="not-found font-main flex flex-col items-center justify-center">
  <v-icon name="co-sad" scale="10"/>
  <h1 class="status code">404</h1>
  <p>Page not found</p>
</div>
</template>

<style>
.not-found{
  height: 100vh;
  width: 100vw;
  user-select: none;
  background: var(--color-zinc-400);
  color: black;
  @media(prefers-color-scheme: dark) {
    background: var(--color-zinc-900);
    color: white;
  }
  h1{
    font-size: clamp(3rem, 9vw, 6rem);
    font-weight: 500;
    margin-bottom: 1rem;
  }
  p{
    font-weight: 200;
    font-size: clamp(1rem, 5vw, 2rem);
  }
}
</style>