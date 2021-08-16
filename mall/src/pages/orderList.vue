<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tips>
        <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <loading v-if="loading"></loading>
          <div class="order" v-for="(order, index) in list" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{ order.createTime }} <span>|</span> {{ username }}
                <span>|</span> 订单号： {{ order.orderNo }} <span>|</span>
                {{ order.paymentTypeDesc }} <span>|</span>
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{ order.payment }}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div
                  class="good-list"
                  v-for="(item, i) in order.orderItemVoList"
                  :key="i"
                >
                  <div class="good-img">
                    <img v-lazy="item.productImage" alt="" />
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{ item.productName }}</div>
                    <div class="p-money">
                      {{ item.totalPrice }} X {{ item.quantity }} 元
                    </div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="order.status == 20">
                <a href="javascript:;">{{ order.statusDesc }} </a>
              </div>
              <div class="good-state fr" v-else @click="goPay(order.orderNo)">
                <a href="javascript:;"> {{ order.statusDesc }}</a>
              </div>
            </div>
          </div>
          <el-pagination
            v-if="false"
            class="pagination"
            background
            layout="prev, pager, next"
            :pageSize="pageSize"
            :total="total"
            @current-change="handleChange"
          >
          </el-pagination>
          <div class="load-more" v-if="false">
            <el-button type="primary" :loading="loading" @click="loadMore"
              >加载更多</el-button
            >
          </div>
          <div
            class="scroll-more"
            v-infinite-scroll="scrollMore"
            infinite-scroll-disabled="busy"
            infinite-scroll-distance="410"
            v-if="true"
          >
            <img
              src="/imgs/loading-svg/loading-spinning-bubbles.svg"
              alt=""
              v-show="loading"
            />
          </div>
          <no-data v-if="!loading && !list.length"></no-data>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderHeader from "./../components/OrderHeader";
import Loading from "./../components/Loading";
import NoData from "./../components/NoData";
import { Pagination, Button } from "element-ui";
import infiniteScroll from "vue-infinite-scroll";
import { mapState } from "vuex";
export default {
  name: "order-list",
  components: {
    OrderHeader,
    Loading,
    NoData,
    [Pagination.name]: Pagination,
    [Button.name]: Button,
  },
  directives: {
    infiniteScroll,
  },
  data() {
    return {
      loading: false,
      list: [],
      pageSize: 2,
      pageNum: 1,
      total: 0,
      showNextPage: true, // 加载更多：是否显示按钮
      busy: false, // 滚动加载，是否触发
    };
  },
  computed: {
    ...mapState(["username"]),
  },
  mounted() {
    this.getOrderList();
  },
  methods: {
    getOrderList() {
      this.loading = true;
      this.axios.get("/user/orderlist").then((res) => {
        this.list = res.list;
        this.loading = false;
        this.total = res.total;
        // 计算每个单子的总价
        this.list.forEach((ele) => {
          ele.payment = ele.orderItemVoList.reduce((pre, cur) => {
            return pre + cur.totalPrice;
          }, 0);
          ele.payment = ele.payment.toFixed(2);
        });
      });
    },

    goPay(orderNo) {
      // this.$router.push("/order/pay");
      // name + query 传参
      // this.$router.push({
      //   name: "order-pay",
      //   query: {
      //     orderNo: orderNo,
      //   }
      // })
      // query 传参会将参数放到 url 中
      this.$router.push({
        path: "/order/pay",
        query: {
          orderNo: orderNo,
        },
      });
    },
    handleChange(pageNum) {
      this.PageNum = pageNum;
      this.getOrderList();
    },
    loadMore() {
      this.pageNum++;
      this.getOrderList();
    },
    // 第三种方法 滚动加载（通过 npm 插件实现）
    scrollMore() {
      this.busy = true;
      setTimeout(() => {
        this.pageNum++;
        this.getOrderList();
      }, 500);
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.order-list {
  .wrapper {
    background-color: $colorJ;
    padding-top: 33px;
    padding-bottom: 110px;
    .order-box {
      .order {
        @include border();
        background-color: $colorG;
        margin-bottom: 31px;
        &:last-child {
          margin-bottom: 0;
        }
        .order-title {
          @include height(74px);
          background-color: $colorK;
          padding: 0 43px;
          font-size: 16px;
          color: $colorC;
          .item-info {
            span {
              margin: 0 9px;
            }
          }
          .money {
            font-size: 26px;
            color: $colorB;
          }
        }
        .order-content {
          padding: 0 43px;
          .good-box {
            width: 88%;
            .good-list {
              display: flex;
              align-items: center;
              height: 145px;
              .good-img {
                width: 112px;
                img {
                  width: 100%;
                }
              }
              .good-name {
                font-size: 20px;
                color: $colorB;
              }
            }
          }
          .good-state {
            @include height(145px);
            font-size: 20px;
            color: $colorA;
            a {
              color: $colorA;
            }
          }
        }
      }
      .pagination {
        text-align: right;
      }
      .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #ff6600;
      }
      .el-button-primary {
        background-color: #ff6600;
        border-color: #ff6600;
      }
      .load-more,
      .scroll-more {
        text-align: center;
      }
    }
  }
}
</style>