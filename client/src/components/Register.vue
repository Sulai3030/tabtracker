<template>
  <div>
   <h1>Register</h1>

    <form>
      <input
      type="email"
      name="email"
      autocomplete="on"
      v-model="email"
      placeholder="email" />
      <br />
      <input
      type="password"
      name="password"
      autocomplete="on"
      v-model="password"
      placeholder="password" />
      <br/>
    <button
      onclick="register">
        Register
    </button>
    </form>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
