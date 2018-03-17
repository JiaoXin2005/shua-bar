<template>
  <div class="reply-comment">
    <h3>twitter评论任务 </h3>
    <el-button type="primary" class="mgb-20" @click="handleCreate">新建任务</el-button>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="任务id">
      </el-table-column>
      <el-table-column
        prop="taskName"
        label="任务名称">
      </el-table-column>
      <el-table-column
        prop="taskType"
        label="任务类型">
      </el-table-column>
      <el-table-column
        label="任务状态">
        <template slot-scope="scope">
          <el-progress :text-inside="true" :stroke-width="14" 
            :percentage="scope.row.status == 'new' ? 0 :( scope.row.status == 'under_going' ? 50 : 100)"
            ></el-progress>
        </template>
      </el-table-column>
      <el-table-column
        prop="operator"
        label="发布人">
      </el-table-column>
      <el-table-column
        width="180"
        label="操作">
        <template slot-scope="scope">
          <router-link :to="'commentDetail/' + scope.row.id">
            <el-button type="primary" >任务详细</el-button>          
          </router-link> 
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      layout="prev, pager, next"
      :total="total"
      :current-page="taskListParams.pageNo"
      @current-change="handleCurrentChange"
    ></el-pagination>

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

export default {
  name: 'ReplyComment',
  components: {
    TranslateBtn
  },
  data () {
    return {
      dialogVisible: false,
      links: [{
        value: ''
      }],
      total: null,
      tableData: [],
      taskListParams: {
        pageNo: 1,
        pageSize: 10,
        website: 'twitter',
        type: 'comment'
      },
      addCommentParams: {
        taskName: '',
        website: 'twitter',
        articleLink: '',
        commentText: ''
      }
    }
  },
  methods: {
    getTaskList() {
      taskAPI.list(this.taskListParams)
        .then((res) => {
          if (res.success) {
            this.tableData = res.taskModels
            this.total = res.totalCount
          }
        })
    },
    handleCreate () {
      this.retsetAddParams()
      this.dialogVisible = true
    },
    handleCurrentChange (val) {
      this.taskListParams.pageNo = val
      this.getTaskList()
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
          res.success && this.getTaskList()
          this.dialogVisible = false
        })
    },
  },
  mounted () {
    this.getTaskList()
  }
}
</script>
