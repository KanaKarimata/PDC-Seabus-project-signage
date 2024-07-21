
<template>
  <link rel="stylesheet" href="/css/time-schedule.css" type="text/css">
  <div class="time-schedule-area">
    <div class="time-schedule-header" translate="no">
      {{  this.getDestination() }}
    </div>
    <div class="tables-area">
      <div class="time-schedule-table-area" v-for="(table, tableIndex) in splitTables" :key="tableIndex">
        <div class="vertical-line"
            :class="{
                'yokohama' : this.destination === this.getOperationRuleId.YOKOHAMA_STATION,
                'yamashita' : this.destination === this.getOperationRuleId.YAMASHITA_PARK,
                'red-brick' : this.destination === this.getOperationRuleId.RED_BRICK}"></div>
        <div class="time-schedule-table">
          <div class="header"
              :class="{
                'yokohama' : this.destination === this.getOperationRuleId.YOKOHAMA_STATION,
                'yamashita' : this.destination === this.getOperationRuleId.YAMASHITA_PARK,
                'red-brick' : this.destination === this.getOperationRuleId.RED_BRICK}">
            <div translate="no">出航時間</div>
            <div translate="no">運航状況</div>
            <div translate="no">詳細</div>
          </div>
          <div class="data"
              :class="{
                'yokohama-line' : this.destination === this.getOperationRuleId.YOKOHAMA_STATION,
                'yamashita-line' : this.destination === this.getOperationRuleId.YAMASHITA_PARK,
                'red-brick-line' : this.destination === this.getOperationRuleId.RED_BRICK}"
              v-for="(row, rowIndex) in table" :key="rowIndex">
            <div translate="no">{{ formatDate(row.departure_time) }}</div>
            <div translate="no" :class="{'blue-font': normal(row.operation_status_info), 'red-font' : irregular(row.operation_status_info)}">
              {{ this.viewStatusData(row) }}
            </div>
            <div translate="no">{{ this.viewDetailData(row) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { mapGetters } from 'vuex';
export default {
  name: 'ChildTimeSchedule',
  props: {
    time_schedule_detail: {
      type: Array,
      required: true
    },
    destination: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters(['getOperationRuleId']),
    expandedDetails() {
      const emptyDetails = Array.from({ length: 20 - this.time_schedule_detail.length }, (v, k) => ({
        id: null,
        departure_time: null,
        operation_status_id: 0,
        operation_status_detail_id: 0,
        detail_comment: null,
        memo: null
      }));
      return [...this.time_schedule_detail, ...emptyDetails]
    },
    splitTables() {
      const chunkSize = 10
      const chunks = []
      for (let i = 0; i < this.expandedDetails.length; i += chunkSize) {
        chunks.push(this.expandedDetails.slice(i, i + chunkSize))
      }
      return chunks
    }
  },
  methods: {
    getDestination() {
      if (this.destination === this.getOperationRuleId.YOKOHAMA_STATION) {
        return '横浜駅東口 方面'
      } else if (this.destination === this.getOperationRuleId.YAMASHITA_PARK) {
        return '山下公園 方面'
      } else if (this.destination === this.getOperationRuleId.RED_BRICK) {
        return 'ピア赤レンガ方面 方面'
      }
    },
    formatDate(time) {
      if (!time) {
        return '-'
      }
      return moment(time, 'HH:mm:ss').format('HH:mm');
    },
    normal(info) {
      if (!info) {
        return false
      }
      return info.id === 1 ? true : false
    },
    irregular(info) {
      if (!info) {
        return false
      }
      return info.id !== 1 ? true : false
    },
    viewStatusData(status) {
      if (!status.operation_status_info) {
        return '-'
      }
      return status.operation_status_info.operations_status_type
    },
    viewDetailData(detail) {
      if (!detail.operation_status_detail_info) {
        return '-'
      }
      if (detail.operation_status_detail_info.id === 12 && detail.detail_comment) {
        return detail.detail_comment
      }
      if (detail.operation_status_detail_info.id === 12) {
        return '-'
      }
      return detail.operation_status_detail_info.operation_status_detail
    }
  }
}
</script>