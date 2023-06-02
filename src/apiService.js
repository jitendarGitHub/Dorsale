import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Config from 'src/config'

let instance = axios.create({
  baseURL: Config.SERVER_HOST,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 1000000,
})
instance.interceptors.request.use(function (Config) {
  const token = localStorage.getItem('token')
  Config.headers.Authorization = token ? `Bearer ${token}` : ' '

  return Config
})

console.log('kdjksdkssd', Config.LOGIN)

//POST _API 'https://dummyjson.com/products/add'
export const API = {
  login: (payload) => {
    return instance
      .post(Config.LOGIN, payload)
      .then((res) => {
        console.log('API Success ::', res)
      })
      .catch((err) => {
        // window.location = '#/404'
        console.log('API Failed ::', err)
      })
  },
}
