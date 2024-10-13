// // src/router/index.js
// import Vue from 'vue';
// import Router from 'vue-router';
// import Home from '../components/Home.vue'; // 主页组件
// import JianYan from '../pages/yingyong/jianyan.vue'; // 产品检验页面组件
// import ZhiLiangJianCe from '../pages/yingyong/zhiliangjiance.vue'; // 质量检测页面组件
// import ZhiLiangBaoGao from '../pages/yingyong/zhiliangbaogao.vue'; // 质量报告页面组件
// import ShengChanJiHua from '../pages/yingyong/shengchanjihua.vue'; // 生产计划页面组件
// import CaiGouJiHua from '../pages/yingyong/caigoujihua.vue'; // 采购计划页面组件
// import XiaoShouJiHua from '../pages/yingyong/xiaoshoujihua.vue'; // 销售计划页面组件

// Vue.use(Router);

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home,
//   },
//   {
//     path: '/jianyan',
//     name: 'JianYan',
//     component: JianYan,
//   },
//   {
//     path: '/zhiliangjiance',
//     name: 'ZhiLiangJianCe',
//     component: ZhiLiangJianCe,
//   },
//   {
//     path: '/zhiliangbaogao',
//     name: 'ZhiLiangBaoGao',
//     component: ZhiLiangBaoGao,
//   },
//   {
//     path: '/shengchanjihua',
//     name: 'ShengChanJiHua',
//     component: ShengChanJiHua,
//   },
//   {
//     path: '/caigoujihua',
//     name: 'CaiGouJiHua',
//     component: CaiGouJiHua,
//   },
//   {
//     path: '/xiaoshoujihua',
//     name: 'XiaoShouJiHua',
//     component: XiaoShouJiHua,
//   },
// ];

// export default new Router({
//   mode: 'history', // 使用 HTML5 history 模式
//   base: process.env.BASE_URL,
//   routes,
// });