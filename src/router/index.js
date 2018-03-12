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
      title: '百度贴吧',
      icon: 'icon-baidu',
      roles: ['normal_admin', 'group_admin']
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
      icon: 'icon-etsy',
      roles: ['normal_admin', 'group_admin']
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
      title: '新浪新闻',
      icon: 'icon-xinlang',
      roles: ['normal_admin', 'group_admin']
    },
    children: [
      { meta: { title: '评论', icon: '' }, path: 'reply-comment', component: _import('core/baidu/ReplyComment') },
      // { meta: { title: '发帖', icon: '' }, path: 'send-message', component: _import('core/baidu/SendMessage') },
      { hidden: true, path: 'detail/:type/:taskid', component: _import('core/baidu/Detail') }
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
      icon: 'icon-wangyi',
      roles: ['normal_admin', 'group_admin']
    },
    children: [
      { meta: { title: '评论', icon: '' }, path: 'reply-comment', component: _import('core/baidu/ReplyComment') },
      // { meta: { title: '发帖', icon: '' }, path: 'send-message', component: _import('core/baidu/SendMessage') },
      { hidden: true, path: 'detail/:type/:taskid', component: _import('core/baidu/Detail') }
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
      icon: 'icon-weibo',
      roles: ['normal_admin', 'group_admin']
    },
    children: [
      { meta: { title: '回复', icon: '' }, path: 'reply-comment', component: _import('core/baidu/ReplyComment') },
      { meta: { title: '主贴', icon: '' }, path: 'send-message', component: _import('core/baidu/SendMessage') },
      { hidden: true, path: 'detail/:type/:taskid', component: _import('core/baidu/Detail') }
    ]
  },

  {
    path: '/facebook',
    component: Layout,
    name: 'Facebook',
    redirect: '/facebook/reply-comment',
    hidden: false,
    meta: {
      title: 'Facebook',
      icon: 'icon-facebookicon',
      roles: ['normal_admin', 'group_admin']
    },
    children: [
      { meta: { title: '回复', icon: '' }, path: 'reply-comment', component: _import('core/baidu/ReplyComment') },
      { meta: { title: '主贴', icon: '' }, path: 'send-message', component: _import('core/baidu/SendMessage') },
      { hidden: true, path: 'detail/:type/:taskid', component: _import('core/baidu/Detail') }
    ]
  },

  {
    path: '/twitter',
    component: Layout,
    name: 'Twitter',
    redirect: '/twitter/reply-comment',
    hidden: false,
    meta: {
      title: 'Twitter',
      icon: 'icon-twitter',
      roles: ['normal_admin', 'group_admin']
    },
    children: [
      { meta: { title: '回复', icon: '' }, path: 'reply-comment', component: _import('core/baidu/ReplyComment') },
      { meta: { title: '主贴', icon: '' }, path: 'send-message', component: _import('core/baidu/SendMessage') },
      { hidden: true, path: 'detail/:type/:taskid', component: _import('core/baidu/Detail') },
    ]
  },

  {
    path: '/email',
    component: Layout,
    name: 'Email',
    redirect: '/email/create',
    hidden: false,
    meta: {
      title: 'Email',
      icon: 'icon-email',
      roles: ['normal_admin', 'group_admin']
    },
    children: [
      { meta: { title: '新建任务', icon: '' }, path: 'create', component: _import('core/email/create') },
      { meta: { title: '任务列表', icon: '' }, path: 'list', component: _import('core/email/list') }
    ]
  },

  {
    path: '/imessage',
    component: Layout,
    name: 'iMessage',
    redirect: '/imessage/list',
    hidden: false,
    meta: {
      roles: ['normal_admin', 'group_admin']
    },
    children: [
      { meta: { title: 'iMessage', icon: 'icon-imessage' }, path: 'list', component: _import('core/imessage/list') }
    ]
  }


]

// 动态路由
export const asyncRouterMap =  [

  ...coreBuinessRouter,

  {
    path: '/running-task',
    component: Layout,
    name: 'RunningTask',
    hidden: false,
    meta: {
      roles: ['normal_admin', 'group_admin']
    },
    children: [{
      meta: { title: '执行任务页', icon: 'icon-tasks'},
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
      icon: 'icon-building',
      roles: ['root']
    },
    children: [
      { meta: { title: '用户列表', icon: '' }, path: 'index', component: _import('user-manage/index') },
      { hidden: true, path: 'detail/:uid', component: _import('user-manage/Detail') },
      // { meta: { title: '用户登录历史', icon: '' }, path: 'history', component: _import('user-manage/History') },
      // { hidden: true, path: 'setting', component: _import('user-manage/Setting') }
    ]
  },

  {
    path: '/org-manage',
    component: Layout,
    name: 'OrgManage',
    hidden: false,
    meta: {
      roles: ['root']
    },
    children: [
      { meta: { title: '机构管理', icon: 'icon-jigou' }, path: 'index', component: _import('org-manage/index') }
    ]
  },

  {
    path: '/proxyIp',
    component: Layout,
    name: 'ProxyIp',
    hidden: false,
    meta: {
      roles: ['root']
    },
    children: [
      { meta: { title: '代理节点', icon: 'icon-dailishang' }, path: 'index', component: _import('proxyIp/index') }
    ]
  },

  {
    path: '/account-manage',
    component: Layout,
    name: 'AccountManage',
    hidden: false,
    meta: {
      title: '推广账号列表',
      icon: 'icon-thlist',
      roles: ['normal_admin', 'group_admin']
    },
    children: [
      { meta: { title: '百度账号', icon: '' }, path: 'tieba', component: _import('account-manage/index') },
      { meta: { title: '微博账号', icon: '' }, path: 'weibo', component: _import('account-manage/index') },
      { meta: { title: '伊莉账号', icon: '' }, path: 'yili', component: _import('account-manage/index') },
      { meta: { title: 'facebook账号', icon: '' }, path: 'facebook', component: _import('account-manage/index') },
      { meta: { title: 'twitter账号', icon: '' }, path: 'twitter', component: _import('account-manage/index') },
      { meta: { title: '新浪账号', icon: '' }, path: 'sina', component: _import('account-manage/index') },      
      { meta: { title: 'hotmail', icon: '' }, path: 'hotmail', component: _import('account-manage/index') },
      { meta: { title: 'gmail', icon: '' }, path: 'gmail', component: _import('account-manage/index') },
      { meta: { title: 'yahoo', icon: '' }, path: 'yahoo', component: _import('account-manage/index') },
      { meta: { title: '网易账号', icon: '' }, path: 'wangyi', component: _import('account-manage/index') }
    ]
  },

  {
    path: '/worker',
    component: Layout,
    name: 'Worker',
    hidden: false,
    meta: {
      roles: ['normal_admin', 'group_admin']
    },
    children: [
      { meta: { title: '推广节点', icon: 'icon-1duojiedian' }, path: 'index', component: _import('worker/index') }
    ]
  },

  {
    path: '/tags',
    component: Layout,
    name: 'Tags',
    hidden: false,
    meta: {
      title: '标签管理',
      icon: 'icon-tags',
      roles: ['normal_admin', 'group_admin']
    },
    children: [
      { meta: { title: '标签', icon: '' }, path: 'index', component: _import('tags/index') },
      { hidden: true, path: ':id', component: _import('tags/account') }
    ]
  },

  {
    path: '/tool',
    component: Layout,
    name: 'Tool',
    hidden: true,
    meta: {
      title: '工具',
      icon: 'icon-wrench'
    },
    children: [
      { meta: { title: '翻译', icon: '' }, path: 'translate', component: _import('tool/translate') },
      { meta: { title: '汉语言处理', icon: '' }, path: 'deelChinese', component: _import('tool/deelChinese') }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }

]

/* constantRouterMap: 总路由表 */
export const constantRouterMap = [
  { path: '/404', component: _import('404/index'), hidden: true },
  { path: '/login', component: _import('login/index'), hidden: true },

    // 首页面板暂时隐藏
  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      meta: { title: '首页', icon: 'icon-tachometer' },
      path: 'dashboard',
      component: _import('dashboard/index')
    }]
  },

  {
    path: '',
    component: Layout,
    name: 'Setting',
    hidden: true,
    children: [{
      path: 'setting',
      component: _import('user-manage/Setting'),
    }]
  },

  // ...coreBuinessRouter,

]

export default new Router({
  routes: constantRouterMap
})
