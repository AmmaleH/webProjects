<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbat-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{ username }}</a>
          <a href="javascript:;" v-if="!username" v-on:click="login()">登录</a>
          <a href="javascript:;" v-if="username" v-on:click="logout()">退出</a>
          <a href="/#/order/list" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart" v-on:click="goToCart()"
            ><span class="icon-cart"></span>购物车{{ cartCount }}</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li
                  class="product"
                  v-for="(item, key) in miPhoneList"
                  :key="key"
                >
                  <a v-bind:href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.img" alt="" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>红米手机</span>
            <div class="children">
              <ul>
                <li
                  class="product"
                  v-for="(item, key) in redmiPhoneList"
                  :key="key"
                >
                  <a v-bind:href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.img" alt="" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) of tvProductList"
                  :key="index"
                >
                  <a v-bind:href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.img" alt="" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javasript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "nav-header",
  data() {
    return {
      miPhoneList: [],
      redmiPhoneList: [],
      tvProductList: [],
      res: "",
    };
  },
  computed: {
    // username() {
    //   return this.$store.state.username;
    // },
    // cartCount() {
    //   return this.$store.state.cartCount;
    // },
    // 利用 vuex 中的 mapState 进行解构，简化代码
    ...mapState(["username", "cartCount"]),
  },
  filters: {
    // 过滤器
    currency(val) {
      if (!val) return "0.00";
      return "￥" + val.toFixed(2) + "元";
    },
  },
  mounted() {
    this.getMiPhoneList();
    this.getRedmiPhoneList();
    this.getTvProductList();
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    logout() {
      this.axios.post("/user/logout").then(() => {
        alert("退出成功！");
        // this.$message.success("退出成功！"); // 后端退出，清空会话
        // 将userId清为""同时设置过期时间为-1（立即过期）。
        this.$cookie.set("userId", "", { expires: "-1" });
        // 清空 vuex
        this.$store.dispatch("saveUserName", "");
        this.$store.dispatch("saveCartCount", "0");
      });
      this.$router.push("/login");
    },
    getMiPhoneList() {
      this.axios.get("/user/mi").then((res) => {
        if (res.list.length > 6) {
          this.miPhoneList = res.list.slice(0, 6); // 截取前6条
        } else {
          this.miPhoneList = res.list;
        }
        console.log("NavHeader.vue_getMiPhoneList_phoneList: ");
        console.log(this.miPhoneList);
      });
    },
    getRedmiPhoneList() {
      this.axios.get("/user/mi").then((res) => {
        if (res.list.length > 6) {
          this.redmiPhoneList = res.list.slice(0, 6); // 截取前6条
        } else {
          this.redmiPhoneList = res.list;
        }
        console.log("NavHeader.vue_getRedmiPhoneList_redmiPhoneList: ");
        console.log(this.redmiPhoneList);
      });
    },
    getTvProductList() {
      this.axios.get("/user/tv").then((res) => {
        if (res.list.length > 6) {
          this.tvProductList = res.list.slice(0, 6); // 截取前6条
        } else {
          this.tvProductList = res.list;
        }
        console.log("NavHeader.vue_getProductList_productList: ");
        console.log(this.tvProductList);
      });
    },
    goToCart() {
      this.$router.push("/cart");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";

.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
        &:last-child {
          margin-right: 0;
        }
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        color: #fff;
        text-align: center;
        .icon-cart {
          @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      height: 112px;
      @include flex();

      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0px;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            transition: all 0.2s;
            background-color: #fff;
            .product {
              position: relative;
              float: left;
              width: 16.66%;
              height: 220px;
              text-align: center;
              font-size: 12px;
              line-height: 12px;
              a {
                display: inline-block;
              }
              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
              &:before {
                content: "";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child:before {
                display: none;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>


