<script setup lang="ts">

type Props = {
  color: 'primary' | 'secondary'
  size?: 'medium' | 'large'
  link?: string
  download?: string
  className?:string
}
const {size = 'medium',color, className} = defineProps<Props>()
const sx = `${color==='primary'?primaryClasses:secondaryClasses} ${className?className:''}`
//color variant style cases
const secondaryClasses = "bg-secondary-500 hover:bg-primary-500"
const primaryClasses = "bg-primary-500 hover:bg-secondary-500"
</script>

<template>
  <a
      :href="link"
      v-bind="download ? { download } : {}"
      :target="link?'_blank':'_self'">
  <button
           :class="`${color==='primary'?primaryClasses:secondaryClasses} transition-colors text-white font-bold py-2 px-4 rounded-full ${className?className:''}`">
    <slot/>
  </button>
  </a>
</template>

  .large{
    padding: 0.5rem 2rem;
  }
  .medium{
    padding: 0.5rem 1rem;
  }
</style>