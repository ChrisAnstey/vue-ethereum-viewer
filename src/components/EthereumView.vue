<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      Latest Block:
      <router-link :to="{ name: 'block', params: { id: latest_block }}">
        {{ latest_block }}
      </router-link>
    </div>
    <ul v-if="errors && errors.length">
      <li v-for="error of errors" v-bind:key="error">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
import BlockService from '../common/blockService';

export default {
  name: 'EthereumView',
  props: {
    msg: String
  },
  data() {
    return {
      latest_block: '',
      errors: []
    }
  },
  created() {
    BlockService.latest()
    .then(response => {
      this.latest_block = parseInt(response.data.result, 16)
    })
    .catch(e => {
      this.errors.push(e)
    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
