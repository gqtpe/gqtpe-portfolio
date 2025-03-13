<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

const router = useRoute()

const links = [
  {id: 1, title: "Home", href: "/"},
  {id: 2, title: "About", href: "/about"},
  {id: 3, title: "Projects", href: "/projects"},
  {id: 4, title: "Contacts", href: "/contacts"},
];

const targets = ref<(HTMLDivElement | null)[]>([]);


onMounted(() => {
  targets.value.forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    const height = el.clientHeight;
    useMotion(el, {
      initial: { y: 0 },
      hovered: { y: -height / 2 },
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 25,
        mass: 0.5,
      },
    });
  });
});


</script>

<template>
  <nav class="flex w-1/2 items-center justify-center gap-8 text-black ">
    <div
        class="link-wrapper"
        v-for="(link, index) in links"
        :key="link.id"
    >
      <div
          :ref="(el) => { if (el) targets[index] = el as HTMLDivElement; }"
          v-motion
      >
        <div class="flex flex-col">
          <span class="link">{{ link.title }}</span>
          <span class="link dark">{{ link.title }}</span>
        </div>
      </div>
    </div>
  </nav>
</template>


<style scoped>

.link-wrapper {
  max-height: 2rem;
  height: 2rem;
  overflow: hidden;
}

.link {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 2rem;
  padding: 0 0.5rem;
  background: white;
  border-radius: 0.25rem;
}
.dark{
  filter: invert(100%);
}
</style>