<script setup>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Stack from "./components/Stack.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";
import { inject, onMounted, provide } from "vue";

function scroll(x, y) {
  window.scrollTo({ top: y, behavior: "smooth" });
  y = 0;
}

provide("scroll", scroll);

onMounted(() => {
  scroll(0, 0);
});
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
