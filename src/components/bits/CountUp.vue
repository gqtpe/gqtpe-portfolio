<script setup lang="ts">
import gsap from "gsap";
import { onMounted } from "vue";
const {onEnd} = defineProps<{onEnd: ()=>void}>()
onMounted(() => {
  const tl = gsap.timeline();
  tl.set('#wait', { yPercent: 100 });

  tl.to('#complete', { yPercent: 100 });

  tl.to('.loading-number', {
    yPercent: -90,
    duration: 1.8,
    ease: 'circ.inOut',
    stagger: 0.3,
  });

  tl.to('#wait', { yPercent: 0, opacity: 1, duration: 0.5 }, '-=1');
  tl.to('#wait', {delay:0.5, duration: 1, opacity: 0 });
  tl.to('.loading-number', { yPercent: -120, duration: 1 }, '-=0.7');
  tl.to('#complete', { yPercent: 0, opacity: 1, onComplete: ()=>onEnd()}, '-=1');
});
</script>

<template>
  <div class="countup font-main font-semibold flex flex-col items-center">
    <div class="numbers-wp">
      <div id="numbers">
        <span class="loading-number">012345678<span class="last">9</span></span>
        <span class="loading-number">012345678<span class="last">9</span></span>
      </div>
      <span id="complete">100</span>
    </div>
    <div id="wait">wait wait</div>
  </div>
</template>


<style>
.last{
  letter-spacing: -2rem;
}
.countup {
  width: 100%;
  font-size: 9rem;
}

#complete {
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.numbers-wp {
  overflow: hidden;
  width: 100%;
  height: 10rem;
  position: relative;
  text-align: center;
}

#wait {
  opacity: 0;
  font-size: 2rem;
}

.loading-number {
  letter-spacing: -3rem;
  line-height: 0.6;
  writing-mode: vertical-rl;
  text-orientation: upright;
  display: inline-block;
}

</style>
