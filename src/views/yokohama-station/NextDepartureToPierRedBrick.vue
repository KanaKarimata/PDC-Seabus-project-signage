<template>
  <link rel="stylesheet" href="/css/next-departure.css" type="text/css">
  <div class="red-brick-departure-header"></div>
  <div class="center">
    <div class="departure-contents">
      <div class="departure-jp" translate="no">
        ピア赤レンガ&ensp;方面
      </div>
      <div class="departure-en" translate="no">
        To Pier Red Brick
      </div>
      <div class="red-brick-center-line">
        <div></div>
      </div>
      <div class="departure-time" translate="no" :class="{'end-font ': this.endFlg}">
        {{ formatDate(this.time_schedule_detail.departure_time) }}
      </div>
    </div>
  </div>
</template>

<script>
// import PierRedBrick from '../../components/Next-departure-to-pia-red-brick.vue'
// import YamashitaPark from '../../components/Next-departure-to-yamashita-park.vue'
import axios from 'axios'
import moment from 'moment';

export default {
  name: 'NextDeparture',
  data() {
    return {
      time_schedule_detail: [],
      operation_rule_id: 0,
      destination: 0,
      endFlg: false
    }
  },
  created() {
    this.operation_rule_id = this.$route.params.operation_rule_id
    this.destination = this.$route.params.destination
    this.getNextDepartureTime()
  },
  methods: {
    async getNextDepartureTime() {
      const response = await axios.get(`http://localhost:8000/operation-rule/signage/${this.operation_rule_id}/next-departure/${this.destination}`)
      this.time_schedule_detail = response.data
    },
    formatDate(time) {
      if (!this.time_schedule_detail) {
        this.endFlg = true
        return '本日は終了しました'
      }
      if (!time) {
        this.endFlg = true
        return '本日は終了しました'
      }
      return moment(time, 'HH:mm:ss').format('HH:mm');
    },
  }
}
</script>