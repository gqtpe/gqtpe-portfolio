<script setup lang="ts">
import data from "@/components/pages/Home/About/about.ts";
import FallingItems from "@/components/bits/FallingItems.vue";
import {useIsMobile} from "@/app/hooks/useIsMobile.ts";
import SimpleStack from "@/components/pages/Home/About/SimpleStack.vue";


const isMobile = useIsMobile()
</script>

<template>
  <section class="stack bg-zinc-800" data-cursor-disabled>
    <SimpleStack v-if="isMobile" :svgs="data.stack"/>
    <FallingItems v-else  data-cursor-disabled :svgs="data.stack"/>
  </section>
</template>

<style >
.stack{
  min-height: 10rem;
  height:25vh;
  @media(max-width: 768px){
    min-height: 25vh;
    height: unset;
    max-height:50vh;
  }
}
</style>