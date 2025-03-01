<script setup lang="ts">
import Button from "@/components/Button.vue";
import Typing from "@/components/Typing.vue";
import cv from "@/assets/CV.pdf";
import DecryptedText from "@/components/bits/DecryptedText.vue";
const items = [
  'web developer',
  'frontend developer',
  'software engineer',
]

</script>

<template>
  <section class="flex items-center text-white max-md:justify-center">
    <div class="bg-black p-8 inline-flex flex-col gap-[10px] p-12 items-start max-md:w-full text-white">
      <h6 class="ellipse1 uppercase text-lg font-bold">

        <DecryptedText
            text="hello, there"
            animateOn="view"
            revealDirection="start"
        />
      </h6>
      <h1 class="ellipse2 uppercase font-black lg:text-7xl sm:text-6xl max-md:text-7xl max-sm:text-3xl">
        <DecryptedText
            text="i'm Nursain Temirtas"
            animateOn="view"
            revealDirection="start"
        />
      </h1>
      <h6 class="uppercase font-bold">
        <Typing
            :items=items
        />
      </h6>
      <a :href="cv" download="CV.pdf" target='_blank'>
        <Button color="secondary">Download CV</Button>
      </a>
    </div>
  </section>
</template>
<style scoped>

.ellipse1,.ellipse2 {
  position: relative;
  z-index: 1;
}
.ellipse1:before, .ellipse2:after {
  content: "";
  position: absolute;
  width: 3.5vw;
  height: 3.5vw;
  @media(max-width: 480px){
    width:8vw;
    height:8vw;
  }
}
.ellipse1:before {
  background-color: var(--color-secondary-500);
  border-radius: 50%;
  z-index: -1;
  bottom:-10%;
  left:-1%;
}
.ellipse2:after{
  background-color: var(--color-primary-500);
  border-radius: 50%;
  z-index: -1;
  bottom:-10%;
  right:-1%;
}

</style>