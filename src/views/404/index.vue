<template>
  <div class="page404">
    <div class="img-wrapper">
      <img src="~assets/404.png">
    </div>
      <div class="bullshit">
        <div class="bullshit__oops">OOPS!</div>
        <div class="bullshit__info">请检查您输入的网址是否正确，请点击以下按钮返回主页或者发送错误报告</div>
        <a href="/" class="bullshit__return-home">返回首页</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'page404'
}
</script>

<style lang="scss">
.page404{
  .img-wrapper{
    text-align: center;
    img {
      width: 650px;
      margin-top: 60px;
    }
  }
  .bullshit {
    position: relative;
    width: 300px;
    margin: 0 auto;
    overflow: hidden;
    text-align: center;
    &__oops {
      font-size: 32px;
      font-weight: bold;
      line-height: 40px;
      color: #454b4e;
      opacity: 0;
      margin-bottom: 20px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
    &__info {
      font-size: 13px;
      line-height: 21px;
      color: grey;
      opacity: 0;
      margin-bottom: 30px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.2s;
      animation-fill-mode: forwards;
    }
    &__return-home {
      display: block;
      margin: 0 auto;
      width: 110px;
      height: 36px;
      background: #454b4e;
      border-radius: 100px;
      text-align: center;
      color: #ffffff;
      opacity: 0;
      font-size: 14px;
      line-height: 36px;
      cursor: pointer;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }
    @keyframes slideUp {
      0% {
        transform: translateY(60px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}
</style>
