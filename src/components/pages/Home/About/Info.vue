<script setup lang="ts">
import Section from "@/components/pages/Home/About/Section.vue";
import type {InfoPage} from "@/components/pages/Home/About/about.ts";
import Button from "@/components/Button.vue";
import DecryptedText from "@/components/bits/DecryptedText.vue";

const {info} = defineProps<{ info: InfoPage }>();
</script>

<template>
  <section id="about-info" class="flex justify-center">
    <div class="glass p-[2rem] about__info">
      <div class="about__image">
        <img loading="lazy" :src="info.ava" alt=""/>
      </div>
      <div class="about__text max-md:text-center">
        <h3 class="uppercase mb-3 font-bold text-4xl max-md:flex-col">
          <DecryptedText :text="info.hero" animateOn="view" use-original-chars-only/>
        </h3>
        <p class="text-xl text-gray-300 dark:text-gray-300">
          {{ info.subtitle }}
        </p>

        <div class="divider"/>

        <div class="grid grid-cols-2 gap-8 max-md:flex flex-col">
          <div v-for="(card, i) in info.cards" :key="i">
            <DecryptedText
                :text="card.cardTitle"
                use-original-chars-only
                animateOn="view"
                class="section-title"
            />
            <Section
                :title="card.title"
                :period="card.period"
                :body="card.body"
            />
          </div>
        </div>
      </div>

      <div class="about__links flex flex-col justify-around items-center">
        <div class="flex glass-light p-1">
          <a target="_blank"  v-for="icon in info.icons" :href="icon.link">
            <v-icon hover animation="flash" :scale="2" :fill="icon.fill" :name="icon.name"/>
          </a>
        </div>
        <Button size="large" link="/CV.pdf" class-name="w-[100%]" color="primary">
          Download CV
        </Button>
      </div>
    </div>

  </section>
</template>

<style scoped>
#about-info {
  padding: 2.5rem 5rem;
  background-color: var(--color-primary-500);
  background-image: var(--section1-gray);
}

@media (prefers-color-scheme: dark) {
  #about-info {
    background-color: var(--color-gray-400);
    background-image: var(--section1-gray);
  }
}

.about__info {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto auto;
  gap: 1rem;
  flex-direction: column;
  overflow: hidden;
}

.about__text {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  overflow: hidden;
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: -1;
}

.about__image {
  height: 29rem;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 2rem;
  align-self: start;
  flex-shrink: 0;
  grid-column-start: 1;
}

.about__image img {
  height: 100%;
  max-height: 100%;
  max-width: 100%;
}

.about__links {
  #button-link{
    width: 100%;
  }
  grid-row: 2;
}

</style>
