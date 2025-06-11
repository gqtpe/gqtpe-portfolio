<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue'
import { useMotion } from '@vueuse/motion'

interface Props {
  endValue: number
  duration?: number
}

const props = defineProps<Props>()

const count = ref<number>(0)
const target = ref<HTMLElement | null>(null)

// Анимация появления и исчезновения
const { apply } = useMotion(target, {
  initial: { opacity: 0, scale: 0.5 },
  enter: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  leave: { opacity: 0, y: -20, transition: { duration: 0.5 } }
})

// Функция плавного счёта
const animateCount = (to: number, duration: number) => {
  let start = 0
  const step = () => {
    start += (1000 / 60) / (duration * 1000) * to
    count.value = Math.min(Math.round(start), to)
    if (count.value < to) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  // Дожидаемся инициализации `target` и только потом применяем анимацию
  setTimeout(() => {
    apply('enter')
    animateCount(props.endValue, props.duration ?? 2)
  }, 50)
})

// Опционально: исчезновение после завершения
onUnmounted(() => {
  setTimeout(() => apply('leave'), 1000)
})
</script>

<template>
  <div ref="target" class="countup">
    {{ count }}
  </div>
</template>

<style scoped>
.countup {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
}
</style>
