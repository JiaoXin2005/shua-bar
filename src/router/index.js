import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '@/views/layout/Layout'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/

/* coreBuinessRouter : @/view/core 下的核心业务路由 */
const coreBuinessRouter = [
  {
    path: '/baidu',
    component: Layout,
    name: 'Baidu',
    redirect: '/baidu/reply-comment',
    hidden: false,
    meta: {
      title: '百度',
      icon: 'fa-paw'
    },
    children: [
      { meta: { title: '评论', icon: '' }, path: 'reply-comment', component: _import('core/baidu/ReplyComment') },
      { meta: { title: '发帖', icon: '' }, path: 'send-message', component: _import('core/baidu/SendMessage') },
      { hidden: true, path: 'detail/:type/:taskid', component: _import('core/baidu/Detail') }
    ]
  },

  {
    path: '/eyny',
    component: Layout,
    name: 'Eyny',
    redirect: '/eyny/reply-comment',
    hidden: false,
    meta: {
      title: '伊莉',
      icon: 'fa-users'
    },
    children: [
      { meta: { title: '评论', icon: '' }, path: 'reply-comment', component: _import('core/eyny/ReplyComment') },
      { meta: { title: '发帖', icon: '' }, path: 'send-message', component: _import('core/eyny/SendMessage') },
      { hidden: true, path: 'detail/:type/:taskid', component: _import('core/eyny/Detail') }
    ]
  },

  {
    path: '/sina',
    component: Layout,
    name: 'Sina',
    redirect: '/sina/reply-comment',
    hidden: false,
    meta: {
      title: '新浪',
      icon: 'fa-yelp'
    },
    children: [
      { meta: { title: '评论', icon: '' }, path: 'reply-comment', component: _import('core/eyny/ReplyComment') },
      // { meta: { title: '发帖', icon: '' }, path: 'send-message', component: _import('core/eyny/SendMessage') },
      { hidden: true, path: 'detail/:type/:taskid', component: _import('core/eyny/Detail') }
    ]
  },

  {
    path: '/ntes',
    component: Layout,
    name: 'Ntes',
    redirect: '/ntes/reply-comment',
    hidden: false,
    meta: {
      title: '网易',
      icon: 'fa-etsy'
    },
    children: [
      { meta: { title: '评论', icon: '' }, path: 'reply-comment', component: _import('core/eyny/ReplyComment') },
      // { meta: { title: '发帖', icon: '' }, path: 'send-message', component: _import('core/eyny/SendMessage') },
      { hidden: true, path: 'detail/:type/:taskid', component: _import('core/eyny/Detail') }
    ]
  },

  {
    path: '/weibo',
    component: Layout,
    name: 'Weibo',
    redirect: '/weibo/reply-comment',
    hidden: false,
    meta: {
      title: '微博',
      icon: 'fa-weibo'
    },
    children: [
      { meta: { title: '评论', icon: '' }, path: 'reply-comment', component: _import('core/eyny/ReplyComment') },
      { meta: { title: '发帖', icon: '' }, path: 'send-message', component: _import('core/eyny/SendMessage') },
      { hidden: true, path: 'detail/:type/:taskid', component: _import('core/eyny/Detail') }
    ]
  }
]

/* constantRouterMap: 总路由表 */
export const constantRouterMap = [
  { path: '/404', component: _import('404/index'), hidden: true },
  { path: '/login', component: _import('login/index'), hidden: true },

  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: false,
    children: [{
      meta: { title: '首页', icon: 'fa-tachometer' },
      path: 'dashboard',
      component: _import('dashboard/index')
    }]
  },

  ...coreBuinessRouter,

  {
    path: '/running-task',
    component: Layout,
    name: 'RunningTask',
    hidden: false,
    children: [{
      meta: { title: '执行任务页', icon: 'fa-tasks' },
      path: 'index',
      component: _import('running-task/index')
    }]
  },

  {
    path: '/user-manage',
    component: Layout,
    name: 'UserManage',
    hidden: false,
    meta: {
      title: '用户管理',
      icon: 'fa-building'
    },
    children: [
      { meta: { title: '用户列表', icon: 'fa-list-ul' }, path: 'index', component: _import('user-manage/index') },
      { meta: { title: '用户登录历史', icon: 'fa-history' }, path: 'history', component: _import('user-manage/History') },
      { hidden: true, path: 'setting', component: _import('user-manage/Setting') }
    ]
  },

  {
    path: '/account-manage',
    component: Layout,
    name: 'AccountManage',
    hidden: false,
    children: [
      { meta: { title: '账号列表', icon: 'fa-th-list' }, path: 'index', component: _import('account-manage/index') },
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  routes: constantRouterMap
})
