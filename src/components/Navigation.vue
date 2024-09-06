<script setup>
const list = ["Home", "About", "Tech Stack", "Projects", "Contact"];
</script>

<template>
  <ul class="flex">
    <li class="text-xl cursor-pointer" v-for="item in list" :key="item.id">
      {{ item }}
    </li>
  </ul>
</template>
