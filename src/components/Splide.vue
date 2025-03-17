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
  <div class="slider flex items-center justify-center">
    <splide-wrapper  v-if="images && images.length"  :options="options">
      <slide v-for="image in images" :key="image.id">
        <img :src="image.url" alt="Image 1"/>
      </slide>
    </splide-wrapper>
    <div class="helper" v-else> (no images)</div>
  </div>
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