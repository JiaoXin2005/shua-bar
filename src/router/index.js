import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '@/views/layout/Layout'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Layout },
    { path: '/404', component: _import('404/index') },
    { path: '/login', component: _import('login/index') },
    { path: '*', redirect: '/404', hidden: true }
  ]
})
