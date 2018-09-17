<template>
  <div>
    <h2>What do you think {{tz}} means ?</h2>
    <div v-for="tzLink in tzLinks" :key="tzLink.id">
      <router-link :to="tzLink.link">{{ tzLink.name }}</router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { DateTime } from 'luxon'
import timezones, { TimeZone } from '@/assets/timezones'

@Component
export default class Time extends Vue {
  tz: string = this.$store.state.route.params.tz
  time: string = this.$store.state.route.params.time
  tzs: Array<TimeZone> = timezones.filter((t: any) => t.abbr === this.tz)
  tzLinks: Array<any> = []

  created() {
    if (this.tzs.length === 0) {
      // TODO: no timezones found
      return
    }
    if (this.tzs.length === 1) {
      this.$router.replace(`/${this.tzs[0].utc[0]}/${this.time}`)
      return
    }
    this.tzLinks = this.tzs.map((tz) => ({
      id: tz.utc[0],
      name: tz.value,
      link: `/${tz.utc[0]}/${this.time}`
    }))
  }
}
</script>
