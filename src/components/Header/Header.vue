<script setup>
import Navbar from "../Navbar/Navbar.vue";
import Button from "../Button.vue";
</script>

<template>
  <header class="page-wrapper flex justify-between items-center px-12">
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