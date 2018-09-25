<template>
  <section class="section">
    <div class="container has-text-centered">
      <div class="columns is-desktop is-centered content is-vcentered">
        <div class="is-narrow is-marginless">
          The time right now
        </div>
      </div>
      <div class="content">
        <h1 class="is-size-1">{{timeNow.toFormat('hh:mm:ss a')}}</h1>
        <div>in the timezone</div>
        <h3 class="is-marginless"><b>{{timeNow.zoneName}}</b> ({{timeNow.offsetNameShort}})</h3>
      </div>
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
  timeNow = DateTime.fromJSDate(new Date(), { zone: this.timezone })

  @Timer({ interval: 1000, repeat: true })
  timeTick() {
    this.timeNow = DateTime.fromJSDate(new Date(), { zone: this.timezone })
  }
}
</script>
