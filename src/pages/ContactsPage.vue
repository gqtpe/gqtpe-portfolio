<script setup lang="ts">
import PageHeaderRedirect from "@/components/PageHeaderRedirect/PageHeaderRedirect.vue";
import Button from "@/shared/ui/Button.vue"
import Input from "@/shared/ui/Input.vue";

</script>
<template>
  <div class="contact-page">
  <PageHeaderRedirect class="header" :subtitles="['Reach Out', 'Say Hello']" text="contact"/>
  <section class="font-main bg-black text-white flex flex-col justify-center items-center gap-[1rem] px-[0.5rem]">
    <h2 class="font-semibold text-6xl max-sm:3xl">Let's Talk</h2>
    <form class="form flex flex-col justify-center items-center gap-[1rem]">
      <div class="flex justify-between gap-[1rem] w-full max-sm:flex-col">
        <Input name='username' class="input" type="text" placeholder="What's Your Name"/>
        <Input name="email" class="input" type="text" placeholder="Your Email"/>
      </div>
      <Input name="about" text-area class="input" type="text" placeholder="About"/>
<!--      <Captcha @myEvent="handleMyEvent" />-->
<!--      <Button :disabled="submitDisabled" class="font-normal" variant="white" size="large">Send Mail</Button>-->
      <section class="bg-gray-500 h-[100vh]">
        <h1>variants</h1>
        <div class="flex gap-2">
      <Button variant="primary" >Primary</Button>
      <Button variant="secondary" >Secondary</Button>
      <Button variant="white" >White</Button>
      <Button variant="black" >Black</Button>
      <Button variant="gradient" >Gradient</Button>
        </div>
        <h1>sizes</h1>
        <div class="flex gap-2">

        <Button variant="primary" size="small">Primary</Button>
        <Button variant="primary" size="default">Primary</Button>
        <Button variant="primary" size="large">Primary</Button>
        <Button variant="secondary" size="small">Secondary</Button>
        <Button variant="secondary" size="default">Secondary</Button>
        <Button variant="secondary" size="large">Secondary</Button>
        </div>
        <h1>sizes</h1>
        <div class="flex gap-2">
          <Button variant="secondary" size="small">Secondary</Button>
          <Button variant="secondary" size="default">Secondary</Button>
          <Button variant="secondary" size="large">Secondary</Button>
        </div>
      <h1>up</h1>
      <div class="flex gap-2">
        <Button up variant="secondary" size="small">Secondary</Button>
        <Button up variant="secondary" size="default">Secondary</Button>
        <Button up variant="secondary" size="large">Secondary</Button>
      </div>
        <h1>round</h1>
        <div class="flex gap-2">
          <Button variant="secondary" round size="small"><v-icon :scale="3" name="co-hamburger-menu" />Secondary</Button>
          <Button variant="secondary" round size="default"><v-icon :scale="3" name="co-hamburger-menu" />Secondary</Button>
          <Button variant="secondary" round size="large">Secondary<v-icon :scale="3" name="co-hamburger-menu" /></Button>
        </div>

  </section>
    </form>
  </section>
  </div>
</template>

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