<script setup>
import { ref } from 'vue'

const time = ref(0)
const timeS = ref(0);
const timeM = ref(0);
const timeH = ref(0);
const isRest = ref(false);

window.addEventListener('load', function () {
  console.warn('LOADED');
  const intervalId = window.setInterval(countup, 10);  // 1秒に1回実行
});

function countup() {
  if(!isRest.value) {
    time.value++;
  }
  
  timeS.value = padTime(time.value % 60);
  timeM.value = padTime(Math.floor(time.value / 60) % 60);
  timeH.value = padTime(Math.floor(time.value / (60 * 60)) % 24);
}

// 0:4:20 -> 00:04:20 桁数をあわせる
function padTime(value) {
  return value.toString().padStart(2, '0');
}

function toggleRest() {
  isRest.value = !isRest.value;
}
</script>
<template>
  <div>
    <h2>タイマーテスト</h2>
    <button @click="toggleRest">{{ isRest ? 'REST(True)' : 'TIME(False)' }}</button>
    <p>TIME: {{ time }} </p>
    <h3>{{ timeH }}:{{ timeM }}:{{ timeS }}</h3>
  </div>
</template>
