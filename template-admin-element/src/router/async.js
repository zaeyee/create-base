import Layout from '@/layout/Layout.vue'

// 异步路由
export default [
  {
    path: '/site',
    name: 'Site',
    component: Layout,
    meta: {
      title: '站点管理',
      icon: 'i-ep-location',
      auth: ['admin']
    },
    children: [
      {
        path: 'categories',
        name: 'Site-Categories',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '站点分类',
          icon: 'i-ep-house'
        }
      },
      {
        path: 'sites',
        name: 'Site-Sites',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '站点列表',
          icon: 'i-ep-location'
        }
      },
      {
        path: 'apply',
        name: 'Site-Apply',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '站点申请',
          icon: 'i-ep-location'
        }
      }
    ]
  },
  {
    path: '/post',
    name: 'Post',
    component: Layout,
    meta: {
      title: '文章管理',
      icon: 'i-ep-location',
      auth: ['admin']
    },
    children: [
      {
        path: 'categories',
        name: 'Post-Categories',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '文章分类',
          icon: 'i-ep-location'
        }
      },
      {
        path: 'posts',
        name: 'Post-Posts',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '文章列表',
          icon: 'i-ep-location'
        }
      }
    ]
  },
  {
    path: '/relevant',
    name: 'Relevant',
    component: Layout,
    meta: {
      title: '相关管理',
      icon: 'i-ep-location',
      auth: ['admin']
    },
    children: [
      {
        path: 'notices',
        name: 'Notices',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '公告管理',
          icon: 'i-ep-location'
        }
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '用户管理',
          icon: 'i-ep-location'
        }
      },
      {
        path: 'pages',
        name: 'Pages',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '单页管理',
          icon: 'i-ep-location'
        }
      },
      {
        path: 'links',
        name: 'Links',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '友链管理',
          icon: 'i-ep-location'
        }
      },
      {
        path: 'ads',
        name: 'Ads',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '友链管理',
          icon: 'i-ep-location'
        }
      }
    ]
  },
  {
    path: '/system',
    name: 'System',
    component: Layout,
    meta: {
      title: '系统管理',
      icon: 'i-ep-location',
      auth: ['admin']
    },
    children: [
      {
        path: 'setting',
        name: 'Setting',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '网站设置',
          icon: 'i-ep-location'
        }
      },
      {
        path: 'navigators',
        name: 'Navigators',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '系统导航',
          icon: 'i-ep-location'
        }
      },
      {
        path: 'templates',
        name: 'Templates',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '前台模板',
          icon: 'i-ep-location'
        }
      },
      {
        path: 'images',
        name: 'Images',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '通用图片',
          icon: 'i-ep-location'
        }
      },
      {
        path: 'clear',
        name: 'Clear',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '垃圾清理',
          icon: 'i-ep-location'
        }
      }
    ]
  }
]
