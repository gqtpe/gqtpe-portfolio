<script setup lang="ts">
import {onMounted, onUnmounted, ref, unref} from 'vue';
import {gsap} from 'gsap';
import {useIsMobile} from "@/app/hooks/useIsMobile.ts";

defineProps<{ title: string }>()
const isMobile = useIsMobile()
const wrapperRef = ref<HTMLElement | null>(null);
const textRef = ref<HTMLElement | null>(null);
let ctx: gsap.Context;

onMounted(() => {
  ctx = gsap.context(() => {
    const mobileValue = unref(isMobile);

    const tl = gsap.timeline({
      scrollTrigger: {
        id: 'whoIam',
        trigger: textRef.value,
        toggleActions: 'play none none reset',
        start: "top bottom",
        end: "bottom top",
      }
    })
    tl.from(textRef.value, {
      opacity: 0,
      duration: 1,
    })
        .to(textRef.value, {
          scaleY: mobileValue ? 25 : 15,
          yPercent: 175,
          scrollTrigger: {
            trigger: wrapperRef.value,
            scrub: true,
            start: 'top center',
            end: '150% center',
            pinSpacing: false,
          }
        })
  }, wrapperRef.value!);
});
onUnmounted(() => {
  if (ctx) ctx.revert();
});
</script>


<template>
  <section ref="wrapperRef" class="half flex justify-center items-center" id="whoiam-wrapper">
    <div ref="textRef" class=" text-center font-black text-zinc-300 uppercase" id="whoiam">{{ title }}</div>
  </section>
</template>
<style scoped>
section {
  color: white;
}

#whoiam-wrapper {
  overflow: hidden;
    background: black;
}

#whoiam {
  white-space: nowrap;
  z-index: 2;

  font-size: clamp(3rem, 6vw, 4rem);
  position: absolute;
  mix-blend-mode: difference;
}
</style>