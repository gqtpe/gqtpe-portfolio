<template>
  <header id="header" class="text-white dark:text-zinc-200">
    <div class="header__wrapper glass" data-cursor-disabled>
      <DecryptedText text="GQTPE" use-original-chars-only class="logo font-black" animate-on="view"/>
      <slot/>
      <Button variant="gradient" size="small" @click="goTalk" up round>
        Let's talk        <v-icon name="bi-arrow-right"  scale="1.5" />
      </Button>

    </div>
  </header>
</template>
<script setup lang="ts">
import Button from "@/shared/ui/Button.vue";
import {socialLinks} from "@/app/links.ts";
import DecryptedText from "@/components/bits/DecryptedText.vue";
import gsap from "gsap";
import {onMounted} from "vue";
import {ScrollTrigger} from "gsap/ScrollTrigger"


const goTalk = () =>{
  window.location.replace(socialLinks.telegram)
}
onMounted(() => {
  const header = gsap.from('#header', {
    yPercent: -100,
    opacity: 0,
    paused: true,
    ease: "expo",
  })


  setTimeout(() => {
    header.play()
  }, 1000)

  ScrollTrigger.create({
    start: "top top",
    end: "max",
    /* onUpdate: (self) => {
       if (self.direction === -1 && !isVisible) {
         header.play()
         isVisible = true
       } else if (self.direction === 1 && isVisible) {
         header.reverse()
         isVisible = false
       }
     }*/
  })
})

</script>

<style scoped>
header {
  user-select: none;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.header__wrapper {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 2rem;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
}

.logo {
  font-size: 1.5rem;
}
</style>