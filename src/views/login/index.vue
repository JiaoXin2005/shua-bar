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
        @click="handleLogin"><i class="iconfont icon-denglu"></i>登录</el-button>

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
    background: url('~assets/backgroud.png') 0 / cover fixed;
    overflow: hidden;
    .login-form {
      position: relative;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 150px auto;
      background-color: rgba(28, 65, 131, 0.5);
      border-radius: 8px;
      z-index: 1;
      &::after {
        content: '';
        position: absolute;
        left: 0; right: 0; top: 0; bottom: 0;
        background: rgba(100, 148, 231, 0.2);
        box-shadow: 0 0 6px 6px rgba(93, 135, 200, 0.2);
        z-index: -1;
      }
    }
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .icon-denglu {
      margin-right: 10px;
      vertical-align: text-top;
    }
  }
</style>
