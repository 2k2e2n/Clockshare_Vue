<template>
  <div>
    <h2>タイマーテスト</h2>
    <p>TIME: {{ time }} </p>
    <Showtime class="maincontent" v-if="!isRest" :time="time" />
    <Resttime class="maincontent" v-if="isRest" :isRest="isRest" />

    <!-- トグルボタン -->
    <button 
      class="toggle-button" 
      @mouseover="hover = true" 
      @mouseleave="hover = false" 
      :class="{ 'hover': hover }" 
      @click="toggleRest">
      {{ isRest ? 'REST(True)' : 'TIME(False)' }}
    </button>

    <!-- クリアタイムボタン -->
    <button class="clear-button" @click="clearTime">ClearTime</button>

    <h3>--bot--</h3>
    <Bot />
    <Bot />
    <Bot />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Showtime from '@/components/Showtime.vue';
import Resttime from '@/components/Resttime.vue';
import Bot from '@/components/Bot.vue';

const time = ref(0);
const isRest = ref(false);
const local_time_keyname = "time";
const bot = ref(10);

const hover = ref(false); // ホバー状態を管理する変数

window.addEventListener('load', function () {
  // ロード中
});

onMounted(() => {
  time.value = 0;
  const intervalId = window.setInterval(loop, 1000);
  checklocalkey();
});

function checklocalkey() {
  if (localStorage.hasOwnProperty(local_time_keyname)) {
    time.value = Number(localStorage.getItem(local_time_keyname));
  } else {
    localStorage.setItem(local_time_keyname, "0");
  }
}

function clearTime() {
  localStorage.setItem(local_time_keyname, "0");
  checklocalkey();
}

function loop() {
  if (!isRest.value) {
    time.value++;
    localStorage.setItem(local_time_keyname, time.value);
  }
}

function toggleRest() {
  isRest.value = !isRest.value;
}
</script>

<style scoped>
.maincontent {
  font-size: 500%;
  color: red;
  font-weight: bold;
}

.toggle-button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #3498db; /* 通常時の青色背景 */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease; /* 色のトランジション */
  margin-right: 10px;
}

.toggle-button.hover {
  background-color: #f1c40f; /* ホバー時の黄色背景 */
  color: black; /* ホバー時の黒色テキスト */
}

.clear-button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #e74c3c; /* 通常時の赤色背景 */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease; /* 色のトランジション */
}

.clear-button:hover {
  background-color: #c0392b; /* ホバー時の暗い赤色背景 */
}
</style>
