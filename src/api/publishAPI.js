import Axios from './config'

let publishAPI = {
  'list': (params) => Axios.get('/publish/list', { params }) // 发布任务列表
}

export default publishAPI