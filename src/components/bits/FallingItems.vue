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
      pixelRatio: window.devicePixelRatio || 1, // Оставляем высокое разрешение
    },
  });

  // Создаём мышь и корректируем её поведение
  const mouse = Mouse.create(render.canvas);
  mouse.scale.x = 1 / (window.devicePixelRatio || 1);
  mouse.scale.y = 1 / (window.devicePixelRatio || 1);

  // Настраиваем mouseConstraint
  mouseConstraint = MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.2,
      render: { visible: false },
    },
  });

  // Границы
  const thickness = 30;
  const ground = Bodies.rectangle(width / 2, height + thickness / 2, width, thickness, { isStatic: true, render:{fillStyle:"transparent"} });
  const leftWall = Bodies.rectangle(-thickness / 2, height / 2, thickness, height, { isStatic: true,  render:{fillStyle:"transparent"}});
  const rightWall = Bodies.rectangle(width + thickness / 2, height / 2, thickness, height, { isStatic: true,  render:{fillStyle:"transparent"}});
  const topWall = Bodies.rectangle(width / 2, -thickness / 2, width, thickness, { isStatic: true, render:{fillStyle:"transparent"}});

  // Иконки
  const spacing = 0;
  const diameter = Math.floor(width / aboutSVGs.length);
  const scaleFactor = 0.8; // Можно подбирать вручную
  const scale = (diameter / 250) * scaleFactor;

  const icons = aboutSVGs.map((src, i) =>{
        if(width<1024){
          return Bodies.circle(i * (diameter + spacing), 20, diameter*0.625 , {
            restitution: 0.8,
            friction: 0.3,
            render: {
              sprite: {
                texture: src,
                xScale: scale*1.25,
                yScale: scale*1.25,
              },
            },
          })
        }
        return Bodies.circle(i * (diameter + spacing) + 30, 20, diameter / 2, {
          restitution: 0.8,
          friction: 0.3,
          render: {
            sprite: {
              texture: src,
              xScale: scale,
              yScale: scale,
            },
          },
        })
      }
  );
  // Добавляем в мир
  World.add(engine.world, [ground, leftWall, rightWall, topWall, ...icons]);
  World.add(engine.world, mouseConstraint);

  Runner.run(runner, engine);
  Render.run(render);

  // Исправленный обработчик перетаскивания
  Events.on(mouseConstraint, "enddrag", (event: any) => {
    const body = event.body as Body | undefined;
    if (body) {
      const x = Math.max(20, Math.min(body.position.x, width - 20));
      const y = Math.max(20, Math.min(body.position.y, height - 20));
      Body.setPosition(body, { x, y });
    }
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
}
</style>
