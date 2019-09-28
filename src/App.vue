<template>
  <div id="app">
    <img id='logo' alt="Vue logo" src="./assets/ethereum.svg">
    <EthereumView msg="Ethereum Viewer"/>
  </div>
</template>

<script>
import EthereumView from './components/EthereumView.vue'

export default {
  name: 'app',
  components: {
    EthereumView
  }
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
