<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {navbarLinks as links} from "./links"
import {useIsMobile} from "@/app/hooks/useIsMobile.ts"

const isMobile = useIsMobile()
const router = useRoute()
const active = ref<number>(0)
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
const toggleMenuVisibility = () => {
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
  <Teleport to="#modal" :disabled="!isMobile">
  <nav @mouseleave="onMouseLeave" :class="`flex gap-2 items-center justify-center text-black ${isNavbarHidden?'hide':'show'}`">
    <div class="burger" @click="toggleMenuVisibility">
      <v-icon
          :scale="2"
          name="co-hamburger-menu"
      />
    </div>
    <Link
        v-for="link in links"
        :active="active === link.id"
        :id="link.id"
        @mouseenter="onMouseEnter(link.id)"
        @click="onLinkClick(link.target)"
        :link="link.href"
        :title="link.title"
    />
  </nav>
  </Teleport>
</template>


<style scoped>
.burger {
  display: none;
}

@media (max-width: 40rem) {
  nav {
    padding-top: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    background: white;
    z-index: 40;
    transition: transform, 0.2s ease-in-out;
  }
  nav.show{
    transform: translateX(100%);
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
  padding: 0 1rem;
  background: var(--color-zinc-800);
  color: white;
  border-radius: 0.25rem;
}

.dark {
  filter: invert(100%);
}
</style>