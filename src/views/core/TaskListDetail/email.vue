<template>
  <div class="email-task-detail">
    <h3>email任务详情</h3>

    <div class="content">
      <div class="row">
        <label class="label">工作IP：</label>
        <div>{{tableData.workerIp}}</div>
      </div>

      <div class="row">
        <label class="label">主题：</label>
        <div>{{tableData.subject}}</div>
      </div>

      <div class="row">
        <label class="label">内容：</label>
        <div v-html="tableData.content"></div>
      </div>

      <div class="row">
        <label class="label">发件人伪装：</label>
        <div>{{tableData.senderCheator}}</div>
      </div>

      <div class="row">
        <label class="label">收件人：</label>
        <div>{{tableData.recipients}}</div>
      </div>

      <div class="row">
        <label class="label">提交时间：</label>
        <div>{{tableData.submitTime | formatDate}}</div>
      </div>

      <div class="row">
        <label class="label">完成时间：</label>
        <div>{{tableData.finishTime | formatDate}}</div>
      </div>

      <div class="row">
        <label class="label">状态：</label>
        <div>{{tableData.status}}</div>
      </div>

    </div>

  </div>
</template>

<script>
import { emailAPI  } from '@/api'

export default {
  name: 'PublishBBSListDetail',
  data () {
    return {
      total: null,
      listParams: {
        taskId: null,
      },
      title: '消息发送任务详情',
      tableData: {}
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.listParams.taskId = to.params.taskId
    })
  },
  methods: {
    getEmailDetailList () {
      emailAPI.list(this.listParams)
        .then((res) => {
          this.tableData = res.emailMissionModel
          this.total = res.totalCount
        })
    },
  },
  mounted() {
    this.listParams.taskId = this.$route.params.taskId
    this.getEmailDetailList()
  }
}
</script>

<style lang="scss" scoped>
.content {
  background: #f1f1f1;
  border-radius: 3px;
  padding: 10px;
  box-shadow: 0 0 3px 0px #999;
  .row {
    overflow: hidden;
    margin-bottom: 20px;
  }
  .label {
    float: left;
    margin-right: 20px;
  }
}
</style>

