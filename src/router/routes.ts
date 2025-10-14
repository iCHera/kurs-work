import type { RouteRecordRaw } from 'vue-router'

const Home = () => import('@/views/HomePage.vue')
const Catalog = () => import('@/views/CatalogPage.vue')
const NotFound = () => import('@/views/NotFoundPage.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog,
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

export default routes
