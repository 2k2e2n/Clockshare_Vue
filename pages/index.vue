<script setup>
import { ref } from 'vue';
import Showtime from '@/components/Showtime.vue';

const time  = ref(0);
const timeS = ref(0);
const timeM = ref(0);
const timeH = ref(0);
const isRest = ref(false);

let timer = 0;

window.addEventListener('load', function () {
  time.value=0;
  console.warn('LOADED');
  const intervalId = window.setInterval(countup, 1000);  // 1秒に1回実行
});

function countup() {
  if(!isRest.value) {
    time.value++;
  }
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
    <Showtime :settime='timer.value' />
  </div>
</template>
