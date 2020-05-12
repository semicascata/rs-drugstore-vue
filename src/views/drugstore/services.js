import axios from 'axios'
import authHeader from '../../_helpers/setHeaders'
import URL from '../../_helpers/url'

class DrugstoreService {
  // Get all Drugstore
  getDrugstore() {
    return axios.get(`${URL}/drugstore`, {
      headers: authHeader()
    }).then(res => {
      console.log(res.data.success)
      return res.data.drugs
    })
  }

  // Get single drug from Drugstore
  getDrug(id) {
    return axios.get(`${URL}/drugstore/${id}`, {
      headers: authHeader()
    }).then(res => {
      console.log(res.data.success)
      return res.data.drug
    })
  }
}

export default new DrugstoreService()
