<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from "vue";
import data from "@/shared/const/about.ts";
import DecryptedText from "@/components/bits/DecryptedText.vue";

// Reveal the bars (0 -> value) when the section scrolls into view, so the
// animation is actually seen — mounting alone plays it far below the fold.
const shown = ref(false)
const root = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!window.IntersectionObserver) {
    shown.value = true
    return
  }
  observer = new IntersectionObserver((entries) => {
    if (entries.some(e => e.isIntersecting)) {
      shown.value = true
      observer?.disconnect()
    }
  }, {threshold: 0.3})
  if (root.value) observer.observe(root.value)
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <DecryptedText
      text="languages"
      use-original-chars-only
      data-cursor-disabled
      class="uppercase text-2xl py-4 text-center font-black font-main"
  />
  <div ref="root" class="w-full flex flex-col gap-6">
    <div v-for="lang in data.languages" :key="lang.name" class="flex flex-col gap-2">
      <div class="flex justify-between items-baseline text-black">
        <span class="font-main font-bold text-lg">{{ lang.name }}</span>
        <span class="font-mono text-sm text-black/50">{{ lang.level }}</span>
      </div>
      <div class="h-2 w-full rounded-full bg-black/10 overflow-hidden">
        <div
            class="h-full rounded-full bg-black transition-[width] duration-1000 ease-out"
            :style="{ width: (shown ? lang.value : 0) + '%' }"
        ></div>
      </div>
    </div>
  </div>
</template>
