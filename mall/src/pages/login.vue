<template>
  <div class="login">
    <div class="container">
      <a href="/#/index"><img src="/imgs/login-logo.png" alt="" /></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="logo-form">
          <h3>
            <span class="checked">账号登录</span><span class="sep-line">|</span
            ><span>扫码</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入账号" v-model="username" />
          </div>
          <div class="input">
            <input type="text" placeholder="请输入密码" v-model="password" />
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" v-on:click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" v-on:click="register">手机短信登录 / 注册</div>
            <div class="reg">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="http://www.miliao.com/" target="_blank">米聊</a><span>|</span>
        <a href="https://home.mi.com/index.html" target="_blank">米家</a
        ><span>|</span> <a href="https://home.miui.com/" target="_blank">miui</a
        ><span>|</span>
        <a href="https://github.com/AmmaleH/" target="_blank">个人github</a>
      </div>
      <p class="copyright">
        Copyright ©2019 mi.futurefe.com All Rights Reserved.
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "login",
  // data: {} 是全局声明，会造成页面之间、组件之间的数据的串用
  data() {
    // 局部的对象声明
    return {
      username: "",
      password: "",
      userId: "", // 每次把cookie的userId传给后端
    };
  },
  methods: {
    // 登录
    login() {
      let { username, password } = this; // 解构赋值，获取用户密码
      this.axios
        .post("/user/login", {
          username,
          password,
        })
        .then((res) => {
          console.log("login.vue_res: ");
          console.log(res);
          this.$cookie.set("userId", res.id, { expires: "1M" }); // 设置cookie为一个月过期
          // this.$store.dispatch("saveUserName", res.username);
          // 通过...mapActions解构，有多个需要进行dispatch时，可以简化代码。
          this.saveUserName(res.username);
          this.$router.push("/index");
        })
        .catch((res) => {
          console.log(res.msg);
        });
    },
    ...mapActions(["saveUserName"]),
    // 注册
    register() {
      this.axios
        .post("/user/login", {
          username: "admin1",
          password: "admin1",
          email: "admin1@163.com",
        })
        .then(() => {
          alert("注册成功");
        })
        .catch((res) => {
          console.log(res.msg);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  & > .container {
    height: 113px;
    img {
      width: auto;
      height: 100%;
    }
  }
  .wrapper {
    background: url("/imgs/login-bg.jpg") no-repeat center;
    .container {
      height: 576px;
      position: relative;
      .logo-form {
        box-sizing: border-box; // IE盒模型，防止撑大
        padding: 0 31px;
        width: 410px;
        height: 510px;
        background-color: #fff;
        position: absolute;
        bottom: 29px;
        right: 80px;
        h3 {
          line-height: 23px;
          font-size: 24px;
          text-align: center;
          margin: 40px auto 49px;
          .checked {
            color: #ff6600;
          }
          .sep-line {
            margin: 0 32px;
          }
        }
        .input {
          width: 348px;
          height: 50px;
          margin-bottom: 20px;

          input {
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            line-height: 50px;
            border: 1px solid #e5e5e5;
            padding: 18px;
            &:focus {
              border: 1px solid #ec9c88;
            }
          }
        }
        .btn {
          width: 100%;
          line-height: 50px;
          margin-top: 10px;
          font-size: 16px;
        }
        .tips {
          margin-top: 14px;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          cursor: pointer;
          .sms {
            color: #ff6600;
          }
          .reg {
            color: #999;
            span {
              margin: 0 7px;
            }
          }
        }
      }
    }
  }
}
.footer {
  height: 100px;
  padding-top: 60px;
  color: #999;
  font-size: 16ps;
  text-align: center;
  .footer-link {
    a {
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
  }
  .copyright {
    margin-top: 13px;
  }
}
</style>