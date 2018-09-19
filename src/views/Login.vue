<template>
  <div class="login">
    <h1>Login</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <form class="login-form">
      <label for="username">Username:</label>
      <input type="text" name="username" v-model="username"/>

      <label for="password">Password:</label>
      <input type="password" name="password" v-model="password"/>
      <button @click.prevent="login">Login</button>
    </form>

    <!-- <button @click="auth">Auth</button> -->
    <div class="login-box">
      <b>JWT:</b>
      {{ jwt }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'Login',

  data() {
    return {
      loading: false,
      username: undefined,
      password: undefined
    }
  },

  computed: {
    ...mapState(['jwt'])
  },

  methods: {
    login() {
      this.loading = true

      axios
        .post('auth', {
          username: this.username,
          password: this.password
        })
        .then(response => {
          if (response.data.hasOwnProperty('jwt')) {
            this.$store.commit('setJWT', response.data.jwt)
            this.$router.push('/')
          }
        })
        .catch(error => {
          console.log(error.response.data)
        })
    }
  }
}
</script>

<style lang="scss">
.login {
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
}

.login-form input {
  display: block;
  margin-bottom: 10px;
}

.login-box {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 20px;
  word-wrap: break-word;
  background-color: rgb(240, 240, 240);
  padding: 20px;
}
</style>
