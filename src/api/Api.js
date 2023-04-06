import axios from 'axios'
import { toast } from 'react-toastify'

export const api = (payload) => {
  login: {
    return axios
      .post(`${process.env.REACT_APP_API_URL}/users/login`, payload)
      .then((res) => {
        return res
      })
      .catch((err) => {
        console.log('api failed!')
        return err.response
      })
  }

  // access: axios
}
