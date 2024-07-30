<script setup>
import { ref, onMounted } from 'vue';
import Showtime from './Showtime.vue';

const bottime  = ref(0);
window.addEventListener('load', function () {

});
onMounted(() => {
  bottime.value=Math.floor( Math.random() * 101 );;
  const intervalId = window.setInterval(loop, 1000);  // 1秒に1回実行
});



//１秒毎にループ
function loop() {
  bottime.value++;
};

</script>
<template>
  <div>
    <p>BOTTIME: {{ bottime }} </p>
    <Showtime class="maincontent" v-if="!isRest" :time="bottime" />
  </div>
</template>


<style scoped>
.maincontent {
  font-size: 200%;
}
</style>