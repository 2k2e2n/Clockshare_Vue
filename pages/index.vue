<script setup>
import { ref, onMounted } from "vue";
import Showtime from "@/components/Showtime.vue";
import Resttime from "@/components/Resttime.vue";
import Bot from "@/components/Bot.vue";

const task = ref("");
const time = ref(0);
const isRest = ref(false);
const progress = ref(0);
const hover = ref(false);
const check = ref(0);
const local_time_keyname = "time";
const local_check_keyname = "check-count";

const darkMode = ref(false);
const local_theme = "checkTheme";
let intervalId = null;

onMounted(() => {
  checklocalkey();
  startTimer();
});

function toggleDarkMode() {
  darkMode.value = !darkMode.value;
  localStorage.setItem(local_theme, darkMode.value);
}

function startTimer() {
  time.value = Number(localStorage.getItem(local_time_keyname)) || 0;
  progress.value = time.value % 600;

  if (intervalId) {
    clearInterval(intervalId);
  }

  intervalId = window.setInterval(loop, 1000); // Update every second
}

function checklocalkey() {
  if (!localStorage.getItem(local_time_keyname)) {
    localStorage.setItem(local_time_keyname, "0");
  }
  task.value = localStorage.getItem("whatstudy", task.value);

  if (!localStorage.getItem(local_check_keyname)) {
    localStorage.setItem(local_check_keyname, "0");
  }

  if (!localStorage.getItem(local_theme)) {
    localStorage.setItem(local_theme, darkMode.value);
  }
  check.value = localStorage.getItem(local_check_keyname);
}

// cleartimeボタンが押されたときに実行
function clearTime() {
  localStorage.setItem(local_time_keyname, "0");
  localStorage.setItem(local_check_keyname, "0");
  time.value = 0;
  progress.value = 0;
  check.value = 0;
}

function loop() {
  if (!isRest.value) {
    time.value++;
    progress.value = time.value % 600; // Gauge resets every 10 minutes
    localStorage.setItem(local_time_keyname, time.value);

    if (progress.value === 599) {
      check.value++;
      localStorage.setItem(local_check_keyname, check.value);
    }
  }
}

function toggleRest() {
  isRest.value = !isRest.value;
}
</script>

<template>
  <div :class="{ 'dark-mode': darkMode }" id="app">
    <div class="timer-container">
      <h1>タイマーテスト</h1>
      <p>今勉強していること：{{ task }}</p>
      <p>check: {{ check }} time: {{ time }}</p>

      <Showtime class="maincontent" v-if="!isRest" :time="time" />
      <Resttime class="maincontent" v-if="isRest" :isRest="isRest" />

      <div class="parent">
        <img
          src="@/assets/images/running-stickman-transparency.gif"
          alt="logo"
          class="running-stickman"
        />
      </div>
      <div class="progress-bar">
        <div
          class="progress"
          :style="{ width: progress * (1 / 6) + '%' }"
        ></div>
      </div>
    </div>
    <div class="btn-main">
      <!-- トグルボタン -->
      <button
        class="toggle-button"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :class="{ hover: hover }"
        @click="toggleRest"
      >
        {{ isRest ? "REST" : "studying" }}
      </button>
      <!-- クリアタイムボタン -->
      <button class="clear-button" @click="clearTime">ClearTime</button>
      <!-- ダークモードトグルボタン -->
      <button class="dark-mode-button" @click="toggleDarkMode">
        {{ darkMode ? "Light Mode" : "Dark Mode" }}
      </button>
    </div>
    <div class="bot-container">
      <Bot />
      <Bot />
      <Bot />
    </div>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input {
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-right: 10px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2980b9;
}

.timer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.maincontent {
  color: red;
  font-weight: bold;
  z-index: 10;
  font-size: 10vw;
}

.progress-bar {
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  margin: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 50vw;
  max-width: 700px;
  z-index: 1;
}

.progress {
  height: 20px;
  background-color: #3498db;
  width: 0;

  /* transition: width 1s linear; */
}

.btn-main {
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle-button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-right: 10px;
  background-color: #3498db;
}

.clear-button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  background-color: #e74c3c;
}

.toggle-button.hover {
  background-color: #f1c40f;
  color: black;
}

.clear-button:hover {
  background-color: #c0392b;
}

.running-stickman {
  width: 10vw;
  position: relative;
  z-index: 0;
  margin: -40px;
}

img:has(.dark-mode) {
  filter: invert(100%);
}
.bot-container {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
}

.dark-mode {
  background-color: #1e1e1e;
  color: #ffffff;
}

.dark-mode h1 {
  color: #ffffff;
}
.dark-mode p {
  color: #ffffff;
}
.dark-mode .toggle-button {
  background-color: #00c3ff;
  color: #ffffff;
}

.dark-mode .clear-button {
  background-color: #ff0000;
}

.dark-mode .progress-bar {
  background-color: #ffffff;
}

.dark-mode .progress {
  background-color: #ff0000;
}

.dark-mode-button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: #333333;
}

.dark-mode-button:hover {
  background-color: #555555;
}

.dark-mode .running-stickman {
  filter: invert(1) brightness(2);
}
</style>
