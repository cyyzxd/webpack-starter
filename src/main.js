// 入口文件
// import Vue from 'vue'
import {createApp} from 'vue';
import App from './App.vue'

import router from './router';

// new Vue({
//   el:'#app',
//   router,
//   render: h => h(App), // App -> 虚拟do -> 真实dom 插入html id为app的标签
// })



createApp(App).use(router).mount('#app')