<script setup>
import linkedin from "../../assets/svg/linkedin-1-svgrepo-com.svg"
import github from "../../assets/svg/github-svgrepo-com.svg"
import telegram from "../../assets/svg/telegram-svgrepo-com.svg"
import {links} from "../../router.js";

</script>
<template>
<footer class="bg-black h-[60px] text-white">

</footer>
</template>

<style scoped>
.footer{
  border: 1px dashed white;
}
.link{
  display: flex;
  align-items: center;
  transition: color 0.5s ease-in;
  gap: var(--spacing);
  img{
    height: 1.5rem;
    width: 1.5rem;
    box-shadow: var(--shadow);
    border-radius: 50%;
  }
}
.link:hover{
  color: var(--color-gray-300)
}
.link:active{
  transition: color 0.1s ease-in-out;
  color: var(--secondary-color-500);
}
</style>