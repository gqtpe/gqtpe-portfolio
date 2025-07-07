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
    <div class="font-bold flex justify-between"><span>{{ title }}</span> <span>{{period}}</span></div>
    <p class="text-left">{{body}}</p>
  </div>
</template>