<script setup>
import { ref, watch, defineProps } from 'vue'

//親コンポーネントから受け取るデータ指定
interface Props {
  parentToChildProp: Number
}
const props = defineProps<Props>()

      const timeS = ref(0);
      const timeM = ref(0);
      const timeH = ref(0);
/*
const intervalId = window.setInterval(loop, 1000);  // 1秒に1回実行
function loop() {
  console.log(time.value);
}


      watch(
        //timeの値を監視し、newtimeに変更後の値、oldtimeに変更前の値
        time,
        (newtime, oldvalue) => {
        timeS.value = padTime(time.value % 60);
        timeM.value = padTime(Math.floor(time.value / 60) % 60);
        timeH.value = padTime(Math.floor(time.value / (60 * 60)) % 24);
        console.log(time);
        } 
      );





      // 0:4:20 -> 00:04:20 桁数をあわせる
      function padTime(value) {
        return value.toString().padStart(2, '0');
      }
*/
</script>
<template>
  <div>
    <h2>タイマーテスト</h2>

    <h3>{{ timeH.value }}:{{ timeM.value }}:{{ timeS.value }}</h3>
  </div>
</template>
