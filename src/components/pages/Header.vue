<script setup lang="ts">
import Button from "@/components/common/Button.vue";
import {links, socials} from "@/app/links.ts";
import DecryptedText from "@/components/bits/DecryptedText.vue";
import gsap from "gsap";
import {onMounted} from "vue";
import {ScrollTrigger} from "gsap/ScrollTrigger"
onMounted(() => {
  const header = gsap.from('#header', {
    yPercent: -100,
    opacity: 0,
    paused: true,
    ease: "expo",
  })

  let isVisible = true // изначально показываем

  setTimeout(()=>{
    header.play()
    isVisible = true
  },1000)

  ScrollTrigger.create({
    start: "top top",
    end: "max",
    onUpdate: (self) => {
      if (self.direction === -1 && !isVisible) {
        header.play()
        isVisible = true
      } else if (self.direction === 1 && isVisible) {
        header.reverse()
        isVisible = false
      }
    }
  })
})

</script>

<template>
  <header id="header" data-cursor-disabled class="text-white dark:text-zinc-200">
    <div class="header__wrapper glass">
      <DecryptedText text="GQTPE" use-original-chars-only class="logo font-black" animate-on="view"/>
      <slot/>
      <Button variant="gradient" :link="socials.telegram.link" up>
      </Button>
      Let's talk
    </div>
  </header>
</template>

<style scoped>
header{
  user-select: none;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
.header__wrapper{
  display:grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 2rem;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
}
.logo{
  font-size: 1.5rem;
}
</style>