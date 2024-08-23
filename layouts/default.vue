<script setup>
import '@/assets/default.css'; // ここを追加

import Check_screen from '@/components/Check-Landscape-screren.vue';
</script>

<template>
<div>
<header class="header">
  <div class="header-left">
      <h1 class="header-text">タイマーテスト</h1>
  </div>
  <div class="header-right">
    <div class="header-btn">

      <router-link :to="{ path: '/' }">
      <button class="button">
        <span class="lable">TOP</span>
      </button>
      </router-link>

      <router-link :to="{ path: '/todo' }">
      <button class="button">
        <span class="lable">TODO</span>
      </button>
      </router-link>

      <router-link :to="{ path: '/what-study' }">
      <button class="button">
        <span class="lable">What study?</span>
      </button>
      </router-link>

      <button class="button">
        <span class="lable">Darkmode</span>
      </button>

    </div>
  </div>
</header>

  <Check_screen />
  <nuxt/>  <!-- メインページのレンダリング-->

  <footer class="footer">
    <h3>Footer</h3>
  </footer>

</div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  background-color: #e6e6e6;
  height: 7vw;
  max-height: 60px;
  justify-content: space-between;
}
.header-left {
  display: flex;
  justify-content: flex-end;
}
.header-right {
  display: flex;
  justify-content: flex-end;
}
.header-btn {
  display: flex;
  gap: 10px;
  text-align: center;

}
.header-text {
  white-space: nowrap;
  font-size: max(2vw, 25px);

}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2% 12px;
  gap: 8px;
  height: 5vh;
  width: 12vw;
  border: none;
  background: #5e41de33;
  border-radius: 20px;
  cursor: pointer;
}

.lable {
  line-height: 20px;

  color: #5D41DE;
  font-family: sans-serif;
  letter-spacing: 1px;

  white-space: nowrap;
  overflow: hidden;
  font-size:max(13px,1vw);
}

.button:hover {
  background: #5e41de4d;
}

.button:hover .svg-icon {
  animation: spin 2s linear infinite;
}

.footer {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: #44aa33;
}


</style>
