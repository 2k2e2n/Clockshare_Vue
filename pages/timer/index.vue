<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

window.addEventListener('load', function () {
  console.warn('LOADED');
});

</script>

<template>
  <div>
    <h2>タイマーテスト</h2>
      <p>TIME: {{ count }} </p>
  </div>
</template>