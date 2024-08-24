<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
  check_Landscape_Sceen();
});

function check_Landscape_Sceen() {
  console.warn("画面の傾きをチェック！");
}
</script>

<template>
  <div>
    <div class="overlay">
      <img
        class="landscape-screen"
        src="@/assets/images/landscape-screen.gif"
      />
    </div>
  </div>
</template>

<style scoped>
@media screen and (orientation: portrait) {
  /* 縦向きの場合のスタイル */
  .landscape-screen {
    width: 40vh;
    z-index: 1001; /* 他の要素の上に表示 */
    transition: background-color 0.3s ease;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); /* 背景を半透明に */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* 他の要素の上に表示 */
    transition: background-color 0.3s ease;
  }
}
@media only screen and (orientation: landscape) {
  .landscape-screen {
    width: 400px;
    z-index: -1001; /* 他の要素の上に表示 */
    transition: background-color 0.3s ease;
    display: none;
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0); /* 背景を透明に */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1000; /* 他の要素の上に表示 */
    transition: background-color 0.3s ease;
  }
}
</style>
