<template>
  <div class="login-container">
    <el-form class="card-box login-form" ref="loginForm" label-position="left">
      <h3 class="title">系统登录</h3>

      <el-form-item prop="username">
        <el-input name="username" type="text" placeholder="账号" />
      </el-form-item>

      <el-form-item prop="password">
        <el-input  type="password" name="password" placeholder="密码"
          @keyup.enter.native="handleLogin" />
      </el-form-item>

      <el-button type="primary" style="width:100%;margin-bottom:30px;"
        @click="handleLogin">登录</el-button>

    </el-form>
  </div>
</template>

<script>
import { setToken } from '@/utils/auth'

export default {
  name: 'login',
  methods: {
    handleLogin () {
      setToken('xaxaxax')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
  @import "src/styles/mixin.scss";
  $bg:#526886;
  $light_gray:#eee;

  .login-container {
    @include relative;
    // height: 100vh;
    background-color: $bg;
    overflow: hidden;
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
</style>
