<template>
<div class="jumbotron">
  <h1 class="display-4">Authentication needed!</h1>
  <p class="lead">
    Sorry, you need to log in to access this page...
  </p>
  <hr class="my-4">
  <router-link to="/login" class="btn btn-danger btn-md" href="#" role="button">Login</router-link>
</div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'Secure',
  data() {
    return {
      isLogged: false
    }
  },
  computed: {
    ...mapState('auth', ['initState']),

    // Check if user is already authenticated
    loggedIn() {
      let logged = JSON.stringify(this.initState.status.loggedIn)
      return logged
    }
  },
  created() {
    // If user is logged in, go to '/'
    if (this.loggedIn === true) {
      this.isLogged = true
    }
  }
}
</script>
<style lang="scss" scoped>
.jumbotron {
    margin: 50px auto 80px;
    width: 700px;
}
</style>
