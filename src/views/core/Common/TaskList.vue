<template>
  <div class="task-list">
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

  </div>
</template>

<script>
import { taskAPI } from '@/api'


export default {
  props: ['type', 'website'],
  data () {
    return {
      total: null,
      tableData: [],
      taskListParams: {
        pageNo: 1,
        pageSize: 10,
        type: '',
        website: ''
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
    handleCurrentChange (val) {
      this.taskListParams.pageNo = val
      this.getTaskList()
    }
  },
  mounted() {
    this.taskListParams.type = this.type
    this.taskListParams.website = this.website
    this.getTaskList()
  }
}
</script>

<style>

</style>
