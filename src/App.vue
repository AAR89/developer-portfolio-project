<script setup>
import HeaderComp from "./components/HeaderComp.vue";
import MainComp from "./components/MainComp.vue";
import StackComp from "./components/StackComp.vue";
import Projects from "./components/Projects.vue";
</script>

<template>
  <div class="w-screen">
    <div class="bg-white px-4 flex flex-col w-[95%] m-auto my-10">
      <!-- <div class="flex justify-between items-start"> -->
      <HeaderComp />
      <MainComp />
      <!-- </div> -->
      <StackComp />
      <Projects />
    </div>
  </div>
</template>

<style scoped></style>
