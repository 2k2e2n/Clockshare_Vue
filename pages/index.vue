<script setup>
import { ref, onMounted } from 'vue';
import Showtime from '@/components/Showtime.vue';
import Resttime from '@/components/Resttime.vue';


const time  = ref(0);
const isRest = ref(false);
const resttimeleft = ref(100);
const local_time_keyname = "time";  //時間を保存すlocalstrageのキーの名前

window.addEventListener('load', function () {
  //ロード中
});
onMounted(() => {
  time.value=0;
  const intervalId = window.setInterval(loop, 1000);  // 1秒に1回実行
  checklocalkey();
});


//キーが存在しているかを確認
function checklocalkey() {
  if(localStorage.hasOwnProperty(local_time_keyname)) {
    time.value = Number(localStorage.getItem(local_time_keyname));
  } else {
    //キーが存在しない場合、キーを生成
    localStorage.setItem(local_time_keyname, "0");
  }
}

//Timeを削除
function clearTime() {
  //キーが存在しない場合、キーを生成
  localStorage.setItem(local_time_keyname, "0");
  checklocalkey();
}

//１秒毎にループ
function loop() {
  if(!isRest.value) {
    time.value++;
    localStorage.setItem(local_time_keyname, time.value);
  }
}
function toggleRest() {
  isRest.value = !isRest.value;
}
</script>
<template>
  <div>
    <h2>タイマーテスト</h2>
    <p>TIME: {{ time }} </p>
    <Showtime class="maincontent" v-if="!isRest" :time="time" />
    <Resttime class="maincontent" v-if="isRest" :isRest="isRest" />
    <button @click="toggleRest">{{ isRest ? 'REST(True)' : 'TIME(False)' }}</button>
    <button @click="clearTime">ClearTime</button>
  </div>
</template>


<style scoped>
.maincontent {
  font-size: 500%;
}
</style>