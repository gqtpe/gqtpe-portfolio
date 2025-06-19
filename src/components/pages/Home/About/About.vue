<script setup lang="ts">
import SectionC from "@/components/pages/Home/About/Section.vue";
import type {InfoPage} from "@/components/pages/Home/About/about.ts";
import DecryptedText from "@/components/bits/DecryptedText.vue";
import Button from "@/components/common/Button.vue";

defineProps<{ info: InfoPage }>()
</script>

<template>
  <section id="about" class="flex justify-center px-10 py-15 max-sm:px-0.5">
    <div class="bg"></div>
    <div class="glass p-[2rem] flex justify-between gap-[1rem] text-white max-sm:flex-col max-sm:p-5 max-sm:text-center">
      <div class="about__header">
        <div class="about__image rounded-3xl">
          <img loading="lazy" :src="info.ava" alt=""/>
        </div>
        <div class="flex flex-col justify-around items-center gap-3">
          <Button size="large" link="/CV.pdf" class-name="w-[100%]" color="primary">
            Download CV
          </Button>
          <div class="flex glass-light p-1">
            <a target="_blank" v-for="icon in info.icons" :href="icon.link">
              <v-icon hover animation="flash" :scale="2" :fill="icon.fill" :name="icon.name"/>
            </a>
          </div>
        </div>
      </div>
      <div class="flex flex-col flex-grow self-start gap-2">
        <h3 class="uppercase mb-3 font-bold text-2xl">
          <DecryptedText :text="info.hero" animateOn="view" use-original-chars-only/>
        </h3>
        <p class="text-xl text-gray-300 dark:text-gray-300">
          {{ info.subtitle }}
        </p>

        <div class="divider"/>

        <div class="grid grid-cols-2 gap-8 max-md:flex flex-col ">
          <div v-for="(card, i) in info.cards" :key="i">
            <DecryptedText
                :text="card.cardTitle"
                use-original-chars-only
                animateOn="view"
                class="section-title max-sm:ali"
            />
            <SectionC
                :title="card.title"
                :period="card.period"
                :body="card.body"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__header{
  display: flex;
  flex-direction: column;
}
.bg{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url("src/assets/img/background/about.png");
  background-size: cover;
  @media(prefers-color-scheme: dark){
    filter: grayscale(100%);
  }
}
#about{
position: relative


}

@media (prefers-color-scheme: dark) {
  #about::before {
    filter: grayscale(80%);
  }
}

.about__info {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  overflow: hidden;
}

.about__image {
  margin-bottom: 1rem;
  min-width: 10rem;
  aspect-ratio: 1 / 1;
  overflow: hidden;

}

.about__image img {
  height: 100%;
  max-height: 100%;
  max-width: 100%;
}

</style>
