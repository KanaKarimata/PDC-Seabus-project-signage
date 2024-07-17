import { createRouter, createWebHistory } from 'vue-router'
import NextDeparture from '../views/NextDeparture.vue'

const routes = [
  {
    path: '/signage/next-departure',
    name: 'NextDeparture',
    component: NextDeparture
  },
  {
    path: '/signage/time-schedule',
    name: 'about',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
