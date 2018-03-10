import Axios from './config'

let workerAPI = {
  'list': (params) => Axios.get('/worker/list', { params }) // 推广节点列表
}

export default workerAPI