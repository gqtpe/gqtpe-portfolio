<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {navbarLinks as links} from "./links"
import {useIsMobile} from "@/app/hooks/useIsMobile.ts"
import Link from "@/components/Navbar/Link.vue";
type Props = {
  scrollTo: (target: string)=>void
}
const props = defineProps<Props>()

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
const onLinkClick = (target: string)=>{
  if(isMobile){
    toggleMenuVisibility()
  }
  props.scrollTo(target)
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
.show {

}

.hide {

}

@media (max-width: 768px) {
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
  .show{
    transform: translateX(0);
  }
  .hide{
    transform: translateX(-100%);
  }
  .burger{
    display: block;
  }
}


</style>