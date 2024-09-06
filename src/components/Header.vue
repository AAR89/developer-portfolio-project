<script setup>
import headerLogo from "../assets/img/header-logo.svg";
import Navigation from "./Navigation.vue";

import smLogo1 from "../assets/img/sm-logo1.svg";
import smLogo2 from "../assets/img/sm-logo2.svg";
import smLogo3 from "../assets/img/sm-logo3.svg";

const smLogosList = [smLogo1, smLogo2, smLogo3];
</script>

<template>
  <div class="flex justify-between max-[860px]:flex-col text-center">
    <img
      class="h-14 cursor-pointer max-[860px]:h-20"
      :src="headerLogo"
      alt="Header logo"
    />
    <div
      class="flex justify-between max-[860px]:flex-col text-4xl gap-5 items-center"
    >
      <Navigation
        class="text-light-grey gap-[60px] mr-12 max-[860px]:flex-col mr-2 gap-2 max-[860px]:mt-5"
      />
      <div>
        <ul class="flex gap-5">
          <img
            class="h-5 cursor-pointer max-[860px]:h-9"
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
