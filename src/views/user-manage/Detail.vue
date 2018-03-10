<template>
  <div class="user-detail">
    <h3>用户详情页</h3>
    
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="username"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="id"
        label="用户ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="organizationName"
        label="机构名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="role"
        label="用户角色"
        width="180">
        <template slot-scope="scope">
          {{ scope.row.role | parseRole }}
        </template>
      </el-table-column>
      <el-table-column
        label="添加时间">
        <template slot-scope="scope">
          {{scope.row.addTime | formatDate}}
        </template>
      </el-table-column>
      <!-- <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleUpdate(scope.row)">编辑机构</el-button>          
          <el-button type="danger" @click="handleDelete(scope.row)">删除机构</el-button>          
        </template>
      </el-table-column> -->
    </el-table>

  </div>
</template>

<script>
import { userAPI } from '@/api'

export default {
  name: 'UserDetailList',  
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    getDetail() {
      let uid = this.$route.params.uid
      userAPI.detail({uid})
        .then((res) => {
          if (res.success) {
            this.tableData.push(res.user)
          }
        })
    }
  },
  mounted () {
    this.getDetail()
  }
}
</script>

<style>

</style>
