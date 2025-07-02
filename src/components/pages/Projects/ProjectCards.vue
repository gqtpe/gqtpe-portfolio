<script setup lang="ts">
import projectCards from "@/components/pages/Projects/projectCards.ts";
import {onMounted, onBeforeUnmount, nextTick} from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const localTriggers: ScrollTrigger[] = [];

const killLocalTriggers = () => {
  localTriggers.forEach(trigger => trigger.kill());
  localTriggers.length = 0;
};

const initProjectAnimations = async () => {
  await nextTick();
  killLocalTriggers(); // Удаляем только свои

  const sections = gsap.utils.toArray<HTMLElement>(".project__item");
  const cards = gsap.utils.toArray<HTMLElement>(".project__inner");

  if (sections.length === 0 || cards.length === 0) {
    console.warn("GSAP: элементы не найдены");
    return;
  }

  sections.forEach((section) => {
    const tween = gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: "+=100%",
      }
    });
    localTriggers.push(tween.scrollTrigger!);
  });

  cards.forEach((card, i) => {
    const tween = gsap.to(card, {
      yPercent: 100,
      scrollTrigger: {
        trigger: sections[i],
        scrub: true,
        start: "top bottom",
        end: "+=100%",
      },
    });
    localTriggers.push(tween.scrollTrigger!);
  });

  const pinInner = gsap.to(".project__inner-wp", {
    scrollTrigger: {
      trigger: ".project__inner-wp",
      start: "top top",
      end: `+=${(sections.length - 1) * 100}%`,
      pin: true,
    },
  });
  localTriggers.push(pinInner.scrollTrigger!);

  const subtitleTween = gsap.to(".project__subtitle", {
    yPercent: 100,
    scrollTrigger: {
      trigger: sections[0],
      scrub: true,
      start: "top bottom",
      end: "+=100%",
    }
  });
  localTriggers.push(subtitleTween.scrollTrigger!);
};

onMounted(() => {
  initProjectAnimations();
});

onBeforeUnmount(() => {
  killLocalTriggers(); // Очищаем только свои ScrollTrigger'ы
});
</script>



<template>

  <section class="project relative">
    <div class="project__inner-wp">
      <span class="project__subtitle">Trello</span>
      <span class="project__subtitle">01</span>
      <div class="inner">
        <v-icon
            data-cursor-action="open"
            v-for="project in projectCards"
            :key="project.id"
            class="glass-light project__inner"
            :name="project.icon"
        />
      </div>
      <span class="project__subtitle">0{{ projectCards.length }}</span>
      <span class="project__subtitle">React</span>
    </div>
    <section
        class="project__item"
        v-for="project in projectCards"
        :key="project.id"
    >
      <img class="bg" :src="project.img" alt="">
    </section>
  </section>
</template>

<style>
.project {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .project__inner-wp {
    position: absolute;
    padding: 0 1rem;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 4rem;
  }

  .project__inner {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    position: absolute;
    top: -100%;
    left: 0;
  }

  .project__item {
    height: 100vh;
    width: 100vw;
  }

  .project__subtitle {
    color: white;
    font-size: 2rem;
    font-family: var(--font-main);
  }
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

.bg {
  width: 100%;
  height: 100%;
}
</style>