<script setup lang="ts">
import type {InfoPage} from "@/components/pages/Home/About/about.ts";

defineProps<{ info: InfoPage }>()
/*onMounted(()=>{
  const tl = gsap.timeline()
  tl.to('.about-bg',{
    scrollTrigger: {
      pin: true,
      scrub: true,
      trigger: '.about-bg',
      start: 'top top',
      end: '+=200%'
    }
  })
  tl.to('.about__image',{
    xPercent: -100,
    duration: 2,
    scrollTrigger: {
      pin:true,
      markers: true,
      scrub: true,
      trigger: '.about__image',
      toggleActions: 'play none none play',
      start: 'top 20%',
      end: '+=50%',
    }
  })
  tl.from('#about-hero',{
    xPercent: 100,
    scrollTrigger: {
      markers: true,
      trigger: '#section2-about',
      start: '-=50% bottom',
      scrub: true,
    }
  })

})*/

</script>

<template>
  <section id="about" >
    <div class="about__bg"></div>
    <div class="about__image-wp flex-grow">
      <div class="about__image rounded-full">
        <img loading="lazy" :src="info.ava" alt=""/>
      </div>
    </div>
    <div class="about__info font-main text-end">
      <h2 class="uppercase mb-3 font-bold text-6xl" id="about-hero">
        {{info.hero}}
      </h2>
      <p v-for="paragraph in info.subtitles" class="text-xl">
        {{ paragraph }}
      </p>
    </div>
<!--    <div class="p-[2rem] flex justify-between gap-[1rem] text-white max-sm:flex-col max-sm:p-5 max-sm:text-center">-->

        <!--        <div class="flex flex-col justify-around items-center gap-3">
                  <Button size="large" link="/CV.pdf" class-name="w-[100%]" color="primary">
                    Download CV
                  </Button>
                  <div class="flex glass-light p-1">
                    <a target="_blank" v-for="icon in info.icons" :href="icon.link">
                      <v-icon hover animation="flash" :scale="2" :fill="icon.fill" :name="icon.name"/>
                    </a>
                  </div>
                </div>-->
<!--      </div>-->
      <!--      <div class="flex flex-col flex-grow self-start gap-2">
              <h3 class="uppercase mb-3 font-bold text-2xl">
                <DecryptedText :text="info.hero" animateOn="view" use-original-chars-only/>
              </h3>
              <p class="text-xl text-gray-300 dark:text-gray-300">
                {{ info.subtitle }}
              </p>

              <div class="divider"/>

              <div class="grid grid-cols-2 gap-8 max-md:flex flex-col ">
                <div v-for="(card, i) in info.cards" :key="i">
                  <DecryptedText
                      :text="card.cardTitle"
                      use-original-chars-only
                      animateOn="view"
                      class="section-title max-sm:ali"
                  />
                  <SectionC
                      :title="card.title"
                      :period="card.period"
                      :body="card.body"
                  />
                </div>
              </div>
            </div>-->
<!--    </div>-->
  </section>
</template>


<style scoped>

.about__info{
  flex-basis: 70%;
}
.about__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-repeat: round;
  z-index: -1;
  background-image: url("../../../../../public/about.jpg");
  @media (prefers-color-scheme: dark) {
    filter: grayscale(100%);
  }
}
#about {
 display: flex;
}

@media (prefers-color-scheme: dark) {
  #about::before {
    filter: grayscale(80%);
  }
}
.about__image-wp{
  display: flex;
  justify-content: center;
}
.about__image {
  height: 50vh;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  img {
    height: 100%;
    max-height: 100%;
    max-width: 100%;
  }
}

</style>
