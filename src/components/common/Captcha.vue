<script setup lang="ts">
import randomNumber from "@/utils/randomNumber.ts";
import { ref } from "vue";

const emit = defineEmits(['myEvent'])
const timeOutID = ref<number | null>(null)
const error = ref<string|null>(null)
const from0to10 = () => randomNumber(1, 9)
const a = from0to10()
const b = randomNumber(1, 10 - a)
const c = a + b

const onChange = (e: Event) => {
  const target = e.currentTarget as HTMLInputElement
  const value = target.value

  if (timeOutID.value) {
    error.value = null
    clearTimeout(timeOutID.value)
  }

  timeOutID.value = setTimeout(() => {
    const num = Number(value)
    if (!isNaN(num) && num === c) {
      emit('myEvent', true)
    }else{
      emit('myEvent', false)
      error.value='Wrong Captcha'
    }
  }, 100)
}
</script>

<template>
  <div class="captcha-wrapper flex justify-center items-center">
    <div class="captcha__item">{{ a }}</div>
    <span>+</span>
    <div class="captcha__item">{{ b }}</div>
    <span>=</span>
    <div :class="`captcha__item ${error && 'captcha-error'}`">
      <input @input="onChange" type="text" maxlength="2" />
    </div>
    <span>*Captcha Validation</span>
  </div>
</template>

<style scoped>
@reference "@/styles/tailwind.css";

.captcha-wrapper {
  gap: 0.5rem;
  span {
    color: white;
  }
}
.captcha-error{
  border: 1px solid tomato;
}
.captcha__item {
  @apply flex justify-center items-center;
  width: 2rem;
  height: 2rem;
  aspect-ratio: 1/1;
  border-radius: 10%;
  background: white;
  color: black;
  overflow: hidden;

  input {
    text-align: center;
    width: 100%;
    height: 100%;
  }
}
</style>
