<script setup lang="ts">
import DecryptedText from "@/components/bits/DecryptedText.vue";
import {RouterLink} from "vue-router";
import Subtitles from "@/components/common/Subtitles.vue"

type Props = {
  redirect?: string
  text: string
  subtitles: [string, string]
}
const {redirect, text, subtitles} = defineProps<Props>()
</script>

<template>
  <section class="projects-hello flex items-center justify-center w-full">
    <component
        :is="redirect?RouterLink:'div'"
        :to="redirect"
        :class="redirect?'redirect-header-link':'redirect-header-wrapper'"
    >
      <Subtitles :subtitles="subtitles">
        <DecryptedText
            :text="text"
            use-original-chars-only
            :animateOn="redirect?'hover':'view'"
            revealDirection="start"
            :animate-once="true"
            :max-iterations="5"
            :speed="redirect?55:55"
            class="text-9xl font-main font-semibold max-sm:text-5xl"
        />
      </Subtitles>
    </component>
  </section>
</template>

<style scoped>
span {
  display: inline-block
}
.redirect-header-link {
  transition: opacity 1s ease;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    transition: opacity 0.1s ease;
    opacity: 1;
  }
}

</style>