<template>
  <div class="user-list">
    <h3>用户列表页</h3>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="role"
        label="用户角色"
        width="180">
      </el-table-column>
      <el-table-column
        prop="addTime"
        label="添加时间">
      </el-table-column>
    </el-table>
  </div>  
</template>

<script>
export default {
  name: 'UserList',
  data () {
    return {
      tableData: [
        {
          name: '张三',
          role: '超级管理员',
          addTime: '2017-1-1'
        },
        {
          name: '张三',
          role: '普通管理员',
          addTime: '2017-1-1'
        }
      ]
    }
  }
}
</script>

<style>

</style>
