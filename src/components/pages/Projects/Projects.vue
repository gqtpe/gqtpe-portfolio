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
  <!--    <ProjectCard v-for="project in projects" :project="project"/>-->
  <section v-for="project in projects">
    <div class="bg"></div>
    <ProjectCard :project="project"/>
  </section>


</template>


<style scoped>
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
