import axios from 'axios'
import authHeader from '../../_helpers/setHeaders'
import URL from '../../_helpers/url'

class DrugstoreService {
  // Get all Drugstore
  getDrugstore() {
    return axios.get(`${URL}/drugstore`, {
      headers: authHeader()
    }).then(res => {
      // console.log(res.data.success)
      return res.data.drugs
    })
  }

  // Get single drug from Drugstore
  getDrug(id) {
    return axios.get(`${URL}/drugstore/${id}`, {
      headers: authHeader()
    }).then(res => {
      // console.log(res.data.success)
      return res.data.drug
    })
  }

  // Get User
  getUser() {
    return axios.get(`${URL}/auth/user`, {
        headers: authHeader()
      })
      .then(res => {
        if(res.data) {
          // Get the data from response and console log it
          // console.log(res.data)
        }
        // Send the info to the 'Actions'
        return res.data
      })
  }

  // Add New Drug
  newDrug(medicine) {
    return axios.post(`${URL}/drugstore`, {
      headers: authHeader(),
      name: medicine.name,
      category: medicine.category,
      description: medicine.description,
      use: medicine.use,
      imgUrl: medicine.imgUrl
    })
  }
}

export default new DrugstoreService()
