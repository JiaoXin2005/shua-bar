<template>
  <div class="tag">
    <h3>标签管理</h3>

    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
    <el-button type="primary" @click="showInput" v-else>新建标签</el-button>    

    <h4>标签列表</h4>
    
    <div class="list">

      <el-tag closable
        size='medium'
        :key="tag"
        v-for="tag in tags"
        @close="handleClose(tag)"
      >
         <router-link :to="`/tags/${tag}`">{{tag}}</router-link>
      </el-tag>

    </div>
  
  </div>
</template>

<script>
export default {
  data () {
    return {
      tags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    handleClose (tag) {
      this.tags.splice(this.tags.indexOf(tag), 1)
    },
    showInput () {
      this.inputVisible = true
    },
    handleInputConfirm () {
      let val = this.inputValue
      if (val) {
        this.tags.push(val)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.el-tag{
  margin: 0px 5px 5px 0;
}
.input-new-tag {
  width: 80px;
}
</style>
