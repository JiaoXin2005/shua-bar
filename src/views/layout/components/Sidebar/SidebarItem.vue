<template>
  <div class="menu-wrapper">
    <template v-for="item in routes" v-if="!item.hidden">

      <router-link :key="item.children[0].name" :to="item.path+'/'+item.children[0].path"
        v-if="item.children.length===1 && !item.children[0].children">
        <el-menu-item :index="item.path+'/'+item.children[0].path" class='submenu-title-noDropdown'>
          <i class="iconfont" :class="item.children[0].meta.icon"></i>
          <span v-if="item.children[0].meta&&item.children[0].meta.title">{{item.children[0].meta.title}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :key="item.path" :index="item.name||item.path">
        <template slot="title">
          <i class="iconfont" :class="item.meta.icon" v-if="item.meta&&item.meta.icon"></i>              
          <span v-if="item.meta&&item.meta.title">{{item.meta.title}}</span>
        </template>

        <template v-for="child in item.children" v-if="!child.hidden">
          <sidebar-item class="nest-menu" v-if="child.children && child.children.length>0" 
            :routes="[child]" :key="child.path"></sidebar-item>

            <router-link v-else :to="item.path+'/'+child.path" :key="child.path">
              <el-menu-item :index="item.path+'/'+child.path">
                <i class="iconfont" :class="child.meta.icon" v-if="child.meta&&child.meta.icon"></i>              
                <span v-if="child.meta&&child.meta.title">{{child.meta.title}}</span>
              </el-menu-item>
            </router-link>
        </template>

      </el-submenu>


    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
.menu-wrapper {
  .fa {
    margin-right: 10px
  }
  .iconfont {
    margin-right: 10px    
  }
}
</style>
