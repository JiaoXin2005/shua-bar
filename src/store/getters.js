const getters = {
  sidebar: state => state.app.sidebar,
  role: state => state.user.role,
  userName: state => state.user.userName,
  addRouters: state => state.permission.addRouters,
  permissionRouters: state => state.permission.permissionRouters
}

export default getters
