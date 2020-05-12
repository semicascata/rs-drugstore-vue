<template>
<div class="usersList">
  <h1>Admin Board</h1>
  <h3>Users Control:</h3>

  <div class="row">
    <ul class="list-group">
      <li type="button"
      @click.prevent="singleUser(user._id)"
      :key='user.id'
      v-for='user in users'
      class="list-group-item">
        {{ user.username }}
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'AdminBoard',
  mounted() {
    if(!this.users) {
      alert('Something is wrong...')
    }

    this.ActionFindUsers()
  },
  computed: {
    ...mapState('adminBoard', ['users', 'initState', 'loggedUser']),

    checkLoggedUser() {
      let userStats = this.initState.status.loggedIn
      return userStats
    },

    isAdmin() {
      let userAdmin = this.loggedUser.role
      return userAdmin
    }
  },
  async created() {
    if(this.checkLoggedUser) {

      await this.ActionGetUser()

      if(this.isAdmin !== 'admin') {

        this.$router.push('/account')
        console.log(this.isAdmin)
      }

    } else if(!this.checkedLoggedUser) {
      this.$router.push('/login')
    }

  },
  methods: {
    ...mapActions('adminBoard', ['ActionFindUsers', 'ActionGetUser']),

    singleUser(id) {
      this.$router.push(`/users/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.usersList {
  margin: 30px auto;
}

h1 {
  font-family: 'Amatic SC', cursive;
  font-size: 6rem;
  text-align: center;
  color: #eb4559;
  margin-bottom: 20px;
}

h3 {
  font-family: 'Bree Serif', serif;
  font-size: 2rem;
  text-align: center;
}

.list-group {
  padding: 20px;
  margin: 10px auto;
  font-family: 'Playfair Display', serif;
  word-wrap: break-word;
  width: 360px;
}
</style>
