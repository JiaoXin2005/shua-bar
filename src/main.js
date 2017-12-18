// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './style/index.scss'

import filter from './utils/filter.js'

Vue.config.productionTip = false

/* register globally */
Vue.use(ElementUI, { size: 'small' })
/* 全局注册filter */
Object.keys(filter).forEach((key, index, arr) => { // Object.keys返回遍历的key数组
  Vue.filter(key, filter[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
