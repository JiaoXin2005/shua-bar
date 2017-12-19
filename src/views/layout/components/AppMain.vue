<template>
  <section class="app-main pd-20" style="min-height: 100%">
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
