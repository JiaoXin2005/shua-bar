import Axios from './config'

let taskAPI = {
  'list': (params) => Axios.get('/task/list', { params }), // 任务列表
  'addComment': (params) => Axios.post('/task/add/comment', { ...params }), // 新建评论任务
  'addSocialPublish': (params) => Axios.post('/task/add/social_publish', { ...params }), // 新建社交发布任务
  'addBbsPublish': (params) => Axios.post('/task/add/bbs_publish', { ...params }), // 新建论坛发布任务
  'addEmailMission': (params) => Axios.post('/task/add/email_mission/single', { ...params }), // 新建邮件发送任务
}

export default taskAPI