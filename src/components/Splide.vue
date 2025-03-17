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
.slider {
  margin-top:1px;
  margin-left: 1px;
  outline: 1px solid rgb(221, 221, 221);
  border: 0.5rem solid white;
  background: linear-gradient(135deg, var(--color-secondary-200) 0%, var(--color-primary-200) 100%);
}
.splide__pagination {
  opacity: 1;
  display: flex !important;
  .is-active{
    background: #2fb3cd !important;
  }
}

.splide__arrow {
  background: var(--color-primary-500);


  &:active {
    background: var(--color-secondary-500);
    opacity: 1;
  }
}

</style>