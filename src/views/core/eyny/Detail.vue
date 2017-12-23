<template>
  <div class="task-detail">
    <h3>{{title}}</h3>
    <el-table label-position="left" label-width="80px" :data="tableData">
      <el-table-column label="任务名称" prop="name"></el-table-column>
      <el-table-column label="执行机器" prop="name2"></el-table-column>
      <el-table-column label="执行状态" prop="status"></el-table-column>
      <el-table-column label="发送账号" prop="account"></el-table-column>
      <el-table-column label="吧名" prop="name3"></el-table-column>
      <el-table-column label="提交时间" prop="time1"></el-table-column>
      <el-table-column label="执行时间" prop="time2"></el-table-column>
    </el-table>

    <h3>消息评论任务详情</h3>
    <el-table label-position="left" label-width="80px" :data="tableData">
      <el-table-column label="任务名称" prop="name"></el-table-column>
      <el-table-column label="执行机器" prop="name2"></el-table-column>
      <el-table-column label="执行状态" prop="status"></el-table-column>
      <el-table-column label="发送账号" prop="account"></el-table-column>
      <el-table-column label="吧名" prop="name3"></el-table-column>
      <el-table-column label="提交时间" prop="time1"></el-table-column>
      <el-table-column label="执行时间" prop="time2"></el-table-column>
    </el-table>
    
  </div>
</template>

<script>
export default {
  name: 'TaskDetail',
  data () {
    return {
      title: '消息发送任务详情',
      tableData: [
        {
          name: '任务名称',
          name2: '执行机器',
          status: '执行状态',
          account: '发送账号',
          name3: '吧名',
          time1: '2016-1-1',
          time2: '2016-1-2',
        }
      ]
    }
  },
  method: {
  }
}
</script>

<style>

</style>
