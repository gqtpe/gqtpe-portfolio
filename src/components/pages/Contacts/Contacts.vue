<script setup lang="ts">
import PageHeaderRedirect from "@/components/common/PageHeaderRedirect/PageHeaderRedirect.vue";
import Button from "@/components/common/Button.vue"
import Input from "@/components/common/Input.vue";
import Captcha from "@/components/common/Captcha.vue";
import {ref} from "vue";

const submitDisabled = ref(true)
function handleMyEvent(payload: boolean) {
  submitDisabled.value = !payload
}
</script>
<template>
  <PageHeaderRedirect class="header" :subtitles="['Reach Out', 'Say Hello']" text="contact"/>
  <section class="font-main bg-black text-white flex flex-col justify-center items-center gap-[1rem] px-[0.5rem]">
    <h2 class="font-semibold text-6xl">Let's Talk</h2>
    <form class="form flex flex-col justify-center items-center gap-[1rem]">
      <div class="flex justify-between gap-[1rem] max-sm:flex-col">
        <Input name='username' class="input" type="text" placeholder="What's Your Name"/>
        <Input name="email" class="input" type="text" placeholder="Your Email"/>
      </div>
      <Input name="about" text-area class="input" type="text" placeholder="About"/>
      <Captcha @myEvent="handleMyEvent" />
      <Button :disabled="submitDisabled" class="font-normal" variant="white" size="large">Send Mail</Button>
    </form>
  </section>
</template>

<style scoped>
.header {
  background: black;
  color: white;
}

.input {
  width: 100%;
  font-size: 2rem;
}

</style>