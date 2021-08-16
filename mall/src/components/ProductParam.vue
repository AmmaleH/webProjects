<template>
  <div class="nav-bar" v-bind:class="{ is_fixed: isFixed }">
    <div class="container">
      <div class="pro-title">{{ title }}</div>
      <div class="pro-param">
        <a href="javascript:;">概述</a><span>|</span>
        <a href="javascript:;">参数</a><span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nac-bar",
  props: {
    title: String,
  },
  data() {
    return {
      isFixed: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.initHeight);
  },
  methods: {
    initHeight() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > 152 + 68 ? true : false;
    },
  },
  distroyed() {
    window.removeEventListener("scroll", this.initHeight, false); //false为冒泡，默认为true(捕获)
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
.nav-bar {
  height: 70px;
  line-height: 70px;
  border-top: 1px solid $colorH;
  border-bottom: 1px solid $colorH;
  background-color: #fff;
  // box-shadow: 0 5px 5px $colorE;
  z-index: 10;
  // transition: all 2.6s;  // 无效果
  &.is_fixed {
    position: fixed;
    top: 0;
    width: 100%;
  }
  .container {
    @include flex();
    .pro-title {
      font-size: $fontH;
      color: $colorB;
      font-weight: bold;
    }
    .pro-param {
      font-size: $fontJ;
      span {
        margin: 0 10px;
      }
      a {
        color: $colorC;
      }
    }
  }
}
</style>