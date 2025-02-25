<script setup lang="ts">
import {cutFrom} from "../../../utils/cutFrom.ts";

type Props = {
  image: string
  title: string
  description: string
  preview: string
  url: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="card">
    <div class="card__image">
      <img :src="props.image" alt="project-img"/>
      <div class="card__actions flex items-center justify-center gap-2">
          <div class="card-action ">
            <v-icon name="fa-expand"/>
          </div>
          <div class="card-action">
            <v-icon name="fa-external-link-square-alt"/>
          </div>
      </div>
    </div>
    <div class="card__description">
      <h3 class="font-bold text-gray-800 text-lg">{{ props.title }}</h3>
      <p class="text-xs text-gray-500">{{ cutFrom(props.description) }}</p>
      <!--      <p>-->
      <!--        {{ props.description }}-->
      <!--      </p>-->
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 0.5rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  border-width: 1px 1px 4px;
  border-style: solid;
  border-color: rgb(221, 221, 221);
  border-image: initial;
  background: white;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: translateY(-1%);

  }
}

.card__actions {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: var(--white);
  transform: translateX(-20%);
  height: 2rem;
  opacity: 0;
  transition: opacity 0.1s ease-out, transform 0.1s ease-in-out;
  .card-action{
    background: var(--color-gray-900);
    width: 1.5rem;
    height: 1.5rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.card__description {
  padding: 0.5rem;
  margin-right: 1rem;
  h3{
    &:hover{
      color: var(--color-primary-500);
    }
  }
}

.card__image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/9;
  &:hover{
    .card__actions {
      opacity: 0.8;
      transform: translateX(0);
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>