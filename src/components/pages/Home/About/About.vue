<script setup lang="ts">
import type {InfoPage} from "@/components/pages/Home/About/about.ts";
import gsap from "gsap";
import {onMounted} from "vue";
import {useIsMobile} from "@/app/hooks/useIsMobile.ts";
import SectionC from "@/components/pages/Home/About/Section.vue";
//todo: optimize by killing trigger on route changing
defineProps<{ info: InfoPage }>()
onMounted(() => {
  const tl = gsap.timeline()
  tl.set('.about__image-wp',{
    display:"block"
  })
  tl.to('.about-bg',{
    scrollTrigger: {
      trigger: '.about-bg',
      start: 'top top',
      end: "+=100%",
      pin: true,
    }
  })
  tl.from('.about__image-wp', {
    xPercent: -100,
    scrollTrigger: {
      scrub: true,
      id: 'slide-in',
      trigger: '#section-about',
      start: 'top bottom',
      end: '20% bottom',
    }
  })
  tl.from('.about__image-wp',{
    height: '10%',

    scrollTrigger: {
      scrub: true,
      id: 'height-change',
      trigger: '#section-about',
      toggleActions: 'play none none play',
      start: '20% 70%',
      end: 'center 70%',
    }
  })
  tl.from(['#about-hero', '#about-paragraph',], {
    xPercent: 100,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.about__text',
      start: 'top 70%',
      end: 'bottom 70%',
      scrub: true,
    }
  })
  tl.from('.about__card',{
    xPercent: 100,
    stagger: 0.2,
    scrollTrigger: {
      markers: true,
      trigger: '#section-exp',
      start: 'top 70%',
      end: 'center 70%',
      scrub: true,
    }
  })
})

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
        <p  id="about-paragraph" v-for="subtitle in info.subtitles">
          {{ subtitle }}
        </p>
      </div>
    </div>
    <div class="section" id="section-exp">
      <div class="about__card font-main " v-for="card in info.cards">
      <h2 class="uppercase mb-3 font-bold" >
        {{ card.cardTitle }}
      </h2>
      <SectionC


          :title="card.title"
          :period="card.period"
          :body="card.body"
      />
      </div>
    </div>
  </section>

</template>


<style scoped>
.section{
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
  width:45%;
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
#about-hero{
  font-size: clamp(1rem, 9vw, 4rem);
}
#about-paragraph, .about__card{
  font-size: clamp(1rem, 3vw, 1.5rem);
}
.about__text{
  z-index: 3;
  width: 60%;
}
@media(max-width:768px){
  .about__info{
  }
 .about__text{
   width: 100%;
 }
  .about__image-wp{
    width: 50%;
    position: absolute;
  }
  .about__card{
    width: 100%;
  }
}
</style>
