<script setup lang="ts">
import Section from "@/components/pages/About/Section.vue";
import type {InfoPage} from "@/components/pages/About/about.ts";
import {useTemplateRef} from "vue";
import Button from "@/components/Button.vue"

import DecryptedText from "@/components/bits/DecryptedText.vue";

const {info} = defineProps<{ info: InfoPage }>();

const subtitleEl = useTemplateRef<HTMLElement | null>('subtitleEl');

</script>


<template>
  <section id="about-info" class="flex justify-center">
    <div class="glass p-[4rem] w-1/1 about__info">
      <div class="about__content">
        <div class="about__image">
          <img loading="lazy" :src="info.ava" alt="">
        </div>
        <div class="about__text max-md:text-center">
          <span>
          <h3 class="uppercase mb-3 font-bold text-4xl max-md:flex-col">
            <DecryptedText :text="info.hero" animateOn="view" use-original-chars-only/>
          </h3>
          <p class="text-md text-gray-300 dark:text-gray-300">
            {{ info.subtitle }}
          </p>
            </span>
          <div class="divider"/>
          <div class="grid grid-cols-2 gap-8 max-md:flex flex-col">
            <div v-for="(card, i) in info.cards" :key="i" v-motion-slide-visible-bottom>
              <DecryptedText :text="card.cardTitle" use-original-chars-only animateOn="view" class="section-title"/>
              <Section
                  :title="card.title"
                  :period="card.period"
                  :body="card.body"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="about__button flex items-center justify-center">
        <Button link="/CV.pdf" class-name="w-[100%] h-[100%]" color="primary">Download CV</Button>
      </div>

    </div>

  </section>
</template>

<style scoped>
#about-info {
  padding: 5rem 10rem;
  background-color: var(--color-primary-500);
  background-image: var(--section1-gray);
  @media (prefers-color-scheme: dark) {
    background-color: black;
    background-image: var(--section1-gray);
  }
}

.about__info {
  display: flex;
  gap: 1rem;
  flex-direction: column;

}

.about__text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

}

.about__content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
}

.about__info {
  display: grid;
  grid-template-rows: auto 1fr;

}

.about__button {

  height: 3rem;
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;

  a {
    width: 100%;
    height: 100%;
  }
}

.about__text {
  overflow: hidden;
}

.about__image {
  height: 100%;
  align-self: start;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 2rem;

  img {
    height: 100%;
    max-height: 100%;
    max-width: 100%;
  }

}
</style>