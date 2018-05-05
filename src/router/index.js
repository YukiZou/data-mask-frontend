import Vue from 'vue'
import Router from 'vue-router'
/* 引入页面 */
import Login from '@/pages/login.vue'
import Home from '@/pages/home.vue'
import OffLine from '@/pages/offLineData.vue'
import MaskProcess from '@/pages/maskProcess.vue'
import MaskResult from '@/pages/maskResult.vue'
import MaskResultExport from '@/pages/maskResultExport.vue'

Vue.use(Router)

/* 配置路由 */
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/', // 主页面
      name: Home,
      component: Home
    },
    {
      path: '/login', // 登录/注册/登出页面
      name: 'Login',
      component: Login /* 上面import的部分 */
    },
    {
      path: '/offline', // 离线数据上传和脱敏配置页面
      name: 'offLineData',
      component: OffLine /* 上面import的部分 */
    },
    {
      path: '/masking', // 脱敏过程展示页面
      name: 'maskProcess',
      component: MaskProcess
    },
    {
      path: '/result', // 脱敏结果列表展示页面
      name: 'maskResult',
      component: MaskResult
    },
    {
      path: '/export/:userFileId', // 脱敏结果导出成文件页面
      name: 'maskResultExport',
      component: MaskResultExport
    }
  ]
})
