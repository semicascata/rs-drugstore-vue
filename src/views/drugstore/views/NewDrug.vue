<template>
<div class="newDrugContainer">

  <div class="title">
    <h2>Add Medicine</h2>
    <p>
      If only I knew whether he'd made his "panacea" of his...
    </p>
  </div>

  <div class="card">
    <form>
      <div v-if="validate" class="alert alert-danger" role="alert">
        {{ validate }}
      </div>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" placeholder="Panacea" v-model="drug.name">
      </div>

      <div class="form-group">
        <label>category</label>
        <select v-model="drug.category" class="form-control">
          <option selected disabled hidden>Choose</option>
          <option value="Pills">Pills</option>
          <option value="Health-Care">Health-Care</option>
          <option value="Antibiotics">Antibiotics</option>
          <option value="Cures">Cures</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div class="form-group">
        <label>Description</label>
        <textarea type="text" class="form-control" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." v-model="drug.description" />
      </div>

      <div class="form-group">
        <label>Use</label>
        <textarea type="text" class="form-control" placeholder="At elementum eu facilisis sed odio." v-model="drug.use" />
      </div>

      <div class="form-group">
        <label>Icon URL</label>
        <input type="text" class="form-control" placeholder="https://imgurl.com/newmedicine431" v-model="drug.imgUrl">
      </div>

      <button @click.prevent="addMedicine()" type="submit" class="btn btn-danger btn-block">Add</button>

    </form>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'NewDrug',
  data() {
    return {
      drug: {
        name: '',
        category: '',
        description: '',
        use: undefined,
        imgUrl: undefined
      },
      validate: ''
    }
  },
  methods: {
    ...mapActions('drugstore', ['ActionAddMedicine']),

    addMedicine() {
      this.ActionAddMedicine(this.drug)
      .then(() => {
        this.$router.push('/drugstore')
      })
      .catch(() => {
        this.$router.push('/addmedicine')
        this.validate = 'Something is wrong. Please, try again...'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
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
}

.form-group {
  margin: 5px auto;
}

.btn {
  margin-top: 30px;
  font-family: 'Bree Serif', serif;
}

.alert {
  font-family: 'Bree Serif', serif;
  text-align: center;
}
</style>
