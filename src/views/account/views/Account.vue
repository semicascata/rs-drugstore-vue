<template>
<div class="account">
  <div class="row">

    <div class="imgContainer">
      <img :src="loggedUser.icon" alt="userIcon">
      <div v-if="loggedUser.role === 'admin'" class="adminUtilities">
        <h3>Admin Board</h3>
        <router-link to="/users" class="btn btn-sm btn-danger" type="button" name="button">Users</router-link>
      </div>
    </div>

    <div class="card cardUser">
      <div class="cardBody">
        <h5 class="cardTitle">{{ user }}</h5>
        <h6 class="cardSubtitle">Role: {{ loggedUser.role }}</h6>
        <h6 class="cardSubtitle">Email: {{ loggedUser.email }}</h6>
        <h6 class="cardSubtitle">Created: {{ loggedUser.createdAt }}</h6>
        <div>
          <h6 class="cardSubtitle">Token:</h6>
          <h6 class="token">"{{ initState.user }}"</h6>
        </div>
        <hr>
        <p v-if="loggedUser.role === 'admin'" class="cardText">
          Orderlies — the volunteer medical assistants — use these costumes borrowed from the local theatre as protective cloaks. This is the traditional costume of the Reaper, an allegory of Death. The mask of Muu Shubuun, "The Wicked Bird". Part of the Reaper costume from the local theatre. It doesn't have eyeholes: the mask is mounted above an actor's head, who peeks through a hole in the cloak.
        </p>
        <p v-else class="cardText">
          There are the events taking place in the town, which are real. And there is their stage adaptation, which is also real. There are the actors who play the protagonists and reenact the events of their lives (since upon loading, you're reliving that short—or not so short—stretch of their deathbound journey).
          <br>
          The actor walks out into the town, looking for inspiration, "walking the hero's paths".
          <br>
          And there's a fluid ambiguity in not having a clear way of telling who you are right now: the real Haruspex or Bachelor, living his life, about to die — or an actor playing his part and thus getting a chance to go back to the past?
        </p>
      </div>
    </div>

  </div>
</div>
</template>

<script>
import {
  mapActions,
  mapState
} from 'vuex'

export default {
  name: 'Account',
  data() {
    return {
      user: ''
    }
  },
  computed: {
    ...mapState('navbar', ['initState', 'loggedUser']),

    // Check if the user is logged in
    checkLoggedUser() {
      let userStats = this.initState.status.loggedIn
      return userStats
    }
  },
  async created() {
    let userParse

    if (this.checkLoggedUser === true) {
      // Got user info, if it is logged in
      await this.ActionGetUser()

      // Get username
      userParse = this.loggedUser.username
      this.user = userParse.replace(/^./, userParse[0].toUpperCase());

    } else if (this.checkLoggedUser === false) {

      this.$router.push('/login')
    }

  },
  methods: {
    ...mapActions('navbar', ['ActionGetUser'])
  }
}
</script>

<style lang="scss" scoped>
.account {
  margin: 30px auto 60px;
  padding: 30px;
}

.imgContainer {
  text-align: center;
  margin: 10px auto;

  img {
    width: 400px;
    border-radius: 50px;
    box-shadow: 15px 15px 30px #363636;
  }
}

.cardUser {
  width: 500px;
  height: auto;
  padding: 20px;
  margin: 10px auto;
  border-radius: 30px;
  box-shadow: 15px 15px 30px #363636;
}

.cardTitle {
  font-family: 'Amatic SC', cursive;
  font-size: 4rem;
  color: #eb4559;
}

.cardText {
  font-family: 'Playfair Display', serif;
}

.cardSubtitle {
  font-family: 'Bree Serif', serif;
  font-size: 1.2rem;
}

.token {
  font-family: 'Bree Serif', serif;
  font-size: 0.8rem;
  word-wrap: break-word;
}

.adminUtilities {
  margin: 15px auto 40px;
  padding: 20px;
  text-align: center;

  h3 {
    font-family: 'Bree Serif', serif;
  }

  .btn {
    font-family: 'Bree Serif', serif;
  }
}
</style>
