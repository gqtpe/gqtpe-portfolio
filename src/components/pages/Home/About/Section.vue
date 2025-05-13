<script setup lang="ts">
type Props = {
  title: string
  period: string
  body: string
}

defineProps<Props>()
</script>

<template>
  <div class="w-full">
    <div class="text-xl font-bold flex justify-between"><span>{{ title }}</span> <span>{{period}}</span></div>
    <p class="text-left text-xl text-gray-300 dark:text-gray-300">{{body}}</p>
  </div>
</template>