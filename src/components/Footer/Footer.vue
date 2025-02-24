<script setup>
import {footerSVGs} from "../../assets/svg/index.js";
import {links} from "../../router.js";
</script>
<template>
  <footer class="bg-black text-white">
    <div class="page-wrapper footer h-full flex justify-between items-center">
      <span>© 2025 All rights reserved.</span>
      <div class="flex gap-3 text-gray-500 ">
        <a :href="links.linkedin" target="_blank" class="link"><img :src="footerSVGs.linkedin" alt="linkedin-icon">Linkedin</a>
        <a :href="links.github" target="_blank" class="link"><img :src="footerSVGs.github" alt="github-icon">Github</a>
        <a :href="links.telegram" target="_blank" class="link"><img :src="footerSVGs.telegram" alt="telegram-icon">Telegram</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border: 1px dashed white;
}

.link {
  display: flex;
  align-items: center;
  transition: color 0.5s ease-in;
  gap: var(--spacing);

  img {
    height: 1.5rem;
    width: 1.5rem;
    box-shadow: var(--shadow);
    border-radius: 50%;
  }
}

.link:hover {
  color: var(--color-gray-300)
}

.link:active {
  transition: color 0.1s ease-in-out;
  color: var(--color-secondary-500);
}
</style>