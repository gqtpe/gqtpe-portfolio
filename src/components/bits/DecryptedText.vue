<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

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
  animateOnce?: boolean // New prop to control one-time vs every-time animation
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
  animateOnce: false, // Default to animate once for view mode
})

const displayText = ref(props.text)
const isHovering = ref(false)
const isScrambling = ref(false)
const revealedIndices = ref(new Set<number>())
const hasAnimated = ref(false) // Used only when animateOnce is true
const containerRef = ref<HTMLElement | null>(null)
const charRefs = ref<HTMLElement[]>([])

// GSAP entrance animation setup
onMounted(() => {
  if (containerRef.value) {
    gsap.set(containerRef.value, { opacity: 0, y: 10, visibility: 'hidden' })
    if (props.animateOn !== 'view') {
      gsap.to(containerRef.value, {
        opacity: 1,
        y: 0,
        visibility: 'visible',
        duration: 0.4,
        ease: 'power2.out',
      })
    }
  }
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

const startScrambleAnimation = () => {
  let interval: number
  let currentIteration = 0
  isScrambling.value = true
  revealedIndices.value.clear() // Reset revealed indices for fresh animation
  displayText.value = props.text // Reset display text

  interval = setInterval(() => {
    revealedIndices.value = new Set(revealedIndices.value)
    if (props.sequential) {
      if (revealedIndices.value.size < props.text.length) {
        const nextIndex = getNextIndex(revealedIndices.value)
        revealedIndices.value.add(nextIndex)
        displayText.value = shuffleText(props.text, revealedIndices.value)
        if (charRefs.value[nextIndex]) {
          gsap.fromTo(
              charRefs.value[nextIndex],
              { opacity: 0, y: 5 },
              { opacity: 1, y: 0, duration: 0.2, ease: 'power2.out' }
          )
        }
      } else {
        clearInterval(interval)
        isScrambling.value = false
      }
    } else {
      displayText.value = shuffleText(props.text, revealedIndices.value)
      currentIteration++
      charRefs.value.forEach((el, index) => {
        if (!revealedIndices.value.has(index)) {
          gsap.fromTo(
              el,
              { opacity: 0.5, scale: 0.9 },
              { opacity: 1, scale: 1, duration: 0.1, ease: 'power1.inOut' }
          )
        }
      })
      if (currentIteration >= props.maxIterations) {
        clearInterval(interval)
        isScrambling.value = false
        displayText.value = props.text
        gsap.to(charRefs.value, {
          opacity: 1,
          y: 0,
          stagger: 0.02,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    }
  }, props.speed) as unknown as number
}

// Handle hover case
watch(isHovering, (newHovering) => {
  if (props.animateOn !== 'hover') return

  if (newHovering) {
    startScrambleAnimation()
  } else {
    displayText.value = props.text
    revealedIndices.value.clear()
    isScrambling.value = false
    gsap.to(charRefs.value, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.2,
      ease: 'power2.out',
    })
  }
})

// Handle view case (animate once or every time)
onMounted(() => {
  if (props.animateOn !== 'view' || !containerRef.value) return

  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (props.animateOnce && hasAnimated.value) return // Skip if animateOnce is true and already animated

            if (props.animateOnce) hasAnimated.value = true // Mark as animated for one-time case

            // Reset container state for animation
            gsap.set(containerRef.value, { opacity: 0, y: 10, visibility: 'hidden' })

            // Entrance animation for container
            gsap.to(containerRef.value, {
              opacity: 1,
              y: 0,
              visibility: 'visible',
              duration: 0.4,
              ease: 'power2.out',
              onComplete: () => {
                // Start scramble animation after entrance
                startScrambleAnimation()
              },
            })

            // Disconnect observer only if animateOnce is true
            if (props.animateOnce) {
              observer.disconnect()
            }
          }
        })
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
  )

  observer.observe(containerRef.value)

  onUnmounted(() => {
    observer.disconnect()
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
          ref="charRefs"
          :class="revealedIndices.has(index) || !isScrambling ? className : encryptedClassName"
      >
        {{ char }}
      </span>
    </span>
  </span>
</template>

<style scoped>
</style>