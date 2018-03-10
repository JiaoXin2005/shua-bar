const getters = {
  sidebar: state => state.app.sidebar,
  role: state => state.user.role,
  addRouters: state => state.permission.addRouters,
  permissionRouters: state => state.permission.permissionRouters
}

export default getters
