<script setup lang="ts">
import PageHeaderRedirect from "@/components/common/PageHeaderRedirect/PageHeaderRedirect.vue";
</script>
<template>
  <PageHeaderRedirect class="header" :subtitles="['Reach Out', 'Say Hello']" text="contact"/>
  <section>
    (Currently upgrading with GSAP – work in progress.)
  </section>
</template>

<style scoped>
.header {
  background: var(--color-zinc-900);
  color: white;
}
</style>