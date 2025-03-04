<script setup lang="ts">
import Navbar from "@/components/Navbar/Navbar.vue";
import Button from "@/components/Button.vue";
import {links} from "@/app/links.ts";
</script>

<template>
  <header class="page-wrapper flex justify-between items-center">
      <div class="logo font-black">GQTPE</div>
      <Navbar/>
    <a target="_blank" :href="links.telegram">
      <Button color="primary">
        Let's talk
      </Button>
    </a>
  </header>
</template>

<style scoped>
.logo{
  font-size: 1.5rem;
}
</style>