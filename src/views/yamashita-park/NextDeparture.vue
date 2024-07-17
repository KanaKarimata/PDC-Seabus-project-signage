<template>
  <PierRedBrick v-if="this.toPierRedBrick" />
  <YokohamaStation v-if="this.toYokohamaStation" />
</template>

<script>
import PierRedBrick from '../../components/Next-departure-to-pia-red-brick.vue'
import YokohamaStation from '../../components/Next-departure-to-yokohama-station.vue'

export default {
  name: 'NextDepartureFromYamashitaPark',
  components: {
    PierRedBrick,
    YokohamaStation
  },
  data() {
    return {
      toPierRedBrick: true,
      toYokohamaStation: false
    }
  }
}
</script>