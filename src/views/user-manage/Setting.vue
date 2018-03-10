<template>
  <div class="setting">
    <h3>修改密码</h3>
    <el-form label-width="80px" :model="formLabelAlign" label-position="left">
      <!-- <el-form-item label="原密码">
        <el-input v-model="formLabelAlign.password" class="wd-200"></el-input>
      </el-form-item> -->
      <el-form-item label="新密码">
        <el-input v-model="formLabelAlign.password" class="wd-200"></el-input>
      </el-form-item>
      <el-button type="primary" @click="handleConfirm">确认</el-button>
    </el-form>
  </div>
</template>

<script>
import { userAPI } from '@/api'

export default {
  name: 'Setting',
  data () {
    return {
      formLabelAlign: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    handleConfirm () {
      if (!this.formLabelAlign.password) {
        this.$message('密码不能为空')
        return
      }
      this.formLabelAlign.username = this.$store.getters.userName
      userAPI.modifyPass(this.formLabelAlign)
        .then((res) => {
          if (res.success) {
            this.$router.push('/')
          }
        })
    }
  }
}
</script>
