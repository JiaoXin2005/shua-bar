import Axios from './config'

let userAPI = {
  'login': (params) => Axios.get('/user/login', { params }), // 登陆
  'logout': (params) => Axios.get('/user/logout', { params }), // 退出
  'userInfo': () => Axios.get('/user/userInfo'), // 获取用户信息
  'add': (params) => Axios.get('/user/add', { params }), // 添加用户
  'list': (params) => Axios.get('/user/list', { params }), // 用户列表
  'delete': (params) => Axios.get('/user/delete', { params }), // 删除
  'modifyPass': (params) => Axios.get('/user/modifyPass', { params }), // 修改密码
  'edit': (params) => Axios.get('/user/edit', { params }), // 编辑用户
  'detail': (params) => Axios.get('/user/detail', { params }) // 用户详情
}

export default userAPI