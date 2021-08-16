import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 有 ./ 会去相应的路径里面找，没有的话会被认为是一个插件
import router from './router'
import store from './store'
import App from './App.vue'
// import env from './env'
// 
// mock开关
const mock = true;
// import：预编译加载，在编译的时候import的文件就会被加载，写入到内存当中。
// require: 在执行的时候才去加载。若mock为false，则不会被加载。
if (mock) {
  require('./mock/api');
}

// 根据前端的跨域方式做调整
// cors、jsonp跨域时要写完整的url，代理跨域时只用 /api
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.default.baseURL = env.baseURL;

// 接口错误拦截
axios.interceptors.response.use(function (response) {  // 2xx 状态码下的处理
  let res = response.data;
  let path = location.hash;   // 获取hash 路由（/#/）
  if (res.status == 0) {    // 成功返回数据，统一做了拦截
    return res.data;
  } else if (res.status == 10) {    // 未登录时
    // 由于路由是挂载在vue实例上的，不能使用 this.$router.push(url)去跳转，只能在 *.vue文件中才能用
    if (path != '#/index') {   // 不在首页，则跳转到登录页面
      window.location.href = '/#/login';
    }
    return Promise.reject(res);
  } else {
    // alert(res.msg);
    Message.warning(res.msg);
    return Promise.reject(res);
  }
}, (error) => {   // http 请求的状态码，如 4xx,5xx情况下的错误情况
  let res = error.response;
  Message.error(res.data.message);
  return Promise.reject(error);
});

Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(Message);
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
});

Vue.config.productionTip = false
Vue.prototype.$message = Message;

new Vue({
  store,
  router: router,
  render: h => h(App),
}).$mount('#app')
