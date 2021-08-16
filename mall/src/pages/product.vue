<template>
  <div class="product">
    <product-param v-bind:title="product.name">
      <template v-slot:buy>
        <button class="btn" @click="buy">立即购买</button>
      </template>
    </product-param>
    <div class="content">
      <div class="item-bg">
        <img :src="product.imgs[0] || ''" alt="" />
        <div class="remark">
          <h2>{{ product.name }}</h2>
          <h3>{{ product.subtitle }}</h3>
          <ul>
            <li v-for="(item, key) in product.introduce" :key="key">
              <a href="javascript:;">{{ item }}</a
              ><span>|</span>
            </li>
          </ul>
          <div class="price">
            <span
              >￥<em>{{ product.price }}</em></span
            >
          </div>
        </div>
      </div>
      <div class="item-bg-2"><img :src="product.imgs[1] || ''" alt="" /></div>
      <div class="item-bg-3"><img :src="product.imgs[2] || ''" alt="" /></div>
      <!-- <div class="item-swiper">
        <swiper :option="swiperOption">
          <swiperSlide
            ><img src="/imgs/product/gallery-2.png" alt=""
          /></swiperSlide>
          <swiperSlide
            ><img src="/imgs/product/gallery-3.png" alt=""
          /></swiperSlide>
          <swiperSlide
            ><img src="/imgs/product/gallery-4.png" alt=""
          /></swiperSlide>
          <swiperSlide
            ><img src="/imgs/product/gallery-5.png" alt=""
          /></swiperSlide>
          <swiperSlide
            ><img src="/imgs/product/gallery-6.png" alt=""
          /></swiperSlide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <p class="desc">小米8 AI变焦双摄</p>
      </div>  -->
      <div class="item-video">
        <h2>1亿像素计算摄影<br />AI 算法加持，创作更具创意</h2>
        <p>
          1 亿像素相机画质和拍照速度，在小米 11
          上得到了进一步提升。全新视频超级夜景，进一步满足夜间创作。<br />智能影像迎来电影镜头、Vlog
          模板在线更新等众多强大易用、灵活多用的新
          功能。诸多升级，为你带来小米迄今最具创造力的影像系统。
        </p>
        <!-- transition实现视频的模态框切换 -->
        <!-- <div class="video-bg" @click="showSlide = true"></div>
        <div class="video-box">
          <div class="overlay" v-if="showSlide"></div>
          <div class="video" v-bind:class="{ slide: showSlide }">
            <span class="icon-close" v-on:click="showSlide = false"></span>
            <video
              src="/imgs/product/video.mp4"
              muted
              autoplay
              controls="controls"
            ></video>
          </div>
        </div> -->
        <!-- animation实现视频的模态框切换 -->
        <div class="video-bg" @click="showSlide = 'slideDown'"></div>
        <div class="video-box" v-show="showSlide">
          <div class="overlay"></div>
          <div class="video" v-bind:class="showSlide">
            <span class="icon-close" v-on:click="closeVideo"></span>
            <video
              src="/imgs/product/mi11.mp4"
              muted
              autoplay
              controls="controls"
            ></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/swiper-bundle.css";
import ProductParam from "./../components/ProductParam";
export default {
  name: "product",
  components: {
    // Swiper,
    // SwiperSlide,
    ProductParam,
  },
  data() {
    return {
      // 控制动画效果
      // showSlide: true, // transition实现
      showSlide: "",
      product: {
        // 因为getProductInfo()请求数据会有延迟，上面调用product.imgs[0]会报TypeError错误
        // 所以先对 imgs 赋初始值。
        imgs: ["", "", ""],
      }, // 商品信息
      swiperOption: {
        autoplay: true,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
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
      this.axios.get("/user/product").then((res) => {
        this.product = res[0] || {};
        console.log("product.vue_getProductInfo: ");
        console.log(this.product);
      });
    },
    buy() {
      let id = this.$route.params.id;
      console.log("id<-: " + id);
      id = id.slice(-1);
      console.log("id->: " + id);
      this.$router.push(`/detail/${id}`);
    },
    closeVideo() {
      this.showSlide = "slideUp";
      setTimeout(() => {
        this.showSlide = "";
      }, 600);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/mixin.scss";
.product {
  .btn {
    margin-left: 15px;
  }
  .content {
    .item-bg {
      // background: url("/imgs/product/product-bg-mi11-1.jpg") no-repeat center;
      // height: 718px;
      text-align: center;
      position: relative;
      img {
        width: 100%;
        background-size: contain;
      }
      .remark {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        h2 {
          font-size: 80px;
          padding-top: 55px;
        }
        h3 {
          font-size: 24px;
          letter-spacing: 10px;
        }
        ul {
          margin-top: 21px;
          margin-bottom: 40px;
          li {
            display: inline-block;
            a {
              font-size: 16px;
              color: #333;
            }
            span {
              margin: 0 15px;
            }
            &:last-child > span {
              display: none;
            }
          }
        }
        .price {
          font-size: 30px;
          color: #333;
          em {
            font-style: normal;
            font-size: 38px;
          }
        }
      }
    }
    .item-bg-2 {
      width: 1519px;
      img {
        width: 100%;
      }
    }
    .item-bg-3 {
      width: 1519px;
      img {
        width: 100%;
      }
    }
    // .item-swiper {
    //   margin: 36px auto 52px;
    //   .desc {
    //     font-size: 18px;
    //     color: #333;
    //     text-align: center;
    //   }
    //   img {
    //     width: 100%;
    //   }
    // }
    .item-video {
      height: 1044px;
      background-color: #070708;
      margin-bottom: 76px;
      color: #fff;
      text-align: center;
      h2 {
        font-size: 60px;
        padding-top: 82px;
        margin-bottom: 47px;
      }
      p {
        font-size: 24px;
        margin-bottom: 58px;
      }
      .video-bg {
        background: url("/imgs/product/gallery-1.png") no-repeat center;
        background-size: cover;
        width: 1226px;
        height: 540px;
        margin: 0 auto 120px;
        cursor: pointer;
      }
      .video-box {
        .overlay {
          @include position(fixed);
          background-color: #333;
          opacity: 0.4;
          z-index: 10;
        }
        @keyframes slideDown {
          from {
            top: -50%;
            opacity: 0;
          }
          to {
            top: 50%;
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            top: 50%;
            opacity: 1;
          }
          to {
            top: -50%;
            opacity: 0;
          }
        }
        .video {
          position: fixed;
          top: -50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          width: 1000px;
          height: 536px;
          opacity: 1;
          // transition实现
          // transition: top 0.6s, opacity 0.6s;
          // &.slide {
          //   top: 50%;
          //   opacity: 1;
          // }
          // animation动画实现
          &.slideDown {
            animation: slideDown 0.6s linear;
            top: 50%; // 动画结束时，video的位置
          }
          &.slideUp {
            animation: slideUp 0.6s linear;
          }
          .icon-close {
            position: absolute;
            top: 20px;
            right: 20px;
            @include bgImg(20px, 20px, "/imgs/icon-close.png");
            cursor: pointer;
            z-index: 11;
          }
          video {
            width: 100%;
            height: 100%;
            object-fit: cover; // 此属性相当于 background-color
            outline: none; // 去除video的自带边框
          }
        }
      }
    }
  }
}
</style>