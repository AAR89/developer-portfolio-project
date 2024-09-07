<script setup>
import Header from "./components/Header.vue";
import About from "./components/About.vue";
import TechStack from "./components/TechStack.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";
import { onMounted, provide } from "vue";

const scrollToElement = (elementId) => {
  setTimeout(function () {
    document.getElementById(elementId).scrollIntoView();
  }, 100);
};

provide("scrollToElement", scrollToElement);

onMounted(() => {
  scroll(0, 0);
});
</script>

<template>
  <div class="w-full">
    <div class="bg-white px-4 flex flex-col w-[95%] m-auto mt-10">
      <Header id="Header" />
      <About id="About" />
      <TechStack id="Tech Stack" />
      <Projects id="Projects" />
      <Footer id="Footer" />
    </div>
  </div>
</template>

<style scoped></style>
