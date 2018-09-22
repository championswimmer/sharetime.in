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
      <h2>{{output.toFormat('hh:mm:ss a')}}</h2>
    </div>
  </section>
</template>
<script lang="ts">
import { DateTime } from 'luxon'
import { Component, Vue } from 'vue-property-decorator'
import { Timer } from 'vue-plugin-timers'

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
  get output(): DateTime {
    return this.input.toLocal()
  }

  created() {
    if (this.rParams.time !== 'now') {
      this.input = DateTime.fromFormat(this.rParams.time, 'HHmm', {
        zone: this.timezone
      })
    }
  }

  @Timer({ interval: 1000, repeat: true })
  timeTick() {
    this.input = DateTime.fromJSDate(new Date(), { zone: this.timezone })
  }
  mounted() {
    if (this.rParams.time !== 'now') {
      this.$timers.stop()
    }
  }
}
</script>
