<template>
  <div class="reply-comment">
    <h3>论坛评论任务 </h3>
    <el-button type="primary" class="mgb-20" @click="handleCreate">新建任务</el-button>

    <!-- 查询按钮 -->
    <!-- <div class="filer-container">
      <el-input class="wd-200" placeholder="任务名称" ></el-input>
      <el-select placeholder="状态" v-model="test">
        <el-option label="排队中" value="排队中"></el-option>
        <el-option label="运行中" value="运行中"></el-option>
        <el-option label="完成" value="完成"></el-option>
      </el-select>
      <el-button type="success">查询</el-button>
    </div> -->

    <TaskList website='yili'  type='comment' ref="TaskList"/>


    <!-- s: 新建弹窗 -->
    <el-dialog title="新建评论回复任务" :visible.sync="dialogVisible" >
      <el-form  label-width="80px" class="wd-550">

        <el-form-item label="任务名称">
          <el-input v-model="addCommentParams.taskName" ></el-input>
        </el-form-item>

        <el-form-item label="文章链接">
          
          <el-input type="input" v-model="addCommentParams.articleLink"></el-input>

          <!-- 暂时没有多条连接
          <el-form-item v-for="(link, index) in links" :key="index">
            <el-input type="input" v-model="link.value" class=""></el-input>
            <el-button type="danger" @click="deleteLink(index)" v-if="links.length !== 1">删除</el-button>
            <el-button type="primary" @click="addLink()" v-if="index == links.length-1">新增</el-button>
          </el-form-item>
          -->

        </el-form-item>

        <el-form-item label="评论内容">
          <el-input type="textarea" v-model="addCommentParams.commentText" 
            :autosize="{ minRows: 8}"
            placeholder="一条评论以换行结束，一定要是繁体哦~"></el-input>

        <!-- s: 翻译按钮 暂时没有 -->
        <!-- <translate-btn :inputVal="comment" @click="handleTranslateLang"></translate-btn> -->
        <!-- e: 翻译按钮 -->          

        </el-form-item>


        <!-- 暂时没有 -->
        <!-- 
        <el-form-item label="">
          <el-input type="textarea" v-model="comment1"></el-input>
        </el-form-item> 
        
        <el-form-item label="评论数量">
          <el-input type="input" class="wd-200"></el-input>
        </el-form-item>
        -->

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
import { taskAPI } from '@/api'
import TranslateBtn from '@/components/TranslateBtn'
import TaskList from '../Common/TaskList'

export default {
  name: 'ReplyComment',
  components: {
    TranslateBtn,
    TaskList
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
      addCommentParams: {
        taskName: '',
        website: 'yili',
        articleLink: '',
        commentText: ''
      }
    }
  },
  methods: {
    // addLink () {
    //   this.links.push({
    //     value: ''
    //   })
    // },
    // deleteLink (index) {
    //   this.links.splice(index, 1)
    // },
    // handleTranslateLang (val) {
    //   this.comment1 = val
    // },
    handleCreate () {
      this.retsetAddParams()
      this.dialogVisible = true
    },
    retsetAddParams () {
      this.addCommentParams = {
        taskName: '',
        website: 'yili',
        articleLink: '',
        commentText: ''
      }
    },
    confirm () {
      if (!this.addCommentParams.taskName || !this.addCommentParams.articleLink || !this.addCommentParams.commentText) {
        this.$message('参数不全')
        return
      }
      taskAPI.addComment(this.addCommentParams)
        .then((res) => {
          this.$refs.TaskList.getTaskList()          
          this.dialogVisible = false
        })
    },
  },
  mounted () {

  }
}
</script>
