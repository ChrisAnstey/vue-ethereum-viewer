<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>Block: {{ $route.params.id }} </div>
    <div>Hex: {{ parseInt($route.params.id).toString(16) }} </div>
    <div>
      Date: {{ block.friendly_date }}
    </div>
    <ul v-if="errors && errors.length">
      <li
        v-for="error of errors"
        :key="error"
      >
        {{ error.message }}
      </li>
    </ul>
  </div>
</template>

<script>
import BlockService from '../common/blockService';

export default {
  name: 'BlockView',
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      block: '',
      errors: []
    }
  },
  mounted() {
    this.msg = "Viewing " + this.$route.params.id
    BlockService.get(this.$route.params.id)
    .then(response => {
      this.block = response.data.result
      let block_date = new Date(parseInt(this.block.timestamp, 16) * 1000)
      this.block.friendly_date = block_date.toUTCString()
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
