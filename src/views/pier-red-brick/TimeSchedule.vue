<template>
  <TimeScheduleToYokohamaStation
    :time_schedule_detail="time_schedule_detail"
    v-if="this.toYokohamaStation"/>
  <TimeScheduleToYamashitaStation
    :time_schedule_detail="time_schedule_detail"
    v-if="this.toYamashitaPark"/>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex';
import TimeScheduleToYokohamaStation from '../../components/Time-schedule-to-yokohama-station.vue'
import TimeScheduleToYamashitaStation from '../../components/Time-schedule-to-yamashita-station.vue'

export default {
  name: 'TimeScheduleFromPierRedBrickPark',
  data() {
    return {
      toYokohamaStation: false,
      toYamashitaPark: false,
      operation_rule_id: 0,
      time_schedule_id: 0,
      time_schedule_detail: Array.from({ length: 20 }, (v, k) => ({
        id: null,
        departure_time: null,
        operation_status_id: 0,
        operation_status_detail_id: 0,
        detail_comment: null,
        memo: null
      })),
      time_schedule: []
    }
  },
  components: {
    TimeScheduleToYokohamaStation,
    TimeScheduleToYamashitaStation
  },
  created() {
    this.operation_rule_id = this.$route.params.operation_rule_id
    this.time_schedule_id = this.$route.params.time_schedule_id
    this.getTimeScheduleData()
  },
  computed: {
    ...mapGetters(['getOperationRuleId'])
  },
  methods: {
    async getTimeScheduleData() {
      const response = await axios.get('http://localhost:8000/operation-rule/signage/time-schedule-detail/index/', {
        params: {
          time_schedule_id: this.time_schedule_id,
          operation_rule_id: this.operation_rule_id
        }})
      console.log('APIレスポンス:', response.data)
      this.time_schedule_detail = response.data.scheduleDetails
      this.time_schedule = response.data.time_schedule
      this.setDestination()
    },
    setDestination() {
      if (this.time_schedule.destination === this.getOperationRuleId.YOKOHAMA_STATION) {
        this.toYokohamaStation = true
      } else if (this.time_schedule.destination === this.getOperationRuleId.YAMASHITA_PARK) {
        this.toYamashitaPark = true
      }
    }
  }
}
</script>