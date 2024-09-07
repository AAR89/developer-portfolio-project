<script setup>
const list = [
  { name: "Home", position: 0 },
  { name: "About", position: 110 },
  { name: "Tech Stack", position: 900 },
  { name: "Projects", position: 1777 },
  { name: "Contact", position: 3916 },
];

function scroll(x, y) {
  document.documentElement.scrollTo({ top: y, behavior: "smooth" });
  console.log("scroll");
}
</script>

<template>
  <router-view to="/contacts" class="flex">
    <li
      @click="scroll(0, item.position)"
      class="text-xl cursor-pointer"
      v-for="item in list"
      :key="item.id"
    >
      {{ item.name }}
    </li>
  </router-view>
</template>
