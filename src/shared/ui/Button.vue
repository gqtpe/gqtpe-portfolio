<script setup lang="ts">
import {type HTMLAttributes, useAttrs} from "vue";

type Props = {
  variant: 'primary' | 'secondary' | 'gradient' | 'white' | 'black'
  size?: 'default' | 'large' | 'small'
  up?: boolean
  round?: boolean
}

const attrs = useAttrs() as HTMLAttributes
defineProps<Props>()
</script>

<template>
    <button
        :class="`gqpte-button gqtpe-button-color-${variant} gqtpe-button-size-${size} text-white shadow-lg ${round && '!rounded-full'} ${up?'up':''}`"
        v-bind="attrs"
    >
      <slot/>
    </button>
</template>
<style>
@reference "@/styles/tailwind.css";

.gqpte-button {
  @apply h-9 rounded-sm font-main  text-white px-4 whitespace-nowrap cursor-pointer disabled:opacity-50 overflow-hidden;
  transition: scale 0.1s ease-in-out;
  &:has(svg){
    @apply flex gap-1 items-center px-4 justify-center;
  }

  &:hover{
    filter: brightness(0.9)
  }
  &:active {
    scale: 0.95;
    filter: brightness(1)
  }

}

.gqtpe-button__enable-up {
  transition: transform, 0.2s ease-in-out;
  &:hover {
    opacity: unset;
    transform: translateY(-0.2rem);
  }
  &:active {
    transform: translateY(0);

  }
}

.gqtpe-button-color-gradient {
  background: linear-gradient(0.25turn, var(--color-primary-400), var(--color-secondary-300));

}

.gqtpe-button-color-primary {
  background: var(--color-primary-500);
}

.gqtpe-button-color-secondary {
  background: var(--color-secondary-500);
}

.gqtpe-button-color-black {
  background: black;
  color: white;
}

.gqtpe-button-color-white {
  background: white;
  color: black
}


.gqtpe-button-size-large {
  @apply min-h-12 h-12 font-medium text-lg;
  .ov-icon{
   @apply !text-base !size-6;
  }
}
.gqtpe-button-size-small {
  @apply min-h-8 h-8 max-h-8 text-sm rounded-sm font-light px-3;
  .ov-icon{
    @apply !text-xs !size-4 ;
  }
}
.gqtpe-button-size-default {
  @apply min-h-9 h-9 font-normal text-base;
  .ov-icon{
    @apply !text-sm !size-5 ;
  }
}
</style>