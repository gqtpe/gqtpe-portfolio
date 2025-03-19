<script setup lang="ts">
import Navbar from "@/components/Navbar/Navbar.vue";
import Button from "@/components/Button.vue";
import {links} from "@/app/links.ts";
import DecryptedText from "@/components/bits/DecryptedText.vue";
</script>

<template>
  <header v-motion-slide-top class="z-20 page-wrapper flex justify-between items-center">
      <DecryptedText text="GQTPE" use-original-chars-only class="logo font-black" />
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