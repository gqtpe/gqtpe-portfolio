<script setup lang="ts">

type Props = {
  id: number
  title: string
  link: string
  active: boolean
}
defineProps<Props>()
</script>

<template>
  <div class="link-wrapper" :key="id">
    <div
        :class="`flex flex-col links ${active && 'active'}`"
    >
      <span class="link">{{ title }}</span>
      <span class="link dark">{{ title }}</span>
    </div>
  </div>
</template>

<style scoped>

.active {
  transform: translateY(-50%);
}



.link {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 2rem;
  padding: 0 1rem;
  background: var(--color-zinc-800);
  color: white;
  border-radius: 0.25rem;
}

.link-wrapper {
  overflow: hidden;
  max-height: 2rem;
  height: 2rem;


}

.dark {
  filter: invert(100%);
}
</style>