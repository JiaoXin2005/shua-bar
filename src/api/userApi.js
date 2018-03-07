import Axios from './config'

let userApi = {
  'login': (params) => Axios.get('/user/login', { params })
}

export default userApi