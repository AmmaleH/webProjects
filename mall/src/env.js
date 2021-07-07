/**
 * 跨域方式为 cors 或 jsonp 时才需要做下面的配置
 * 用代理进行跨域时，在 vue.config.js 中在 
 * target: "https://www.imooc.com", 中www之前加 test- 或 dev- 等（每次启动前手动更改）
 */

let baseURL;
switch (process.env.NODE_ENV) {
    case 'dev':
        baseURL = 'http://dev-mall-pre.springboot.cn/api';
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api';
        break;
    case 'prod':
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
    default:
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
}

export default {
    baseURL,
}