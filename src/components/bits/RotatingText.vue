<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: 'slowDown' | 'speedUp' | 'pause' | 'goBonkers';
  className?: string;
}

const props = withDefaults(defineProps<CircularTextProps>(), {
  text: '',
  spinDuration: 20,
  onHover: 'speedUp',
  className: ''
});

const letters = computed(() => Array.from(props.text));
const isHovered = ref(false);
const rootEl = ref<HTMLElement | null>(null);

// Позиции букв по окружности зависят только от текста — считаем один раз,
// а не на каждый кадр анимации.
const letterTransforms = computed(() => {
  const n = letters.value.length;
  return letters.value.map((_, index) => {
    const rotationDeg = (360 / n) * index;
    const factor = Math.PI / n;
    return `rotateZ(${rotationDeg}deg) translate3d(${factor * index}px, ${factor * index}px, 0)`;
  });
});

// Вращение пишем напрямую в style элемента. Раньше угол лежал в reactive-ref
// и обновлялся 60 раз в секунду — каждый кадр дёргал перерисовку Vue-компонента
// и пересчёт пропсов motion-v. Для непрерывной анимации реактивность не нужна.
let rotation = 0;
let speed = 0;
let rafId: number | null = null;
let lastTime = 0;

const getTargetSpeed = () => {
  const baseSpeed = 360 / props.spinDuration;
  if (!isHovered.value) return baseSpeed;

  switch (props.onHover) {
    case 'pause':
      return 0;
    case 'slowDown':
      return baseSpeed / 2;
    case 'speedUp':
      return baseSpeed * 4;
    case 'goBonkers':
      return baseSpeed * 20;
    default:
      return baseSpeed;
  }
};

const getScale = () => (isHovered.value && props.onHover === 'goBonkers' ? 0.8 : 1);

const animate = (now: number) => {
  const deltaTime = lastTime ? (now - lastTime) / 1000 : 0;
  lastTime = now;

  // Плавный разгон/торможение к целевой скорости при наведении.
  speed += (getTargetSpeed() - speed) * Math.min(1, deltaTime * 5);
  rotation = (rotation + speed * deltaTime) % 360;

  if (rootEl.value) {
    rootEl.value.style.transform = `rotate(${rotation}deg) scale(${getScale()})`;
  }

  rafId = requestAnimationFrame(animate);
};

onMounted(() => {
  speed = getTargetSpeed();
  lastTime = 0;
  rafId = requestAnimationFrame(animate);
});

onUnmounted(() => {
  if (rafId !== null) cancelAnimationFrame(rafId);
});

const handleHoverStart = () => {
  isHovered.value = true;
};

const handleHoverEnd = () => {
  isHovered.value = false;
};
</script>

<template>
  <div
      ref="rootEl"
      :class="`m-0 mx-auto rounded-full w-[120px] h-[120px] relative font-black text-gray-300 max-md:text-gray-50 mix-blend-difference text-center cursor-pointer origin-center ${props.className}`"
      style="transition: scale 0.3s ease-out; will-change: transform"
      @mouseenter="handleHoverStart"
      @mouseleave="handleHoverEnd"
  >
    <span
        v-for="(letter, i) in letters"
        :key="i"
        class="absolute inline-block inset-0 text-lg"
        :style="{ transform: letterTransforms[i] }"
    >
      {{ letter }}
    </span>
  </div>
</template>
