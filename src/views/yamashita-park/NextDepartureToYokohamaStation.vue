<template>
  <link rel="stylesheet" href="/css/next-departure.css" type="text/css">
  <div class="yokohama-departure-header"></div>
  <div class="center">
    <div class="departure-contents">
      <div class="departure-jp" translate="no">
        横浜駅東口&ensp;方面
      </div>
      <div class="departure-en" translate="no">
        To Yokohama Station East Exit
      </div>
      <div class="yokohama-center-line">
        <div></div>
      </div>
      <div class="departure-time" translate="no" :class="{'end-font ': this.endFlg}">
        {{ formatDate(this.time_schedule_detail.departure_time) }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment';

export default {
  name: 'NextDepartureFromYamashitaParkToYokohamaStation',
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
    this.startPolling()
  },
  beforeDestroy() {
    this.stopPolling()
  },
  methods: {
    async getNextDepartureTime() {
      const response = await axios.get(process.env.VUE_APP_API_URL + `/operation-rule/signage/${this.operation_rule_id}/next-departure/${this.destination}`)
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
    startPolling() {
      // 10秒ごとにデータを取得する
      this.pollInterval = setInterval(() => {
        this.getNextDepartureTime();
      }, 60000); // 10000ms = 10秒
    },
    stopPolling() {
      if (this.pollInterval) {
        clearInterval(this.pollInterval);
      }
    }
  }
}
</script>