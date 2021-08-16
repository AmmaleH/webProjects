<template>
  <div class="ali-pay">
    <loading v-show="showLoading"></loading>
    <!-- 支付宝的接口会返回一段 html 源码 -->
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
import Loading from "./../components/Loading";
export default {
  name: "alipay",
  components: {
    Loading,
  },
  data() {
    return {
      orderId: this.$route.query.orderId,
      content: "",
      showLoading: true,
    };
  },
  mounted() {
    this.paySubmit();
  },
  methods: {
    paySubmit() {
      this.axios
        .post("/pay", {
          orderId: this.orderId,
          orderName: "Vue高仿小米商场",
          amount: 0.01, // 单位 元
          payType: 1, // 1.支付宝 2.微信
        })
        .then((res) => {
          // 支付宝支付的返回的 content 是 html 源码，渲染到页面上后自动跳转到支付页面
          // <form id="bestPayForm" name="punchot_form" method="post" action="http://opebapi.alipay.com/...">...</form>
          this.content = res.content;
          // v-html 赋值会有一定时间，在一定延迟之后再 submit
          setTimeout(() => {
            // document.forms 获取所有表单
            // 这个地址（form表单中的action字段）是支付宝有一层网关，网关拿到签名，重定向到收银台，进行扫码支付。
            document.forms[0].submit();
          }, 100);
        });
      // this.showLoading = false;
    },
  },
};
</script>