<script setup>
import { ref, watch, defineProps, onMounted } from 'vue';

const resttimeleft  = ref(100);

// 親コンポーネントから受け取るデータ指定
const props = defineProps({
  isRest: {
    type: Boolean,
    required: true,
  }
});

// コンポーネントがマウントされたときに実行される
onMounted(() => {
  const intervalId = window.setInterval(loop, 1000);  // 1秒に1回実行
  checkisRest();
});

watch(
  () => props.isRest,
  (isRest) => {
    checkisRest();
  }
);

function checkisRest() {
  if (props.isRest) {
    resttimeleft.value = 10;    // 初期値
  }
}

function loop() {
  if (resttimeleft.value > 0 && props.isRest) {
    resttimeleft.value--;
  }
}
</script>

<template >
  <div>
    <p>restTIMEleft: {{ resttimeleft }}</p>
  </div>
</template>
