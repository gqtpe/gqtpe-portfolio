<script setup lang="ts">
import Navbar from "@/components/Navbar/Navbar.vue";
import Button from "@/components/Button.vue";
import {links} from "@/app/links.ts";
import DecryptedText from "@/components/bits/DecryptedText.vue";
</script>

<template>
  <header v-motion-slide-top class="z-20 page-wrapper flex justify-between items-center dark:text-white dark:bg-black">
      <DecryptedText text="GQTPE" use-original-chars-only class="logo font-black" />
      <Navbar/>
      <Button color="primary" :link="links.telegram">
        Let's talk
      </Button>
  </header>
</template>

<style scoped>
.logo{
  font-size: 1.5rem;
}
</style>