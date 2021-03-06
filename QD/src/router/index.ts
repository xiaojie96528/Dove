import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/login', name: 'L' },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/view/login/index.vue'),
  },
  {
    path: '/sy',
    name: 'Sy',
    component: () => import('@/view/l-1sy/sy.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    redirect: '/admin/',
    component: () => import('@/view/admin/index.vue'),
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: '',
        name: 'Workbench',
        component: () => import('@/view/l-1sy/index.vue'),
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 将被渲染到 User 的 <router-view> 内部
        path: 'yjyc',
        name: 'yjyc',
        component: () => import('@/view/l-2yjyc/index.vue'),
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 将被渲染到 User 的 <router-view> 内部
        path: 'product',
        name: 'Product',
        component: () => import('@/view/product/index.vue'),
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 将被渲染到 User 的 <router-view> 内部
        path: 'production-management',
        name: 'ProductionManagement',
        component: () => import('@/view/production-management/index.vue'),
      },
    ],
  },
]
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && localStorage.getItem('loginstatus') == '0') {
    next({ name: 'L' })
  } else {
    next()
  }
})

export default router
