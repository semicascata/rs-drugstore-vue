<template>
<div class="container drugs">

  <div class="titleDrugs">
    <h2>Drugstore</h2>
    <p>
      Birdies, birdies... gather ye here, round the marble nest...
    </p>
  </div>

  <div class="row justify-content-md-center">

    <div class="imgContainer">
      <img :src="drug.imgUrl" alt="Drug Img">
    </div>

    <div class="drugCard">
      <div class="card-body">
        <h5 class="drugTitle">{{ drug.name }}</h5>
        <h6 class="drugCategory">{{ drug.category }}</h6>

        <p class="card-text">
          <b>Description:</b>
          <br>
          {{ drug.description }}
        </p>
        <p :v-if="drug.use" class="card-text">
          <b>Use:</b>
          <br>
          {{ drug.use }}
        </p>

      </div>
    </div>

  </div>

  <div class="buttonContainer">
    <router-link to="/drugstore" type="button" class="btn">
      <i class="fas fa-caret-left"></i> Back
    </router-link>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Drugstore',
  props: ['id'],
  // data: () => ({ loading: true }),
  mounted() {
    this.ActionFindDrug(this.id)
  },
  computed: {
    // Data 'drug'
    ...mapState('drugstore', ['drug'])
  },
  methods: {
    // Request to the single drug
    ...mapActions('drugstore', ['ActionFindDrug'])
  }
}
</script>

<style lang='scss' scoped>
.drugs {
    margin: 30px auto 60px;
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
    text-align: center;

    img {
        width: 420px;
        padding: 5px;
    }
}

.drugCard {
    width: 500px;
    margin-top: 30px;
    text-align: center;

    .drugTitle {
        font-family: 'Bree Serif', serif;
        font-size: 1.4rem;
    }

    .drugCategory {
        font-family: 'Playfair Display', serif;
        font-size: 1.2rem;
    }

    .card-text {
        font-family: 'Playfair Display', serif;
        text-align: justify;
        font-size: 1rem;
    }
}

.buttonContainer {
  margin: 60px auto 30px;
  text-align: center;

  .btn {
    font-family: 'Bree Serif', serif;
  }
}
</style>
