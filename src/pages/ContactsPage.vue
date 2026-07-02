<template>
  <PageHeaderRedirect class="header" :subtitles="['Reach Out', 'Say Hello']" text="contact"/>
  <section class="font-main min-h-screen bg-black text-white flex flex-col justify-center items-center gap-[1rem] px-[0.5rem]">
    <h2 class="font-semibold text-6xl max-sm:3xl">Let's Talk</h2>
    <form class="form flex flex-col justify-center items-center gap-[1rem]" @submit.prevent="onSubmit">
      <div class="flex justify-between gap-[1rem] w-full max-sm:flex-col">
        <Input name="username" class="input" :value="form.name" @input="onInput('name')($event)" placeholder="What's Your Name"/>
        <Input name="email" class="input" :value="form.email" @input="onInput('email')($event)" placeholder="Your Email"/>
      </div>
      <Input name="about" text-area class="input" :value="form.message" @input="onInput('message')($event)" placeholder="About"/>

      <p v-if="form.email && !emailValid" class="text-red-400 self-start text-sm">Enter a valid email.</p>

      <Captcha @my-event="captchaPassed = $event"/>

      <Button class="w-full" variant="white" round size="large" type="submit" :disabled="!canSubmit">
        {{ status === 'loading' ? 'Sending…' : 'Send Mail' }}
      </Button>

      <p v-if="status === 'success'" class="text-green-400">Message sent — thanks! I'll get back to you.</p>
      <p v-if="status === 'error'" class="text-red-400">{{ errorMessage }}</p>
    </form>
  </section>
</template>
<script setup lang="ts">
import {computed, reactive, ref} from "vue";
import emailjs from "@emailjs/browser";
import PageHeaderRedirect from "@/components/PageHeaderRedirect/PageHeaderRedirect.vue";
import Button from "@/shared/ui/Button.vue"
import Input from "@/shared/ui/Input.vue";
import Captcha from "@/components/Captcha.vue";

type Status = 'idle' | 'loading' | 'success' | 'error'

const form = reactive({name: '', email: '', message: ''})
const captchaPassed = ref(false)
const status = ref<Status>('idle')
const errorMessage = ref('')

const emailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
const formValid = computed(() =>
    form.name.trim().length > 0 &&
    emailValid.value &&
    form.message.trim().length > 0
)
const canSubmit = computed(() =>
    formValid.value && captchaPassed.value && status.value !== 'loading'
)

const onInput = (field: 'name' | 'email' | 'message') => (e: Event) => {
  form[field] = (e.target as HTMLInputElement).value
  // Clear a lingering success/error banner once the user starts a new message.
  if (status.value === 'success' || status.value === 'error') status.value = 'idle'
}

const onSubmit = async () => {
  if (!canSubmit.value) return
  status.value = 'loading'
  errorMessage.value = ''
  try {
    await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {name: form.name, email: form.email, message: form.message, time: new Date().toLocaleString()},
        {publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY}
    )
    status.value = 'success'
    form.name = ''
    form.email = ''
    form.message = ''
    captchaPassed.value = false
  } catch (err) {
    status.value = 'error'
    errorMessage.value = 'Failed to send. Please try again later.'
  }
}
</script>
<style scoped>
.header {
  background: black;
  color: white;
}

.input {
  width: 100%;
  font-size: 2rem;
  @media(max-width:768px){
    font-size: 1.5rem;
  }
}

</style>
