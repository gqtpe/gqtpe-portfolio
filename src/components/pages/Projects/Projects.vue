<script setup lang="ts">
import {onMounted} from "vue";
import gsap from "gsap";
import PageHeaderRedirect from "@/components/PageHeaderRedirect/PageHeaderRedirect.vue";
import projects from "@/components/pages/Projects/projects.ts";
import ProjectCard from "@/components/pages/Projects/ProjectCard.vue";


onMounted(() => {
  const getRatio = (el: HTMLElement) => window.innerHeight / (window.innerHeight + el.offsetHeight);

  gsap.utils.toArray<HTMLElement>("section").forEach((section, i) => {
    const bg = section.querySelector(".bg") as HTMLElement | null;
    if (!bg) return;

    // Добавляем фоновые изображения
    bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;

    gsap.fromTo(
        bg,
        {
          backgroundPosition: () =>
              i === 0 ? "50% 0px" : `50% ${-window.innerHeight * getRatio(section)}px`,
        },
        {
          backgroundPosition: () =>
              `50% ${window.innerHeight * (1 - getRatio(section))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => (i === 0 ? "top top" : "top bottom"),
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
    );
  });
});
</script>

<template>
  <PageHeaderRedirect
      variant="header"
      text="projects"
      :subtitles="['ss', 'ss']"
  />

  <div class="relative">
    <div class="inner__wrapper">
      <div class="inner__content">
        <div class="inner__scroller">
          <ProjectCard v-for="project in projects" :project="project"/>
        </div>
      </div>
    </div>
    <section v-for="project in projects">
      <div class="bg"></div>
    </section>
  </div>

</template>


<style scoped>
.inner__content {
  overflow: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10rem !important;
  height: 10rem !important;
  @media (max-width: 1440px) {
    width: 20rem !important;
    height: 20rem !important;
  }
}
.inner__wrapper{
  z-index: 20;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: transparent;
}
.inner__scroller {
  overflow-y: scroll;
  /* хром, сафари */
  &::-webkit-scrollbar { width: 0; }

  /* ie 10+ */
 -ms-overflow-style: none;

  /* фф (свойство больше не работает, других способов тоже нет)*/
   overflow: -moz-scrollbars-none;
}

.projects-hello {
  background: var(--color-zinc-800);
}

.projects-hello {
  color: white;
}


section {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
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
