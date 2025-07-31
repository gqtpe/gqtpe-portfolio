<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch, nextTick } from "vue";
import {
  Engine,
  Render,
  World,
  Bodies,
  Runner,
  Constraint,
  Mouse,
  MouseConstraint,
  Events,
} from "matter-js";

const props = defineProps<{
  svgs: string[];
}>();

const stackContainer = ref<HTMLElement | null>(null);
const width = ref(0);
const height = ref(0);

let engine: Engine;
let render: Render;
let runner: Runner;
let mouseConstraint: MouseConstraint;
let resizeObserver: ResizeObserver;

const initMatter = () => {
  if (!stackContainer.value || width.value === 0 || height.value === 0) return;

  engine = Engine.create();
  runner = Runner.create();

  render = Render.create({
    element: stackContainer.value,
    engine,
    options: {
      width: width.value,
      height: height.value,
      background: "transparent",
      wireframes: false,
      pixelRatio: window.devicePixelRatio || 1,
    },
  });

  const mouse = Mouse.create(render.canvas);
  mouse.scale.x = 1 / (window.devicePixelRatio || 1);
  mouse.scale.y = 1 / (window.devicePixelRatio || 1);

  mouseConstraint = MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.2,
      render: { visible: false },
    },
  });

  const icons = [];
  const springs: Constraint[] = [];

  const total = props.svgs.length;
  const iconWidth = width.value / total * 0.8;
  const iconHeight = iconWidth;
  const spacing = width.value / total;
  const startY = 120;
  const fixedY = 30;

  for (let i = 0; i < total; i++) {
    const x = spacing * i + spacing / 2;

    const icon = Bodies.rectangle(x, startY, iconWidth, iconHeight, {
      restitution: 0.9,
      friction: 0.1,
      render: {
        sprite: {
          texture: props.svgs[i],
          xScale: iconWidth / 250,
          yScale: iconHeight / 250,
        },
      },
    });

    icons.push(icon);

    const spring = Constraint.create({
      pointA: { x, y: fixedY },
      bodyB: icon,
      pointB: { x: 0, y: -iconHeight / 2 },
      stiffness: 0.02,
      damping: 0.05,
      render: { visible: false },
    });

    springs.push(spring);
  }

  World.add(engine.world, [...icons, ...springs, mouseConstraint]);

  Runner.run(runner, engine);
  Render.run(render);

  // кастомный зигзаг
  Events.on(render, 'afterRender', () => {
    const ctx = render.context;
    springs.forEach(spring => {
      if(spring.bodyB && spring.pointA) {
        const {x: x1, y: y1} = spring.pointA;
        const {x: x2, y: y2} = spring.bodyB.position;

        const segments = 8;
        const dx = (x2 - x1) / segments;
        const dy = (y2 - y1) / segments;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        for (let i = 1; i < segments; i++) {
          const x = x1 + dx * i;
          const y = y1 + dy * i + Math.sin(i * Math.PI) * 5;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    });
  });
};

const destroyMatter = () => {
  if (engine) {
    World.clear(engine.world, true);
    Engine.clear(engine);
    Render.stop(render);
    Runner.stop(runner);
    render.canvas.remove();
  }
};

const handleResize = () => {
  if (!stackContainer.value) return;
  const rect = stackContainer.value.getBoundingClientRect();
  width.value = Math.floor(rect.width);
  height.value = Math.floor(rect.height);
};

onMounted(() => {
  handleResize();
  resizeObserver = new ResizeObserver(() => handleResize());
  if (stackContainer.value) resizeObserver.observe(stackContainer.value);
});

watch([width, height], async ([newW, newH], [oldW, oldH]) => {
  if (newW !== oldW || newH !== oldH) {
    await nextTick();
    destroyMatter();
    initMatter();
  }
});

onUnmounted(() => {
  destroyMatter();
  if (resizeObserver && stackContainer.value) {
    resizeObserver.unobserve(stackContainer.value);
  }
});
</script>

<template>
  <div ref="stackContainer" class="stack-container"></div>
</template>

<style scoped>
.stack-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
</style>