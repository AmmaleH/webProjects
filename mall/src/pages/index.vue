<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机电话卡</a>
              <div class="children">
                <ul v-for="(item, i) in menuList" :key="i">
                  <li v-for="(sub, j) in item" :key="j">
                    <a href="sub ? '/#/product/' + sub.id : ''">
                      <img
                        v-bind:src="sub ? sub.img : '/imgs/item-box-1.png'"
                        alt=""
                      />
                      {{ sub ? sub.name : "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper v-bind:option="swiperOption" :pagination="{ clickable: true }">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a v-bind:href="'/#/product/' + item.id"
              ><img v-bind:src="item.img" alt=""
            /></a>
          </swiper-slide>
          <!-- 分页器、左右箭头 -->
          <!-- slot:插槽，自动渲染 -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a
          v-bind:href="'/#/product' + item.id"
          v-for="(item, index) in adsList"
          :key="index"
        >
          <img v-lazy="item.img" alt="" />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'imgs/banner-1.png'" alt="" />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35"
              ><img v-lazy="'/imgs/mix-alpha.jpg'" alt=""
            /></a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr, i) in phoneList" :key="i">
              <div class="item" v-for="(item, j) in arr" :key="j">
                <span v-bind:class="{ 'new-pro': j % 2 === 0 }">{{
                  item.category
                }}</span>
                <div class="item-img">
                  <img v-lazy="item.img" alt="" />
                </div>
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.introduce }}</p>
                  <p class="price" @click="addCart(item.id)">
                    {{ item.price }}元起
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <service-bar></service-bar>
    <modal
      title="提示"
      sureText="查看购物车"
      btnType="1"
      modalType="middle"
      v-bind:showModal="showModal"
      v-on:submit="goToCart()"
      @cancel="showModal = false"
    >
      <!-- 插槽 -->
      <template v-slot:body>
        <p>商品添加成功！</p>
      </template>
    </modal>
  </div>
</template>

<script>
import ServiceBar from "./../components/ServiceBar.vue";
import Modal from "./../components/Modal";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css"; // 自动去 node_modules 中找

// import SwiperCore, { Navigation, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/vue";
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
// SwiperCore.use([Navigation, Pagination]);
export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
    Modal,
  },
  data() {
    return {
      swiperOption: {
        autoplay: true, // 自动播放
        // loop: true, // 循环点击
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      slideList: [
        {
          id: "42",
          img: "imgs/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "imgs/slider/slide-2.jpg",
        },
        {
          id: "46",
          img: "imgs/slider/slide-3.jpg",
        },
        {
          id: "42",
          img: "imgs/slider/slide-4.jpg",
        },
        {
          id: "42",
          img: "imgs/slider/slide-5.jpg",
        },
      ],
      menuList: [
        [
          {
            id: 30,
            img: "imgs/item-box-1.png",
            name: "小米CC9",
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版",
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro",
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区",
          },
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png",
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg",
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png",
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg",
        },
      ],
      phoneList: [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ],
      showModal: false,
      tempId: 0,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.axios.get("/user/miPhone").then((res) => {
        this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
        console.log(this.phoneList);
      });
    },
    addCart(id) {
      this.showModal = true;
      this.tempId = id;
      // this.axios
      //   .post("/carts", {
      //     productId: id,
      //     selected: true,
      //   })
      //   .then((res) => {})
      //   .catch(() => {
      //     this.showModal = true;
      //   });
    },
    goToCart() {
      this.$router.push("/cart");
    },
  },
};
</script>

<style lang = "scss" scoped>
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
@import "./../assets/scss/base.scss";
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding: 26px 0;
      /* 不能用 opacity 设置透明度，会使背景颜色和文字、图标都透明化 */
      /* background-color: #55585a7a; */
      background-color: #55585a7a;
      box-sizing: border-box;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            position: relative;
            display: block;
            font-size: 16px;
            color: #fff;
            padding-left: 30px;
            &:after {
              position: absolute;
              top: 17.5px;
              right: 30px;
              content: " ";
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 451px;
            /* background-color: #fff; */
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            ul {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              height: 75px;
              /* 背景色要加到这里，加到 .children 里面会覆盖图片和文字，没搞明白 */
              background-color: #fff;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }
              a {
                color: $colorB;
                font-size: 14px;
                margin-right: 15px;
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
              }
              .price {
                color: #f20a0a;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
                  content: "";
                  margin-left: 8px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
    }
  }
  .banner {
    margin-bottom: 50px;
  }
  .product-box {
    background-color: $colorJ;
    padding-top: 30px 0 50px;
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-left: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            position: relative;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              line-height: 24px;
              font-size: $fontJ;
              color: $colorG;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                /* width: 100%; */
                height: 195px;
              }
            }
            .item-info {
              h3 {
                color: $colorB;
                font-size: $fontJ;
                line-height: $fontJ;
                font-weight: bold;
              }
              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
                  content: "";
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>