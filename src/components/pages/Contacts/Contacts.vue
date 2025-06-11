<script setup lang="ts">
import Button from "@/components/common/Button.vue"
</script>
<!--todo: send contact data to email using php-->
<template>
  <section class="flex flex-col">
    <h3 class="text-highlight-1 self-start">Contacts</h3>
    <div class="card content m-8">
      <h4>SAY SOMETHING</h4>
      <form action="#">
        <input type="text" placeholder="Name" class="form_control"/>
        <input type="text" placeholder="Email" class="form_control"/>
        <textarea name="" id="" cols="30" rows="10" placeholder='Your Comment' class="form_control"/>
        <Button type="submit" color="secondary">Send Message</Button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.content{

  border-radius: 0.2rem;
  padding: 2rem;
  min-width: 250px;
  h4 {
    font-size: 16px;
    margin-bottom: 20px;
  }
  form {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    input {
      flex-grow: 1;
    }

    textarea {
      width: 100%;
      min-width: 100%;
      min-height: 100px;
    }

    .form_control {
      font-size: 14px;
      border: 1px solid #d4d4d4;
      background: #f7fafc;
      color: var(--black);
      padding: 6px 12px;
      height: 50px;

    }
  }
}


</style>