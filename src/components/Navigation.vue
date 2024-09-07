<script setup>
import { inject } from "vue";
const list = [
  { name: "Home", position: "Header" },
  { name: "About", position: "About" },
  { name: "Tech Stack", position: "Tech Stack" },
  { name: "Projects", position: "Projects" },
  { name: "Contact", position: "Footer" },
];

const scrollToElement = inject("scrollToElement");
</script>

<template>
  <router-view to="/contacts" class="flex">
    <li
      @click="scrollToElement(item.position)"
      class="text-xl cursor-pointer"
      v-for="item in list"
      :key="item.id"
    >
      {{ item.name }}
    </li>
  </router-view>
</template>
