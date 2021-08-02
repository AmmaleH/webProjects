<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from "./storage/index";

export default {
  name: "App",
  components: {},
  data() {
    return {
      res: {},
    };
  },
  mounted() {
    // storage.setItem("abb", 1);
    // storage.setItem("abc", { a: 1 }, "user");
    // storage.setItem("abb_a", { fi: 1 }, "user");
    // storage.setItem("abc", {});
    // storage.setItem("abc_a", { fc: 2 }, "abc");
    // console.log(storage.getItem("a", "user"));
    // storage.clear("abc");
    //
    // 本地加载请求静态json文件的形式
    // url地址中需要在 main.js 里把 axios.default.baseURL = '/api'; 注释掉，不然会在url前添加上api
    // public 为根目录
    // this.axios.get("/mock/user/login.json").then((res) => {
    //   this.res = res;
    //   console.log(this);
    //   console.log(res);
    // });
    //
    // 通过 easy-mock 平台实现数据mock
    // this.axios.get('/user/login').then((res => {
    //   this.res = res;
    // }))
    //
    // mockjs （js实现的，可以拦截数据、请求）
    // 没有发生真实的请求，在发请求的时候在代码层面就拦截到了，直接返回数据
    this.axios.get("/user/login").then((res) => {
      this.res = res;
      console.log(res);
    });
  },
};
</script>

<style lang="scss">
/* 全局引用 */
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
@import "./assets/scss/mixin.scss";
@import "./assets/scss/modal.scss";
</style>
