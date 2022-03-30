import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'form' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/Userlist',
    meta: { title: '用户管理', icon: 'form' },
    children: [
      {
        path: 'Userlist',
        component: () => import('@/views/UserList/Userlist'),
        meta: { title: '用户列表', icon: 'form' }
      },
      {
        path: 'authen',
        component: () => import('@/views/UserList/authentication'),
        meta: { title: '实名认证审核', icon: 'form' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    redirect: '/form/ListOfPrimary',
    meta: { title: '团队', icon: 'form' },
    children: [
      {
        path: 'ListOfPrimary',
        component: () => import('@/views/team/ListOfPrimary'),
        meta: { title: '一级商户列表', icon: 'form' }
      },
      {
        path: 'Approval',
        component: () => import('@/views/team/Approval'),
        meta: { title: '晋级申请审批', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/AssetAllocation',
    meta: {
      title: '交易记录',
      icon: 'form'
    },
    children: [
      {
        path: 'AssetAllocation',
        component: () => import('@/views/Transaction/AssetAllocation'),
        meta: { title: '配置资产记录', icon: 'form' }
      },
      {
        path: 'TransferredOutAssets',
        component: () => import('@/views/Transaction/TransferredOutAssets'),
        meta: { title: '转出资产记录', icon: 'form' }
      },
      {
        path: 'HangingOrder',
        component: () => import('@/views/Transaction/HangingOrder'),
        meta: { title: '挂单记录', icon: 'form' }
      },
      {
        path: 'pendingOrder',
        component: () => import('@/views/Transaction/pendingOrder'),
        meta: { title: '挂单交易记录', icon: 'form' }
      },
      {
        path: 'C2CPurchase',
        component: () => import('@/views/Transaction/C2CPurchase'),
        meta: { title: 'C2C购买记录', icon: 'form' }
      },
      {
        path: 'C2CSale',
        component: () => import('@/views/Transaction/C2CSale'),
        meta: { title: 'C2C出售记录', icon: 'form' }
      },
    ]
  },

  {
    path: '/RewardRecord',
    component: Layout,
    redirect: '/RewardRecord/achievement',
    meta: {
      title: '奖励记录',
      icon: 'form'
    },
    children: [
      {
        path: 'achievement',
        component: () => import('@/views/RewardRecord/achievement'),
        meta: { title: '业绩奖励', icon: 'form' }
      },
      {
        path: 'sale',
        component: () => import('@/views/RewardRecord/sale'),
        meta: { title: '销售奖励', icon: 'form' }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/managers',
    meta: {
      title: '系统管理',
      icon: 'form'
    },
    children: [
      {
        path: 'managers',
        component: () => import('@/views/systemManagement/managers'),
        meta: { title: '管理员列表', icon: 'form' }
      },
      {
        path: 'RoleManagement',
        component: () => import('@/views/systemManagement/RoleManagement'),
        meta: { title: '角色管理', icon: 'form' }
      }
    ]
  },

  {
    path: '/UserFee',
    component: Layout,
    redirect: '/UserFeedback',
    children: [{
      path: 'UserFeedback',
      component: () => import('@/views/UserFeedback'),
      meta: { title: '用户意见反馈', icon: 'form' }
    }]
  },
  {
    path: '/Personal',
    component: Layout,
    redirect: '/PersonalCenter',
    children: [{
      path: 'PersonalCenter',
      name: 'PersonalCenter',
      component: () => import('@/views/PersonalCenter'),
      meta: { title: '个人中心', icon: 'form' }
    }]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
