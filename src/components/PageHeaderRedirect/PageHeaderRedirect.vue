<script setup lang="ts">
import DecryptedText from "@/components/bits/DecryptedText.vue";
import {RouterLink} from "vue-router";
import Subtitles from "@/components/bits/Subtitles.vue"

type Props = {
  redirect?: string
  text: string
  subtitles: [string, string]
}
const {redirect, text, subtitles} = defineProps<Props>()
</script>

<template>
  <section class="h-[100vh] page-header-redirect flex items-center justify-center">
    <Subtitles :subtitles="subtitles">
    <component
        :is="redirect?RouterLink:'div'"
        :to="redirect"
        :class="redirect?'redirect-header-link':'redirect-header-wrapper'"
        :data-cursor-action="redirect?'go to':'disabled'"
    >
      <DecryptedText
          v-if="redirect"
          :text="text"
          data-cursor-action="go to"
          use-original-chars-only
          :sequential="false"
          animateOn="hover"
          revealDirection="start"
          :max-iterations="5"
          :speed="55"
          class="redirect-title redirect-decrypted"
      />
      <DecryptedText
          v-else
          data-cursor-disabled
          :text="text"
          use-original-chars-only
          :sequential="false"
          animateOn="view"
          revealDirection="start"
          :max-iterations="5"
          :speed="redirect?55:55"
          class="redirect-decrypted"
      />
    </component>
    </Subtitles>
  </section>
</template>

<style>
@reference '@/styles/tailwind.css';
.redirect-decrypted{
  @apply font-main font-semibold;
  font-size: clamp(3rem, 15vw, 12rem);
  @media(max-width: 768px){
    font-size: 6.5rem;
  }

}
.page-header-redirect{
  span{
    display: inline-block
  }
}
.redirect-title {
  cursor: pointer
}
.redirect-header-link {
  transition: opacity 1s ease;

  &:active {
    transition: opacity 0.1s ease;
    opacity: 1;
  }
}

</style>