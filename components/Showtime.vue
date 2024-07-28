<script setup>
import { watch } from 'vue'

//親コンポーネントから受け取るデータ指定
defineProps(['time']);
let timeS = ref(0);
let timeM = ref(0);
let timeH = ref(0);

watch(
  //timeの値を監視し、newtimeに変更後の値、oldtimeに変更前の値
  time,
  (newtime, oldtime) => {
  timeS.value = padTime(time.value % 60);
  timeM.value = padTime(Math.floor(time.value / 60) % 60);
  timeH.value = padTime(Math.floor(time.value / (60 * 60)) % 24);
  } 
);

// 0:4:20 -> 00:04:20 桁数をあわせる
function padTime(value) {
  return value.toString().padStart(2, '0');
}

</script>
<template>
  <div>
    <h2>タイマーテスト</h2>
    <h3>{{ timeH }}:{{ timeM }}:{{ timeS }}</h3>
  </div>
</template>
