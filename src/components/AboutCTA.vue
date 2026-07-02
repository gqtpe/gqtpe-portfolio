<script setup lang="ts">
import {useRouter} from "vue-router";
import Button from "@/shared/ui/Button.vue";

const router = useRouter()
</script>

<template>
  <div class="mb-[6rem] flex flex-col items-center gap-6 text-center">
    <h3 class="uppercase font-main font-black text-white text-[clamp(1.5rem,6vw,3.5rem)]">
      Let's work together
    </h3>
    <Button variant="white" round size="large" @click="router.push('/contacts')">
      Get in touch
      <v-icon name="bi-arrow-up-right"/>
    </Button>
  </div>
</template>
