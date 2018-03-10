<template>
  <div class="sidebar-container" :class="{'hide': !sidebar.opened}">
    <el-menu unique-opened mode="vertical" 
    :collapse="isCollapse" :default-active="$route.path"
    background-color="#454b4e" text-color="#fff" active-text-color="#409eff">

      <sidebar-item :routes="permissionRouters"></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: {
    SidebarItem
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'permissionRouters'
    ]),
    isCollapse () {
      return !this.sidebar.opened
    }
  }
}
</script>
