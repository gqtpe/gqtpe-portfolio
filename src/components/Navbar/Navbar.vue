<script setup lang="ts">

</script>

<template>
  <nav class="flex justify-around w-1/2 ">
    <div class="flex link justify-center grow h100">
      <a  href="#">Home</a>
    </div>
    <div class="flex link justify-center grow h100">
      <a  href="#">About</a>
    </div>
    <div class="flex link justify-center grow h100">
      <a  href="#">Projects</a>
    </div>
    <div class="flex link justify-center grow h100">
      <a  href="#">Contacts</a>
    </div>

  </nav>
</template>

<style scoped>

.link a{
  padding: 0.4rem 0.25rem;
  transition: background-color, 0.2s ease-in;

}

.link:hover a{
  color: var(--black);
  background-color: var(--white);
  border-radius: 0.125rem;
}
</style>