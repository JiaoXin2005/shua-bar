<template>
  <div class="reply-comment">
 
    <el-dialog title="新建评论回复任务" :visible.sync="dialogFormVisible">
      <el-form  label-width="80px" class="wd-460">
        <el-form-item label="文章链接">

        <el-form-item v-for="(link, index) in links" :key="index">
          <el-input type="textarea" v-model="link.value" class="wd-250"></el-input>
          <el-button type="danger" @click="deleteLink(index)" v-if="links.length !== 1">删除</el-button>
          <el-button type="primary" @click="addLink()" v-if="index == links.length-1">新增</el-button>
        </el-form-item>

        </el-form-item>
        <el-form-item label="评论内容">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="评论数量">
          <el-input type="input" class="wd-200"></el-input>
        </el-form-item>
    
        <el-form-item>
          <el-button type="primary" >立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>


  </div>
</template>

<script>
export default {
  name: 'ReplyComment',
  data () {
    return {
      links: [{
        value: ''
      }],
      dialogFormVisible: false
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
    }
  }
}
</script>
