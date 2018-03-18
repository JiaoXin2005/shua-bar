<template>
  <div class="create-email" >
    <h4>新建email任务</h4>
    <el-button type="primary" class="btn" @click="handleCreate">确定</el-button>
    <el-form label-width="100px">

      <el-form-item label="任务名称:">
        <el-input class="wd-250" v-model="addParams.taskName"></el-input>
      </el-form-item>

      <el-form-item label="发件人伪装:">
        <el-input class="wd-250" v-model="addParams.senderCheator"></el-input>
      </el-form-item>

      <el-form-item label="收件人:">
        <el-input class="wd-250" v-model="addParams.receiverEmail"></el-input>
      </el-form-item>

      <el-form-item label="主题:">
        <el-input class="wd-250" v-model="addParams.subject"></el-input>
      </el-form-item>

      <div ref="editor"></div>

    </el-form>
  </div>
</template>

<script>
import { taskAPI } from '@/api'
import E from 'wangeditor'

export default {
  name: 'CreateEmail',
  data () {
    return {
      addParams: {
        taskName: '',
        senderCheator: '',
        receiverEmail: '',
        subject: '',
        content: ''
      }
    }
  },
  methods: {
    resetParams () {
      this.addParams.taskName = ''
      this.addParams.senderCheator = ''
      this.addParams.receiverEmail = ''
      this.addParams.subject = ''
      this.addParams.content = ''
    },
    handleCreate () {
      if (!this.addParams.taskName || !this.addParams.receiverEmail || !this.addParams.subject || !this.addParams.content) {
        this.$message('参数不全')
        return
      }
      taskAPI.addEmailMission(this.addParams)
        .then((res) => {
          if (res.success) {
            this.resetParams()
          }
        })
    }
  },
  mounted () {
    let editor = new E(this.$refs.editor)
    editor.customConfig.onchange = (html) => {
      this.addParams.content = html
    }
    editor.create()
  }
}
</script>

<style lang="scss" scoped>
.create-email {
  .btn {
    margin-bottom: 20px;
  }
  .wd-500{
    width: 500px;
  }
}
</style>
