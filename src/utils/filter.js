/**
 * @ 全局VUE的过滤函数
 */

/* 数字千分化 */
function thousands (value) {
  if (value === null) return
  value = value.toString()
  return value.replace(/\B(?=(?:\d{3})+(?!\d))/g, ',')
}

/* 时间戳格式化 */
let formatDate = (date, fmt) => {
  fmt = fmt || 'YYYY-MM-dd hh:mm:ss'
  if (!date || date === '' || date === 0) { // date判空
    return ''
  }
  date = new Date(date)
  if (/(y+)/gi.test(fmt)) { // RegExp.$1匹配正则第一个括号的内容
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '' // 先将匹配到的时间转成字符串
      fmt = fmt.replace(RegExp.$1, (RegExp.$1).length === 1 ? str : padLeftZero(str))
    }
  }
  function padLeftZero (str) {
    return ('00' + str).substr(str.length)
  }
  return fmt
}

// 权限转换 ['root', 'group_admin', 'normal_admin']  -》超级管理员、机构管理员、普通管理员
let parseRole = (role) => {
  if (!role) {
    return '权限不存在'
  }
  let roleMap = {
    'root': '超级管理员',
    'group_admin': '机构管理员',
    'normal_admin': '普通管理员'
  }
  return roleMap[role]
}

export default {
  thousands,
  formatDate,
  parseRole
}
