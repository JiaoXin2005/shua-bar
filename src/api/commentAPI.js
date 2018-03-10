import Axios from './config'

let commentAPI = {
  'list': (params) => Axios.get('/comment/list', { params }) // 评论列表
}

export default commentAPI