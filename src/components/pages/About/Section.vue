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
    <div class="text-sm font-bold flex justify-between"><span>{{ title }}</span> <span>{{period}}</span></div>
    <p class="text-sm text-gray-600">{{body}}</p>
  </div>
</template>
<styles scoped>

</styles>
