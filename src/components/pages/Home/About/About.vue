<script setup lang="ts">
import about, {type InfoPage} from "@/components/pages/Home/About/about.ts";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {onBeforeUnmount, onMounted} from "vue";
import SectionC from "@/components/pages/Home/About/Section.vue";
import SimpleStack from "@/components/pages/Home/About/SimpleStack.vue";

defineProps<{ info: InfoPage }>();

gsap.registerPlugin(ScrollTrigger);

// Храним локальные триггеры для очистки
const localTriggers: ScrollTrigger[] = [];

onMounted(() => {
  const tl = gsap.timeline();

  tl.set('.about__image-wp', {
    display: "block"
  });

  // Пин фон
  tl.to('.about-bg', {
    scrollTrigger: {
      trigger: '.about-bg',
      start: 'top top',
      end: "+=100%",
      pin: true,
      id: 'pin-bg',
      onRefresh: self => self.update()
    }
  });
  localTriggers.push(ScrollTrigger.getById('pin-bg')!);
  tl.from('.about__image-wp', {
    height: '10%',
    scrollTrigger: {
      scrub: true,
      id: 'height-change',
      trigger: '#section-about',
      toggleActions: 'play none none play',
      start: '40% 70%',
      end: '70% 70%',
    }
  });
  localTriggers.push(ScrollTrigger.getById('height-change')!);
  // Слайд-in изображения
  tl.from('.about__image-wp', {
    xPercent: -100,
    scrollTrigger: {
      scrub: true,
      id: 'slide-in',
      trigger: '#section-about',
      start: '20% bottom',
      end: '40% bottom',
    }
  });
  localTriggers.push(ScrollTrigger.getById('slide-in')!);

  // Высота изображения (только на десктопе)


  // Заголовок и параграфы
  tl.from(['#about-hero', '.about-paragraph'], {
    xPercent: 100,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.about__text',
      start: 'top 70%',
      end: 'bottom 70%',
      scrub: true,
      id: 'text-in',
    }
  });
  localTriggers.push(ScrollTrigger.getById('text-in')!);

  // Карточки
  tl.from('.about__card', {
    xPercent: 100,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '#section-exp',
      start: 'top 70%',
      end: 'center 70%',
      scrub: true,
      id: 'cards-in',
      markers: true,
    }
  });
  localTriggers.push(ScrollTrigger.getById('cards-in')!);
});

onBeforeUnmount(() => {
  localTriggers.forEach(trigger => trigger.kill());
});
</script>

<template>
  <section id="about">
    <div class="about-bg"></div>
    <div class="about__info section" id="section-about">
      <div class="about__image-wp">
        <div class="about__image">
          <img :src="info.ava" alt=""/>
        </div>
      </div>
      <div class="about__text font-main text-end">
        <h2 class="uppercase mb-3 font-bold" id="about-hero">
          {{ info.hero }}
        </h2>
        <p class="about-paragraph" v-for="subtitle in info.subtitles">
          {{ subtitle }}
        </p>

      </div>
    </div>
    <div class="section flex flex-col items-end gap-8" id="section-exp">
      <div class="flex flex-col items-end mt-3 ml-[10%]">
        <div class="about__card text-start font-main mb-8" v-for="card in info.cards">
          <h2 class="uppercase mb-3 font-bold ">
            {{ card.cardTitle }}
          </h2>
          <SectionC
              :title="card.title"
              :period="card.period"
              :body="card.body"
          />

        </div>

      </div>
      <SimpleStack :svgs="about.stack"/>
    </div>
  </section>

</template>


<style scoped>
.section {
  width: 100vw;
  height: 100vh;
}

#about {
  position: relative;
  width: 100vw;
  overflow: hidden;
}

.about-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-repeat: round;
  z-index: -1;
  background-image: url("/about.jpg");
  @media (prefers-color-scheme: dark) {
    filter: grayscale(100%);
  }
}


.about__info {
  display: flex;
  justify-content: flex-end;
  align-items: center;

}

.about__image-wp {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100vh;
  width: 45vw;

  .about__image {
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%

    }
  }
}

#about-hero {
  font-size: clamp(1rem, 9vw, 4rem);
  white-space: nowrap;
  filter: dropShadow();
}

.about-paragraph {
  &:last-child {
    margin-left: 25%;
  }
}

.about-paragraph, .about__card {
  font-size: clamp(1rem, 3vw, 1.5rem);
  @media (max-width: 768px) {
    font-size: clamp(1rem, 4vw, 1.5rem);
  }
}

.about__text {
  z-index: 3;
  width: 60%;
}

@media (max-width: 1024px) {
  .about__info {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .about__text {
    width: 100%;
    height: 50vh;
  }

  .about__image-wp {
    width: unset;
    aspect-ratio: 1/1;
    height: 100%;
    position: static;
  }

  .about__card {
    width: 100%;
  }
}
</style>
