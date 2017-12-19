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
  {
    path: '/runningtask',
    component: Layout,
    name: 'RunningTask',
    hidden: false,
    children: [{
      meta: { title: '执行任务页', icon: 'fa-tachometer' },
      path: 'index',
      component: _import('runningtask/index')
    }]
  }
]

export default new Router({
  routes: constantRouterMap
})
