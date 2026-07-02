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
      <DecryptedText v-if="!showLess" text="experience" use-original-chars-only data-cursor-disabled class="uppercase text-2xl py-4 text-center font-black font-main"/>
      <div v-if="!showLess" class="grid mb-[10rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
            v-for="(item, index) in data.info.cards.experience"
            :key="index"
            class="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-white/30"
        >
          <div class="absolute top-4 right-4 text-white/20 group-hover:text-white transition-colors">
            <v-icon name="bi-arrow-up-right" scale="1.5" />
          </div>

          <div class="inline-block px-6 py-2 mb-4 rounded-full border border-white/20 text-md font-mono text-white/70 group-hover:bg-white group-hover:text-black transition-colors duration-300">
            {{ item.period }}
          </div>

          <h6 class="font-bold mb-3 text-white group-hover:text-primary-400 text-[clamp(1rem,4vw,1.5rem)] md:text-[clamp(1rem,3vw,1.5rem)]">
            {{ item.title }}
          </h6>

          <p class="whitespace-pre-line text-sm text-gray-100 opacity-30 leading-relaxed group-hover:opacity-100 text-[clamp(0.5rem,2vw,2rem)] md:text-[clamp(0.3rem,1.2vw,2.5rem)]">
            {{ item.body }}
          </p>
        </div>
      </div>
      <template v-if="!showLess">
        <DecryptedText
            text="stack"
            use-original-chars-only
            data-cursor-disabled
            class="uppercase text-2xl py-4 text-center font-black font-main"
        />
        <div class="mb-[10rem] flex flex-col gap-6 rounded-2xl bg-zinc-900/60 py-8 overflow-hidden">
          <LogoLoop :logos="stackRow1" direction="left" :speed="55" :logo-height="44" :gap="48" pause-on-hover fade-out fade-out-color="#18181b"/>
          <LogoLoop :logos="stackRow2" direction="right" :speed="55" :logo-height="44" :gap="48" pause-on-hover fade-out fade-out-color="#18181b"/>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import AboutHero from "./AboutHero.vue";
import data from "@/shared/const/about.ts";
import DecryptedText from "@/components/bits/DecryptedText.vue";
import LogoLoop from "@/components/bits/LogoLoop.vue";
type IProps = {
  showLess?: boolean
}

const props = withDefaults(defineProps<IProps>(),{showLess: false})

const stackHalf = Math.ceil(data.stack.length / 2)
const stackRow1 = data.stack.slice(0, stackHalf).map(src => ({ src, alt: 'tech logo' }))
const stackRow2 = data.stack.slice(stackHalf).map(src => ({ src, alt: 'tech logo' }))
</script>