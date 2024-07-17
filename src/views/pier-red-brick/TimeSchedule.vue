<template>
  <TimeScheduleToYokohamaStation v-if="this.toYokohamaStation"/>
  <TimeScheduleToYamashitaStation v-if="this.toYamashitaPark"/>
</template>

<script>
import TimeScheduleToYokohamaStation from '../../components/Time-schedule-to-yokohama-station.vue'
import TimeScheduleToYamashitaStation from '../../components/Time-schedule-to-yamashita-station.vue'

export default {
  name: 'TimeScheduleFromPierRedBrickPark',
  data() {
    return {
      toYokohamaStation: false,
      toYamashitaPark: true
    }
  },
  components: {
    TimeScheduleToYokohamaStation,
    TimeScheduleToYamashitaStation
  }
}
</script>