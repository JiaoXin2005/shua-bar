import { setToken, removeToken } from '@/utils/auth'
import { userAPI } from '@/api'

const user = {
  state: {
    role: '', // root - 超级管理员 、( group_admin / normal_admin ) - 都是普通管理员
    userName: '', // root - 超级管理员 、( group_admin / normal_admin ) - 都是普通管理员
    userInfo: {}
  },

  mutations: {
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
    SET_ROLE: (state, role) => {
      state.role = role
    },
    SET_USERNAME: (state, userName) => {
      state.userName = userName
    }
  },

  actions: {
    // 用户登录
    UserLogin({ commit }, form) {            
      return new Promise((resolve, reject) => {
        userAPI.login(form)
          .then(response => {
            if (!response.success) {
              reject(response.errorMessage)
            }
            const { role, username } = response.userModel
            commit('SET_ROLE', role)
            commit('SET_USERNAME', username)
            commit('SET_USERINFO', response.userModel)
            resolve(response)
          })
          .catch(error => reject(error))
      })
    },

    LogOut({commit, state}) {
      return new Promise((resolve, reject) => {
        userAPI.logout({ username: state.userName })
          .then(() => {
            commit('SET_ROLE', '')
            commit('SET_USERNAME', '')
            commit('SET_USERINFO', {})
            removeToken()
            resolve()
          })
          .catch(error => reject(error))
      })
    },

    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        userAPI.userInfo()
          .then((response) => {
            if (!response.success) {
              reject(response.errorMessage)
            }
            const { role, username } = response.userModel
            commit('SET_ROLE', role)
            commit('SET_USERNAME', username)
            commit('SET_USERINFO', response.userModel)
            resolve(response)
          })
          .catch(error => reject(error))
      })
    }
  

  }
}

export default user