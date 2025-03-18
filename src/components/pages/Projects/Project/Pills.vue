<script setup lang="ts">
import type {Pill} from "@/components/pages/Projects/types.ts";

defineProps<{ pills: Pill[] }>()

</script>

<template>
  <div class="pills">
    <span v-for="pill in pills" class="pill">{{ pill }}</span>
  </div>
</template>

<style scoped>
</style>