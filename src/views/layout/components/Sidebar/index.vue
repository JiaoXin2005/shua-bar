<template>
  <div class="sidebar-container" :class="{'hide': !sidebar.opened}">
    <el-menu unique-opened mode="vertical" 
    :collapse="isCollapse" :default-active="$route.path"
    background-color="#454b4e" text-color="#fff" active-text-color="#409eff">

      <sidebar-item :routes="routes"></sidebar-item>
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
      'sidebar'
    ]),
    isCollapse () {
      return !this.sidebar.opened
    },
    routes () {
      return this.$router.options.routes
    }
  }
}
</script>
