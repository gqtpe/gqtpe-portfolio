<template>
  <div
      ref="heroContainer"
      :class="`about-info about__wrapper flex flex-col items-center justify-start gap-8 mt-4 md:mt-16 md:h-[100vh] lg:flex-row lg:justify-between lg:items-start ${showLess && 'mb-25'}`"
      id="section-about"
  >
    <div class="flex flex-col gap-8 items-center">

      <div class="about__image-wp relative  w-screen h-auto max-w-[300px] aspect-square p-0 lg:w-[25vw] lg:h-[25vw] lg:max-w-none">
        <div class="about__image w-full aspect-square overflow-hidden invisible">
          <img :src="data.info.ava" alt="" class="rounded-2xl object-cover w-full h-full"/>
        </div>
        <div class="absolute bottom-[-10%] md:top-[-10%] left-[-10%]"> <RotatingText
            id="rotating-text"
            text="FRONTEND * DEVELOPER * 2025 * "
            :spin-duration="5"
            on-hover="slowDown"
            class-name="z-[15]"
        />
        </div>
      </div>

      <div class="flex gap-2 w-full flex-col md:flex-row">
        <Button @click="$router.push('projects')" class="!font-light shrink-0"   variant="black"><v-icon name="bi-eye"/>Show Projects</Button>
        <Button @click="$router.push('CV.pdf')" class="!font-light  shrink-0 grow-1"  variant="white" link="CV.pdf"><v-icon name="bi-download"/>Download CV</Button>
      </div>

    </div>

    <div class="about__info flex flex-col h-full z-30 w-full lg:w-[80%] max-lg:p-2">
      <div class="about__text font-main text-end">
        <h2
            class="uppercase mb-3 font-bold whitespace-nowrap text-[clamp(1rem,8vw,4rem)] md:text-[clamp(1rem,9vw,4rem)]"
            id="about-hero"
        >
          {{ data.info.hero }}
        </h2>
        <div class="paragraphs-container">
          <p
              class="about-paragraph text-[clamp(0.75rem,3vw,1rem)] md:text-[clamp(1rem,3vw,1.5rem)]"
              v-for="(subtitle,i) in aboutBody"
              :key="i"
          >
            {{ subtitle }}
          </p>
          <span v-if="showLess" class="about-paragraph text-[clamp(0.75rem,3vw,1rem)] md:text-[clamp(1rem,3vw,1.5rem)]">...</span>
        </div>
      </div>

      <div class="about__socials shrink-0 w-full overflow-hidden h-12 mt-4 flex items-center justify-end px-2 gap-4">
        <a
            data-cursor-disabled
            v-for="(item, i) in data.info.icons"
            :href="item.link"
            target="_blank"
            :key="i"
            class="invisible"
        >
          <img
              :src="item.icon"
              alt="github-icon"
              class="aspect-square w-10 h-10 hover:opacity-50 transition-opacity duration-300"
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, onBeforeUnmount, ref, computed} from "vue";
import data from "@/shared/const/about.ts";
import Button from "@/shared/ui/Button.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import RotatingText from "@/components/bits/RotatingText.vue";

const props = defineProps<{showLess: boolean}>()
const aboutBody = computed(() => {
  return props.showLess ? data.info.subtitles.slice(0, 10) : data.info.subtitles;
})
gsap.registerPlugin(ScrollTrigger);
const heroContainer = ref<HTMLElement | null>(null);
let ctx: gsap.Context;
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  ctx = gsap.context((self) => {
    if (!self || !self.selector) return;
    const s = self.selector;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroContainer.value,
        start: 'top 85%', // Начинаем чуть раньше появления в зоне видимости
        toggleActions: 'play none none reverse', // Проигрываем только один раз при входе
      }
    });

    tl.from(s('.about__image'), {
      xPercent: -100,
      autoAlpha: 0,
      duration: 1,
      ease: "power3.out"
    })
        .from(s('#cv-download'), {
          scale: 0.8,
          autoAlpha: 0,
          duration: 0.5,
          ease: "back.out(1.7)"
        }, "-=0.2")
        .from(s('.about__socials a'), {
          y: 30,
          autoAlpha: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out"
        }, "-=0.3")
        .from(s('#rotating-text'),{
          opacity:0,
          duration: 0.6,
          ease: "power3.out"
        })

    gsap.from(['#about-hero', '.about-paragraph'], {
      xPercent: window.innerWidth < 1024 ? 30 : 80,
      autoAlpha: 0,
      stagger: 0.1,
      ease: "power1.out",
      scrollTrigger: {
        trigger:heroContainer.value,
        start: 'top center',
        end: '30% center',
        scrub: 1,

      }
    });

  }, heroContainer.value!);
});
onBeforeUnmount(() => {
  if (ctx) {
    ctx.revert();
  }
  ScrollTrigger.getAll().forEach(t => t.kill());
});
</script>