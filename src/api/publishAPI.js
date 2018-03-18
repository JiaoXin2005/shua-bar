import Axios from './config'

let publishAPI = {
  'list': (params) => Axios.get('/publish/list', { params }), // 发布任务列表  ---- 社交facebook Twitter
  'bbsList': (params) => Axios.get('/publish/bbs_list', { params }), // 论坛任务列表详情 --- yili
}

export default publishAPI