<script setup lang="ts">
import {type InfoPage} from "@/components/pages/Home/About/about.ts";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {onBeforeUnmount, onMounted} from "vue";
import SectionC from "@/components/pages/Home/About/Section.vue";

defineProps<{ info: InfoPage }>();

gsap.registerPlugin(ScrollTrigger);

// Храним локальные триггеры для очистки
const localTriggers: ScrollTrigger[] = [];
onMounted(() => {
  const imageTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#section-about',
      id: 'slide-in',
      start: '30% center',
      end: '70% center',
      toggleActions: 'play none none reverse'
    }
  });

  gsap.to('.about-bg', {
    scrollTrigger: {
      trigger: '.about-bg',
      start: 'top top',
      end: '+=100%',
      pin: true,
      pinSpacing: false,
      id: 'pin-bg',
    }
  });
  localTriggers.push(ScrollTrigger.getById('pin-bg')!);


  gsap.set('.about__image-wp', {
    height: 4,
  });

  imageTl
      .from('.about__image-wp', {
        xPercent: -100,
        duration: 0.5,
      })
      .to('.about__image-wp', {
        height: '50%',
        duration: 0.5,
      });

  localTriggers.push(ScrollTrigger.getById('slide-in')!);
  gsap.from(['#about-hero', '.about-paragraph'], {
    xPercent: 100,
    stagger: 0.2,
    duration:1,
    scrollTrigger: {
      trigger: '.about__info',
      start: 'top 70%',
      end: '70% 70%',
      scrub: true,
      id: 'text-in',
    }
  });
  localTriggers.push(ScrollTrigger.getById('text-in')!);
});

onBeforeUnmount(() => {
  localTriggers.forEach(trigger => {
    if(trigger){
      trigger.kill()
    }
  });
});
</script>

<template>
  <section id="about">
    <div class="about-bg"></div>
    <div class="about__info" id="section-about">
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
        <div class="about-paragraph" v-for="card in info.cards">
          <div class="text-start font-main mb-8">
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
      </div>
    </div>
  </section>

</template>


<style scoped>


#about {
  position: relative;
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
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
}

.about__image-wp {
  width: 25vw;
  aspect-ratio: 1 / 1;
  overflow: hidden;

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
  @media (max-width: 768px) {
    font-size: clamp(1rem, 8vw, 4rem);
  }
  white-space: nowrap;
  filter: dropShadow();
}


.about-paragraph {
  font-size: clamp(1rem, 3vw, 1.5rem);
  @media (max-width: 768px) {
    font-size: clamp(1rem, 4vw, 1.5rem);
  }
}

.about__text {
  padding: 0.5rem;
  z-index: 3;
  width: 60%;
}

@media (max-width: 1024px) {
  .about__info {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .about__text {
    padding: 1rem;
    width: 100%;
  }

  .about__image-wp {
    width: 50vh;
    max-width: 50rem;
    padding: 1rem;
  }
}
</style>
