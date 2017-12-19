<template>
  <div class="sidebar-container" :class="{'hide': !sidebar.opened}">
    <el-menu unique-opened router
    :collapse="isCollapse" :default-active="$route.path"
    background-color="#454b4e" text-color="#fff" active-text-color="#409eff">
      <!-- <router-link to="/runningtask/index">
        <el-menu-item index="/runningtask/index">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>

      </router-link> -->


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
