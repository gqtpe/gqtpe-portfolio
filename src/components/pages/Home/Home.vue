<script setup lang="ts">
import Button from "../../Button.vue";
</script>

<template>
  <div class="flex w-full h-full items-center  text-white">
    <div class="bg-black p-8 inline-flex flex-col gap-[10px] p-12 items-start">
      <h6 class="ellipse1 uppercase text-lg font-bold">hello, there</h6>
      <h1 class="ellipse2 uppercase text-7xl font-black">i'm Nursain Temirtas</h1>
      <h6 class="uppercase text-lg font-bold">web-developer</h6>
      <Button color="secondary">Download CV</Button>
    </div>
  </div>
</template>
<style scoped>
.ellipse1,.ellipse2 {
  position: relative;
  z-index: 1;
}
.ellipse1:before, .ellipse2:after {
  content: "";
  position: absolute;
  width: 3rem;
  height: 3rem;
}
.ellipse1:before {
  background-color: var(--color-secondary-500);
  border-radius: 50%;
  z-index: -1;
  bottom:-10%;
  left:-1%;
}
.ellipse2:after{
  background-color: var(--color-primary-500);
  border-radius: 50%;
  z-index: -1;
  bottom:-10%;
  right:-1%;
}

</style>