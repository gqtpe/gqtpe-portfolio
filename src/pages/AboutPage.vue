<script setup lang="ts">
import data from "@/shared/const/about.ts";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {onBeforeUnmount, onMounted, ref} from "vue";
import Button from "@/shared/ui/Button.vue";


gsap.registerPlugin(ScrollTrigger);

const mainContainer = ref<HTMLElement | null>(null);
let ctx: gsap.Context;

onMounted(() => {
  ctx = gsap.context(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#section-about',
        start: 'top 60%',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
      }
    });

    tl.from('.about__image', {
      xPercent: -100,
      autoAlpha: 0,
      duration: 1,
      ease: "power3.out"
    })
        .from('#cv-download', {
          scale: 0.8,
          autoAlpha: 0,
          duration: 0.5,
          ease: "back.out(1.7)"
        }, "-=0.2")
        .from('.about__socials img', {
          y: 30,
          autoAlpha: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out"
        }, "-=0.3");

    gsap.from(['#about-hero', '.about-paragraph'], {
      xPercent: window.innerWidth < 1024 ? 30 : 80,
      autoAlpha: 0,
      stagger: 0.1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: '.about__wrapper',
        start: 'top center', // Исправлено: убран %
        end: 'center center',
        scrub: 1,
      }
    });

  }, mainContainer.value!); // Весь контекст привязан к section
});

onBeforeUnmount(() => {
  ctx.revert();
});
</script>
<template>
  <section id="about" ref="mainContainer">
    <div class="about-bg"></div>
    <div class="about__wrapper" id="section-about">
      <div class="flex flex-col gap-8 items-center">
        <div class="about__image-wp">
          <div class="about__image">
            <img :src="data.info.ava" alt=""/>
          </div>
        </div>
        <div id="cv-download">
          <Button variant="white" :round="false" size="large" link="CV.pdf">Download CV</Button>
        </div>
      </div>
      <div class="about__info">
        <div class="about__text font-main text-end">
          <h2 class="uppercase mb-3 font-bold" id="about-hero">
            {{ data.info.hero }}
          </h2>
          <div class="paragraphs-container">
            <p class="about-paragraph" v-for="(subtitle,i) in data.info.subtitles" :key="i">
              {{ subtitle }}
            </p>
          </div>
        </div>
        <div class="about__socials w-full">
          <a data-cursor-disabled v-for="(item, i) in data.info.icons" :href="item.link" target="_blank" :key="i"><img
              :src="item.icon" alt="github-icon"></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__image, #cv-download, .about__socials img {
  visibility: hidden;
}

#about {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
}

.card-header {
  &:after {
    content: '';
  }
}

.about-bg {
  height: 100%;
  position: absolute;
  z-index: -1;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/about.jpg");
  filter: grayscale(100%);
}

.about__wrapper {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  min-height: 100vh;
  padding-top: 10rem;
}

.about__image-wp {
  width: 25vw;
  height: 25vw;
  overflow: hidden;

  .about__image {
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;

    img {
      border-radius: 1rem;
      object-fit: cover;
      width: 100%;
      height: 100%
    }
  }
}

#about-hero {
  font-size: clamp(1rem, 9vw, 4rem);
  @media (max-width: 768px) {
    font-size: clamp(1rem, 8vw, 4rem);
  }
  white-space: nowrap;
}

.about-paragraph {
  font-size: clamp(1rem, 3vw, 1.5rem);
  @media (max-width: 768px) {
    font-size: clamp(1rem, 4vw, 1.5rem);
  }
}

.about__info {
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
  z-index: 3;
  width: 60%;
}

.about__socials {
  overflow: hidden;
  height: 3rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0.5rem;
  gap: 1rem;

  img {
    aspect-ratio: 1 / 1;
    width: 2.5rem;
    height: 2.5rem;
  }

  img:hover {
    opacity: 0.5 !important;
    transition: 0.3s ease;
  }
}

@media (max-width: 1024px) {
  .about__wrapper {
    margin-top: 2rem;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    justify-content: flex-start;
    min-height: unset;
  }

  #about {
    min-height: unset;
  }

  .about__info {
    width: 100%;
  }

  .about__image-wp {
    width: 100vw; /* На мобилках лучше использовать vw для ширины */
    height: auto; /* Сбрасываем фиксированную высоту */
    max-width: 300px; /* Чтобы на планшетах не было на весь экран */
    aspect-ratio: 1 / 1;
    padding: 0;
  }
}
</style>