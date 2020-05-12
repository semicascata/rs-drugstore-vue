import DrugstoreService from '../services'

export default {
  // Set Drugstore
  ActionFindDrugstore({ commit }) {
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
  ActionFindDrug({ commit }, id) {
    return DrugstoreService.getDrug(id)
      .then(res => {
        commit('setDrug', res)
        return Promise.resolve(res)
      })
      .catch(err => {
        return Promise.reject(err)
      })
  }
}
