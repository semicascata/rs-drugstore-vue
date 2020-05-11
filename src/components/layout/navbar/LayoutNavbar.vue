<template>
<nav class="navbar navbar-expand-lg navbar-light">

  <div class="dropdown show">
    <a v-if="isLogged" class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <img :src="loggedUser.icon" class="icon">
      {{ user }}
    </a>

    <a v-else class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Ravel's Shelter
    </a>

    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <router-link class="dropdown-item" to="/"><i class="fas fa-home"></i> Home</router-link>
      <router-link class="dropdown-item" to="/drugstore"><i class="fas fa-briefcase-medical"></i> Drugstore</router-link>
      <router-link class="dropdown-item" to="/contact"><i class="fas fa-address-book"></i> Contact</router-link>
    </div>
  </div>

  <!--
  <a v-if="isLogged" class="navbar-brand">
    <img :src="loggedUser.icon" class="icon">
    {{ user }}
  </a>

  <router-link v-if="!isLogged" to='/login' class="navbar-brand">
    Login <i class="fas fa-sign-in-alt"></i>
  </router-link>

  <a v-if="isLogged" type="button" @click.prevent="logoutHand()" class="navbar-brand">
    Logout <i class="fas fa-sign-out-alt"></i>
  </a>
-->

  <!-- Toggle bar -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- Collapse items -->
  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">

      <!--
      <li class="nav-item">
        <a v-if="isLogged" class="nav-link">
          <img :src="loggedUser.icon" class="icon">
          {{ user }}
        </a>
      </li>
      -->

      <li class="nav-item">
        <router-link v-if="!isLogged" to='/login' class="nav-link">
          <i class="fas fa-sign-in-alt"></i> Login
        </router-link>
      </li>

      <li class="nav-item">
        <a v-if="isLogged" type="button" class="nav-link">
          <i class="fas fa-user"></i> Account
        </a>
      </li>

      <li class="nav-item">
        <a v-if="isLogged" type="button" @click.prevent="logoutHand()" class="nav-link">
          <i class="fas fa-sign-out-alt"></i> Logout
        </a>
      </li>


      <!--
      <li class="nav-item active">
        <router-link class="nav-link" to='/'>Home<span class="sr-only">(current)</span></router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to='/drugstore'>Drugstore</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to='/contact'>Contact</router-link>
      </li>
      -->
    </ul>

  </div>
</nav>
</template>

<script>
import {
  mapActions,
  mapState
} from 'vuex'

export default {
  name: 'LayoutNavbar',
  data() {
    return {
      isLogged: false,
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
      this.isLogged = true

      // Got user info, if it is logged in
      await this.ActionGetUser()

      // Get username
      userParse = this.loggedUser.username
      this.user = userParse.replace(/^./, userParse[0].toUpperCase());

    } else if (this.checkLoggedUser === false) {
      this.isLogged = false
    }

  },
  methods: {
    ...mapActions('navbar', ['ActionLogout', 'ActionGetUser']),

    logoutHand() {
      this.ActionLogout()
      return window.location.href = "/"
    }
  }
}
</script>

<style>
.navbar {
  margin: 5px auto;
  width: auto;
  font-family: 'Bree Serif', serif;
}

.icon {
  width: 40px;
  border-radius: 100px;
  margin-right: 5px;
}
</style>
