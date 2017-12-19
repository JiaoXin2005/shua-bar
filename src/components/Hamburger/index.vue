<template>
  <div class="hamburger" :class="{'active': !active}" @click="toggleClick">
    <i class="el-icon-more"></i>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    active: {
      default: false,
      type: Boolean
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.hamburger {
  font-size: 18px;
  display: inline-block;
  padding: 0 15px;
  cursor: pointer;
  transition: all 0.2s ease;
  &.active {
    transform: rotate(90deg)
  }
}
</style>
