<script setup lang="ts">
import type {Image} from "@/components/pages/Projects/types.ts";
import type {Options} from "@splidejs/splide";

defineProps<{ images?: Image[] }>()
const options: Options = {
  type: "loop",
  autoplay: false,
  lazyLoad: true,
  arrows: true,
  perPage: 1,
  pagination: true,
  paginationKeyboard: true
}
</script>

<template>
  <div class="slider flex items-center justify-center">
    <splide-wrapper  v-if="images && images.length"  :options="options">
      <slide v-for="image in images" :key="image.id">
        <img :src="image.url" alt="Image 1" loading="lazy"/>
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
  &:active {
    background: var(--color-secondary-500);
    opacity: 1;
  }
}

</style>