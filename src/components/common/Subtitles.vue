<script setup lang="ts">

import {onMounted} from "vue";
import gsap from "gsap";
import generateUID from "@/utils/uuid.ts";
import {useIsMobile} from "@/app/hooks/useIsMobile.ts";

type Props = {
  subtitles: [string, string]
  delay?: number
}
const {subtitles, delay} = withDefaults(defineProps<Props>(), {
  delay: 0,
})
const isMobile = useIsMobile()
const subtitleWrapperID = generateUID("subtitleWrapper")
const subtitleIDs = generateUID("subtitleIDs")
onMounted(() => {
  gsap.from(`#${subtitleIDs}`, {
    delay: delay,
    opacity: 0,
    ease: "expo",
    ...{[`${isMobile ? 'x' : 'y'}`]: gsap.utils.wrap([-100, 100]),},
    scrollTrigger: {
      trigger: `#${subtitleWrapperID}`,
      id: subtitleWrapperID,
      start: "center 55%",
      end: "center 45%",
      toggleActions: 'play reverse play reverse',
      /*
      onEnter: ()=>{
        console.log("entered")
      },
      onLeave: ()=>{
        console.log("leave")
      },
      onEnterBack: ()=>{
        console.log("entered back")
      },
      onLeaveBack: ()=>{
        console.log("leave back")
      },
      */
    },
  })
})
</script>

<template>
  <div :id="subtitleWrapperID" :class="`flex justify-center items-center ${isMobile && 'flex-col'}`">
    <span class="slide-subtitle" :id="subtitleIDs">{{ subtitles![0] }}</span>
    <slot/>
    <span class="slide-subtitle" :id="subtitleIDs">{{ subtitles![1] }}</span>
  </div>
</template>

<style scoped>
.slide-subtitle {
  margin: 0 3rem;
  font-size: 1.25rem;
}
</style>