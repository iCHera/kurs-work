import type { RouteRecordRaw } from 'vue-router'

const Home = () => import('@/views/HomePage.vue')
const Product = () => import('@/views/ProductPage.vue')
const NotFound = () => import('@/views/NotFoundPage.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
    props: true,
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

export default routes
