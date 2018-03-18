<template>
  <div class="send-message">
    <h3>twitter发布任务 </h3>
    <el-button type="primary" class="mgb-20" @click="handleCreate">新建任务</el-button>

    <TaskList website='twitter'  type='publish'  role='social' ref="TaskList"/>

    <el-dialog title="新建twitter发布任务" :visible.sync="dialogVisible">
      <el-form label-width="80px" class="wd-550">

        <el-form-item label="任务名">
          <el-input type="input" v-model="addSocialPublishParams.taskName"></el-input>
        </el-form-item>

        <el-form-item label="发送内容">
          <el-input type="textarea" v-model="addSocialPublishParams.publishText"
            :autosize="{ minRows: 8}"
            placeholder="一条评论以换行结束，一定要是繁体哦~"></el-input>    
        </el-form-item>


        <el-form-item>
          <el-button type="danger" @click="dialogVisible = false">取 消</el-button>          
          <el-button type="success" @click="confirm">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>

<script>
import { taskAPI } from '@/api'
import TranslateBtn from '@/components/TranslateBtn'
import TaskList from '../Common/TaskList'


export default {
  name: 'twitterSendMessage',
  components: {
    TranslateBtn,
    TaskList
  },
  data () {
    return {
      dialogVisible: false,
      addSocialPublishParams: {
        taskName: '',
        bbsName: 'yili',
        bbsChannel: '',
        publishText: ''
      }
    }
  },
  methods: {
    retsetAddParams () {
      this.addSocialPublishParams = {
        taskName: '',
        website: 'twitter',
        publishText: ''
      }
    },
    handleCreate () {
      this.retsetAddParams()
      this.dialogVisible = true
    },
    confirm () {
      if (!this.addSocialPublishParams.taskName || !this.addSocialPublishParams.publishText) {
        this.$message('参数不全')
        return
      }
      taskAPI.addSocialPublish(this.addSocialPublishParams)
        .then((res) => {
          this.$refs.TaskList.getTaskList()
          this.dialogVisible = false
        })
    },
  },
  mounted () {

  }
}
</script>
