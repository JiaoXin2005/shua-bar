import Axios from './config'

let proxyIpAPI = {
  'list': (params) => Axios.get('/proxyIp/list', { params }), // 代理IP的列表
  'add': (params) => Axios.get('/proxyIp/add', { params }), // 代理IP的添加
  'delete': (params) => Axios.get('/proxyIp/delete', { params }) // 代理IP的删除 
}

export default proxyIpAPI