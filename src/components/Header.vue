<script setup>
import headerLogo from "/img/header-logo.svg";
import Navigation from "./Navigation.vue";

import smLogo1 from "/img/sm-logo1.svg";
import smLogo2 from "/img/sm-logo2.svg";
import smLogo3 from "/img/sm-logo3.svg";

const smLogosList = [smLogo1, smLogo2, smLogo3];
</script>

<template>
  <div
    class="px-2 flex justify-between mb-48 max-[880px]:mb-[80px] max-[670px]:flex-col"
  >
    <img class="h-14 cursor-pointer" :src="headerLogo" alt="Header logo" />
    <div
      class="flex justify-between max-[670px]:mt-5 max-[565px]:flex-col gap-3 items-center"
    >
      <Navigation
        class="flex gap-3 text-light-grey max-[565px]:justify-center flex-wrap"
      />
      <div>
        <ul class="flex gap-3 mt-1">
          <img
            class="h-5 cursor-pointer"
            v-for="smLogo in smLogosList"
            :key="smLogo.id"
            :src="smLogo"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
