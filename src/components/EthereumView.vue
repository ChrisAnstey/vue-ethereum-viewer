<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>Latest Block: {{ latest_block }} </div>
    <ul v-if="blocks && blocks.length">
      <li v-for="block of blocks" v-bind:key="block">
        <p><strong>{{block.title}}</strong></p>
        <p>{{block.body}}</p>
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <li v-for="error of errors" v-bind:key="error">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EthereumView',
  props: {
    msg: String
  },
  data() {
    return {
      latest_block: '',
      blocks: [],
      errors: [],
      infura_url: ''
    }
  },
  created() {
    let params = {
      "jsonrpc": "2.0",
      "id": 1,
      "method": "eth_blockNumber",
      "params": []
    }
    this.infura_url = `https://mainnet.infura.io/v3/` + process.env.VUE_APP_INFURA_KEY
    axios.post(this.infura_url, params)
    .then(response => {
      this.blocks = response.data
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
