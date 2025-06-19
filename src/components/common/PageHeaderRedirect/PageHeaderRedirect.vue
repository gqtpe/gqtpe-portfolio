<script setup lang="ts">
import DecryptedText from "@/components/bits/DecryptedText.vue";
import gsap from "gsap";
import {RouterLink} from "vue-router";
import {onMounted} from "vue";


onMounted(() => {
  if (!redirect) {
    gsap.from('#page-header-subtitle', {
      delay: 1,
      opacity: 0,
      ease: "expo",
      x: gsap.utils.wrap([-100, 100]),
      scrollTrigger: {
          trigger: "#page-header-subtitle",
          start: "center 80%",
          end: "center 49%",
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
  }
})

type Props = {
  redirect?: string
  text: string
  subtitles: [string, string]
}
const {redirect, text, subtitles} = defineProps<Props>()
</script>

<template>
  <section class="projects-hello flex items-center justify-center w-full">
    <component
        :is="redirect?RouterLink:'div'"
        :to="redirect"
        :class="redirect?'redirect-header-link':'redirect-header-wrapper'"
    >
      <Subtitles :subtitles="subtitles">
        <DecryptedText
            :text="text"
            use-original-chars-only
            :animateOn="redirect?'hover':'view'"
            revealDirection="start"
            :animate-once="true"
            :max-iterations="5"
            :speed="redirect?55:55"
            class="text-9xl font-main font-semibold max-sm:text-5xl"
        />
      </Subtitles>
    </component>
  </section>
</template>

<style scoped>
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

.redirect-header-wrapper {
  #page-header-subtitle {
    display: inline-block;
    margin: 0 1rem;
    font-size: 1.25rem;
  }
}
</style>