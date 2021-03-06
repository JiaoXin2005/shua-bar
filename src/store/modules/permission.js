import { constantRouterMap, asyncRouterMap } from '@/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(role, route) {
  if (route.meta && route.meta.roles) {
    return route.meta.roles.indexOf(role) !== -1
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, role) {
  const accessedRouters = asyncRouterMap.filter((route) => {
    if (hasPermission(role, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, role)
      }
      return true
    }
    return false
  })
  return accessedRouters
}


const permission = {
  state: {
    permissionRouters: constantRouterMap,
    addRouters: []
  },

  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.permissionRouters = constantRouterMap.concat(routers)
    }
  },

  actions: {
    GenerateRoutes({commit}, role) {
      return new Promise((resolve, reject) => {
        let accessedRouters = filterAsyncRouter(asyncRouterMap, role)
        commit('SET_ROUTERS', accessedRouters)
        resolve(accessedRouters)
      })
    }
  }
}

export default permission