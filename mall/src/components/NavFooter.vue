<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://www.miui.com">MIUI</a><span>|</span>
      <a href="https://home.mi.com/index.html">米家</a><span>|</span>
      <a href="https://www.miliao.com">米聊</a><span>|</span>
      <a href="https://privacy.mi.com/all/zh_CN">小米集团隐私政策</a
      ><span>|</span>
      <a href="https://www.mi.com/about/user-agreement">小米商城用户协议</a
      ><span>|</span>
      <a href="https://static.mi.com/feedback/">问题反馈</a>
    </div>
    <div class="copyright">
      Copyright @2021 <span class="domain">mi.future.com</span> All Rights
      Reserved
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-footer",
};
</script>
<style lang = "scss" scoped>
@import "./../assets/scss/config.scss";
.footer {
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: #333;
  color: #999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999;
      display: inline-block;
      position: relative;
    }
    span {
      margin: 0 8px;
    }
  }
  .copyright {
    .domain {
      color: #f60;
    }
  }
}
</style>