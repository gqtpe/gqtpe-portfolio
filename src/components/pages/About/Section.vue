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
    <div class="subtitle flex justify-between"><span>{{ title }}</span> <span>{{period}}</span></div>
    <p class="body">{{body}}</p>
  </div>
</template>
<styles scoped>

</styles>
