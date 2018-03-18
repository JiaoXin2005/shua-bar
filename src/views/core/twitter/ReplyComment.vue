<template>
  <div class="reply-comment">
    <h3>twitter评论任务 </h3>
    <el-button type="primary" class="mgb-20" @click="handleCreate">新建任务</el-button>

    <TaskList website='twitter'  type='comment' role='social' ref="TaskList"/>    

    <!-- s: 新建弹窗 -->
    <el-dialog title="新建评论回复任务" :visible.sync="dialogVisible" >
      <el-form  label-width="80px" class="wd-550">

        <el-form-item label="任务名称">
          <el-input v-model="addCommentParams.taskName" ></el-input>
        </el-form-item>

        <el-form-item label="文章链接">
          
          <el-input type="input" v-model="addCommentParams.articleLink"></el-input>


        </el-form-item>

        <el-form-item label="评论内容">
          <el-input type="textarea" v-model="addCommentParams.commentText" 
            :autosize="{ minRows: 8}"
            placeholder="一条评论以换行结束，一定要是繁体哦~"></el-input> 

        </el-form-item>


        <el-form-item>
          <el-button type="danger" @click="dialogVisible = false">取 消</el-button>          
          <el-button type="success" @click="confirm">立即创建</el-button>
        </el-form-item>

      </el-form>
    </el-dialog>
    <!-- e: 新建弹窗 -->

  </div>
</template>

<script>
import { taskAPI } from '@/api'
import TranslateBtn from '@/components/TranslateBtn'
import TaskList from '../Common/TaskList'


export default {
  name: 'ReplyComment',
  components: {
    TranslateBtn,
    TaskList
  },
  data () {
    return {
      dialogVisible: false,
      addCommentParams: {
        taskName: '',
        website: 'twitter',
        articleLink: '',
        commentText: ''
      }
    }
  },
  methods: {

    handleCreate () {
      this.retsetAddParams()
      this.dialogVisible = true
    },

    retsetAddParams () {
      this.addCommentParams.taskName = ''
      this.addCommentParams.articleLink = ''
      this.addCommentParams.commentText = ''
    },
    confirm () {
      if (!this.addCommentParams.taskName || !this.addCommentParams.articleLink || !this.addCommentParams.commentText) {
        this.$message('参数不全')
        return
      }
      taskAPI.addComment(this.addCommentParams)
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
