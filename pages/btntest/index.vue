<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
function decrement() {
  count.value--
}



</script>

<template>
    <div>
    <button @click="increment">Count is: {{ count }}</button>
    <button @click="decrement">Count is: {{ count }}</button>
    <div>Count is: {{ count }}</div>

    </div>

</template> 