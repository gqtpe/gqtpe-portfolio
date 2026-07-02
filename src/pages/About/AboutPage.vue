<template>
  <section
      id="about"
      class="relative overflow-hidden w-full"
      :class="[props.showLess ? 'md:h-screen !important' : '']"
  >
    <!-- bg-right crops to the image's uniform right side; home.jpg has a dark region on the
         left that grayscale turns black, and bg-cover on this tall section would show it otherwise.
         If home.jpg is swapped, re-check the crop. (background-attachment:fixed won't work here —
         ScrollSmoother transforms #main, which degrades fixed to scroll.) -->
    <div
        class="about-bg absolute inset-0 -z-10 w-full h-full bg-no-repeat bg-cover bg-right bg-[url('/home.jpg')] grayscale"></div>



    <div  class="content-wrapper flex flex-col gap-2 min-h-screen px-4 lg:px-10 max-lg:min-h-[unset]">
      <AboutHero/>
      <div v-if="!showLess" class="mb-[10rem] grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div><Languages/></div>
        <div><InfoCards title="education" :cards="data.info.cards.education" flush/></div>
      </div>
      <InfoCards v-if="!showLess" title="experience" :cards="data.info.cards.experience"/>
      <template v-if="!showLess">
        <DecryptedText
            text="stack"
            use-original-chars-only
            data-cursor-disabled
            class="uppercase text-2xl py-4 text-center font-black font-main"
        />
        <div class="mb-[10rem] flex flex-col gap-6 rounded-2xl bg-zinc-900/60 py-8 overflow-hidden">
          <LogoLoop :logos="stackRow1" direction="left" :speed="55" :logo-height="44" :gap="48" pause-on-hover fade-out fade-out-color="#18181b" aria-label="Tech stack, row 1 of 2"/>
          <LogoLoop :logos="stackRow2" direction="right" :speed="55" :logo-height="44" :gap="48" pause-on-hover fade-out fade-out-color="#18181b" aria-label="Tech stack, row 2 of 2"/>
        </div>
      </template>
    </div>
  </section>
  <PageHeaderRedirect :subtitles="['Go Ahead', 'Next Page']" text="contacts"
                      class="text-white bg-black" redirect="/contacts"/>
</template>

<script setup lang="ts">
import AboutHero from "./AboutHero.vue";
import data from "@/shared/const/about.ts";
import DecryptedText from "@/components/bits/DecryptedText.vue";
import LogoLoop from "@/components/bits/LogoLoop.vue";
import InfoCards from "@/components/InfoCards.vue";
import Languages from "@/components/Languages.vue";
import PageHeaderRedirect from "@/components/PageHeaderRedirect/PageHeaderRedirect.vue";
type IProps = {
  showLess?: boolean
}

const props = withDefaults(defineProps<IProps>(),{showLess: false})

const stackHalf = Math.ceil(data.stack.length / 2)
const stackRow1 = data.stack.slice(0, stackHalf).map(src => ({ src, alt: 'tech logo' }))
const stackRow2 = data.stack.slice(stackHalf).map(src => ({ src, alt: 'tech logo' }))
</script>