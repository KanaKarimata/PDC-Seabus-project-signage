<template>
  <ChildTimeSchedule
    :time_schedule_detail="time_schedule_detail"
    :destination="time_schedule.destination"
    :key="time_schedule.id"/>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex';
import ChildTimeSchedule from '../components/Child-time-schedule.vue'

export default {
  name: 'TimeSchedule',
  data() {
    return {
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
    // TimeScheduleToYamashitaStation,
    // TimeScheduleToPierRedBrick,
    ChildTimeSchedule
  },
  created() {
    this.operation_rule_id = this.$route.params.operation_rule_id
    this.time_schedule_id = this.$route.params.time_schedule_id
    this.getTimeScheduleData()
    this.startPolling()
  },
  beforeDestroy() {
    this.stopPolling()
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
      console.log(this.time_schedule.id)
    },
    startPolling() {
      // 10秒ごとにデータを取得する
      this.pollInterval = setInterval(() => {
        this.getTimeScheduleData();
      }, 10000); // 10000ms = 10秒
    },
    stopPolling() {
      if (this.pollInterval) {
        clearInterval(this.pollInterval);
      }
    }
  }
}
</script>