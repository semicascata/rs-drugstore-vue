<template>
  <div class="usersList">
    <h1>Admin Board</h1>
    <h3>Users Control:</h3>

    <div class="row">
      <div class="iconContainer">
        <img :src="user.icon" alt="iconUser">
      </div>

      <ul class="list-group">
        <li class="list-group-item active">{{ user.username }}</li>
        <li class="list-group-item"><b>Email</b>: {{ user.email }}</li>
        <li class="list-group-item"><b>Role</b>: {{ user.role }}</li>
        <li class="list-group-item"><b>URL Icon</b>: {{ user.icon }}</li>
        <li class="list-group-item"><b>Created</b>: {{ user.createdAt }}</li>
        <button type="submit" class="btn btn-danger">Delete</button>
      </ul>
    </div>

    <div class="buttonContainer">
      <router-link to="/users" type="button" class="btn">
        <i class="fas fa-caret-left"></i> Back
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'User',
  props: ['id'],
  mounted() {
    this.ActionFindUser(this.id)
  },
  computed: {
    ...mapState('adminBoard', ['user'])
  },
  methods: {
    ...mapActions('adminBoard', ['ActionFindUser'])
  }
}
</script>

<style lang="scss" scoped>
.usersList {
  margin: 30px auto;
  padding: 0 160px;
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
  margin-bottom: 30px;
}

.list-group {
  padding: 20px;
  margin: 10px auto;
  font-family: 'Playfair Display', serif;
  word-wrap: break-word;
  width: 360px;
}

.iconContainer {
  text-align: center;
  margin: 10px auto;

  img {
    width: 400px;
    border-radius: 50px;
    box-shadow: 15px 15px 30px #363636;
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
