<script setup>
import HeaderComp from "./components/HeaderComp.vue";
import MainComp from "./components/MainComp.vue";
import StackComp from "./components/StackComp.vue";
</script>

<template>
  <div>
    <div
      class="bg-white px-4 flex flex-col w-4/5 m-auto my-10 max-md:mt-4 mb-4 w-75 justify-center"
    >
      <HeaderComp />
      <MainComp />
      <StackComp />
    </div>
  </div>
</template>

<style scoped></style>
