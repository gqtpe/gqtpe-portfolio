<script setup lang="ts">
import PageHeaderRedirect from "@/components/common/PageHeaderRedirect/PageHeaderRedirect.vue";
</script>

<template>
  <PageHeaderRedirect
      variant="header"
      text="projects"
      class="header"
      :subtitles="['Designs', 'Portfolio']"
  />


</template>


<style scoped>
.header {
  color: white;
  background: var(--color-zinc-900);
}
</style>