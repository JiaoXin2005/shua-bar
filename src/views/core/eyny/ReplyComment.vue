<template>
  <div class="reply-comment">
    
    <el-button type="primary" class="mgb-20" @click="dialogVisible = true">新建任务</el-button>

    <div class="filer-container">
      <el-input class="wd-200" placeholder="任务名称" ></el-input>
      <el-select placeholder="状态" v-model="test">
        <el-option label="排队中" value="排队中"></el-option>
        <el-option label="运行中" value="运行中"></el-option>
        <el-option label="完成" value="完成"></el-option>
      </el-select>
      <el-button type="success">查询</el-button>
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
          <el-progress :text-inside="true" :stroke-width="14" :percentage="scope.row.status"
            :status="scope.row.status === 100 ? 'success' : ''"></el-progress>
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
          <el-button @click="moreDialogVisible = true">更多</el-button>
          <router-link to="detail/1/1">
            <el-button type="primary" >任务详细</el-button>          
          </router-link> 
        </template>
      </el-table-column>
    </el-table>

    <!-- s: 新建弹窗 -->
    <el-dialog title="新建评论回复任务" :visible.sync="dialogVisible" >
      <el-form  label-width="80px" class="wd-550">
        <el-form-item label="文章链接">

        <el-form-item v-for="(link, index) in links" :key="index">
          <el-input type="input" v-model="link.value" class=""></el-input>
          <el-button type="danger" @click="deleteLink(index)" v-if="links.length !== 1">删除</el-button>
          <el-button type="primary" @click="addLink()" v-if="index == links.length-1">新增</el-button>
        </el-form-item>

        </el-form-item>

        <el-form-item label="评论内容">
          <el-input type="textarea" v-model="comment" placeholder="一定要是繁体哦~"></el-input>

          <!-- s: 翻译按钮 -->
          <translate-btn :inputVal="comment" @click="handleTranslateLang"></translate-btn>
          <!-- e: 翻译按钮 -->          

        </el-form-item>

        <el-form-item label="">
          <el-input type="textarea" v-model="comment1"></el-input>
        </el-form-item>

        <el-form-item label="评论数量">
          <el-input type="input" class="wd-200"></el-input>
        </el-form-item>
    
        <el-form-item>
          <el-button type="danger" @click="dialogVisible = false">取 消</el-button>          
          <el-button type="success" @click="confirm">立即创建</el-button>
        </el-form-item>

      </el-form>
    </el-dialog>
    <!-- e: 新建弹窗 -->

    <!-- s: 更多弹窗 -->
    <el-dialog title="当前任务内容" :visible.sync="moreDialogVisible">
      <div>新华社拉姆安拉12月22日电（记者杨媛媛赵悦）巴勒斯坦总统阿巴斯22日强调，巴方不接受美国调停和平进程，也不再接受美国提出的任何方案。

据巴勒斯坦官方通讯社“瓦法”报道，阿巴斯在一封公开信中说，美国选择偏袒以色列，对耶路撒冷地位的决定建立在支持以色列对巴勒斯坦人民权利的公然非法侵犯之上，美国将来的方案不会再以“两国方案”、国际法和联合国有关决议为基础，因此，“我们不接受美国作为和平进程的调解人，也不接受美国将来提出的任何方案。”

阿巴斯说，美国承认耶路撒冷是以色列首都是对以的“非法奖励”，无视东耶路撒冷是“被占领的巴勒斯坦国”不可分割的一部分，是不履行国际法义务的表现。他强调，“我们将在争取自由和独立的道路上继续前行。”

以色列在1967年占领东耶路撒冷后，单方面宣称整个耶路撒冷是其“永久、不可分割的首都”，而巴方则要求建立一个以东耶路撒冷为首都的巴勒斯坦国。国际社会普遍不承认以色列对耶路撒冷拥有主权，很多和以色列有外交关系的国家把使馆设在特拉维夫而非耶路撒冷。

美国总统特朗普本月6日宣布承认耶路撒冷为以色列首都，并将启动美驻以使馆从特拉维夫迁往耶路撒冷的进程。此举遭国际社会普遍反对。21日，联合国大会通过一项决议，认定任何宣称改变耶路撒冷地位的决定和行动“无效”</div>
    </el-dialog>
    <!-- e: 更多弹窗 -->

  </div>
</template>

<script>
import TranslateBtn from '@/components/TranslateBtn'

export default {
  name: 'ReplyComment',
  components: {
    TranslateBtn
  },
  data () {
    return {
      comment: '',
      comment1: '',
      dialogVisible: false,
      moreDialogVisible: false,
      test: '',
      links: [{
        value: ''
      }],
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
    addLink () {
      this.links.push({
        value: ''
      })
    },
    deleteLink (index) {
      this.links.splice(index, 1)
    },
    confirm () {
      this.dialogVisible = true
    },
    handleTranslateLang (val) {
      this.comment1 = val
    }
  }
}
</script>
