<template>
  <TimeScheduleToYamashitaStation v-if="this.toYamashitaPark"/>
  <TimeScheduleToPierRedBrick v-if="this.toPierRedBrick"/>
</template>

<script>
import TimeScheduleToYamashitaStation from '../../components/Time-schedule-to-yamashita-station.vue'
import TimeScheduleToPierRedBrick from '../../components/Time-schedule-to-pier-red-brick.vue';

export default {
  name: 'TimeScheduleFromYokohamaStation',
  data() {
    return {
      toYamashitaPark: false,
      toPierRedBrick: true
    }
  },
  components: {
    TimeScheduleToYamashitaStation,
    TimeScheduleToPierRedBrick
  }
}
</script>