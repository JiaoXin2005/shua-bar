<template>
  <div class="login-history">
    <h3>用户登陆历史</h3>

    <div class="filer-container">
      <el-input class="wd-200" placeholder="用户名" ></el-input>
      <el-date-picker v-model="time" type="date" placeholder="开始时间"></el-date-picker>
      <el-button type="primary">查询</el-button>
    </div>

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
        label="角色"
        width="180">
      </el-table-column>
      <el-table-column
        prop="time"
        label="登陆时间">
      </el-table-column>
      <el-table-column
        prop="ip"
        label="登陆ip">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'History',
  data () {
    return {
      time: '',
      tableData: [
        {
          name: '肉鸡一号',
          role: '超级管理员',
          time: '2017-1-1',
          ip: '192.168.1.1'
        },
        {
          name: '肉鸡二号',
          role: '超级管理员',
          time: '2017-1-1',
          ip: '192.168.1.1'
        },
        {
          name: '肉鸡三号',
          role: '普通管理员',
          time: '2017-1-1',
          ip: '192.168.1.1'
        },
        {
          name: '肉鸡四号',
          role: '普通管理员',
          time: '2017-1-1',
          ip: '192.168.1.1'
        },
      ]
    }
  }
}
</script>

<style>

</style>
