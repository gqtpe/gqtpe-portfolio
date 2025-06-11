<script setup lang="ts">
import {onMounted, ref, computed, watch} from "vue";
import {RouterLink, useRoute} from "vue-router";
import { navbarLinks as links } from "./links.ts";
import { useIsMobile } from "@/app/hooks/useIsMobile.ts";

const isMobile = useIsMobile();
const route = useRoute();
const active = ref<number|null>(null);
const isNavbarHidden = ref(true);

onMounted(() => {
  if(active.value === null){
    const link = links.find(i=>i.path === route.path)
    if(link){
      active.value = link.id
    }else{
      console.error("route path not found in navLinks for (Navbar.vue)")
    }
  }
  watch(route, (newRoute)=>{
    const current = links.find(l => l.path === newRoute.path);
    if(current && (current.id !== active.value)) {
        active.value = current.id
    }
  })

  // if (current) active.value = current.id;
});

const navClass = computed(() => ({
  flex: true,
  'gap-2': true,
  'items-center': true,
  'justify-center': true,
  'text-black': true,
  show: !isNavbarHidden.value,
  hide: isNavbarHidden.value,
}));

const onMouseLeave = () => {
  const link = links.find(l => l.path === route.path);
  if (link) active.value = link.id;
};

const onMouseEnter = (id: number) => {
  active.value = id;
};
const onClick = () =>{
  if(isMobile){
    toggleMenuVisibility()
  }
}
const toggleMenuVisibility = () => {
  isNavbarHidden.value = !isNavbarHidden.value;
};
</script>

<template>
  <div class="burger" @click="toggleMenuVisibility">
    <v-icon :scale="2" name="co-hamburger-menu" />
  </div>

  <Teleport to="#modal" :disabled="!isMobile">
    <nav @mouseleave="onMouseLeave" :class="navClass">
      <div class="burger" @click="toggleMenuVisibility">
        <v-icon :scale="2" name="co-hamburger-menu" />
      </div>

      <div v-for="link in links" :key="link.path" class="link-wrapper">
        <RouterLink
            :to="link.path"
            class="flex flex-col links"
            :class="{ active: active === link.id }"
            @mouseenter="onMouseEnter(link.id)"
            @click="onClick"
        >
          <span class="link">{{ link.title }}</span>
          <span class="link dark">{{ link.title }}</span>
        </RouterLink>
      </div>
    </nav>
  </Teleport>
</template>

<style scoped>
.burger {
  display: none;
  cursor: pointer;
}

@media (max-width: 40rem) {
  .burger {
    display: block;
  }

  nav {
    padding-top: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    background: white;
    z-index: 40;
    transition: transform 0.2s ease-in-out;
  }

  .show {
    transform: translateX(100%);
  }

  .hide {
    transform: translateX(0);
  }
}

.link-wrapper {
  overflow: hidden;
  max-height: 2rem;
  height: 2rem;
}

.links {
  transition: transform 0.2s ease-in-out;
}

.link {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 2rem;
  padding: 0 1rem;
  background: var(--color-zinc-800);
  color: white;
  border-radius: 0.25rem;
}

.link.dark {
  filter: invert(100%);
}

.active {
  transform: translateY(-50%);
}
</style>
