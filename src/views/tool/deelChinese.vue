<template>
  <div class="deel-chinese">
    <h3>汉语言处理</h3>
    <el-form>
      <el-form-item>
        <el-input type="textarea" class="wd-550" placeholder="输入的内容"
          :autosize="{minRows:4}"></el-input>
      </el-form-item>
      

      <el-form-item>
        <el-button type="primary">关键词提取</el-button>
        <el-button type="success">短语提取</el-button>
        <el-button type="warning">自动摘要</el-button>
      </el-form-item>

      <el-form-item>
        <el-input type="textarea" class="wd-550 mgt-5" placeholder="提取的内容"
          :autosize="{minRows:4}"></el-input>
      </el-form-item>

      
    </el-form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
