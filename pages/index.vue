<script setup>
import { ref } from 'vue';
import Showtime from '@/components/Showtime.vue';
import Resttime from '@/components/Resttime.vue';

const time  = ref(0);
const isRest = ref(false);

window.addEventListener('load', function () {
  time.value=0;
  console.warn('LOADED');
  const intervalId = window.setInterval(loop, 1000);  // 1秒に1回実行
});

function loop() {
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
    <Showtime v-if="!isRest" :time="time" />
    <Resttime v-if="isRest" :isRest="isRest"/>
  </div>
</template>
