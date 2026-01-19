<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import gsap from 'gsap';

enum CursorTags {
  Hover = '[data-cursor-hover]',
  Disable = '[data-cursor-disabled]',
  Action = '[data-cursor-action]',
}

const text = ref('');
const route = useRoute();

let moveCursor: (e: MouseEvent) => void;
let cleanupFns: (() => void)[] = [];

const initCursor = () => {
  const cursor = document.getElementById('magic-cursor');
  const ball = document.getElementById('ball');
  if (!cursor || !ball) return;

  moveCursor = (e: MouseEvent) => {
    gsap.to(ball, {
      duration: 0.3,
      x: e.clientX - ball.offsetWidth / 2,
      y: e.clientY - ball.offsetHeight / 2,
      ease: 'power2.out',
    });
  };
  window.addEventListener('mousemove', moveCursor);
  cleanupFns.push(() => window.removeEventListener('mousemove', moveCursor));

  const resetBall = (el: HTMLElement) => {
    const onLeave = () => {
      text.value = '';
      gsap.to(ball, {
        scale: 0.5,
        duration: 0.2,
        background: 'none',
        ease: 'expo',
      });
    };
    el.addEventListener('mouseleave', onLeave);
    cleanupFns.push(() => el.removeEventListener('mouseleave', onLeave));
  };

  const setBallProperties = (el: HTMLElement, properties: GSAPTweenVars, inner?: string) => {
    const onEnter = () => {
      gsap.to(ball, {
        scale: 1,
        duration: 0.2,
        ...properties,
      });
      if (inner) {
        text.value = inner;
      }
    };
    el.addEventListener('mouseenter', onEnter);
    cleanupFns.push(() => el.removeEventListener('mouseenter', onEnter));
  };

  const hoverTargets = gsap.utils.toArray<HTMLElement>(CursorTags.Hover);
  hoverTargets.forEach((el) => {
    setBallProperties(el, {});
    resetBall(el);
  });

  const actionTargets = gsap.utils.toArray<HTMLElement>(CursorTags.Action);
  actionTargets.forEach((el) => {
    const current = el.dataset.cursorAction;
    if (!current) return;
    setBallProperties(el, {}, current);
    resetBall(el);
  });

  const disableCursorTargets = gsap.utils.toArray<HTMLElement>(CursorTags.Disable);
  disableCursorTargets.forEach((el) => {
    setBallProperties(el, { scale: 0 });
    resetBall(el);
  });
};

const cleanupCursor = () => {
  cleanupFns.forEach((fn) => fn());
  cleanupFns = [];
};

onMounted(() => {
  initCursor();
});

onBeforeUnmount(() => {
  cleanupCursor();
});

watch(
    () => route.fullPath,
    () => {
      cleanupCursor();
      text.value = ''; // ← Сброс текста при переходе
      setTimeout(() => {
        gsap.to('#ball', {
          scale: 0.5,
          duration: 0.2,
          background: 'none',
          ease: 'expo',
        });
        initCursor()
      }, 0);
    }
);
</script>


<template>
  <div id="magic-cursor">
    <div id="ball" :class="!text && 'ball-border'">
      <div v-if="text" class="ball-center">
        <div class="text text-white font-main uppercase" ref="ballInner">{{ text }}</div>
      </div>
    </div>

  </div>
</template>

<style>
#magic-cursor {
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  pointer-events: none;
  z-index: 10000;
  -webkit-transition: opacity 0.2s ease-in-out 0.5s;
  transition: opacity 0.2s ease-in-out 0.5s;
}
.ball-border{
  border: 4px solid #999999;
}
#ball {
  scale: 0.5;
  position: fixed;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  pointer-events: none;
  opacity: 1;
  box-sizing: border-box;

}
.ball-center{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(15px);
}

.text:before {
  content: '['
}

.text:after {
  content: ']'
}
</style>