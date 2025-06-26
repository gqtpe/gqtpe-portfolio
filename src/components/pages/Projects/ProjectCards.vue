<script setup lang="ts">
import projectCards from "@/components/pages/Projects/projectCards.ts";
import {onMounted} from "vue";
import gsap from "gsap";





onMounted(() => {
  const sections = gsap.utils.toArray<HTMLElement>(".projects__item");
  const cards = gsap.utils.toArray<HTMLElement>(".project__card");

  sections.forEach((section) => {
    gsap.to(section, {
      scrollTrigger: {
        pin: true,
        start: "top top",
        end: "+=100%",
        trigger: section,
      }
    });
  });
  cards.forEach((card, i) => {
    gsap.to(card, {
      yPercent: 100,
      scrollTrigger: {
        trigger: sections[i],
        scrub: true,
        start: "top bottom",
        end: "+=100%",
      },
    });

  });
  gsap.to(".projects__inner", {
    scrollTrigger: {
      trigger: ".projects__inner",
      start: "top top",
      end: `+=${(sections.length - 1) * 100}%`,
      pin: true,
    },
  });
});
</script>

<template>

  <section class="projects relative">
    <div class="projects__inner">
      <div class="inner">
        <v-icon
            v-for="project in projectCards"
            :key="project.id"
            class="glass-light project__card"
            :name="project.icon"
        />
      </div>
    </div>
    <section
        class="projects__item"
        v-for="project in projectCards"
        :key="project.id"
    >
      <img class="bg" :src="project.img" alt="">
    </section>
  </section>
</template>

<style scoped>
.projects__inner {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project__card {
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  position: absolute;
  top: -100%;
  left: 0;
}

.inner {
  position: relative;
  max-height: 30vh;
  height: 30vh;
  aspect-ratio: 1/1;
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
}

.projects {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.projects__item {
  height: 100vh;
  width: 100vw;
  img{
  }
}

.bg {
  width: 100%;
  height: 100%;
}
</style>