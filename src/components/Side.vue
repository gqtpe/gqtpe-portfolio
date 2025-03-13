<script setup lang="ts">
defineProps({title:String})
</script>

<template>
  <aside  v-motion-fade-visible class="flex bg-black p-4 w-1/4 h-full">
    <div class="border-b-2 border-l-2 border-white w-full flex items-end p-4">
      <h2 class="text-xl uppercase font-bold text-white">{{ title }}</h2>
    </div>
  </aside>
</template>
