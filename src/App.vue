<template>
  <div id="app">
    <img
      id="logo"
      alt="Vue logo"
      src="./assets/ethereum.svg"
    >
    <p>
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
      <router-link to="/latest_block">
        View Latest Block
      </router-link>
      |
      <router-link to="/info">
        Show info
      </router-link>
    </p>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app img#logo {
  width:300px;
}
</style>
