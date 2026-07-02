<script setup lang="ts">
import DecryptedText from "@/components/bits/DecryptedText.vue";
import type {Cards} from "@/shared/const/about.ts";

defineProps<{ cards: Cards }>()
</script>

<template>
  <DecryptedText
      text="education"
      use-original-chars-only
      data-cursor-disabled
      class="uppercase text-2xl py-4 text-center font-black font-main"
  />
  <ul class="flex flex-col">
    <li
        v-for="item in cards"
        :key="item.id"
        class="group py-6 "
    >
      <div class="flex items-baseline justify-between gap-4">
        <h6 class="font-main font-bold uppercase leading-[0.9] text-black transition-colors group-hover:text-primary-400 text-[clamp(1.25rem,4vw,2.25rem)]">
          {{ item.title }}
        </h6>
        <span class="font-mono text-black whitespace-nowrap text-xs md:text-sm">
          {{ item.period }}
        </span>
      </div>
      <p class="whitespace-pre-line mt-3 text-black leading-relaxed text-[clamp(0.75rem,3vw,1rem)] md:text-[clamp(0.85rem,2vw,1.05rem)]">
        {{ item.body }}
      </p>
    </li>
  </ul>
</template>
