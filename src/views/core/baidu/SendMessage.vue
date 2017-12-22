<template>
  <div class="send-message">

    <el-button type="primary" class="mgb-20" @click="dialogVisible = true">新建消息发送任务</el-button>

    <div class="filer-container">
      <el-input class="wd-200" placeholder="任务名称" ></el-input>
      <el-select placeholder="状态" v-model="test">
        <el-option label="运行中" value="运行中"></el-option>
        <el-option label="停止" value="停止"></el-option>
      </el-select>
      <el-button type="primary">查询</el-button>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="任务id">
      </el-table-column>
      <el-table-column
        prop="name"
        label="任务名称">
      </el-table-column>
      <el-table-column
        prop="type"
        label="任务类型">
      </el-table-column>
      <el-table-column
        label="任务状态">
        <template slot-scope="scope">
          <el-progress :text-inside="true" :stroke-width="14" :percentage="scope.row.status"></el-progress>
        </template>
      </el-table-column>
      <el-table-column
        prop="type2"
        label="账号类型">
      </el-table-column>
      <el-table-column
        width="180"
        label="操作">
        <template slot-scope="scope">
          <el-button >更多</el-button>
          <router-link to="detail/1/1">
            <el-button type="primary" >任务详细</el-button>          
          </router-link> 
        </template>
      </el-table-column>
    </el-table>


    <el-dialog title="新建消息发送任务" :visible.sync="dialogVisible">
      <el-form label-width="80px" class="wd-460">
        <el-form-item label="发送内容">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="吧名">
          <el-input type="input"></el-input>
        </el-form-item>
        <el-form-item label="发送数量">
          <el-input type="input"></el-input>
        </el-form-item>     
        <el-form-item>
          <el-button type="primary" @click="dialogVisible = false">取 消</el-button>          
          <el-button type="primary" @click="confirm">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>


  </div>
</template>

<script>
export default {
  name: 'SendMessage',
  data () {
    return {
      dialogVisible: false,
      test: '',
      tableData: [
        {
          id: '1',
          name: '任务一号',
          type: '消息发送',
          status: 0,
          type2: '账号类型',
        },
        {
          id: '2',
          name: '任务二号',
          type: '消息发送',
          status: 70,
          type2: '账号类型',
        },
        {
          id: '3',
          name: '任务三号',
          type: '消息评论',
          status: 100,
          type2: '账号类型',
        },
      ]
    }
  },
  methods: {
    confirm () {
      this.dialogVisible = true
    }
  }
}
</script>
