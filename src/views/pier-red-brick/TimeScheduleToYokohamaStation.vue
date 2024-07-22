<template>
  <ChildTimeScheduleToYokohama
    :time_schedule_detail="time_schedule_detail"
    :key="time_schedule_id"/>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex';
import ChildTimeScheduleToYokohama from '../../components/ChildTimeScheduleToYokohama.vue'

export default {
  name: 'TimeScheduleFromPierRedBrickToYokohamaStation',
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
    ChildTimeScheduleToYokohama
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
    },
    startPolling() {
      // 10秒ごとにデータを取得する
      this.pollInterval = setInterval(() => {
        this.getTimeScheduleData();
      }, 30000); // 30000ms = 30秒
    },
    stopPolling() {
      if (this.pollInterval) {
        clearInterval(this.pollInterval);
      }
    }
  }
}
</script>