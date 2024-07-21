import { createRouter, createWebHistory } from 'vue-router'
import NextDepartureFromYamashitaPark from '../views/yamashita-park/NextDeparture.vue'
import NextDepartureFromYokohamaStation from '../views/yokohama-station/NextDeparture.vue'
import NextDepartureFromPierRedBrick from '../views/pier-red-brick/NextDeparture.vue'
import TimeScheduleFromYamashitaPark from '../views/yamashita-park/TimeSchedule.vue'
import TimeScheduleFromYokohamaPark from '../views/yokohama-station/TimeSchedule.vue'
import TimeScheduleFromPierRedBrickPark from '../views/pier-red-brick/TimeSchedule.vue'

const routes = [
  {
    path: '/signage/next-departure/from-yamashita-park',
    name: 'NextDepartureFromYamashitaPark',
    component: NextDepartureFromYamashitaPark
  },
  {
    path: '/signage/next-departure/from-yokohama-station',
    name: 'NextDepartureFromYokohamaStation',
    component: NextDepartureFromYokohamaStation
  },
  {
    path: '/signage/next-departure/from-pier-red-brick',
    name: 'NextDepartureFromPierRedBrick',
    component: NextDepartureFromPierRedBrick
  },
  {
    path: '/signage/:operation_rule_id/time-schedule/:time_schedule_id/from-yamashita-park',
    name: 'TimeScheduleFromYamashitaPark',
    component: TimeScheduleFromYamashitaPark
  },
  {
    path: '/signage/:operation_rule_id/time-schedule/:time_schedule_id/from-yokohama-park',
    name: 'TimeScheduleFromYokohamaPark',
    component: TimeScheduleFromYokohamaPark
  },
  {
    path: '/signage/:operation_rule_id/time-schedule/:time_schedule_id/from-pier-red-brick',
    name: 'TimeScheduleFromPierRedBrickPark',
    component: TimeScheduleFromPierRedBrickPark
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
