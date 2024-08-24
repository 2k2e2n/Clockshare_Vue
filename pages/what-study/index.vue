<script setup>
import { ref, onMounted } from "vue";

const task = ref("");
const isTaskEntered = ref(false);

function enterTask() {
  if (task.value.trim() !== "") {
    isTaskEntered.value = true;

    console.warn(task.value);
    localStorage.setItem("whatstudy", task.value);
  } else {
    localStorage.setItem("whatstudy", "");
  }
}
</script>

<template>
  <div class="app">
    <h1 v-if="!isTaskEntered">今勉強するべきことはなんですか？</h1>

    <!-- タスク入力フォーム -->
    <div v-if="!isTaskEntered">
      <input v-model="task" placeholder="Enter a task" />

      <router-link :to="{ path: '/' }">
        <button @click="enterTask">
          <span>GO</span>
        </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.app {
  margin: 10px;
}
input {
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-right: 10px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
</style>
