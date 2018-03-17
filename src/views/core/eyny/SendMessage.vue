<template>
  <div class="send-message">
    <h3>论坛发布任务 </h3>
    <el-button type="primary" class="mgb-20" @click="handleCreate">新建任务</el-button>

    <!--
    <div class="filer-container">
      <el-input class="wd-200" placeholder="任务名称" ></el-input>
      <el-select placeholder="状态" v-model="test">
        <el-option label="运行中" value="运行中"></el-option>
        <el-option label="停止" value="停止"></el-option>
      </el-select>
      <el-button type="success">查询</el-button>
    </div>
    -->

    <TaskList website='yili'  type='publish' ref="TaskList"/>

    <el-dialog title="新建论坛发布任务" :visible.sync="dialogVisible">
      <el-form label-width="80px" class="wd-550">

        <el-form-item label="任务名">
          <el-input type="input" v-model="addBBSPublishParams.taskName"></el-input>
        </el-form-item>

        <el-form-item label="bbs频道">
          <el-input type="input" v-model="addBBSPublishParams.bbsChannel"></el-input>
        </el-form-item>

        <el-form-item label="发送内容">
          <el-input type="textarea" v-model="addBBSPublishParams.publishText"
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
  name: 'SendMessage',
  components: {
    TranslateBtn,
    TaskList
  },
  data () {
    return {
      dialogVisible: false,
      moreDialogVisible: false,
      test: '', 
      addBBSPublishParams: {
        taskName: '',
        bbsName: 'yili',
        bbsChannel: '',
        publishText: ''
      }
    }
  },
  methods: {
    retsetAddParams () {
      this.addBBSPublishParams = {
        taskName: '',
        bbsName: 'yili',
        bbsChannel: '',
        publishText: ''
      }
    },
    handleCreate () {
      this.retsetAddParams()
      this.dialogVisible = true
    },
    confirm () {
      if (!this.addBBSPublishParams.taskName || !this.addBBSPublishParams.bbsChannel || !this.addBBSPublishParams.publishText) {
        this.$message('参数不全')
        return
      }
      taskAPI.addBbsPublish(this.addBBSPublishParams)
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
