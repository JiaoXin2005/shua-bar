<template>
  <div class="worker-list">
    <h3>推广节点列表</h3>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="hostname"
        label="主机名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="ip"
        label="IP地址"
        width="180">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="180">
      </el-table-column>
      <el-table-column
        prop="operator"
        label="操作人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="addTime"
        label="添加时间">
        <template slot-scope="scope">
          {{scope.row.addTime | formatDate}}
        </template>
      </el-table-column>
      <!-- <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleUpdate(scope.row)">编辑用户</el-button>          
          <el-button type="danger" @click="handleDelete(scope.row)">删除用户</el-button>          
        </template>
      </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
import { workerAPI } from '@/api'

export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    getList () {
      workerAPI.list()
        .then((res) => {
          if (res.success) {
            this.tableData = res.promotionWorkerModelList
          }
        })
    }
  },
  mounted () {
    this.getList()  
  }
}
</script>
