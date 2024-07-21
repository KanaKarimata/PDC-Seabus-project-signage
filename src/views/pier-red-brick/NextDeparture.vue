<template>
  <PierRedBrick v-if="this.toPierRedBrick" />
  <YamashitaPark v-if="this.toYamashitaPark" />
</template>

<script>
import PierRedBrick from '../../components/Next-departure-to-pia-red-brick.vue'
import YamashitaPark from '../../components/Next-departure-to-yamashita-park.vue'

export default {
  name: 'NextDepartureFromYokohamaStation',
  components: {
    PierRedBrick,
    YamashitaPark
  },
  data() {
    return {
      toPierRedBrick: false,
      toYamashitaPark: true
    }
  }
}
</script>