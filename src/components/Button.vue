<script setup lang="ts">
type Props = {
  color: 'primary' | 'secondary'
}
 defineProps<Props>()
const secondaryClasses = "bg-secondary-500 hover:bg-primary-500"
const primaryClasses = "bg-primary-500 hover:bg-secondary-500"
</script>

<template>
  <button :class="`${color==='primary'?primaryClasses:secondaryClasses} transition-colors text-white font-bold py-2 px-4 rounded-full`">
    <slot/>
  </button>
</template>
