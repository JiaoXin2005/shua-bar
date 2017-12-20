<template>
  <section class="app-main pd-20">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews () {
      // return this.$store.state.tagsView.cachedViews
    }
  }
}
</script>
<style>
.app-main {
  min-height: 100%;
}
</style>
