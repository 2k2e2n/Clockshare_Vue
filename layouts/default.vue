<script setup>
import '@/assets/default.css'; // ここを追加
</script>

<template>
  <div>
  <header class="header">
    <div class="header-btn">

      <router-link :to="{ path: '/' }">
      <button class="button">
        <span class="lable">TOP</span>
      </button>
      </router-link>

      <router-link :to="{ path: '/todo' }">
      <button class="button">
        <span class="lable">TODO</span>
      </button>
      </router-link>
    </div>

  </header>
    <nuxt />
    <p>Footer</p>
  </div>
</template>

<style scoped>

.header {
  height: 50px;
  background-color: #e6e6e6;
  justify-content: flex-end;
  display: flex;
  align-items: center; 
}
.header-btn {
  display: flex;
  gap: 10px;
  text-align: center;

}



.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  gap: 8px;
  height: 36px;
  width: 120px;
  border: none;
  background: #5e41de33;
  border-radius: 20px;
  cursor: pointer;
}

.lable {
  line-height: 20px;
  font-size: 17px;
  color: #5D41DE;
  font-family: sans-serif;
  letter-spacing: 1px;
}

.button:hover {
  background: #5e41de4d;
}

.button:hover .svg-icon {
  animation: spin 2s linear infinite;
}

</style>
