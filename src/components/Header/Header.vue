<script setup lang="ts">
import Navbar from "@/components/Navbar/Navbar.vue";
import Button from "@/components/Button.vue";
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