<script setup>
import logo1 from "../assets/Stack-logos/Stack-logo0.svg";
import logo2 from "../assets/Stack-logos/Stack-logo1.svg";
import logo3 from "../assets/Stack-logos/Stack-logo2.svg";
import logo4 from "../assets/Stack-logos/Stack-logo3.svg";
import logo5 from "../assets/Stack-logos/Stack-logo4.svg";
import logo6 from "../assets/Stack-logos/Stack-logo5.svg";
import logo7 from "../assets/Stack-logos/Stack-logo6.svg";
import logo8 from "../assets/Stack-logos/Stack-logo7.svg";
import logo9 from "../assets/Stack-logos/Stack-logo8.svg";
import logo10 from "../assets/Stack-logos/Stack-logo9.svg";
import logo11 from "../assets/Stack-logos/Stack-logo10.svg";
import logo12 from "../assets/Stack-logos/Stack-logo11.svg";
const logosList = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
];

console.log(logosList);
</script>

<template>
  <div>
    <div class="m-auto flex flex-col items-center w-100% gap-8">
      <h2
        class="stack-title text-title-color font-bold text-5xl w-auto font-bold mt-96"
      >
        My Tech Stack
      </h2>
      <p class="text-light-grey text-3xl">
        Technologies I’ve been working with recently
      </p>
    </div>
    <ul class="grid grid-cols-6 gap-8 justify-center items-center mt-36">
      <li v-for="logo in logosList" :key="logo.id">
        <img :src="logo" alt="" class="h-20 w-20" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.stack {
  &-title {
    font-family: "Poppins", sans-serif;
    font-style: normal;
  }
}
</style>
