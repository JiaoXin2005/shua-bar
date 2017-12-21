<template>
  <div class="send-message">

    <el-dialog title="新建消息发送任务" :visible.sync="dialogVisible" @close="close">
      <el-form label-width="80px" class="wd-460">
        <el-form-item label="发送内容">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="吧名">
          <el-input type="input"></el-input>
        </el-form-item>
        <el-form-item label="发送数量">
          <el-input type="input"></el-input>
        </el-form-item>     
        <el-form-item>
          <el-button type="primary" @click="close">取 消</el-button>          
          <el-button type="primary" @click="confirm">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>


  </div>
</template>

<script>
export default {
  name: 'SendMessage',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  watch: {
    visible (v) {
      this.dialogVisible = v
    }
  },
  methods: {
    confirm () {
      this.$emit('update:visible', false)
    },
    close () {
      this.$emit('update:visible', false)
    }
  }
}
</script>
