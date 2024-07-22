import { createRouter, createWebHistory } from 'vue-router'
import NextDepartureFromYokohamaStationToPierRedBrick from '../views/yokohama-station/NextDepartureToPierRedBrick.vue'
import NextDepartureFromYokohamaStationToYamashitaPark from '../views/yokohama-station/NextDepartureToYamashita.vue'
import NextDepartureFromYamashitaParkToPierRedBrick from '../views/yamashita-park/NextDepartureToPierRedBrick.vue'
import NextDepartureFromYamashitaParkToYokohamaStation from '../views/yamashita-park/NextDepartureToYokohamaStation.vue'
import NextDepartureFromPierRedBrickToYamashitaPark from '../views/pier-red-brick/NextDepartureToYamashita.vue'
import NextDepartureFromPierRedBrickToYokohamaStation from '../views/pier-red-brick/NextDepartureToYokohamaStation.vue'
import TimeScheduleFromYokohamaStationToYamashitaPark from '../views/yokohama-station/TimeScheduleToYamashita.vue'
import TimeScheduleFromYokohamaStationToPierRedBrick from '../views/yokohama-station/TimeScheduleToPierRedBrick.vue'
import TimeScheduleFromYamashitaParkToYokohamaStation from '../views/yamashita-park/TimeScheduleToYokohamaStation.vue'
import TimeScheduleFromYamashitaParkToPierRedBrick from '../views/yamashita-park/TimeScheduleToPierRedBrick.vue'
import TimeScheduleFromPierRedBrickToYokohamaStation from '../views/pier-red-brick/TimeScheduleToYokohamaStation.vue'
import TimeScheduleFromPierRedBrickToYamashitaPark from '../views/pier-red-brick/TimeScheduleToYamashita.vue'

const routes = [
  {
    path: '/signage/:operation_rule_id/time-schedule/:time_schedule_id/from-yokohama-st/to-yamashita-park',
    name: 'TimeScheduleFromYokohamaStationToYamashitaPark',
    component: TimeScheduleFromYokohamaStationToYamashitaPark
  },
  {
    path: '/signage/:operation_rule_id/time-schedule/:time_schedule_id/from-yokohama-st/to-pier-red-brick',
    name: 'TimeScheduleFromYokohamaStationToPierRedBrick',
    component: TimeScheduleFromYokohamaStationToPierRedBrick
  },
  {
    path: '/signage/:operation_rule_id/time-schedule/:time_schedule_id/from-yamashita-park/to-yokohama-st',
    name: 'TimeScheduleFromYamashitaParkToYokohamaStation',
    component: TimeScheduleFromYamashitaParkToYokohamaStation
  },
  {
    path: '/signage/:operation_rule_id/time-schedule/:time_schedule_id/from-yamashita-park/to-pier-red-brick',
    name: 'TimeScheduleFromYamashitaParkToPierRedBrick',
    component: TimeScheduleFromYamashitaParkToPierRedBrick
  },
  {
    path: '/signage/:operation_rule_id/time-schedule/:time_schedule_id/from-pier-red-brick/to-yokohama-st',
    name: 'TimeScheduleFromPierRedBrickToYokohamaStation',
    component: TimeScheduleFromPierRedBrickToYokohamaStation
  },
  {
    path: '/signage/:operation_rule_id/time-schedule/:time_schedule_id/from-pier-red-brick/to-yamashita-park',
    name: 'TimeScheduleFromPierRedBrickToYamashitaPark',
    component: TimeScheduleFromPierRedBrickToYamashitaPark
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
