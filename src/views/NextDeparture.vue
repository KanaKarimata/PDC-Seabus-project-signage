<template>
  <YokohamaStation v-if="this.toYokohamaStation" />
  <PierRedBrick v-if="this.toPierRedBrick" />
  <YamashitaPark v-if="this.toYamashitaPark" />
</template>

<script>
import YokohamaStation from '../components/Next-departure-to-yokohama-station.vue'
import PierRedBrick from '../components/Next-departure-to-pia-red-brick.vue'
import YamashitaPark from '../components/Next-departure-to-yamashita-park.vue'

export default {
  name: 'NextDepartureBk',
  components: {
    YokohamaStation,
    PierRedBrick,
    YamashitaPark
  },
  data() {
    return {
      toYokohamaStation: false,
      toPierRedBrick: false,
      toYamashitaPark: false,
      time_schedule_detail: [],
      operation_rule_id: 0
    }
  },
  created() {
    this.operation_rule_id = this.$route.params.operation_rule_id
  },
  methods: {
    async getNextDepartureTime() {
      const response = await axios.get(`http://localhost:8000/operation-rule/signage/${this.operation_rule_id}/next-departure/`)
      this.time_schedule_detail = response.data
    },
    setDestination() {
      if (this.time_schedule.destination === this.getOperationRuleId.YOKOHAMA_STATION) {
        this.toYokohamaStation = true
      } else if (this.time_schedule.destination === this.getOperationRuleId.YAMASHITA_PARK) {
        this.toYamashitaPark = true
      } else if (this.time_schedule.destination === this.getOperationRuleId.RED_BRICK) {
        this.toPierRedBrick = true
      }
    }
  }
}
</script>