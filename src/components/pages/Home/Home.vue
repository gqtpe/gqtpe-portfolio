<script setup lang="ts">
import Button from "@/components/Button.vue";
import Typing from "@/components/Typing.vue";
import DecryptedText from "@/components/bits/DecryptedText.vue";
import {getSlidePreset} from "@/motion/motion-presets.ts";
import {computed} from "vue";

// switching items on home page
const items = [
  'web developer',
  'frontend developer',
  'software engineer',
];

// motion presets
const buttonMotion = computed(() => getSlidePreset({ delay: 500 ,direction: "bottom" ,variant:'visibleOnce'}));
</script>

<template>
  <section class="flex items-center text-white max-md:justify-center">
    <div class="bg-black p-8 flex flex-col gap-[10px] items-start max-md:w-full text-white">
      <h6 class="ellipse1 uppercase text-lg font-bold">
        <DecryptedText
            text="hello, there"
            animateOn="view"
            revealDirection="start"
        />
      </h6>

      <h1 class="ellipse2 uppercase font-black lg:text-7xl sm:text-6xl max-md:text-7xl max-sm:text-3xl">
        <DecryptedText
            text="i'm Nursain Temirtas"
            animateOn="view"
            revealDirection="start"
        />
      </h1>

      <h6 class="uppercase font-bold">
        <Typing :items="items" />
      </h6>

      <Button
          v-motion="buttonMotion"
          color="secondary"
          link="/CV.pdf"
      >
        Download CV
      </Button>
    </div>
  </section>
</template>

<style scoped>
.ellipse1, .ellipse2 {
  position: relative;
  z-index: 1;
}

.ellipse1:before, .ellipse2:after {
  content: "";
  position: absolute;
  width: 2rem;
  height: 2rem;
}

.ellipse1:before {
  background-color: var(--color-secondary-500);
  border-radius: 50%;
  z-index: -1;
  bottom: -10%;
  left: -1%;
}

.ellipse2:after {
  background-color: var(--color-primary-500);
  border-radius: 50%;
  z-index: -1;
  bottom: -10%;
  right: -1%;
}
</style>
