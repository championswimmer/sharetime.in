<template>
  <section class="section">
    <div class="content">
      <div class="card">
        <div class="card-header">
          {{input}}
        </div>
        <div class="card-content">
          {{input.zoneName}}
        </div>
      </div>
      <h2>{{formattedOutput}}</h2>
    </div>
  </section>
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
  input?: DateTime = DateTime.fromJSDate(new Date())
  formattedOutput = ''

  created() {
    this.input = DateTime.fromFormat(this.rParams.time, 'HHmm', {
      zone: this.timezone
    })
    this.formattedOutput = this.input.toLocal().toFormat('hh:mm a')
  }
}
</script>
