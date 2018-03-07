import { userApi } from '@/api'

const user = {
  state: {
    role: '', // root - 超级管理员 、( group_admin / normal_admin ) - 都是普通管理员
    userInfo: {}
  },

  mutations: {
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
    SET_ROLE: (state, role) => {
      state.role = role
    }
  },

  actions: {
    // 用户登录
    UserLogin({ commit }, form) {            
      return new Promise((resolve, reject) => {
        userApi.login(form)
          .then(response => {
            if (!response.success) {
              reject(response.errorMessage)
            }
            const { role } = response.userModel
            commit('SET_ROLE', role)
            commit('SET_USERINFO', response.userModel)
            resolve(response)
          })
          .catch(error => reject(error))
      })
    }
  

  }
}

export default user