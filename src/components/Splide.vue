<script setup lang="ts">
import type {Image} from "@/components/pages/Projects/types.ts";
import type {Options} from "@splidejs/splide";

defineProps<{ images: Image[] }>()
const splideOption: Options = {
  type: 'loop',
  perPage: 1,
  autoplay: false,
  lazyLoad: true,
  arrows: true,
}
</script>

<template>
  <splide-wrapper :options="splideOption">
    <slide v-for="image in images" :key="image.id">
      <img :src="image.url" alt="Image 1"/>
    </slide>
  </splide-wrapper>

</template>

<style>
.splide__pagination__page.is-active {
  background: var(--color-primary-500);
  opacity: 1;
}

.splide__arrow {
  background: var(--color-primary-500);


  &:active {
    background: var(--color-secondary-500);
    opacity: 1;
  }
}

</style>