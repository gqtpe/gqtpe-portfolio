<script setup lang="ts">

type Props = {
  color: 'primary' | 'secondary' | 'gradient'
  size?: 'medium' | 'large'
  link?: string
  download?: string
  className?: string
}
const {size = 'medium',color, className} = defineProps<Props>()
const sx = `${color==='primary'?primaryClasses:color === 'secondary'?secondaryClasses:'gradient'} ${className?className:''}`
</script>

<template>
  <a :href="link"
     aria-label="button-link"
     class="shadow-lg rounded-full"
     id="button-link"
      v-bind="download ? { download } : {}"
      :target="link?'_blank':'_self'">
    <button
        :class="`${sx} transition-colors text-white font-bold ${size}`">
      <slot/>
    </button>
  </a>
</template>
<style scoped>
.gradient{
  background: linear-gradient(0.25turn, var(--color-primary-500), var(--color-secondary-500));
}
  a{
    display: inline-block;
    overflow: hidden;
  }
  .large{
    font-size: 1.25rem;
    padding: 0.75rem 2rem;
  }
  .medium{
    padding: 0.5rem 1rem;
  }
</style>