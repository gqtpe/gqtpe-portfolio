<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "@/app/hooks/useIsMobile.ts";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  subtitles: [string, string];
  delay?: number;
};

const props = defineProps<Props>();
const isMobile = useIsMobile();

// Используем рефы вместо генерации ID
const wrapperRef = ref<HTMLElement | null>(null);
const sub1Ref = ref<HTMLElement | null>(null);
const sub2Ref = ref<HTMLElement | null>(null);

let ctx: gsap.Context;

onMounted(async () => {
  await nextTick();
  if (!wrapperRef.value) return;

  ctx = gsap.context(() => {
    const directionProp = isMobile.value ? "y" : "x";
    const offsets = isMobile.value ? [-50, 50] : [-100, 100];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.value,
        start: "center 80%",
        end: "center 20%",
        toggleActions: "play reverse play reverse",
      }
    });

    tl.from([sub1Ref.value, sub2Ref.value], {
      delay: props.delay || 0,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
      [directionProp]: (i: number) => offsets[i],
      stagger: 0.1
    });
  }, wrapperRef.value); // область видимости
});

onUnmounted(() => {
  if (ctx) ctx.revert();
});
</script>

<template>
  <div ref="wrapperRef" class="wrapper">
    <span ref="sub1Ref" class="slide-subtitle">{{ subtitles[0] }}</span>
    <slot />
    <span ref="sub2Ref" class="slide-subtitle">{{ subtitles[1] }}</span>
  </div>
</template>

<style scoped>
@reference '@/styles/tailwind.css';

.wrapper {
  @apply flex justify-center items-center gap-4 max-sm:flex-col;
}

.slide-subtitle {
  @apply text-lg font-medium;
  user-select: none;
}
@media(max-width: 768px){
  .slide-subtitle{
    font-size: 2rem;
  }
}
</style>