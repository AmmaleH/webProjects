<template>
  <div class="order-pay">
    <order-header title="订单支付">
      <template v-slot:tips>
        <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-wrap">
          <div class="item-order">
            <div class="icon-succ"></div>
            <div class="order-info">
              <h2>订单提交成功！去付款咯~</h2>
              <p>
                请在<span> {{ minuteRemain }} 分 {{ secondRemain }} 秒</span
                >内完成支付，超时后将取消订单
              </p>
              <p>收货信息：{{ addressInfo }}</p>
            </div>
            <div class="order-total">
              <p>
                应付总额：<span> {{ totalPrice }} </span> 元
              </p>
              <p>
                订单详情<em
                  class="icon-down"
                  :class="{ up: showDetail }"
                  @click="showDetail = !showDetail"
                ></em>
              </p>
            </div>
          </div>
          <div class="item-detail" v-if="showDetail">
            <div class="item">
              <div class="detail-title">订单号：</div>
              <div class="detail-info theme-color">{{ orderId }}</div>
            </div>
            <div class="item">
              <div class="detail-title">收货信息：</div>
              <div class="detail-info">{{ addressInfo }}</div>
            </div>
            <div class="item good">
              <div class="detail-title">商品名称：</div>
              <div class="detail-info">
                <ul>
                  <li v-for="(item, index) in orderDetail" :key="index">
                    <img v-lazy="item.productMainImage" alt="" />{{
                      item.productName
                    }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="item">
              <div class="detail-title">发票信息：</div>
              <div class="detail-info">电子发票 个人</div>
            </div>
          </div>
        </div>
        <div class="item-pay">
          <h3>请选择以下方式付款</h3>
          <div class="pay-way">
            <p>支付平台</p>
            <div
              class="pay pay-ali"
              :class="{ checked: payType == 1 }"
              @click="paySubmit(1)"
            ></div>
            <div
              class="pay pay-wechat"
              :class="{ checked: payType == 2 }"
              @click="paySubmit(2)"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <scan-pay-code
      v-if="showWechatPay"
      @close="closePayModal"
      :img="'/imgs/pay/wechatPay-hjl.jpg'"
    ></scan-pay-code>
    <modal
      title="支付确认"
      btnType="3"
      :showModal="showPayModal"
      sureText="查看订单"
      cancelText="未支付"
      @submit="goOrderList"
      @cancel="showPayModal = false"
    >
      <template v-slot:body>
        <p>您确认是否完成支付？</p>
      </template>
    </modal>
  </div>
</template>

<script>
import QRcode from "qrcode";
import ScanPayCode from "./../components/ScanPayCode.vue";
import Modal from "./../components/Modal";
import OrderHeader from "./../components/OrderHeader";
export default {
  name: "order-pay",
  components: {
    ScanPayCode,
    Modal,
    OrderHeader,
  },
  data() {
    return {
      // orderId: this.$route.query.orderId, // 订单号
      minuteRemain: 30, // 订单支付剩余时间（分）
      secondRemain: 60, // 订单支付剩余时间（秒）
      orderId: 0,
      addressInfo: "", // 收货人地址
      orderDetail: [], // 订单详情，包含商品列表
      totalPrice: 0, // 订单应付总额
      showDetail: false, // 是否显示订单详情
      payType: 0, // 支付类型
      showWechatPay: false, // 是否打开微信支付弹框
      payImg: "", // 微信支付二维码图片
      showPayModal: false, // 是否显示二次支付确认弹框
      interval: "", // 定时器
    };
  },
  mounted() {
    this.getOrderDetail();
    this.getTimeRemain();
  },
  methods: {
    getTimeRemain() {
      var timeBegin = Date.now(),
        time = 30 * 60 * 1000;
      var interval = setInterval(() => {
        let timePass = Date.now() - timeBegin;
        if (timePass < 1000) clearInterval(interval);
        this.minuteRemain = Math.floor((time - timePass) / 60000);
        this.secondRemain = Math.floor(((time - timePass) / 1000) % 60);
      }, 1000);
    },
    getOrderDetail() {
      // this.axios.get(`/orders/${this.orderId}`).then((res) => {
      //   let item = res.shippingVo;
      //   this.addressInfo = `${item.receiverName} ${item.receiverMobile} ${item.receiverProvince} ${item.receiverCity} ${item.receiverAddress}`;
      //   this.orderDetail = res.orderItemVoList;
      // });
      this.orderId = (Math.random() * 1000000).toFixed(0);
      this.axios.get("/user/shippings").then((res) => {
        let item = res.list[1];
        console.log(item);
        this.addressInfo = `${item.receiverName} ${item.receiverMobile} ${item.receiverProvince} ${item.receiverCity} ${item.receiverDistrict} ${item.receiverAddress}`;
      });
      this.axios.get("/user/paycart").then((res) => {
        this.orderDetail = res.cartProductVoList; // 订单中包含的商品(数组)
        // 订单总价格
        this.totalPrice = this.orderDetail.reduce((pre, cur) => {
          return pre + cur.productTotalPrice;
        }, 0);
        console.log(this.totalPrice);
        console.log(this.addressInfo);
      });
    },

    paySubmit(payType) {
      if (payType == 1) {
        window.open("/#/order/alipay?orderId=" + this.orderId, "_blank");
      } else if (payType == 2) {
        this.showWechatPay = true;
        this.axios
          .post("/pay", {
            orderId: this.orderId,
            orderName: "Vue高仿小米商城",
            amount: 0.01,
            payType: 2, // 1.支付宝 2.微信
          })
          .then((res) => {
            // 微信支付返回的 content 是支付链接，转换成二维码即可扫码支付。
            QRcode.toDataURL(res.content)
              .then((url) => {
                this.showWechatPay = true;
                this.payImg = url;
                this.loopOrderState();
              })
              .catch(() => {
                // console.error(err);
                this.$message.error("微信二维码生成失败，请稍后重试！");
              });
          });
      }
    },
    // 关闭微信支付页面弹框，并打开确认弹框
    closePayModal() {
      this.showWechatPay = false;
      this.showPayModal = true;
      clearInterval(this.interval);
    },
    // 获取当前订单状态的两种方法： 1.轮训  2.socket，后端发现订单已经支付时，推送一条消息给前端提醒
    // 轮训当前订单状态
    // 订单状态：0-已取消，10-未付款，20-已付款，40-已发货，50-交易成功，60-交易关闭
    loopOrderState() {
      this.interval = setInterval(() => {
        this.axios.get(`/order/${this.orderId}`).then((res) => {
          if (res.status == 20) {
            clearInterval(this.interval);
            this.goOrderList();
          }
        });
      }, 500);
    },
    goOrderList() {
      this.$router.push("/order/list");
    },
  },
};
</script>

<style lang="scss">
.order-pay {
  .wrapper {
    background-color: #f5f5f5;
    padding-top: 30px;
    padding-bottom: 61px;
    .order-wrap {
      padding: 62px 50px;
      background-color: #fff;
      font-size: 14px;
      margin-bottom: 30px;
      .item-order {
        display: flex;
        align-items: center;
        icon-succ {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: url("/imgs/icon-gou.png") #80c58a no-repeat center;
          background-size: 60px;
          margin-right: 40px;
        }
        .order-info {
          margin-right: 248px;
          h2 {
            font-size: 24px;
            color: #333;
            margin-bottom: 20px;
          }
          p {
            color: #666;
            span {
              color: #ff6700;
            }
          }
        }
        .order-total {
          & > p:first-child {
            margin-bottom: 30px;
          }
          span {
            font-size: 28px;
            color: #ff6700;
          }
          .icon-down {
            display: inline-block;
            width: 14px;
            height: 10px;
            background: url("/imgs/icon-down.png") no-repeat center;
            background-size: contain;
            margin-left: 9px;
            transition: all 0.5s;
            cursor: pointer;
            &.up {
              transform: rotate(180deg);
            }
          }
          // .icon-up {
          //   transform: rotate(180deg);
          // }
        }
      }
      .item-detail {
        border-top: 1px solid #d7d7d7;
        padding-top: 47px;
        padding-left: 130px;
        font-size: 14px;
        margin-top: 45px;
        .item {
          margin-bottom: 19px;
          .detail-title {
            float: left;
            width: 100px;
          }
          .detail-info {
            display: inline-block;
            img {
              width: 30px;
              vertical-align: middle;
              margin-right: 20px;
            }
          }
        }
      }
    }
    .item-pay {
      padding: 26px 50px 72px;
      background-color: #fff;
      color: #333;
      h3 {
        font-size: 20px;
        font-weight: 200;
        color: #333;
        padding-bottom: 24px;
        border-bottom: 1px solid #d7d7d7;
        margin-bottom: 26px;
      }
      .pay-way {
        font-size: 18px;
        .pay {
          display: inline-block;
          width: 188px;
          height: 64px;
          border: 1px solid #d7d7d7;
          cursor: pointer;
          &:last-child {
            margin-left: 20px;
          }
          &.checked {
            border: 1px solid #ff6700;
          }
        }
        .pay-ali {
          background: url("/imgs/pay/icon-ali.png") no-repeat center;
          background-size: 103px 38px;
          margin-top: 19px;
        }
        .pay-wechat {
          background: url("/imgs/pay/icon-wechat.png") no-repeat center;
          background-size: 103px 38px;
        }
      }
    }
  }
}
</style>