import Axios from './config'

let orgAPI = {
  'list': (params) => Axios.get('/org/list', { params }), // 机构列表
  'add': (params) => Axios.get('/org/add', { params }), // 添加机构
  'edit': (params) => Axios.get('/org/edit', { params }), // 编辑机构
  'delete': (params) => Axios.get('/org/delete', { params }), // 删除机构
}

export default orgAPI