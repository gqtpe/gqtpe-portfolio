<script setup lang="ts">
import {onMounted, ref} from "vue";
import data from "@/shared/const/about.ts";
import DecryptedText from "@/components/bits/DecryptedText.vue";

const shown = ref(false)
onMounted(() => {
  requestAnimationFrame(() => {
    shown.value = true
  })
})
</script>

<template>
  <DecryptedText
      text="languages"
      use-original-chars-only
      data-cursor-disabled
      class="uppercase text-2xl py-4 text-center font-black font-main"
  />
  <div class="mb-[10rem] mx-auto w-full max-w-2xl flex flex-col gap-6">
    <div v-for="lang in data.languages" :key="lang.name" class="flex flex-col gap-2">
      <div class="flex justify-between items-baseline text-white">
        <span class="font-main font-bold text-lg">{{ lang.name }}</span>
        <span class="font-mono text-sm text-white/60">{{ lang.level }}</span>
      </div>
      <div class="h-2 w-full rounded-full bg-white/10 overflow-hidden">
        <div
            class="h-full rounded-full bg-white transition-[width] duration-1000 ease-out"
            :style="{ width: (shown ? lang.value : 0) + '%' }"
        ></div>
      </div>
    </div>
  </div>
</template>
