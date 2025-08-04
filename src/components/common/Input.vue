<script setup lang="ts">
import { onMounted, ref, useAttrs } from 'vue'
import gsap from 'gsap'



type Props = {
  textArea?: boolean
}
const {textArea} = defineProps<Props>()
const attrs = useAttrs()
const progressLine = ref<HTMLElement | null>(null)
const tl = gsap.timeline({ paused: true })

onMounted(() => {
  if (progressLine.value) {
    tl.to(progressLine.value, {
      width: '100%',
      duration: 0.5,
      ease: 'expo',
    })
  }
})

const handleFocus = () => tl.play()
const handleBlur = () => tl.reverse()
</script>

<template>
  <div class="input">
    <component
        :is="textArea?'textarea':'input'"
        type="text"
        v-bind="attrs"
        @focus="handleFocus"
        @blur="handleBlur"
    />
    <div class="input__track">
      <div class="input__line" ref="progressLine" />
    </div>
  </div>
</template>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
  outline: none;
  textarea{
    min-height: 10rem;
  }
  textarea:focus{
    outline: none;
  }
}


.input__track {
  position: relative;
  height: 2px;
  background-color: var(--color-zinc-800);
  overflow: hidden;
}

.input__line {
  height: 100%;
  width: 0;
  background-color: white;
}
</style>
