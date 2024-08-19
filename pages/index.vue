<script setup>
  import { ref, onMounted } from 'vue';
  import Showtime from '@/components/Showtime.vue';
  import Resttime from '@/components/Resttime.vue';
  import Bot from '@/components/Bot.vue';


  // Variable
  const time = ref(0);
  const isRest = ref(false);
  const progress = ref(0); // 追加: ゲージの進行度を管理する変数
  const local_time_keyname = "time";
  const bot = ref(10);
  const hover = ref(false); // ホバー状態を管理する変数
  const check = ref(0);//ゲージが何回満タンになったか

  window.addEventListener('load', function () {
    // ロード中
  });

  onMounted(() => {
    time.value = 0;
    progress.value = 0; // 初期化
    const intervalId = window.setInterval(loop, 100); //デフォルトは1000
    checklocalkey();
  });

  //時間が保存されているか確認
  function checklocalkey() {
    // 休憩していない場合１秒ずつ実行
    if (localStorage.hasOwnProperty(local_time_keyname)) {
      time.value = Number(localStorage.getItem(local_time_keyname));
    } else {
      localStorage.setItem(local_time_keyname, "0");
    }
  }

  function clearTime() {
    localStorage.setItem(local_time_keyname, "0");
    checklocalkey();
    progress.value = 0; // 追加: ゲージもリセット
  }

  function loop() {
    if (!isRest.value) {
      time.value++;
      progress.value = (time.value % 600); // 追加: ゲージの進行度を更新（10分ごとにリセット）
      localStorage.setItem(local_time_keyname, time.value);
    }
    if (progress.value == 599) {
      check.value++;
      //progress.value == 0;
    }
  }

  function toggleRest() {
    isRest.value = !isRest.value;
  }
</script>


<template>

  <div class="timer-container">
  <h1>タイマーテスト</h1>
  <p>check: {{ check }} time: {{ time }}  </p>
  <div>
  <img src="@/assets/images/running-stickman-transparency.gif" alt="logo" class="running-stickman"> </div>

    <Showtime class="maincontent" v-if="!isRest" :time="time" />
    <Resttime class="maincontent" v-if="isRest" :isRest="isRest" />
    <div class="progress-bar">
      <div class="progress" :style="{ width: (progress * (1/6)) + '%' }"></div>
    </div>

    <div class="btn-main">
      <!-- トグルボタン -->
      <button 
        class="toggle-button" 
        @mouseover="hover = true" 
        @mouseleave="hover = false" 
        :class="{ 'hover': hover }" 
        @click="toggleRest">
        {{ isRest ? 'REST' : 'studying' }}
      </button>
      <!-- クリアタイムボタン -->
      <button class="clear-button" @click="clearTime">ClearTime </button>
    </div>

    <Bot />
    <Bot />
    <Bot />
  </div>
</template>


<style scoped>
.timer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /*height: 100vh; */
  text-align: center;
}

/* ---既存のCSS--- */
.maincontent {
  font-size: 500%;
  color: red;
  font-weight: bold;
  z-index: 10;
}

.progress-bar {
  width: 50%;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px 0;
}

.progress {
  height: 20px;
  background-color: #3498db;
  width: 0;
  transition: width 1s linear; /* ゲージの幅を滑らかに更新 */
}

.btn-main {
  display: flex;
  align-items: center;
  justify-content: center;

}
  .toggle-button {
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease; /* 色のトランジション */
    margin-right: 10px;
    background-color: #3498db; /* 通常時の青色背景 */

  }
  .clear-button {
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease; /* 色のトランジション */
    background-color: #e74c3c; /* 通常時の赤色背景 */

  }
  .toggle-button.hover {
    background-color: #f1c40f; /* ホバー時の黄色背景 */
    color: black; /* ホバー時の黒色テキスト */
  }
  .clear-button:hover {
    background-color: #c0392b; /* ホバー時の暗い赤色背景 */
  }

.running-stickman {
  scale: 20%;
  margin-bottom: -250px;
  margin-top: -200px;
  z-index: -1;
}

</style>