<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const props = defineProps<{ except?: string[] }>();

const show = computed(() => {
  const except = new Set(props.except || []);

  // home page '/' case
  if (except.has("/") && route.path === "/") {
    return false;
  }

  // checking except equality with `route.path`
  return !Array.from(except).some(e => e !== "/" && route.path === e);
});
</script>

<template>
  <aside v-if="show" v-motion-fade-visible class="flex bg-black p-4 w-1/4 h-full">
    <div class="border-b-2 border-l-2 border-white w-full flex items-end p-4">
      <h2 class="text-xl uppercase font-bold text-white">{{ route.path.slice(1) }}</h2>
    </div>
  </aside>
</template>
