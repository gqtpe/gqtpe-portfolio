<script setup lang="ts">
type Props = {
  title: string
  period: string
  body: string
}

defineProps<Props>()
</script>

<template>
  <div>
    <div class="font-bold flex justify-between mb-1">
      <span>{{ title }}</span> <span>{{ period }}</span></div>
    <p class="text-left whitespace-pre-line leading-6">{{ body }}</p>
  </div>
</template>