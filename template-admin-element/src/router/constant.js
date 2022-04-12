import Layout from '@/layout/Layout.vue'

// 固定路由
export default [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true
    }
  },
  // {
  //   path: '/404',
  //   component: () => import('@/views/error-page/404'),
  //   meta: {
  //     hidden: true
  //   }
  // },
  // {
  //   path: '/401',
  //   component: () => import('@/views/error-page/401'),
  //   meta: {
  //     hidden: true
  //   }
  // },
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '控制台',
          icon: 'i-ep-house'
        }
      }
    ]
  },
  {
    path: '/examples',
    component: Layout,
    children: [
      {
        path: 'permission',
        name: 'Permission',
        component: () => import('@/views/examples/permission.vue'),
        meta: {
          title: '权限验证',
          icon: 'i-ep-house'
        }
      }
    ]
  }
]
