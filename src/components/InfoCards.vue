<script setup lang="ts">
import DecryptedText from "@/components/bits/DecryptedText.vue";
import type {Cards} from "@/shared/const/about.ts";

defineProps<{ title: string; cards: Cards }>()
</script>

<template>
  <DecryptedText
      :text="title"
      use-original-chars-only
      data-cursor-disabled
      class="uppercase text-2xl py-4 text-center font-black font-main"
  />
  <div class="grid mb-[10rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
        v-for="(item, index) in cards"
        :key="item.id ?? index"
        class="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-white/30"
    >
      <div class="absolute top-4 right-4 text-white/20 group-hover:text-white transition-colors">
        <v-icon name="bi-arrow-up-right" scale="1.5" />
      </div>

      <div class="inline-block px-6 py-2 mb-4 rounded-full border border-white/20 text-md font-mono text-white/70 group-hover:bg-white group-hover:text-black transition-colors duration-300">
        {{ item.period }}
      </div>

      <h6 class="font-bold mb-3 text-white group-hover:text-primary-400 text-[clamp(1rem,4vw,1.5rem)] md:text-[clamp(1rem,3vw,1.5rem)]">
        {{ item.title }}
      </h6>

      <p class="whitespace-pre-line text-sm text-gray-100 opacity-30 leading-relaxed group-hover:opacity-100 text-[clamp(0.5rem,2vw,2rem)] md:text-[clamp(0.3rem,1.2vw,2.5rem)]">
        {{ item.body }}
      </p>
    </div>
  </div>
</template>
