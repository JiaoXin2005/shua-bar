<template>
  <div class="user-list">
    <h3>用户列表页</h3>
    
    <el-button type="primary" @click="handleCreate">添加用户</el-button>

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
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleUpdate(scope.row)">编辑用户</el-button>          
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form  :model="temp" label-position="left" label-width="70px" style='width: 400px; margin-left:50px;'>
        <el-form-item label="用户名">
          <el-input v-model="temp.name" ></el-input>
        </el-form-item>

        <el-form-item label="用户角色">
          <el-select class="filter-item" v-model="temp.role" placeholder="请选择">
            <el-option label="超级管理员" value="0"></el-option>
            <el-option label="普通管理员" value="1"></el-option>
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
export default {
  name: 'UserList',
  data () {
    return {
      textMap: {
        update: '编辑',
        create: '创建'
      },
      dialogStatus: '',
      dialogFormVisible: false,
      temp: {
        name: '',
        role: '',
        addTime: '2017-1-2'
      },
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
  },
  methods: {
    handleCreate () {
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
    },
    handleUpdate (row) {
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.temp = Object.assign({}, row) // copy obj
    },
    createData () {
      this.tableData.push(this.temp)
      this.dialogFormVisible = false
    },
    updateData () {
      this.tableData.push(this.temp)      
      this.dialogFormVisible = false      
    }
  }
}
</script>

<style>

</style>
