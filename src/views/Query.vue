<template>
  <div class="query">
    <h1>Query API</h1>
    <p>Check your console for results</p>

    <button @click="test">Test</button>
    <button @click="users">Users</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Query',

  methods: {
    test() {
      axios.get('/test').then(response => {
        console.log(response.data)
      })
    },

    users() {
      axios.get('/users').then(response => {
        console.log(response.data)
      })
    }
  }
}
</script>
