<template>
  <div class="translate">
    <h3>翻译</h3>

    <el-form>
      <el-input type="textarea" placeholder="输入要文字" class="wd-550"
        :autosize="{ minRows: 4}"></el-input>
      <!-- s: 翻译按钮 -->
      <translate-btn :inputVal="comment" @click="handleTranslateLang"></translate-btn>
      <!-- e: 翻译按钮 -->          
      <el-input type="textarea" placeholder="翻译" class="wd-550 mgt-5"
        :autosize="{ minRows: 4}"></el-input>  
    </el-form>

  </div>
</template>

<script>
import TranslateBtn from '@/components/TranslateBtn'

export default {
  name: 'translate',
  components: {
    TranslateBtn
  },
  data () {
    return {
      comment: ''
    }
  },
  methods: {
    handleTranslateLang (val) {
      console.log(val)
    }
  }
}
</script>

<style>

</style>
