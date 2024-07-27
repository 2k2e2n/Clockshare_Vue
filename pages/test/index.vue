
<template>
  <div>
    <h2>簡単メモ帳</h2>
      <label>お名前</label>
      <span>お名前を入力してください</span>
      <p>カウンタ：{{ msg }} </p>
      <div>
        <button type="submit">利用する</button>
        <button v-on:click="pushbtn">Greet</button>
      </div>
  </div>
</template>
<script>
export default {

  data: function () {
    //Reactでいうstate
    return {
      msg: "helloworld"
    }
  },

  methods: {
    //クリックイベントの発火
    pushbtn: function (event) {
      alert("ボタンが押されました！")
    }
  },

};
</script>