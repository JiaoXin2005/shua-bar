<template>
  <div class="create-email" >
    <h4>新建email任务</h4>
    <el-form label-width="100px">

      <el-form-item label="收件人数量:">
        <el-input class="wd-250"></el-input>
      </el-form-item>

      <el-form-item label="Hotmail:">
        <el-input class="wd-250"></el-input>
      </el-form-item>

      <el-form-item label="Gmail:">
        <el-input class="wd-250"></el-input>
      </el-form-item>

      <el-form-item label="Yahoo:">
        <el-input class="wd-250"></el-input>
      </el-form-item>

      <el-form-item label="126:">
        <el-input class="wd-250"></el-input>
      </el-form-item>

      <el-form-item label="163:">
        <el-input class="wd-250"></el-input>
      </el-form-item>

      <el-form-item label="主题:">
        <el-input class="wd-250"></el-input>
      </el-form-item>

      <el-form-item label="正文:">
        <el-input class="wd-250"></el-input>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  name: 'CreateEmail',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.create-email {
  .wd-500{
    width: 500px;
  }
}
</style>
