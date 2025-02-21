<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";

const props = defineProps<{
  items: Array<string>
}>()
const active = ref(props.items[0])
let intervalID: number | undefined;
const nextValue = () => {
  const index = props.items.indexOf(active.value)
  if (index + 1 > (props.items.length - 1)) {
    active.value = props.items[0]
  } else {
    //setting next item by index
    active.value = props.items[index + 1]
  }
}

onMounted(() => {
  intervalID = setInterval(()=>{
    nextValue()
  },2000)
})
onUnmounted(() => {
  // Очищаем интервал при размонтировании компонента
  clearInterval(intervalID);
});
</script>

<template>
    {{active}}
</template>

<style scoped>
  .wrapper{
    overflow: hidden;
    border: 1px dashed #e6b600;
  }
</style>