<template>
  <div class="account-manage">
    <h3>账号管理</h3>

    <div class="btn-group">
      <el-button type="primary" @click="handleCreate">添加账号</el-button>
      <el-button type="primary">批量导入excel</el-button>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="用户名">
      </el-table-column>
      <el-table-column
        prop="pwd"
        label="密码">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
      </el-table-column>
      <el-table-column
        prop="number"
        label="使用次数">
      </el-table-column>
      <el-table-column
        prop="addTime"
        label="添加时间">
      </el-table-column>
      <el-table-column
        prop="updateTime"
        label="更新时间">
      </el-table-column>
      <el-table-column
        width="150"
        label="操作">
        <template slot-scope="scope">
          <el-button type="warning">启用</el-button>          
          <el-button type="primary" @click="handleUpdate(scope.row)">编辑</el-button>          
        </template>
      </el-table-column>
    </el-table>


  <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
    <el-form  :model="temp" label-position="left" label-width="70px" style='width: 400px; margin-left:50px;'>
      <el-form-item label="用户名">
        <el-input v-model="temp.name" ></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="temp.pwd" ></el-input>
      </el-form-item>

      <el-form-item label="类型">
        <el-select class="filter-item" v-model="temp.type" placeholder="请选择">
          <el-option label="Facebook" value="0"></el-option>
          <el-option label="Twitter" value="1"></el-option>
          <el-option label="百度" value="3"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="状态">
        <el-radio v-model="temp.status" label="1">启用</el-radio>
        <el-radio v-model="temp.status" label="2">禁用</el-radio>
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
  name: 'AccountManage',
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
        pwd: '',
        type: '',
        status: ''
      },
      tableData: [
        {
          name: '肉鸡一号',
          pwd: '189****1231',
          type: 'Facebook',
          status: '运行中',
          number: 2,
          addTime: '2017-1-1',
          updateTime: '2017-1-3'
        },
        {
          name: '肉鸡一号',
          pwd: '189****1231',
          type: 'Twitter',
          status: '运行中',
          number: 2,
          addTime: '2017-1-1',
          updateTime: '2017-1-3'
        },
        {
          name: '肉鸡一号',
          pwd: '189****1231',
          type: '百度',
          status: '运行中',
          number: 2,
          addTime: '2017-1-1',
          updateTime: '2017-1-3'
        },
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
