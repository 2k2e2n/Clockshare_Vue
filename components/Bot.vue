<script setup>
import { ref, onMounted, defineProps } from 'vue';
import Showtime from './Showtime.vue';

const bottime  = ref( Math.floor(Math.random() * 10000) );
const progress = ref(0);
const local_time_keyname = "time";
onMounted(() => {
  const intervalId = window.setInterval(loop, 1000);  // 1秒に1回実行
  progress.value = 0;
});

//１秒毎にループ
function loop() {
  bottime.value++;
  progress.value = (bottime.value % 100); //100sでリセット
  localStorage.setItem(local_time_keyname, bottime.value);
};

</script>
<template>
  <div class="parent">
    <div class="CPU">CPU:</div>
    <Showtime class="set-font-size" :time="bottime" />

    <div class="progress-bar-wrapper">
      <div class="progress-bar">
        <div class="progress" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.set-font-size {
  font-size: 150%;
}

.parent {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.CPU {
  /* margin-left: -50px; */
  margin: 10px;
}

.progress-bar-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.progress-bar {
  background-color: rgb(145, 145, 145);
  border-radius: 5px;
  overflow: hidden;
  margin: 10px 0;
  width: 20vw;
}

.progress {
  height: 20px;
  background-color: blue;
  width: 0;
  transition: width 1s linear;
}

</style>
