<template>
  <div class="account-manage">
    <h3>账号管理</h3>

    <div class="btn-group">
      <el-button type="primary" @click="handleCreate">添加账号</el-button>
      <!-- <el-button type="primary">批量导入excel</el-button> -->
    </div>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="username"
        label="用户名">
      </el-table-column>
      <el-table-column
        prop="passwd"
        label="密码">
      </el-table-column>
      <el-table-column
        prop="website"
        label="类型">
      </el-table-column>
      <el-table-column
        prop="useTime"
        label="使用次数">
      </el-table-column>
      <el-table-column
        prop="proxyIp"
        label="代理IP">
      </el-table-column>
      <el-table-column
        prop="addTime"
        label="添加时间">
        <template slot-scope="scope">
          {{scope.row.addTime | formatDate}}
        </template>
      </el-table-column>
      <el-table-column
        prop="updateTime"
        label="更新时间">
        <template slot-scope="scope">
          {{scope.row.updateTime | formatDate}}
        </template>
      </el-table-column>
      <el-table-column
        width="150"
        label="操作">
        <template slot-scope="scope">
          <!-- <el-button type="warning">启用</el-button>  -->
          <el-button type="primary" @click="handleUpdate(scope.row)">编辑</el-button>          
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
    <el-form  :model="addOrEditParams" label-position="left" label-width="70px" style='width: 400px; margin-left:50px;'>
      <el-form-item label="用户名">
        <el-input v-model="addOrEditParams.username" ></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="addOrEditParams.passwd" ></el-input>
      </el-form-item>

      <el-form-item label="类型" v-if="dialogStatus == 'create'">
        <el-select class="filter-item" v-model="addOrEditParams.website" placeholder="请选择">
          <el-option
            v-for="item in allWebsite"
            :key="item.value"
            :label="item.name"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="标签组">
        <el-select class="filter-item" multiple v-model="addOrEditParams.tagIds" placeholder="请选择">
          <el-option
            v-for="item in allTags"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>

      <!-- 暂时没有状态 -->
      <!-- <el-form-item label="状态">
        <el-radio v-model="temp.status" label="1">启用</el-radio>
        <el-radio v-model="temp.status" label="2">禁用</el-radio>
      </el-form-item> -->

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
import { promotionAPI, tagAPI } from '@/api'

export default {
  name: 'AccountManage',
  data () {
    return {
      // allWebsite: ['tieba', 'weibo', 'yili', 'facebook', 'twitter', 'sina', 'hotmail', 'gmail', 'yahoo', 'wangyi'],
      allWebsite: [{name:'百度贴吧', value: 'tieba'}, {name:'新浪微博', value: 'weibo'}, {name:'伊莉论坛', value: 'yili'}, 
      {name:'Facebook', value: 'facebook'},{name:'Twitter', value: 'twitter'}, {name:'新浪', value: 'sina'}, 
      {name:'hotmail', value: 'hotmail'}, {name:'gmail', value: 'gmail'}, {name:'yahoo', value: 'yahoo'}, {name:'网易', value: 'wangyi'}],
      allTags: [],
      website: null,
      textMap: {
        update: '编辑',
        create: '创建'
      },
      dialogStatus: '',
      dialogFormVisible: false,
      listParams: { // 账号列表参数
        website: '',
        pageNo: 1,
        pageSize: 10,
      },
      addOrEditParams: {
        username: '',
        passwd: '',
        website: '',
        tagIds: '',
        promotionAccUid: ''
      },
      tableData: [],
      total: null
    }
  },
  beforeRouteEnter (to, from, next) { //  获取path中website 并拉取数据
    let website = to.path.replace('/account-manage/', '')
    next(vm => {
      vm.website = website
      vm.listParams.website = website
      vm.getAccountList()
    })
  },
  methods: {
    getAccountList ( ){
      promotionAPI.list(this.listParams)
      .then((res ) => {
        if (res.success) {
          this.total = res.totalCount
          this.tableData = res.accountModels
        }
      })
    },
    getWebsite () {
      let website = this.$route.path.replace('/account-manage/', '')
      this.website = website
      this.listParams.website = website
      return website
    },
    getAllTags () {
      tagAPI.list().then((res) => {this.allTags = res.promotionTagsModelList})
    },
    resetAddParams () {
      this.addOrEditParams = {
        username: '',
        passwd: '',
        website: '',
        tagIds: [],
      }
    },
    resetEditParams (row) {
      this.addOrEditParams = {
        promotionAccUid: row.id,
        username: row.username,
        passwd: row.passwd,
        tagIds: row.tags,
      }
    },
    handleCreate () {
      this.resetAddParams()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
    },
    handleUpdate (row) {
      this.resetEditParams(row)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
    },
    createData () {
      if (!this.addOrEditParams.username || !this.addOrEditParams.passwd 
       || !this.addOrEditParams.website || !this.addOrEditParams.tagIds) {
         this.$message('表单信息有误')
         return
      }
      promotionAPI.add(this.addOrEditParams)
        .then((res) => {
          if (res.success) {
            this.getAccountList()
            this.dialogFormVisible = false
          }
        })
    },
    updateData () {
      if (!this.addOrEditParams.username || !this.addOrEditParams.passwd || !this.addOrEditParams.tagIds) {
         this.$message('表单信息有误')
         return
      }
      promotionAPI.edit(this.addOrEditParams)
        .then((res) => {
          if (res.success) {
            this.getAccountList()
            this.dialogFormVisible = false
          }
        })
    },
    handleCurrentChange (val) {
      this.listParams.pageNo = val
      this.getAccountList()
    }
  },
  mounted () {
    this.getAllTags()
  }
}
</script>

<style>

</style>
