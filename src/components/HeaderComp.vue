<script setup>
import headerLogo from "../assets/img/header-logo.svg";
import smLogo1 from "../assets/img/sm-logo1.svg";
import smLogo2 from "../assets/img/sm-logo2.svg";
import smLogo3 from "../assets/img/sm-logo3.svg";

const list = ["Home", "About", "Tech Stack", "Projects", "Contact"];
const smLogosList = [smLogo1, smLogo2, smLogo3];
</script>

<template>
  <div class="flex justify-between">
    <img class="h-14 cursor-pointer" :src="headerLogo" alt="Header logo" />

    <div class="flex justify-between items-center">
      <ul class="flex gap-12 mr-12">
        <li
          class="text-light-grey text-xl cursor-pointer"
          v-for="item in list"
          :key="item.id"
        >
          {{ item }}
        </li>
      </ul>

      <div>
        <ul class="flex gap-5">
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
