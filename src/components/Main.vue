<script setup>
import avatar from "../assets/img/avatar.jpg";
</script>

<template>
  <div
    class="flex justify-between items-center mt-48 max-[715px]:flex-col mt-10"
  >
    <div>
      <h2
        class="main-title text-title-color font-bold text-6xl w-auto h-72 font-bold mt-5 max-[865px]:text-5xl max-[480px]:text-4xl"
      >
        Hi 👋, <br />
        My name is <br />
        <span>Pavan MG</span> <br />
        I build things for web
      </h2>
    </div>

    <div class="main__avatar-circle w-[75%]] max-[700px]:w-[65%]">
      <img class="rounded-full" :src="avatar" alt="Profile Pic" />
    </div>
  </div>
</template>

<style scoped>
.main-title {
  font-family: "Poppins", sans-serif;
  font-style: normal;

  span {
    background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.main__avatar-circle {
  background: -webkit-linear-gradient(left top, #13b0f5 -2.06%, #e70faa 100%);
  border-radius: 1000px;
  padding: 10px;
  position: relative;
}
</style>
