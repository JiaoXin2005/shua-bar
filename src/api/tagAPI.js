import Axios from './config'

let tagAPI = {
  'list': (params) => Axios.get('/tag/list', { params }), // 标签列表
  'add': (params) => Axios.get('/tag/add', { params }) // 标签添加
}

export default tagAPI