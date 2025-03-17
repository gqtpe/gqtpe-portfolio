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
const active = ref<number>(0)
onMounted(() => {
  const value = links.find(l => l.href === window.location.pathname)
  if(value){
    active.value = value.id
  }
})
const onMouseLeave = () => {
  const link = links.find(l => l.href === router.path)
  if (link) {
    active.value = link.id
  }
}
const onMouseEnter = (id: number) => {
  active.value = id
}
</script>

<template>
  <nav class="flex w-1/2 items-center justify-around  text-black ">
    <div
        class="link-wrapper"
        v-for="link in links"
        :key="link.href"
    >
      <RouterLink
          :to="link.href"
          :class="['flex flex-col links', { active: active === link.id }]"
          @mouseenter="onMouseEnter(link.id)"
          @mouseleave="onMouseLeave"
      >
        <span class="link">{{ link.title }}</span>
        <span class="link dark">{{ link.title }}</span>
      </RouterLink>
    </div>
  </nav>
</template>


<style scoped>

.link-wrapper {
  overflow: hidden;
  max-height: 2rem;
  height: 2rem;

  .links {
    transition: transform, 0.2s ease-in-out;
  }
}

.active {
  transform: translateY(-50%);
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
.dark {
  filter: invert(100%);
}
</style>