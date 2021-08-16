<template>
  <div class="detail">
    <product-param v-bind:title="product.name"></product-param>
    <div class="wrapper">
      <div class="container clearfix">
        <div class="swiper">
          <swiper :option="swiperOption">
            <swiper-slide><img :src="product.imgs[0]" alt="" /></swiper-slide>
            <swiper-slide><img :src="product.imgs[1]" alt="" /></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="content">
          <h2 class="item-title">{{ product.name }}</h2>
          <p class="item-info">
            相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS /
            骁龙845处理器 / 红<br />外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏
          </p>
          <div class="delivery">小米自营</div>
          <div class="item-price">
            {{ product.price }}元<span class="del">1999元</span>
          </div>
          <div class="line"></div>
          <div class="item-addr">
            <i class="icon-lo"></i>
            <div class="addr">北京 北京市 朝阳区 安定门街道</div>
            <div class="stock">有现货</div>
          </div>
          <div class="item-version clearfix">
            <h2>选择版本</h2>
            <div
              class="phone fl"
              v-bind:class="{ checked: version == 1 }"
              @click="version = 1"
            >
              6GB+64GB 全网通
            </div>
            <div
              class="phone fr"
              v-bind:class="{ checked: version == 2 }"
              v-on:click="version = 2"
            >
              4GB+64GB 移动4G
            </div>
          </div>
          <div class="item-color">
            <h2>选择颜色</h2>
            <div class="phone checked">
              <span class="color">深空灰</span>
            </div>
          </div>
          <div class="item-total">
            <div class="phone-info clearfix">
              <div class="fl">
                {{ product.name }} {{ version == 1 ? "全网通" : "移动4G" }}
              </div>
              <div class="fr">{{ product.price }}元</div>
            </div>
            <div class="phone-total">总计：{{ product.price }} 元</div>
          </div>
          <div class="btn-group">
            <a href="javascipt:;" class="btn btn-huge fl" v-on:click="addCart"
              >加入购物车</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="price-info">
      <div class="container">
        <h2>价格说明</h2>
        <div class="desc">
          <img src="/imgs/detail/item-price.jpeg" alt="" />
        </div>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ProductParam from "./../components/ProductParam";
import ServiceBar from "./../components/ServiceBar";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
  name: "detail",
  components: {
    ProductParam,
    ServiceBar,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      id: this.$route.params.id, // 获取商品ID
      err: "",
      version: 1, // 商品版本切换
      product: {
        // 商品信息
        imgs: ["", "", "", ""],
      },
      swiperOption: {
        sutoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  mounted() {
    this.getProductInfo();
  },
  methods: {
    getProductInfo() {
      this.axios.get("/user/detail").then((res) => {
        this.product = res;
        console.log("detail.vue_getProductInfo: ");
        console.log(this.product);
      });
    },
    addCart() {
      this.axios
        .post("/cart", {
          productId: this.id,
          selected: true,
        })
        .then((res = { cartProductVoList: [] }) => {
          // vuex派发购物车商品数量
          // cartProductVoList 为购物车商品构成的数组
          this.$store.dispatch("saveCartCount", res.cartTotalQuantity);
          // 这里需要在 main.js 中的拦截器中，遇到状态码为10时，最后返回一个Promise.reject()
          // 不然会跳转到 login 页面之后，还会执行下面的语句，又跳转到 cart 页面了。
          this.$router.push("/cart");
        })
        .catch((msg) => {
          console.log(msg);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/base.scss";
.detail {
  .wrapper {
    .swiper {
      float: left;
      width: 550px;
      height: 617px;
      margin-top: 5px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .content {
      float: right;
      width: 584px;
      height: 870px;
      .item-title {
        font-size: 28px;
        padding-top: 30px;
        padding-bottom: 16px;
        height: 26px;
      }
      .item-info {
        font-size: 14px;
        height: 36px;
      }
      .delivery {
        font-size: 16px;
        color: #ff6700;
        margin-top: 26px;
        margin-bottom: 14px;
        height: 15px;
      }
      .item-price {
        font-size: 20px;
        color: #ff6700;
        height: 19px;
        .del {
          font-size: 16px;
          color: #999;
          margin-left: 10px;
          text-decoration: line-through;
        }
      }
      .line {
        height: 0;
        margin-top: 25px;
        margin-bottom: 28px;
        border-top: 1px solid #e5e5e5;
      }
      .item-addr {
        height: 108px;
        background-color: #fafafa;
        border: 1px solid #e5e5e5;
        box-sizing: border-box;
        padding-top: 31px;
        padding-left: 64px;
        font-size: 14px;
        line-height: 14px;
        position: relative;
        .icon-loc {
          position: absolute;
          top: 27px;
          left: 34px;
          @include bgImg(20px, 20px, "/imgs/detail/icon-loc.png");
        }
        .addr {
          color: #666;
        }
        .stock {
          margin-top: 15px;
          color: #ff6700;
        }
      }
      .item-version,
      .item-color {
        margin-top: 30px;
        h2 {
          font-size: 18px;
          margin-bottom: 20px;
        }
      }
      .item-version,
      .item-color {
        .phone {
          width: 287px;
          height: 50px;
          line-height: 50px;
          font-size: 16px;
          color: #333;
          border: 1px solid #e5e5e5;
          box-sizing: border-box; // IE盒模型
          text-align: center;
          cursor: pointer;
          // span {
          //   color: #666;
          //   margin-left: 15px;
          // }
          .color {
            display: inline-block;
            color: #666;
          }
          &.checked {
            border: 1px solid #f60;
            color: #f60;
          }
        }
      }
      .item-total {
        height: 108px;
        background: #fafafa;
        padding: 24px 23px 29px 30px;
        font-size: 14px;
        margin-top: 50px;
        margin-bottom: 30px;
        box-sizing: border-box;
        .phone-total {
          font-size: 24px;
          color: #f60;
          margin-top: 18px;
        }
      }
    }
  }
  .price-info {
    background-color: #f3f3f3;
    height: 340px;
    h2 {
      font-size: 24px;
      color: #333;
      padding-top: 38px;
      margin-bottom: 30px;
    }
  }
}
</style>