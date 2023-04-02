// 创建router 实例
// import VueRouter from 'vue-router'
import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

// Vue.use(VueRouter)

const routes = [
  {path:'/',component:Home},
  {path:'/about',component:About},
]

// const router  = new VueRouter({
// })

 const router  = createRouter({
  history:createWebHashHistory(),
  routes
 })
//..
export default router