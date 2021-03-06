// Wait the 'commit' from action to execute the changes on the data/state
// import * as types from './mutation-types'
export default {
  // Get Drugstore
  setDrugs (state, data) {
    state.drugs = data
  },

  // Get single drug from drugstore
  setDrug (state, data) {
    state.drug = data
  },

  // Get logged user info
  setUser(state, user) {
    state.loggedUser = user
  },

  // Set new medicine
  setMedicine(state) {
    state.newDrug = true
  }
}
