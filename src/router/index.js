import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/admin/dashboard' },
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: () => import('../views/AdminDashboard.vue'),
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
