import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/api/:category',
    name: 'category',
    component: () => import('../components/Category.vue'),
    props: true
  },
  {
    path: '/bookmarks',
    name: 'bookmarks',
    component: () => import('../components/Bookmarks.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
