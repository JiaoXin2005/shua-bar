<template>
  <div class="tag">
    <h3>标签管理</h3>
    <el-button type="primary" @click="handleCreate" >新建标签</el-button>    

    <h4>标签列表</h4>
    
    <div class="list">

      <el-table
      :data="tableData"
      style="width: 100%">
      
      <el-table-column
        prop="id"
        label="标签ID"
        width="180">
      </el-table-column>

      <el-table-column
        prop="name"
        label="标签名"
        width="180">
        <!-- <template slot-scope="scope">
          <router-link :to="'/user-manage/detail/' + scope.row.id">{{scope.row.username}}</router-link>
        </template> -->
      </el-table-column>
      <el-table-column
        prop="creator"
        label="创建人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="addTime"
        label="添加时间">
        <template slot-scope="scope">
          {{scope.row.addTime | formatDate}}
        </template>
      </el-table-column>
    </el-table>

      <el-dialog :visible.sync="dialogFormVisible">
        <el-form  :model="tempParams" label-position="left" label-width="70px" style='width: 400px; margin-left:50px;'>
          <el-form-item label="标签名">
            <el-input v-model="tempParams.tagName"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="createData">确 定</el-button>
        </div>
      </el-dialog>

    </div>
  
  </div>
</template>

<script>
import { tagAPI } from '@/api'

export default {
  data () {
    return {
      tags: ['标签一', '标签二', '标签三'],
      dialogFormVisible: false,
      tempParams: {
        tagName: ''
      },
      tagName: '',
      tableData: []
    }
  },
  methods: {
    getTagList () {
      tagAPI.list()
        .then((res) => {
          if (res.success) {
            this.tableData = res.promotionTagsModelList
          }
        })
    },
    handleCreate () {
      this.dialogFormVisible = true
    },
    createData () {
      if (!this.tempParams.tagName) {
        this.$message('标签名不能为空 ')
        return 
      }
      tagAPI.add(this.tempParams)
        .then((res) => {
          if (res.success) {
            this.getTagList()
            this.dialogFormVisible =false
          }
        })
    }
  },
  mounted () {
    this.getTagList()
  }
}
</script>

<style lang="scss" scoped>
.el-tag{
  margin: 0px 5px 5px 0;
}
.input-new-tag {
  width: 80px;
}
</style>
