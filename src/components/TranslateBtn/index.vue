<template>
  <div class="translate-btn">
    <el-dropdown split-button type="primary" class="mgt-5" 
      @command="handleCommand" @click="handleTranslateLang">
      翻译成：{{lang}}
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="lang in langType" :key="lang" :command="lang">
          {{lang.split('|')[1]}}:{{lang.split('|')[0]}}
          </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'TranslateBtn',
  props: {
    inputVal: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      lang: '中文繁体',
      langType: ['zh-tw|中文繁体', 'en|英语', 'jp|日语', 'ko|韩语', 'fr|法语', 'es|西班牙语']
    }
  },
  methods: {
    handleCommand (command) {
      this.lang = command.split('|')[1]
    },
    handleTranslateLang () {
      var selectLang = this.langType.filter((item) => item.indexOf(this.lang) > 0)
      // console.log(selectLang.toString().split('|')[0])
      // console.log(this.inputVal + selectLang)
      this.$emit('click', this.inputVal + selectLang)
    }
  }
}
</script>
