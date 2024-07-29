<template>
  <div class="ErrorPage">
    <div class="ErrorPage__content">
      <div class="ErrorPage__inner">
        <h1>予期せぬエラーが発生しました。</h1>
        <h2>エラーが繰り返し表示される場合はご連絡ください</h2>
        <p>---debug---</p>
        <p>{{ error.statusCode }}</p>
          <nuxt-link to="/"> TOP</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
