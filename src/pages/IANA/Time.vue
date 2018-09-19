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
      <h2>{{output.toFormat('hh:mm a')}}</h2>
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { DateTime } from 'luxon'

interface RouteParams {
  continent: string
  city: string
  time: string
}

@Component
export default class Time extends Vue {
  rParams: RouteParams = this.$store.state.route.params
  timezone = this.rParams.continent + '/' + this.rParams.city
  input = DateTime.fromJSDate(new Date(), { zone: this.timezone })
  output?: DateTime

  created() {
    if (this.rParams.time !== 'now') {
      this.input = DateTime.fromFormat(this.rParams.time, 'HHmm', {
        zone: this.timezone
      })
    }
    this.output = this.input.toLocal()
  }
}
</script>
