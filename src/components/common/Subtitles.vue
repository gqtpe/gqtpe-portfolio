<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import generateUID from "@/utils/uuid.ts";
import { useIsMobile } from "@/app/hooks/useIsMobile.ts";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  subtitles: [string, string];
  delay?: number;
};

const { subtitles, delay } = withDefaults(defineProps<Props>(), {
  delay: 0,
});

const isMobile = useIsMobile();

const subtitleWrapperID = generateUID("subtitleWrapper");
const subtitle1ID = generateUID("subtitle1");
const subtitle2ID = generateUID("subtitle2");

onMounted(async () => {
  await nextTick(); // ensure DOM rendered

  const directionProp = isMobile.value ? "y" : "x";
  const offsets = isMobile.value ? [-50, 50] : [-100, 100];
  const ids = [subtitle1ID, subtitle2ID];

  ids.forEach((id, index) => {
    gsap.from(`#${id}`, {
      delay: delay + index * 0.15, // small stagger
      opacity: 0,
      duration: 1,
      ease: "expo",
      [directionProp]: offsets[index],
      scrollTrigger: {
        trigger: `#${subtitleWrapperID}`,
        start: "center 60%",
        end: "center 40%",
        toggleActions: "play reverse play reverse",
        id: `${subtitleWrapperID}-${index}`,
      },
    });
  });
});
</script>

<template>
  <div :id="subtitleWrapperID" class="wrapper">
    <span class="slide-subtitle" :id="subtitle1ID">{{ subtitles[0] }}</span>
    <slot />
    <span class="slide-subtitle" :id="subtitle2ID">{{ subtitles[1] }}</span>
  </div>
</template>

<style scoped>
@reference '@/styles/tailwind.css';
.wrapper {
  @apply flex justify-center items-center gap-4 max-sm:flex-col;
}
.slide-subtitle {
  @apply text-lg font-medium;

}
</style>
