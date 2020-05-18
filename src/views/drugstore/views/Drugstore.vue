<template>
<div>

  <Loading v-if="loading" />

  <div v-else class="container drugs">

    <div class="titleDrugs">
      <h2>Drugstore</h2>
      <p>
        Birdies, birdies... gather ye here, round the marble nest...
      </p>
    </div>

    <div v-if="userRole === 'admin' || 'publisher'" class="btnNew">
      <router-link type="button" to="/addmedicine" class="btn btn-danger">Add new medicine</router-link>
    </div>


    <div class="row justify-content-md-center">

      <div :key='drug.id' v-for='drug in drugs' class="card">
        <div class="card-body">
          <div class="imgContainer">
            <img :src="drug.imgUrl" alt="Drug Img">
          </div>
          <h5 class="card-title">{{ drug.name }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ drug.category }}</h6>
          <button @click.prevent="singleDrug(drug._id)" type="button" class="btn btn-sm btn-danger">More</button>
        </div>
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
import Loading from '../../../components/Loading'

export default {
  name: 'Drugstore',
  components: {
    Loading
  },
  data() {
    return {
      loading: true,
      userRole: ''
    }
  },
  mounted() {
    setTimeout(() => {
      this.ActionFindDrugstore()
      this.loading = false
    }, 1000)


    if (!this.drugs) {
      alert('Wait a minute, who are you??')
    }

  },
  computed: {
    // Data 'drugs'
    ...mapState('drugstore', ['drugs', 'initState', 'loggedUser']),

    // Check if the user is logged in
    checkLoggedUser() {
      let userStats = this.initState.status.loggedIn
      return userStats
    }
  },
  async created() {
    if (this.checkLoggedUser === true) {
      // Got user info, if it is logged in
      await this.ActionGetUser()

      // Get username
      this.userRole = this.loggedUser.role

    } else if (this.checkLoggedUser === false) {

      this.$router.push('/login')
    }
  },
  methods: {
    // Request to drugstore
    ...mapActions('drugstore', ['ActionFindDrugstore', 'ActionGetUser']),

    // Redirect to single drug description
    singleDrug(id) {
      this.$router.push('/drugstore/' + id)
    }
  }
}
</script>

<style lang='scss' scoped>
.drugs {
    margin: 30px auto;
}

.titleDrugs {
    margin: 30px auto 50px;

    h2 {
        font-family: 'Amatic SC', cursive;
        color: #eb4559;
        font-size: 5rem;
    }

    p {
        font-family: 'Playfair Display', serif;
    }
}

.imgContainer {
    margin: 2px auto;
    text-align: center;

    img {
        width: 140px;
        padding: 5px;
    }
}

.btnNew {
  margin: 10px auto;
  text-align: center;
  font-family: 'Bree Serif', serif;
}

.card {
    width: 200px;
    margin: 30px;
    box-shadow: 15px 15px 30px #363636;
    text-align: center;

    .card-title {
        font-family: 'Bree Serif', serif;
        font-size: 1rem;
    }

    h6 {
        font-family: 'Playfair Display', serif;
        font-size: 0.8rem;
    }

    button {
        margin: 5px auto 0;
    }
}
</style>
