<template>
<div class="card">
  <form>
    <div v-if="validation" class="alert alert-danger" role="alert">
      {{ validation }}
    </div>

    <div class="form-group">
      <label>Username</label>
      <input class="form-control" placeholder="User" v-model="user.username">
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" placeholder="******" v-model="user.password">
    </div>

    <div class="text-center">
      <button @click.prevent="login()" type="submit" class="btn btn-danger btn-block" data-toggle="modal" data-target="#modalAuth">
        Submit
      </button>
      <div class="form-text text-muted" name="medium">New user? <router-link to='/register'>Sign Up</router-link>!</div>
    </div>
  </form>
</div>
</template>

<script>
import {
  mapActions,
  mapState
} from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      validation: ''
    }
  },
  computed: {
    ...mapState('auth', ['initState']),

    // Check if user is already authenticated
    loggedIn() {
      return this.initState.status.loggedIn
    }
  },
  created() {
    // If user is logged in, go to '/'
    if (this.loggedIn === true) {
      this.$router.push('/drugstore')
    }
  },
  methods: {
    ...mapActions('auth', ['ActionLogin']),

    // Login Handler
    login() {
      this.ActionLogin(this.user)
        .then(() => {
          return window.location.href = '/drugstore'
        })
        .catch(() => {
          this.$router.push('/login')
          this.validation = 'Authentication failed, try again Flor'
        })
    }
  }

}
</script>

<style lang='scss'>
.card {
    margin: 60px auto;
    width: 350px;
    box-shadow: 15px 15px 30px #363636;
}

form {
    padding: 10px;
    font-size: 0.9rem;

    label {
        font-family: 'Bree Serif', serif;
    }

    .btn {
        font-family: 'Bree Serif', serif;
    }

    medium {
        font-family: 'Bree Serif', serif;
    }
}

.alert {
  font-family: 'Bree Serif', serif;
  text-align: center;
}
</style>
