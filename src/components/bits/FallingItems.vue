<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from "vue";
import { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint, Events, Body } from "matter-js";
import { aboutSVGs } from "@/assets/svg";
//todo: define props

const stackContainer = ref<HTMLElement | null>(null);
let engine: Engine;
let render: Render;
let runner: Runner;
let mouseConstraint: MouseConstraint;

const initMatter = () => {
  if (!stackContainer.value) return;

  engine = Engine.create();
  runner = Runner.create();

  const width = stackContainer.value.clientWidth;
  const height = stackContainer.value.clientHeight;

  render = Render.create({
    element: stackContainer.value,
    engine: engine,
    options: {
      width,
      height,
      background: "transparent",
      wireframes: false,
      pixelRatio: window.devicePixelRatio,
    },
  });

  // Границы (верх, низ, лево, право) с увеличенной плотностью
  const thickness = 30;
  const ground = Bodies.rectangle(width / 2, height + thickness / 2, width, thickness, { render: { fillStyle: "#FFF" }, isStatic: true });
  const leftWall = Bodies.rectangle(-thickness / 2, height / 2, thickness, height, { render: { fillStyle: "#FFF" }, isStatic: true });
  const rightWall = Bodies.rectangle(width + thickness / 2, height / 2, thickness, height, { render: { fillStyle: "#FFF" }, isStatic: true });
  const topWall = Bodies.rectangle(width / 2, -thickness / 2, width, thickness, { render: { fillStyle: "#FFF" }, isStatic: true });

  // Иконки
  const spacing = 0;
  const diameter = Math.floor(width / aboutSVGs.length);
  const scale = diameter / 250;

  const icons = aboutSVGs.map((src, i) =>
      Bodies.circle(i * (diameter + spacing) + 30, 20, diameter / 2, {
        restitution: 0.8,
        friction: 0.3,
        render: {
          fillStyle: "#000",
          sprite: {
            texture: src,
            xScale: scale,
            yScale: scale,
          },
        },
      })
  );

  // Добавляем перетаскивание с ограничением
  const mouse = Mouse.create(render.canvas);
  mouseConstraint = MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.2,
      render: { visible: false }, // Скрываем линию соединения
    },
  });

  World.add(engine.world, [ground, leftWall, rightWall, topWall, ...icons, mouseConstraint]);

  Runner.run(runner, engine);
  Render.run(render);

  // Ограничение перетаскивания внутри контейнера
  Events.on(mouseConstraint, "enddrag", (event) => {
    const body = event.body;
    if (body) {
      const x = Math.max(20, Math.min(body.position.x, width - 20));
      const y = Math.max(20, Math.min(body.position.y, height - 20));
      Body.setPosition(body, { x, y });
    }
  });
};

const destroyMatter = () => {
  if (engine) {
    World.clear(engine.world);
    Engine.clear(engine);
    Render.stop(render);
    Runner.stop(runner);
    render.canvas.remove();
  }
};

let resizeTimeout: number | null = null;

const handleResize = async () => {
  if (!stackContainer.value) return;

  // Очистка предыдущего таймера (если есть)
  if (resizeTimeout) {
    clearTimeout(resizeTimeout);
  }

  // Устанавливаем небольшой таймер перед обновлением
  resizeTimeout = window.setTimeout(async () => {
    stackContainer.value!.style.height = `${window.innerHeight}px`;

    await nextTick(); // Дождаться обновления DOM

    destroyMatter();
    initMatter();
  }, 1000); // 100 мс задержки для корректного обновления размеров
};

onMounted(() => {
  if (stackContainer.value) {
    stackContainer.value.style.height = `${window.innerHeight}px`;
  }
  initMatter();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  destroyMatter();
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <div ref="stackContainer" class="stack-container"></div>
</template>

<style>
.stack-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border: 1px dashed var(--color-primary-200);
}
</style>
