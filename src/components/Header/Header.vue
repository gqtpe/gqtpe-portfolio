<script setup lang="ts">
import Navbar from "../Navbar/Navbar.vue";
</script>

<template>
  <header>
    <div class="content flex justify-between items-center px-12">
      <div class="logo font-black">GQTPE</div>
      <Navbar/>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: var(--black);
  color: var(--white);
}
.logo{
  font-size: 1.5rem;
}
.content {
  max-width: 1440px;
  height: 3rem;
  margin: 0 auto;
  border: 1px dashed white;
  @media (max-width: 1440px) {
    max-width: 1280px;
  }
  @media (max-width: 1280px) {
    max-width: 1024px;
  }
}
</style>