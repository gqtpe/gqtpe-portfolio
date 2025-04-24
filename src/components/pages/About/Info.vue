<script setup lang="ts">
import Section from "@/components/pages/About/Section.vue";
import { getSlidePreset } from "@/motion/motion-presets.ts";
import DecryptedText from "@/components/bits/DecryptedText.vue";
import Button from "@/components/Button.vue";
import { computed } from "vue";
import type { InfoPage } from "@/components/pages/About/about.ts";

defineProps<InfoPage>();

// Один раз создаём нужные пресеты
const buttonMotion = computed(() => getSlidePreset({ delay: 1000, initDistance: 50 }));
const iconsMotion = computed(() => getSlidePreset({ delay: 1100, initDistance: 50 }));
const subtitleMotion = computed(() => getSlidePreset({ delay: 200, variant: "visibleOnce" }));

// Пресеты для карточек
</script>


<template>
  <div class="flex p-4 gap-4 mb-8  md:items-start max-md:flex-col items-center dark:text-white">
    <div class="flex flex-col items-center about__image basis-1/6  ">
      <img v-motion-roll-visible-once-top loading="lazy" class="" :src="ava" alt="">
      <Button
          link="/CV.pdf"
          class="mt-4"
          v-motion="buttonMotion"
          color="secondary"
      >
        Download CV
      </Button>
<!--      <div v-for="lang in languages">-->

<!--      </div>-->
    </div>
    <div class="about__info basis-5/6 max-md:text-center">
      <h3 class="uppercase mb-6 font-bold text-2xl flex flex-row items-center gap-2 flex-wrap max-md:flex-col">
        <DecryptedText :text="hero" animateOn="view" use-original-chars-only/>
        <div v-motion="iconsMotion" class="flex items-center justify-center">
          <a target="_blank" class="flex items-center justify-center" v-for="icon in icons" :href="icon.link">
            <v-icon hover animation="flash" :scale="1.2" :fill="icon.fill":name="icon.name"/>
          </a>
        </div>
      </h3>
      <p v-motion="subtitleMotion" class="text-sm text-gray-600 dark:text-gray-300">
        {{subtitle}}
      </p>
      <div class="divider"/>
      <div class="grid grid-cols-2 gap-8 max-md:flex flex-col">
        <div v-for="(card, i) in cards" :key="i" v-motion-slide-visible-bottom >
          <DecryptedText :text="card.cardTitle" use-original-chars-only animateOn="hover" class="section-title" />
          <Section
              :title="card.title"
              :period="card.period"
              :body="card.body"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icons{}
</style>