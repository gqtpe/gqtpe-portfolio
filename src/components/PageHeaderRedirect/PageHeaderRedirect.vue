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
  <section class="h-[100vh] projects-hello flex items-center justify-center">
    <Subtitles :subtitles="subtitles">
    <component
        :is="redirect?RouterLink:'div'"
        :to="redirect"
        :class="redirect?'redirect-header-link':'redirect-header-wrapper'"
    >

        <DecryptedText
            :text="text"
            use-original-chars-only
            :animateOn="redirect?'hover':'view'"
            revealDirection="start"
            :animate-once="true"
            :max-iterations="5"
            :speed="redirect?55:55"
            class="title"
        />
    </component>
    </Subtitles>
  </section>
</template>

<style scoped>
@reference '@/styles/tailwind.css';
.title{
  @apply font-main font-semibold;
  font-size: clamp(3rem, 15vw, 12rem);
  @media(max-width: 768px){
    font-size: 6.5rem;
  }

}
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