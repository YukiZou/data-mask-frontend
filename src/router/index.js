import Vue from 'vue'
import Router from 'vue-router'
/* 引入页面 */
import Login from '@/pages/login.vue'
import Home from '@/pages/home.vue'
import OffLine from '@/pages/offLineData.vue'

Vue.use(Router)

/* 配置路由 */
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: Home,
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login /* 上面import的部分 */
    },
    {
      path: '/offline',
      name: 'offLineData',
      component: OffLine /* 上面import的部分 */
    }
  ]
})
