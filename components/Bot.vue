<script setup>
import { ref, onMounted, defineProps } from 'vue';
import Showtime from './Showtime.vue';

//親コンポーネントから受け取るデータ指定
//親コンポーネントから受け取るデータ指定



const time  = ref( Math.floor(Math.random() * 101) ); 

onMounted(() => {
  const intervalId = window.setInterval(loop, 1000);  // 1秒に1回実行
});



//１秒毎にループ
function loop() {
  time.value++;
};

</script>
<template>
  <div>
    <p>{{time}}</p>
    <Showtime class="set-font-size" :time="bottime" />
  </div>
</template>


<style scoped>
.set-font-size {
  font-size: 200%;
}
</style>