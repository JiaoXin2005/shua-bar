import Axios from './config'

let emailAPI = {
  'listReceiver': (params) => Axios.get('/email/receiver/list', { params }), // iemail收件人列表
  'addReceiver': (params) => Axios.get('/email/receiver/add', { params }), // email收件人添加
  'list': (params) => Axios.get('/email/list', { params }), // email详情

}

export default emailAPI