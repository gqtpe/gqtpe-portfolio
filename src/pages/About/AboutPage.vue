<template>
  <section
      id="about"
      class="relative overflow-hidden w-full"
      :class="[props.showLess ? 'md:h-screen !important' : '']"
  >
    <div
        class="about-bg absolute inset-0 -z-10 w-full h-full bg-no-repeat bg-cover bg-right bg-[url('/home.jpg')] grayscale"></div>


    <AboutHero class="px-4 lg:px-10 max-lg:min-h-[unset]"/>
    <div
        v-if="!showLess"
        class="flex flex-col gap-4 py-12 [&_img]:grayscale [&_img]:opacity-45 [&_img]:transition-all [&_img]:duration-300 hover:[&_img]:opacity-90 hover:[&_img]:grayscale-0"
    >
      <LogoLoop :logos="stackRow1" direction="left" :speed="55" :logo-height="40" :gap="40" pause-on-hover fade-out fade-out-color="#18181b" aria-label="Tech stack, row 1 of 2"/>
      <LogoLoop :logos="stackRow2" direction="right" :speed="55" :logo-height="40" :gap="40" pause-on-hover fade-out fade-out-color="#18181b" aria-label="Tech stack, row 2 of 2"/>
    </div>
    <div  class="content-wrapper flex flex-col gap-24 px-4 lg:px-10">
      <div v-if="!showLess" class="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div><Languages/></div>
        <div class="col-span-2"><EducationList :cards="data.info.cards.education"/></div>
      </div>
      <InfoCards v-if="!showLess" title="experience" :cards="data.info.cards.experience"/>

    </div>
  </section>
  <PageHeaderRedirect :subtitles="['Go Ahead', 'Next Page']" text="contacts"
                      class="text-white bg-black" redirect="/contacts"/>
</template>

<script setup lang="ts">
import AboutHero from "./AboutHero.vue";
import data from "@/shared/const/about.ts";
import LogoLoop from "@/components/bits/LogoLoop.vue";
import InfoCards from "@/components/InfoCards.vue";
import EducationList from "@/components/EducationList.vue";
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