<template>
  <div class="org-list">
    <h3>机构列表页</h3>
    
    <el-button type="primary" @click="handleCreate">添加机构</el-button>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="机构名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="id"
        label="机构ID"
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
          <el-button type="primary" @click="handleUpdate(scope.row)">编辑机构</el-button>          
          <el-button type="danger" @click="handleDelete(scope.row)">删除机构</el-button>          
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form  :model="tempParams" label-position="left" label-width="70px" style='width: 400px; margin-left:50px;'>
        <el-form-item label="机构名">
          <el-input v-model="tempParams.orgName" ></el-input>
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
import { orgAPI } from '@/api'

export default {
  name: 'OrgList',
  data () {
    return {
      textMap: {
        update: '编辑',
        create: '创建'
      },
      dialogStatus: '',
      dialogFormVisible: false,
      tempParams: {
        orgId: '',
        orgName: ''
      },
      tableData: [ ],
      deleteParams:{
        orgId: null
      }
    }
  },
  methods: {
    getList () {
      orgAPI.list()
        .then((res) => {
          this.tableData = res.userOrganizationModelList
        })
    },
    handleCreate () {
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.tempParams = {
        orgName: ''
      }
    },
    handleUpdate (row) {
      this.dialogStatus = 'update'
      this.dialogFormVisible = true

      this.tempParams = { // set params
        orgId: row.id,
        orgName: row.name
      }
    },
    handleDelete (row) {
      this.deleteParams = {
        orgId: row.id
      }
      this.$confirm('删除当前机构, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      .then(() => {
        orgAPI.delete(this.deleteParams).then((res) => {
          res.success && this.getList()
        })
      })
    },
    createData () {
      this.dialogFormVisible = false
      orgAPI.add(this.tempParams)
        .then((res) => {
          res.success && this.getList()
        })
    },
    updateData () {
      this.dialogFormVisible = false
      orgAPI.edit(this.tempParams)
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
