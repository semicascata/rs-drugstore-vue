<template>
<div class="container drugs">

  <div class="titleDrugs">
    <h2>Drugstore</h2>
    <p>
      Mi eget mauris pharetra et ultrices. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna.
    </p>
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
</template>

<script>
import {
  mapActions,
  mapState
} from 'vuex'

// import Secure from '../../../modules/auth/views/Secure'

export default {
  name: 'Drugstore',
  mounted() {
    if(!this.drugs) {
      alert('Wait a minute, who are you??')
    }
    
    this.ActionFindDrugstore()
  },
  computed: {
    // Data 'drugs'
    ...mapState('drugstore', ['drugs'])
  },
  methods: {
    // Request to drugstore
    ...mapActions('drugstore', ['ActionFindDrugstore']),

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
