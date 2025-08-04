<script setup lang="ts">
import {useAttrs} from "vue";

type Props = {
  variant: 'primary' | 'secondary' | 'gradient'|'white'
  size?: 'medium' | 'large'
  link?: string
  download?: string
  up?:boolean
}

const attrs = useAttrs()
const {size = 'medium',variant} = defineProps<Props>()
</script>

<template>
  <a :href="link"
     aria-label="button-link"
     :class="`shadow-lg rounded-full ${up?'up':''}`"
     id="button-link"
     data-cursor-disabled
      v-bind="download ? { download } : {}"
      :target="link?'_blank':'_self'">
    <button
        :class="`${variant} transition-colors text-white font-bold ${size}`"
        v-bind="attrs"
    >
      <slot/>
    </button>
  </a>
</template>
<style scoped>
button{
  &:disabled{
    opacity: 0.5;
  }
  cursor: pointer;
}
.up {

  transition: transform, 0.2s ease-in-out;
  &:hover {
    transform: translateY(-0.2rem);
  }
  &:active{
    transform: translateY(0);
      filter: brightness(80%);
  }
}
.gradient{
  background: linear-gradient(0.25turn, var(--color-primary-500), var(--color-secondary-500));

}
.primary{
  background: var(--color-primary-500);
  &:hover{
    background: var(--color-secondary-500)
  }
}
.secondary{
  background: var(--color-secondary-500);
  &:hover{
    background: var(--color-primary-500)
  }
}
.white{
  background: white;
  color: black
}
  a{
    display: inline-block;
    overflow: hidden;
  }
  .large{
    font-size: 1.25rem;
    padding: 0.75rem 2rem;
    cursor: pointer;
  }
  .medium{
    padding: 0.5rem 1rem;
  }
</style>