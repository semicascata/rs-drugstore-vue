import axios from 'axios'
import authHeader from '../headers'

const url = 'http://localhost:3000/shelter/v1'

export const ActionFindDrugstore = ({ commit }) => {
  axios.get(`${url}/drugstore`, {
    headers: authHeader()
  }).then((res) => {
    commit('setDrugs', res.data.drugs)
  })
}

export const ActionFindDrug = async ({ commit }, id) => {
  await axios.get(`${url}/drugstore/${id}`, {
    headers: authHeader()
  })
  .then((res) => {
    commit('setDrug', res.data.drug)
  })
}
