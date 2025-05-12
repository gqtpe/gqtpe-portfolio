<script setup lang="ts">
import Button from "@/components/Button.vue";
import {links} from "@/app/links.ts";
import DecryptedText from "@/components/bits/DecryptedText.vue";
import gsap from "gsap";
import {onMounted} from "vue";

onMounted(()=>{
  gsap.from('#header', {
    y:-50,
    opacity: 0,
    duration: 1.5,
    ease: "elastic",
    scrollTrigger:{
      trigger: '#header',
    }
  })
})
</script>

<template>
  <header id="header" class="text-white dark:text-zinc-200">
    <div class="header__wrapper glass">
      <DecryptedText text="GQTPE" use-original-chars-only class="logo font-black" animate-on="view"/>
      <slot/>
      <Button color="primary" :link="links.telegram">
        Let's talk
      </Button>
    </div>
  </header>
</template>

<style scoped>
header{
  user-select: none;
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
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