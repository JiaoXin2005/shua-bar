<template>
  <div class="proxyIp">
    <h3>代理IP列表页</h3>

    <el-button type="primary" @click="handleCreate">添加代理IP</el-button>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="ip"
        label="ip地址"
        width="180">
      </el-table-column>
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="180">
      </el-table-column>
      <el-table-column
        label="添加时间">
        <template slot-scope="scope">
          {{scope.row.addTime | formatDate}}
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <!-- 暂时没有编辑ip逻辑 -->
          <!-- <el-button type="primary" @click="handleUpdate(scope.row)">编辑代理IP</el-button>           -->
          <el-button type="danger" @click="handleDelete(scope.row)">删除代理IP</el-button>          
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form  :model="tempParams" label-position="left" label-width="70px" style='width: 400px; margin-left:50px;'>
        <el-form-item label="代理IP">
          <el-input v-model="tempParams.ip" ></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button v-if="dialogStatus == 'create'" type="primary" @click="createData">确 定</el-button>
        <el-button v-else type="primary" @click="updateData">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { proxyIpAPI } from '@/api'

export default {
  data () {
    return {
      textMap: {
        update: '编辑',
        create: '创建'
      },
      dialogStatus: '',
      dialogFormVisible: false,
      tempParams: {
        ip: '',
      },
      tableData: [ ],
      deleteParams:{
        ip: null
      }
    }
  },
  methods: {
    getList () {
      proxyIpAPI.list()
        .then((res) => {
          this.tableData = res.proxyIpModels
        })
    },
    handleCreate () {
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.tempParams = {
        ip: ''
      }
    },
    handleUpdate (row) {
      this.dialogStatus = 'update'
      this.dialogFormVisible = true

      this.tempParams = { // set params
        ip: row.ip
      }
    },
    handleDelete (row) {
      this.deleteParams = {
        ip: row.ip
      }
      this.$confirm('删除当前代理IP, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      .then(() => {
        proxyIpAPI.delete(this.deleteParams).then((res) => {
          res.success && this.getList()
        })
      })
    },
    createData () {
      if (!this.tempParams.ip) {
        this.$message('IP地址不能为空')
        return
      }
      this.dialogFormVisible = false
      proxyIpAPI.add(this.tempParams)
        .then((res) => {
          res.success && this.getList()
        })
    },
    updateData () {
      this.dialogFormVisible = false
      proxyIpAPI.edit(this.tempParams)
        .then((res) => {
          res.success &&this.getList()
        })
    }
  },
  mounted () {
    this.getList()
  }
}
</script>

<style>

</style>
