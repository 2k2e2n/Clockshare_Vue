<script setup>
import { ref } from 'vue';

// Create reactive variables
const taskName = ref('');
const taskDescription = ref('');
const tasks = ref([
  { task: 'task1', description: 'description1' },
  { task: 'task2', description: 'description2' }
]);

window.addEventListener('load', function () {
    checktasks();
});

//タスクの追加
const addTask = () => {
  if (taskName.value.trim() !== '' && taskDescription.value.trim() !== '') {
    tasks.value.push({ task: taskName.value, description: taskDescription.value });
    taskName.value = '';
    taskDescription.value = '';
  }
};
//タスクの削除
const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};
</script>

<template>
  <div>
    <h2>TODO Lists</h2>
    <input type="text" v-model="taskName" placeholder="Task name" size="10" />
    <input type="text" v-model="taskDescription" placeholder="Description" size="30" />
    <button @click="addTask">add Task</button>
    
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <strong>{{ task.task }}</strong>: {{ task.description }} <button @click="deleteTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>
