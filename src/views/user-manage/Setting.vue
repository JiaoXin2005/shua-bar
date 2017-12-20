<template>
  <div class="setting">
    <h3>修改密码</h3>
    <el-form label-width="80px" :model="formLabelAlign" label-position="left">
      <el-form-item label="原密码">
        <el-input v-model="formLabelAlign.password" class="wd-200"></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="formLabelAlign.password" class="wd-200"></el-input>
      </el-form-item>
      <el-button type="primary">确认</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Setting',
  data () {
    return {
      formLabelAlign: {
        password: '',
      }
    }
  }
}
</script>
