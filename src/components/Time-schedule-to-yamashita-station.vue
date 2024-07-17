<template>
  <link rel="stylesheet" href="/css/time-schedule.css" type="text/css">
  <div class="time-schedule-area">
    <div class="time-schedule-header" translate="no">
      山下公園 方面
    </div>
    <div class="tables-area">
      <div class="time-schedule-table-area" v-for="(table, tableIndex) in splitTables" :key="tableIndex">
        <div class="yamashita-vertical-line"></div>
        <div class="time-schedule-table">
          <div class="yamashita-header">
            <div translate="no">出航時間</div>
            <div translate="no">運航状況</div>
            <div translate="no">詳細</div>
          </div>
          <div class="data" v-for="(row, rowIndex) in table" :key="rowIndex">
            <div translate="no">{{ row.departure_time }}</div>
            <div translate="no">{{ row.operation_status_id }}</div>
            <div translate="no">{{ row.operation_status_detail_id }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TimeScheduleToYamashitaStation',
  data() {
    return {
      time_schedule_detail: Array.from({ length: 20 }, (v, k) => ({
        key_id: k + 1,
        id: null,
        departure_time: '08:00',
        operation_status_id: '通常運航',
        operation_status_detail_id: '-',
        detail_comment: null,
        memo: null
      }))
    }
  },
  computed: {
    splitTables() {
      const chunkSize = 10;
      const chunks = [];
      for (let i = 0; i < this.time_schedule_detail.length; i += chunkSize) {
        chunks.push(this.time_schedule_detail.slice(i, i + chunkSize));
      }
      return chunks;
    }
  },
}
</script>