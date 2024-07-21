import { createRouter, createWebHistory } from 'vue-router'
// import NextDepartureFromYamashitaPark from '../views/yamashita-park/NextDeparture.vue'
// import NextDepartureFromYokohamaStation from '../views/yokohama-station/NextDeparture.vue'
// import NextDepartureFromPierRedBrick from '../views/yokohama-station/NextDeparture.vue'
import TimeSchedule from '../views/TimeSchedule.vue'
import NextDeparture from '../views/yokohama-station/NextDepartureToPierRedBrick.vue'

const routes = [
  // {
  //   path: '/signage/next-departure/from-yamashita-park',
  //   name: 'NextDepartureFromYamashitaPark',
  //   component: NextDepartureFromYamashitaPark
  // },
  // {
  //   path: '/signage/next-departure/from-yokohama-station',
  //   name: 'NextDepartureFromYokohamaStation',
  //   component: NextDepartureFromYokohamaStation
  // },
  // {
  //   path: '/signage/next-departure/from-pier-red-brick',
  //   name: 'NextDepartureFromPierRedBrick',
  //   component: NextDepartureFromPierRedBrick
  // },
  {
    path: '/signage/:operation_rule_id/time-schedule/:time_schedule_id',
    name: 'TimeSchedule',
    component: TimeSchedule
  },
  {
    path: '/signage/:operation_rule_id/next-departure/:destination',
    name: 'NextDeparture',
    component: NextDeparture
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
