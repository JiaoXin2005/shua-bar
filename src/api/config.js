import axios from 'axios'
import { Message } from 'element-ui'

let Axios = axios.create({
  // baseURL: 'http://093bf731.ngrok.io/promotion-web'
  baseURL: '/promotion-web'
})

Axios.interceptors.request.use(request => {
  return request
})

Axios.interceptors.response.use(response => {
  if (!response.data.success) {
    Message({
      message: response.data.errorMsg,
      type: 'error'
    })
    return Promise.reject(response.data)
  }
  return response.data
}, error => {
  Message({
    message: error.message,
    type: 'error'
  })
  return Promise.reject(error)
})

export default Axios
