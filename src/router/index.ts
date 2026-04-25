import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/View.vue'
import NewView from '@/views/NewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutView,
    },
    {
      path: '/View',
      name: 'view',
      component: NewView,
    },
  ],
})

export default router
