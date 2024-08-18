<template>
  <div>
    <p class="header">Header　　　
      <router-link class="header-text" to="/">Top　</router-link>
      <router-link class="header-text" to="/todo">Todo　</router-link>
    </p>
    <nuxt />
    <p>Footer</p>
  </div>
</template>

<style>
.header {
  background-color: aqua;
  display: flex;

}
.header-text {
  font-weight: bold;
}
</style>