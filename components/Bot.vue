<script setup>
import { ref, onMounted, defineProps } from 'vue';
import Showtime from './Showtime.vue';

const bottime  = ref( Math.floor(Math.random() * 1010) ); ;

onMounted(() => {
  const intervalId = window.setInterval(loop, 1000);  // 1秒に1回実行
});

//１秒毎にループ
function loop() {
  bottime.value++;
  console.log(bottime.value);
};

</script>
<template>
  <div>
    <ul>CPU:
    <Showtime class="set-font-size" :time="bottime" />
    </ul>

  </div>
</template>


<style scoped>
.set-font-size {
  font-size: 150%;
}
</style>