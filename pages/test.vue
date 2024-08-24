<script setup>
import { ref } from "vue";

window.addEventListener("load", function () {});
</script>

<template>
  <div class="bg">
    <h2 class="text">TESTページ</h2>
    <h1 class="text">画像のテスト</h1>
    <p class="text">
      画像を指定するには、assets/imagesに画像を配置し、imgタグで指定
    </p>
    <img src="@/assets/images/image.webp" />
  </div>
</template>

<style scoped>
.text {
  color: white;
}
.bg {
  background-image: url("~@/assets/images/background.webp");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
