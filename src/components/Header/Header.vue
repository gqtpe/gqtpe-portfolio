<script setup lang="ts">
import Navbar from "../Navbar/Navbar.vue";
import Button from "../Button.vue";
</script>

<template>
  <header class="page-wrapper flex justify-between items-center">
      <div class="logo font-black">GQTPE</div>
      <Navbar/>
      <Button color="primary">
        Let's talk
      </Button>
  </header>
</template>

<style scoped>
.logo{
  font-size: 1.5rem;
}
</style>