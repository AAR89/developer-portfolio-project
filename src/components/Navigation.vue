<script setup>
const list = ["Home", "About", "Tech Stack", "Projects", "Contact"];
</script>

<template>
  <a href="#" class="flex">
    <li class="text-xl cursor-pointer" v-for="item in list" :key="item.id">
      {{ item }}
    </li>
  </a>
</template>
