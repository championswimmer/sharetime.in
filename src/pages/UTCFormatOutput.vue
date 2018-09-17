<template>
  <div class="container">
    <h2>{{output}}</h2>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { DateTime } from 'luxon'

interface RouteParams {
  continent: string
  city: string
  time: string
}

@Component
export default class UTCFormatOutput extends Vue {
  rParams: RouteParams = this.$store.state.route.params
  timezone = this.rParams.continent + '/' + this.rParams.city
  output = ''

  created() {
    this.output = DateTime.fromFormat(this.rParams.time, 'HHmm', {
      zone: this.timezone
    })
      .toLocal()
      .toFormat('hh:mm a')
  }
}
</script>
