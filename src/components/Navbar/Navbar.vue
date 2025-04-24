<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {navbarLinks as links} from "./links"
const router = useRoute()
//active value sets on active routeLink, or on hovered routeLink
const active = ref<number>(0)
//screen <40rem
const isNavbarHidden = ref(true)

onMounted(() => {
  //initial value setting
  const value = links.find(l => l.href === router.path)
  if (value) {
    active.value = value.id
  }
})
const onMouseLeave = () => {
  //return active to its initial value on mouseLeave
  const link = links.find(l => l.href === router.path)
  if (link) {
    active.value = link.id
  }
}
const onMouseEnter = (id: number) => {
  //setting active value on hover
  active.value = id
}
const toggleMenuVisibility = () =>{
    isNavbarHidden.value = !isNavbarHidden.value
}
</script>

<template>
  <div class="burger" @click="toggleMenuVisibility">
    <v-icon
        :scale="2"
        name="co-hamburger-menu"
    />
  </div>
  <nav :class="`flex w-1/2 items-center justify-around text-black ${isNavbarHidden?'hide':'show'}`">
    <div class="burger" @click="toggleMenuVisibility">
      <v-icon
          :scale="2"
          name="co-hamburger-menu"
      />
    </div>
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
          @click="toggleMenuVisibility"
      >
        <span class="link">{{ link.title }}</span>
        <span class="link dark">{{ link.title }}</span>
      </RouterLink>
    </div>
  </nav>
</template>


<style scoped>
.burger {
  display: none;
}
@media (max-width: 40rem) {
  nav{
    padding: 1rem;
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    top: 0;
    left: 100%;
    z-index: 11;
    transition: transform, 0.2s ease-in-out;
  }
  nav.show{
    transform: translateX(-100%);
  }
  nav.hide{
    transform: translateX(0);
  }
  .burger{
    display: block;
  }
}
.active {
  transform: translateY(-50%);
}
.link-wrapper {
  overflow: hidden;
  max-height: 2rem;
  height: 2rem;

  .links {
    transition: transform, 0.2s ease-in-out;
  }
}

.link {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 2rem;
  padding: 0 0.5rem;
  background: white;
  @media(prefers-color-scheme: dark){
    background: var(--color-zinc-800);
    color: white;
  }
  border-radius: 0.25rem;
}

.dark {
  filter: invert(100%);
}
</style>