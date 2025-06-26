<script setup lang="ts">
import {onMounted} from "vue";
import gsap from "gsap";
import PageHeaderRedirect from "@/components/common/PageHeaderRedirect/PageHeaderRedirect.vue";
import projects from "@/components/pages/Projects/projects.ts";
import ProjectCard from "@/components/pages/Projects/ProjectCard.vue";

onMounted(() => {
  const sections =  gsap.utils.toArray<HTMLElement>(".projects__item")

  sections.forEach((section, i) => {
    const bg = section.querySelector(".bg") as HTMLElement | null;
    if (!bg) return;
    bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;
    gsap.to(section, {
/*            delay: 1,
            duration: 2,
            opacity: 0,
            ease: "easeInOut",*/
      scrollTrigger: {
        pin: true,
        start: " top top",
        end: `+=100%`,
        trigger: section,
      }
    })

  });
  gsap.to('.projects__inner', {
    scrollTrigger: {
      trigger: '.projects__inner',
      start: "top top",
      end: `+=${sections.length*100}%`,
      pin: true,
    },
  })

});

</script>

<template>
  <PageHeaderRedirect
      variant="header"
      text="projects"
      class="header"
      :subtitles="['Designs', 'Portfolio']"
  />

  <section class="projects relative">
    <div class="projects__inner">
      <div class="inner">
        <ProjectCard v-for="project in projects" :project="project"></ProjectCard>
      </div>
    </div>
    <div class="projects__item" v-for="project in projects">
      <div class="bg"></div>
    </div>
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
.inner{
  border: 1px solid black;
  overflow: scroll;
  max-height: 10%;
  aspect-ratio: 1/1;
  &::-webkit-scrollbar{
    display: none;
  }
}
.bg-inner {
  background-image: url(https://picsum.photos/1600/800?random=4);
  height: 100%;
}

.header {
  color: white;
  background: var(--color-zinc-900)
}

.projects {
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.projects__item {
  height: 100vh;
  width: 100vw;
}

.projects__scrollable {
  border: 1px solid white;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  overflow-y: scroll;
}

/*.inner__content {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10rem !important;
  height: 10rem !important;
  @media (max-width: 1440px) {
    width: 20rem !important;
    height: 20rem !important;
  }
}*/


.bg {
  /*  position: absolute;*/
  /* top: 0;
   left: 0;*/
  width: 100%;
  height: 100%;
  /*  z-index: -1;*/
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

h1 {
  color: white;
  text-shadow: 1px 1px 3px black;
  z-index: 1;
  font-size: 3em;
  font-weight: 400;
}

</style>
