<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/category">Category</router-link>
        <router-link to="/item">Item</router-link>
        <router-link to="/store">Store</router-link>
      </div>

      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
