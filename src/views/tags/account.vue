<template>
  <div class="tags-account">
    <h3>{{tagName}}下的用户列表</h3>
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
    </el-table>
  </div>

</template>

<script>
export default {
  data () {
    return {
      tagName: '',
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
  mounted () {
    this.tagName = this.$route.params.id
    console.log(this)
  }
}
</script>

<style>

</style>
