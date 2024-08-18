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
  console.log(bottime.value);
  progress.value = (bottime.value % 100); //100sでリセット
  localStorage.setItem(local_time_keyname, bottime.value);
};

</script>
<template>
  <div>
    <ul class="CPU">CPU:
    <Showtime class="set-font-size" :time="bottime" />
    <div class = "progress-bar">
      <div class = "progress" :style="{width: progress + '%'}"></div>
      </div>
    </ul>

  </div>
</template>


<style scoped>
.set-font-size {
  font-size: 150%;
}

.CPU {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: -50px;
}
.progress-bar {
  width: 300%;
  background-color: rgb(145, 145, 145);
  border-radius: 5px;
  overflow: hidden;
  margin: 20px 0;

  /*
  justify-content: center;
  display: flex;
  */
}

.progress {
  height: 20px;
  background-color: blue;
  width: 0;
  transition: width 1s linear;
}

</style>