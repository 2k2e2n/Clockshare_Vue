<template>
  <div>
    <p class="header">Header
      <router-link to="/">Top</router-link>
      <router-link to="/todo">Todo</router-link>
    </p>
    <nuxt />
    <p>Footer</p>
  </div>
</template>

<style>
.header {
  background-color: aqua;
}
</style>