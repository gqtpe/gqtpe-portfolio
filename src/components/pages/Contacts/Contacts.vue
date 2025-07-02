<script setup lang="ts">
import PageHeaderRedirect from "@/components/common/PageHeaderRedirect/PageHeaderRedirect.vue";
</script>
<template>
  <PageHeaderRedirect class="header" :subtitles="['Reach Out', 'Say Hello']" text="contact"/>
</template>

<style scoped>
.header {
  background: var(--color-zinc-900);
  color: white;
}
</style>