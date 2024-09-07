<script setup>
const logosList = [
  "./img/Stack-logos/Stack-logo1.svg",
  "./img/Stack-logos/Stack-logo0.svg",
  "./img/Stack-logos/Stack-logo2.svg",
  "./img/Stack-logos/Stack-logo3.svg",
  "./img/Stack-logos/Stack-logo4.svg",
  "./img/Stack-logos/Stack-logo5.svg",
  "./img/Stack-logos/Stack-logo6.svg",
  "./img/Stack-logos/Stack-logo7.svg",
  "./img/Stack-logos/Stack-logo8.svg",
  "./img/Stack-logos/Stack-logo9.svg",
  "./img/Stack-logos/Stack-logo10.svg",
  "./img/Stack-logos/Stack-logo11.svg",
];
</script>

<template>
  <div class="mb-96 max-[770px]:mb-[150px]">
    <div class="m-auto flex flex-col items-center w-100% gap-8">
      <h2
        class="stack-title text-title-color font-bold text-5xl w-auto font-bold max-[715px]:text-4xl max-[480px]:text-3xl"
      >
        My Tech Stack
      </h2>
      <p
        class="text-light-grey text-4xl max-[715px]:text-3xl max-[480px]:text-2xl flex text-center"
      >
        Technologies I’ve been working with recently
      </p>
    </div>
    <ul
      class="grid grid-cols-6 gap-10 justify-items-center items-center mt-20 max-[1180px]:grid-cols-4 max-[860px]:grid-cols-3 max-[560px]:grid-cols-2"
    >
      <li v-for="logo in logosList" :key="logo">
        <img :src="logo" alt="" class="h-28" />
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
