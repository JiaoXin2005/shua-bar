<template>
  <div class="user-list">
    <h3>用户列表页</h3>

    <el-select v-model="listParams.orgId" placeholder="请选择"
      @change="handleChangeOrg">
      <el-option
        v-for="item in orgList"
        :key="item.id"
        :label="item.name"
        :value="item.id">
      </el-option>
    </el-select>

    <el-button type="primary" @click="handleCreate">添加用户</el-button>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="username"
        label="用户名"
        width="180">
        <template slot-scope="scope">
          <router-link :to="'/user-manage/detail/' + scope.row.id">{{scope.row.username}}</router-link>
        </template>
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
        prop="organizationName"
        label="机构名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="addTime"
        label="添加时间">
        <template slot-scope="scope">
          {{scope.row.addTime | formatDate}}
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleUpdate(scope.row)">编辑用户</el-button>          
          <el-button type="danger" @click="handleDelete(scope.row)">删除用户</el-button>          
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      layout="prev, pager, next"
      :total="total"
      :current-page="listParams.pageNo"
      @current-change="handleCurrentChange"
    ></el-pagination>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form  :model="tempParams" label-position="left" label-width="70px" style='width: 400px; margin-left:50px;'>
        <el-form-item label="用户名">
          <el-input v-model="tempParams.username" :disabled="dialogStatus == 'update'"></el-input>
        </el-form-item>

        <el-form-item label="组织名">
          <el-select v-model="tempParams.organizationName">
            <el-option
              v-for="item in orgList"
              :key="item.id"
              :label="item.name"
              :value="item.name">
            </el-option>
          </el-select>
        </el-form-item>

        <!-- 只有创建才能改角色 -->
        <el-form-item label="用户角色" v-if="dialogStatus == 'create'">
          <el-select class="filter-item" v-model="tempParams.role" placeholder="请选择">
            <el-option
              v-for="item in roles"
              :key="item.role"
              :label="item.name"
              :value="item.role">
            </el-option>
          </el-select>
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
import { userAPI, orgAPI } from '@/api'

export default {
  name: 'UserList',
  data () {
    return {
      roles: [
        {name: '机构管理员', role: 'group_admin'},
        {name: '普通管理员', role: 'normal_admin'}
      ],
      total: null, 
      orgList: [], // 机构列表
      textMap: {
        update: '编辑',
        create: '创建'
      },
      dialogStatus: '',
      dialogFormVisible: false,
      tempParams: {
        organizationName: '',
        username: '',
        role: ''
      },
      tableData: [],
      listParams: {
        orgId: null,
        pageNo: 1,
        pageSize: 10
      }
    }
  },
  methods: {
    getUserList() {
      userAPI.list(this.listParams)
        .then((res) => {
          this.tableData = res.userModels
          this.total = res.totalCount
        })
    },
    getOrgList () {
      return new Promise((resolve, reject) => {
        orgAPI.list().then((res) => {
          if (res.success) {
            this.orgList = res.userOrganizationModelList
            resolve(res.userOrganizationModelList)
          }
          reject(res)
        })
      })
    },
    resetTempParams() {
      this.tempParams = {
        organizationName: '',
        username: '',
        role: ''
      }
    },
    handleCurrentChange (val) {
      this.listParams.pageNo = val
      this.getUserList()
    },
    handleChangeOrg (val) {
      this.getUserList()
    },
    handleCreate () {
      this.resetTempParams()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
    },
    handleUpdate (row) {
      this.tempParams = {
        organizationName: row.organizationName,
        username: row.username
      }
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
    },
    handleDelete (row) {
      let deleteParams = {
        username: row.username
      }
      this.$confirm('删除当前用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      .then(() => {
        userAPI.delete(deleteParams).then((res) => {
          res.success && this.getUserList()
        })
      })
    },
    createData () {
      if(!this.tempParams.organizationName || !this.tempParams.username || !this.tempParams.role) {
        this.$message('参数信息不完整')
        return
      }
      userAPI.add(this.tempParams)
        .then((res) => {
          if (res.success) {
            this.getUserList()
            this.dialogFormVisible = false
          }
        })
    },
    updateData () {
      if(!this.tempParams.username) {
        this.$message('参数信息不完整')
        return
      }
      userAPI.edit(this.tempParams)
        .then((res) => {
          if (res.success) {
            this.getUserList()
            this.dialogFormVisible = false
          }
        })
    },
  },
  mounted () {
    this.getOrgList()
      .then((orgList) => this.listParams.orgId = orgList[0].id) //设置第一个机构id
      .then(() => this.getUserList())
  }
}
</script>

<style>

</style>
