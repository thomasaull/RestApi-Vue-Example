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

    <button @click.prevent="logout">Logout</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'Login',

  data() {
    return {
      username: undefined,
      password: undefined
    }
  },

  computed: {
    ...mapState(['jwt'])
  },

  methods: {
    login() {
      axios
        .post('auth', {
          username: this.username,
          password: this.password
        })
        .then(response => {
          console.log(response.data)

          if (response.data.hasOwnProperty('jwt')) {
            this.$store.commit('setJWT', response.data.jwt)
            this.$router.push('/')
          }
        })
        .catch(error => {
          console.log(error.response.data)
        })
    },

    logout() {
      axios
        .delete('auth')
        .then(response => {
          console.log(response.data)
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
  margin-bottom: 20px;
  word-wrap: break-word;
  background-color: rgb(240, 240, 240);
  padding: 20px;
}
</style>
