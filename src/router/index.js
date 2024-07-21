import { createRouter, createWebHistory } from 'vue-router'
import TimeSchedule from '../views/TimeSchedule.vue'
import NextDepartureFromYokohamaStationToPierRedBrick from '../views/yokohama-station/NextDepartureToPierRedBrick.vue'
import NextDepartureFromYokohamaStationToYamashitaPark from '../views/yokohama-station/NextDepartureToYamashita.vue'
import NextDepartureFromYamashitaParkToPierRedBrick from '../views/yamashita-park/NextDepartureToPierRedBrick.vue'
import NextDepartureFromYamashitaParkToYokohamaStation from '../views/yamashita-park/NextDepartureToYokohamaStation.vue'
import NextDepartureFromPierRedBrickToYamashitaPark from '../views/pier-red-brick/NextDepartureToYamashita.vue'
import NextDepartureFromPierRedBrickToYokohamaStation from '../views/pier-red-brick/NextDepartureToYokohamaStation.vue'

const routes = [
  {
    path: '/signage/:operation_rule_id/time-schedule/:time_schedule_id',
    name: 'TimeSchedule',
    component: TimeSchedule
  },
  {
    path: '/signage/:operation_rule_id/next-departure/:destination/from-yokohama-st/to-pier-red-brick',
    name: 'NextDepartureFromYokohamaStationToPierRedBrick',
    component: NextDepartureFromYokohamaStationToPierRedBrick
  },
  {
    path: '/signage/:operation_rule_id/next-departure/:destination/from-yokohama-st/to-yamashita-park',
    name: 'NextDepartureFromYokohamaStationToYamashitaPark',
    component: NextDepartureFromYokohamaStationToYamashitaPark
  },
  {
    path: '/signage/:operation_rule_id/next-departure/:destination/from-yamashita-park/to-pier-red-brick',
    name: 'NextDepartureFromYamashitaParkToPierRedBrick',
    component: NextDepartureFromYamashitaParkToPierRedBrick
  },
  {
    path: '/signage/:operation_rule_id/next-departure/:destination/from-yamashita-park/to-yokohama-st',
    name: 'NextDepartureFromYamashitaParkToYokohamaStation',
    component: NextDepartureFromYamashitaParkToYokohamaStation
  },
  {
    path: '/signage/:operation_rule_id/next-departure/:destination/from-pier-red-brick/to-yamashita-park',
    name: 'NextDepartureFromPierRedBrickToYamashitaPark',
    component: NextDepartureFromPierRedBrickToYamashitaPark
  },
  {
    path: '/signage/:operation_rule_id/next-departure/:destination/from-pier-red-brick/to-yokohama-st',
    name: 'NextDepartureFromPierRedBrickToYokohamaStation',
    component: NextDepartureFromPierRedBrickToYokohamaStation
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
