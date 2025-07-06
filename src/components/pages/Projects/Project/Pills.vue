<script setup lang="ts">
import type {Pill} from "@/components/pages/Projects/types.ts";

defineProps<{ pills?: Pill[] }>()

</script>

<template>
  <div class="pills">
    <span
        v-if="pills && pills.length"
        v-for="(pill) in pills"
        class="pill"
    >
      {{ pill }}
    </span>
    <div class="helper" v-else>(no pills)</div>
  </div>
</template>

<style scoped>
.pills {
  height: min-content;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  row-gap: 0.25rem;
  column-gap: 0.25rem;
  align-items: flex-start;
  .pill {
    display: inline-block;
    border-radius: 0.25rem;
    text-align: center;
    color: gray;
    border: 1px solid gray;
    padding: 0.25rem 0.75rem;
    font-size: 1rem;
    cursor: pointer;
    transition: color, ease-in-out 0.2s, background-color ease-in-out 0.2s;
    &:hover{
      color: white;
      background: black;
    }
  }
}
</style>