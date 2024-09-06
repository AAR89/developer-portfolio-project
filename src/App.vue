<script setup>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Stack from "./components/Stack.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="w-full">
    <div class="bg-white px-4 flex flex-col w-[95%] m-auto my-10">
      <Header />
      <Main />
      <Stack />
      <Projects />
      <Footer />
    </div>
  </div>
</template>

<style scoped></style>
