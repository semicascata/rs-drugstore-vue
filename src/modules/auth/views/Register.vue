<template>
<div class="card">
  <form>
    <div class="form-group">
      <label>Username</label>
      <input class="form-control" placeholder="myuser" v-model="user.username">
    </div>

    <div class="form-group">
      <label>Email Address</label>
      <input type="email" class="form-control" placeholder="exemple@user.com" v-model="user.email">
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" placeholder="******" v-model="user.password">
    </div>

    <div class="form-group">
      <label>Confirm Password</label>
      <input type="password" class="form-control" placeholder="******" v-model="user.password2">
    </div>

    <div class="form-group">
      <label>Role</label>
      <select v-model="user.role" class="form-control">
        <option selected disabled hidden>Choose</option>
        <option value="publisher">Publisher</option>
        <option value="user">User</option>
      </select>
    </div>

    <div class="text-center">
      <button @click="register()" type="submit" class="btn btn-danger btn-block">
        Register
      </button>
    </div>
  </form>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Register',
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
        password2: '',
        role: undefined
      }
    }
  },
  computed: {
    ...mapState('auth', ['initState']),

    // Check if user is already authenticated
    loggedIn() {
      return this.initState.status.loggedIn
    }
  },
  mounted() {
    // If user is logged in, go to '/'
    if (this.loggedIn === true) {
      this.$router.push('/')
    }
  },
  methods: {
    ...mapActions('auth', ['ActionRegister']),

    // Register Handler
    register() {
      this.ActionRegister(this.user)
        .then((res) => {
          let resUser = res.username
          alert(`User "${resUser}" registered!`)
          this.$router.push('/login')
        })
        .catch(err => {
          this.$router.push('/register')
          alert(err.message)
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
}
</style>
