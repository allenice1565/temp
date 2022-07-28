import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MyHome',
    component: () => import("@/views/MyHome.vue")
  },
  {
    path: '/cart',
    name: 'MyCart',
    component: () => import("@/views/MyCart.vue")
  },
  {
    path: '/manager',
    name: 'MyManager',
    component: () => import("@/views/MyManager.vue")
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
