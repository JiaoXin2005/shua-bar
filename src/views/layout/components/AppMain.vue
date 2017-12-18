<template>
  <section class="app-main" style="min-height: 100%">
    <div>这是Appmain</div>
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
