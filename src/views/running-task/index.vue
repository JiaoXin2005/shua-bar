<template>
  <div class="running-task">
    <h3>执行任务机器列表</h3>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="ip"
        label="机器ip"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="机器名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="status"
        label="机器状态">
      </el-table-column>
      <el-table-column
        prop="addTime"
        label="加入时间">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'RunningTask',
  data () {
    return {
      tableData: [
        {
          ip: '192.168.1.1',
          name: '肉鸡一号',
          status: '运行中',
          addTime: '2017-1-1'
        },
        {
          ip: '192.168.1.1',
          name: '肉鸡一号',
          status: '运行中',
          addTime: '2017-1-1'
        },
        {
          ip: '192.168.1.1',
          name: '肉鸡一号',
          status: '运行中',
          addTime: '2017-1-1'
        },
        {
          ip: '192.168.1.1',
          name: '肉鸡一号',
          status: '运行中',
          addTime: '加入时间'
        }
      ]
    }
  }
}
</script>
