<script setup>
import linkedin from "../../assets/svg/linkedin-1-svgrepo-com.svg"
import github from "../../assets/svg/github-svgrepo-com.svg"
import telegram from "../../assets/svg/telegram-svgrepo-com.svg"
import {links} from "../../router.js";

</script>
<template>
  <footer class="bg-black h-[60px] text-white">
    <div class="page-wrapper footer h-full flex justify-around items-center">
      <span>© 2025 All rights reserved.</span>
      <div class="flex gap-3 text-gray-500 ">
        <a :href="links.linkedin" target="_blank" class="link"><img :src="linkedin">Linkedin</a>
        <a :href="links.github" target="_blank" class="link"><img :src="github">Github</a>
        <a :href="links.telegram" target="_blank" class="link"><img :src="telegram">Telegram</a>
      </div>
    </div>
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