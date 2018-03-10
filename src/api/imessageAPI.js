import Axios from './config'

let imessageAPI = {
  'listReceiver': (params) => Axios.get('/imessage/receiver/list', { params }), // imessage收件人列表
  'addReceiver': (params) => Axios.get('/imessage/receiver/add', { params }) // imessage收件人添加
}

export default imessageAPI