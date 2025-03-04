<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useMotion } from '@vueuse/motion'

interface Props {
  text: string
  speed?: number
  maxIterations?: number
  sequential?: boolean
  revealDirection?: 'start' | 'end' | 'center'
  useOriginalCharsOnly?: boolean
  characters?: string
  className?: string
  parentClassName?: string
  encryptedClassName?: string
  animateOn?: 'view' | 'hover'
}

const props = withDefaults(defineProps<Props>(), {
  speed: 50,
  maxIterations: 10,
  sequential: false,
  revealDirection: 'start',
  useOriginalCharsOnly: false,
  characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className: '',
  parentClassName: '',
  encryptedClassName: '',
  animateOn: 'hover',
})

const displayText = ref(props.text)
const isHovering = ref(false)
const isScrambling = ref(false)
const revealedIndices = ref(new Set<number>())
const hasAnimated = ref(false)
const containerRef = ref<HTMLElement | null>(null)

useMotion(containerRef, {
  initial: { opacity: 0, y: 10, visibility: 'hidden' },
  enter: { opacity: 1, y: 0, visibility: 'visible', transition: { duration: 0.4 } },
})

const availableChars = computed(() => {
  return props.useOriginalCharsOnly
      ? Array.from(new Set(props.text.split(''))).filter((char) => char !== ' ')
      : props.characters.split('')
})

const getNextIndex = (revealedSet: Set<number>) => {
  const textLength = props.text.length
  switch (props.revealDirection) {
    case 'start':
      return revealedSet.size
    case 'end':
      return textLength - 1 - revealedSet.size
    case 'center': {
      const middle = Math.floor(textLength / 2)
      const offset = Math.floor(revealedSet.size / 2)
      const nextIndex = revealedSet.size % 2 === 0 ? middle + offset : middle - offset - 1

      if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
        return nextIndex
      }
      for (let i = 0; i < textLength; i++) {
        if (!revealedSet.has(i)) return i
      }
      return 0
    }
    default:
      return revealedSet.size
  }
}

const shuffleText = (originalText: string, currentRevealed: Set<number>) => {
  if (props.useOriginalCharsOnly) {
    const positions = originalText.split('').map((char, i) => ({
      char,
      isSpace: char === ' ',
      index: i,
      isRevealed: currentRevealed.has(i),
    }))

    const nonSpaceChars = positions.filter((p) => !p.isSpace && !p.isRevealed).map((p) => p.char)

    for (let i = nonSpaceChars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[nonSpaceChars[i], nonSpaceChars[j]] = [nonSpaceChars[j], nonSpaceChars[i]]
    }

    let charIndex = 0
    return positions
        .map((p) => (p.isSpace ? ' ' : p.isRevealed ? originalText[p.index] : nonSpaceChars[charIndex++]))
        .join('')
  } else {
    return originalText
        .split('')
        .map((char, i) => (char === ' ' ? ' ' : currentRevealed.has(i) ? originalText[i] : availableChars.value[Math.floor(Math.random() * availableChars.value.length)]))
        .join('')
  }
}

watch(isHovering, (newHovering) => {
  let interval: number
  let currentIteration = 0

  if (newHovering) {
    isScrambling.value = true
    interval = setInterval(() => {
      revealedIndices.value = new Set(revealedIndices.value)
      if (props.sequential) {
        if (revealedIndices.value.size < props.text.length) {
          const nextIndex = getNextIndex(revealedIndices.value)
          revealedIndices.value.add(nextIndex)
          displayText.value = shuffleText(props.text, revealedIndices.value)
        } else {
          clearInterval(interval)
          isScrambling.value = false
        }
      } else {
        displayText.value = shuffleText(props.text, revealedIndices.value)
        currentIteration++
        if (currentIteration >= props.maxIterations) {
          clearInterval(interval)
          isScrambling.value = false
          displayText.value = props.text
        }
      }
    }, props.speed) as unknown as number
  } else {
    displayText.value = props.text
    revealedIndices.value.clear()
    isScrambling.value = false
  }
})

onMounted(() => {
  if (props.animateOn !== 'view') return

  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.value) {
            isHovering.value = true
            hasAnimated.value = true
          }
        })
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
  )

  if (containerRef.value) {
    observer.observe(containerRef.value)
  }

  onUnmounted(() => {
    if (containerRef.value) observer.unobserve(containerRef.value)
  })
})
</script>

<template>
  <span
      ref="containerRef"
      class="inline-block whitespace-nowrap"
      :class="parentClassName"
      v-bind="props.animateOn === 'hover' ? { onMouseenter: () => (isHovering = true), onMouseleave: () => (isHovering = false) } : {}"
  >
    <span class="sr-only">{{ displayText }}</span>
    <span aria-hidden="true">
      <span
          v-for="(char, index) in displayText.split('')"
          :key="index"
          :class="revealedIndices.has(index) || !isScrambling || !isHovering ? className : encryptedClassName"
      >
        {{ char }}
      </span>
    </span>
  </span>
</template>

<style scoped>
/* Добавь свои стили */
</style>
