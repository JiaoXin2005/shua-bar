<template>
  <div class="task-detail">
    <h3>发布任务列表详情</h3>
    <el-table label-position="left" label-width="80px" :data="tableData">
      <el-table-column label="工作IP" prop="workerIp"></el-table-column>
      <el-table-column label="bbsName" prop="bbsName"></el-table-column>
      <el-table-column label="bbsChannel" prop="bbsChannel"></el-table-column>
      <el-table-column label="标题" prop="title"></el-table-column>      
      <el-table-column label="内容" prop="content"></el-table-column>
      <el-table-column label="提交时间" prop="submitTime">
        <template slot-scope="scope">
          {{scope.row.submitTime | formatDate}}
        </template>
      </el-table-column>
      <el-table-column label="添加时间" prop="addTime">
        <template slot-scope="scope">
          {{scope.row.addTime | formatDate}}
        </template>
      </el-table-column>
      <el-table-column label="状态" prop="status"></el-table-column>      
      <el-table-column label="完成时间" prop="finishTime"></el-table-column>
    </el-table>

    <el-pagination
      layout="prev, pager, next"
      :total="total"
      :current-page="listParams.pageNo"
      @current-change="handleCurrentChange"
    ></el-pagination>


  </div>
</template>

<script>
import { publishAPI  } from '@/api'

export default {
  name: 'PublishBBSListDetail',
  data () {
    return {
      total: null,
      listParams: {
        taskId: null,
        pageNo: 1, 
        pageSize: 10
      },
      title: '消息发送任务详情',
      tableData: []
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.listParams.taskId = to.params.taskId
    })
  },
  methods: {
    getPublishDetailList () {
      publishAPI.bbsList(this.listParams)
        .then((res) => {
          this.tableData = res.bbsPostModels
          this.total = res.totalCount
        })
    },
    handleCurrentChange (val) {
      this.taskListParams.pageNo = val
      this.getPublishDetailList()
    }
  },
  mounted() {
    this.listParams.taskId = this.$route.params.taskId
    this.getPublishDetailList()
  }
}
</script>

<style>

</style>
