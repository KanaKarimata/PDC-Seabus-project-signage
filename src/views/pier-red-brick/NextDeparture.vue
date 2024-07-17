<template>
  <YokohamaStation v-if="this.toYokohamaStation" />
  <YamashitaPark v-if="this.toYamashitaPark" />
</template>

<script>
import YokohamaStation from '../../components/Next-departure-to-yokohama-station.vue'
import YamashitaPark from '../../components/Next-departure-to-yamashita-park.vue'

export default {
  name: 'NextDepartureFromPierRedBrick',
  components: {
    YokohamaStation,
    YamashitaPark
  },
  data() {
    return {
      toYokohamaStation: true,
      toYamashitaPark: false
    }
  }
}
</script>