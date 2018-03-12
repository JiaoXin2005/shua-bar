<template>
  <div class="email-account">
    <h3>账号列表</h3>
    <el-button type="primary" @click="handleCreate">添加</el-button>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="account"
        label="imessage账号">
      </el-table-column>

      <el-table-column
        prop="tags"
        label="发件人">
        <template slot-scope="scope">
          {{scope.row.tags}}
        </template>
      </el-table-column>
  
      <!-- <el-table-column
        width="180"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="moreDialogVisible = true">更多</el-button>
        </template>
      </el-table-column> -->
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      :current-page="listParams.pageNo"
      @current-change="handleCurrentChange"
    ></el-pagination>

    <el-dialog title="添加" :visible.sync="dialogVisible">
      <el-form  :model="addParams" label-position="left" label-width="70px" style='width: 400px; margin-left:50px;'>
        <el-form-item label="用户名">
          <el-input v-model.trim="addParams.email"></el-input>
        </el-form-item>

        <el-form-item label="标签组">
          <el-select class="filter-item" multiple v-model="addParams.tagIds" placeholder="请选择">
            <el-option
              v-for="item in allTags"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button  type="primary" @click="createData">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { emailAPI, tagAPI } from '@/api'

export default {
  naem: 'EmailAccountList',
  data () {
    return {
      allTags: [],
      dialogVisible: false,
      tableData: [],
      total: null,
      listParams: {
        pageNo: 1,
        pageSize: 10
      },
      addParams: {
        email: '',
        tagIds: []
      }
    }
  },
  methods: {
    getList() {
      emailAPI.listReceiver(this.listParams)
        .then((res) => {
          if (res.success) {
            this.tableData = res.receiverModels
            this.total = res.totalCount
          }
        })
    },
    getAllTags () {
      tagAPI.list().then((res) => {this.allTags = res.promotionTagsModelList})
    },
    resetAddParams () {
      this.addParams = {
        email: '',
        tagIds: []
      }
    },
    handleCurrentChange (val) {
      this.listParams.pageNo = val
      this.getList()
    },
    handleCreate () {
      this.resetAddParams()
      this.dialogVisible = true
    },
    createData () {
      if (!this.addParams.email || !this.addParams.tagIds) {
        this.$message('表单信息填写有误')
        return
      }
      emailAPI.addReceiver(this.addParams)
        .then((res) => {
          if (res.success) {
            this.getList()
            this.dialogVisible = false
          }
        })
    }
  },
  mounted () {
    this.getAllTags()
    this.getList()
  }
}
</script>

<style>

</style>
