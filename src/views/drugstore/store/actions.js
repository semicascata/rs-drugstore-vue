import DrugstoreService from '../services'

export default {
  // Set Drugstore
  ActionFindDrugstore({
    commit
  }) {
    return DrugstoreService.getDrugstore()
      .then(res => {
        commit('setDrugs', res)
        return Promise.resolve(res)
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },

  // Set single drug
  ActionFindDrug({
    commit
  }, id) {
    return DrugstoreService.getDrug(id)
      .then(res => {
        commit('setDrug', res)
        return Promise.resolve(res)
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },

  // Get logged user info
  ActionGetUser({
    commit
  }) {
    return DrugstoreService.getUser()
      .then(data => {
        commit('setUser', data)
        return Promise.resolve(data)
      })
      .catch(err => {
        console.log('There is a error!')
        return Promise.reject(err)
      })
  },

  // Add Medicine
  ActionAddMedicine({ commit }, drug) {
    return DrugstoreService.newDrug(drug)
    .then(res => {
      commit('setMedicine')
      return Promise.resolve(res.data)
    })
    .catch(err => {
      console.log(err)
      return Promise.reject(err)
    })
  }
}
