<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import {RouterLink, useRoute, useRouter} from "vue-router";
import { navbarLinks as links } from "./links";
import { useIsMobile } from "@/app/hooks/useIsMobile.ts";
type Props = {
  scrollTo: (target: string) =>void
}
const {scrollTo} = defineProps<Props>()

const isMobile = useIsMobile();
const router = useRouter();
const route = useRoute();
const active = ref<number>(0);
const isNavbarHidden = ref(true);

onMounted(() => {
  const current = links.find(l => l.href === route.path);
  if (current) active.value = current.id;
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
  const link = links.find(l => l.href === route.path);
  if (link) active.value = link.id;
};

const onMouseEnter = (id: number) => {
  active.value = id;
};

const onClick = (id:number) =>{
  const link = links.find(t=>t.id === id)
  if(isMobile){
    toggleMenuVisibility()
  }
  if(link){
    const matchedRoute = router.options.routes.find(
        r => r.path === route.path || r.alias === route.path
    );

    const isSamePage = link.href === route.path ||
        link.href === matchedRoute?.path ||
        link.href === matchedRoute?.alias;
    // console.log('true1':'false1')
  // console.log(route.path === link.href?'true':(route.path === router.options.routes.find(t=>t.path === link.href)!.alias)?'true':false)
  // console.log(router.options.routes.find(r=>r.alias === route.path))
  // console.log(route.path)
  if(link.target && isSamePage){
    scrollTo(link.target);
  }
}}
const toggleMenuVisibility = () => {
  isNavbarHidden.value = !isNavbarHidden.value;
};
</script>

<template>
  <!-- Burger icon (always visible on mobile) -->
  <div class="burger" @click="toggleMenuVisibility">
    <v-icon :scale="2" name="co-hamburger-menu" />
  </div>

  <!-- Navigation -->
  <Teleport to="#modal" :disabled="!isMobile">
    <nav @mouseleave="onMouseLeave" :class="navClass">
      <!-- Duplicate burger icon for closing menu inside nav -->
      <div class="burger" @click="toggleMenuVisibility">
        <v-icon :scale="2" name="co-hamburger-menu" />
      </div>

      <!-- Navigation Links -->
      <div v-for="link in links" :key="link.href" class="link-wrapper">
        <component
            :is="link.href?RouterLink:'div'"
            :to="link.href?link.href:''"
            class="flex flex-col links"
            :class="{ active: active === link.id }"
            @mouseenter="onMouseEnter(link.id)"
            @click="onClick(link.id)"
        >
          <span class="link">{{ link.title }}</span>
          <span class="link dark">{{ link.title }}</span>
        </component>
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
    position: absolute;
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
