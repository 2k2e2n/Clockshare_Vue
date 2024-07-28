<script setup>
import { ref, watch, defineProps, onMounted } from 'vue';

//親コンポーネントから受け取るデータ指定
const props = defineProps({
  time: {
    type: Number,
    required: true,
  }
});
const timeS = ref(0);
const timeM = ref(0);
const timeH = ref(0);

watch(() => props.time,
  (newtime) => {
    updatetime(newtime);
  }
);
onMounted(() => {
  (newtime) => {
    updatetime(newtime);
  }
});
function updatetime(newtime) {
  timeS.value = padTime(newtime % 60);
    timeM.value = padTime(Math.floor(newtime / 60) % 60);
    timeH.value = padTime(Math.floor(newtime / (60 * 60)) % 24);
}

// 0:4:20 -> 00:04:20 桁数をあわせる
function padTime(value) {
  return value.toString().padStart(2, '0');
}
</script>
<template>
  <div>
    <div>{{ timeH }}:{{ timeM }}:{{ timeS }}</div>
  </div>
</template>
