<template>
  <div>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import ServiceBar from "./../components/ServiceBar";
import NavFooter from "./../components/NavFooter";

export default {
  name: "order",
  components: {
    ServiceBar,
    NavFooter,
  },
  data() {
    return {
      title: "",
      tip: "",
    };
  },
  mounted() {
    // this.getTitleTip();
  },
  methods: {
    getTitleTip() {
      let path = this.$route.path;
      // console.log(path);
      if (path == "/order/confirm") {
        this.title = "订单确认";
        this.tip = "请认真填写收货地址";
      } else if (path == "/order/list") {
        // 注意：这里从支付页面跳转过来时，不会进 mounted 里面，这里的 title 和 tip 不会变
        // 刷新之后才会正常显示
        this.title = "订单列表";
        this.tip = "请谨防钓鱼连接或诈骗电话，了解更多>";
      } else if (path == "/order/pay") {
        this.title = "订单支付";
        this.tip = "请谨防钓鱼连接或诈骗电话，了解更多>";
      } else {
        this.title = "订单";
        this.tip = "请前往列表页面或确认支付页面";
      }
      // console.log(this.tip);
    },
  },
};
</script>