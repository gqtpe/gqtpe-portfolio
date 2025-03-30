<script setup lang="ts">
import Section from "@/components/pages/About/Section.vue";
import {getSlidePreset} from "@/motion/motion-presets.ts";
import DecryptedText from "@/components/bits/DecryptedText.vue";
import Button from "@/components/Button.vue"
import type {InfoPage} from "@/components/pages/About/about.ts";

defineProps<InfoPage>()
</script>

<template>
  <div class="flex p-4 gap-4 mb-8  md:items-start max-md:flex-col items-center">
    <div class="flex flex-col items-center about__image basis-1/6  ">
      <img v-motion-roll-visible-once-top loading="lazy" class="" :src="ava" alt="">
      <Button
          link="/CV.pdf"
          class="mt-4"
          v-motion="getSlidePreset({delay: 1000, initDistance: 50})"
          color="secondary"
      >
        Download CV
      </Button>
    </div>
    <div class="about__info basis-5/6 max-md:text-center">
      <h3 class="uppercase mb-6 font-bold text-2xl flex flex-row items-center gap-2 flex-wrap max-md:flex-col">
        <DecryptedText :text="hero" animateOn="view" use-original-chars-only></DecryptedText>
        <div v-motion="getSlidePreset({delay: 1100, initDistance: 50})" class="flex items-center justify-center">
          <a target="_blank" class="flex items-center justify-center" v-for="icon in icons" :href="icon.link">
            <v-icon hover animation="flash" :scale="1.2" :fill="icon.fill" :name="icon.name"/>
          </a>
        </div>
      </h3>
      <p v-motion="getSlidePreset({delay: 200, variant: 'visibleOnce'})" class="text-sm text-gray-600">
        {{subtitle}}
      </p>
      <div class="divider"/>
      <div class="grid grid-cols-2 gap-8 max-md:flex flex-col">
        <div v-for="(card, i) in cards" v-motion="getSlidePreset({delay: (i+1)*200})">
          <DecryptedText :text="card.cardTitle" use-original-chars-only animateOn="hover" class="section-title"/>
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