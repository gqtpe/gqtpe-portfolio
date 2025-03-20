<script setup lang="ts">
import cv from "@/assets/CV.pdf";
import ava from "@/assets/img/ava_corrected.png"
import Button from "@/components/Button.vue";
import SectionT from "@/components/pages/About/Section.vue";
import DecryptedText from "@/components/bits/DecryptedText.vue";
import FallingItems from "@/components/bits/FallingItems.vue";
import {getSlidePreset} from "@/motion/motion-presets.ts";
import SimpleStack from "@/components/pages/About/SimpleStack.vue";

import aboutPage from "./about.ts";
const windowWidth = window.innerWidth
</script>

<template>
  <section  class="flex flex-col">
    <h3 class="text-highlight-1 mb-4 max-sm:mb-0 self-start">who i am</h3>
    <Info v-bind="aboutPage.info"/>
    <div class="stack flex flex-col items-center grow-1">
      <DecryptedText v-motion-slide-visible-bottom text="My stack" use-original-chars-only animateOn="hover"
                     class="section-title text-highlight-2 inline"/>
      <FallingItems v-if="windowWidth >= 768" :svgs="aboutPage.stack"/><!--optimization for mobile devices-->
      <SimpleStack v-else :svgs="aboutPage.stack"/>
    </div>

  </section>
</template>

<style>
.stack {
  min-height: 10rem;
}


.about__image {
  max-width: 15rem;
  img {
    border-radius: 1rem;
    aspect-ratio: 1/1;
  }
}

</style>