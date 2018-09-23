<template>
  <section class="section">
    <div class="container has-text-centered">
      <div class="columns is-centered is-vcentered">
        <div class="column is-narrow">Uh oh!</div>
        <h3 class="column is-narrow">{{tz}}</h3>
        <div class="column is-narrow">means more than one timezone</div>
      </div>
    </div>
    <div class="section has-text-centered">
      <div class="columns is-centered">
        <div class="column">
          What might it stand for ?
        </div>
      </div>
      <div class="columns is-centered">
        <div class="is-narrow card" v-for="tzLink in tzLinks" :key="tzLink.id">
          <router-link class="card-content" :to="tzLink.link">
            <div class="card-content has-text-centered has-text-weight-bold has-text-primary">
              <big>{{ tzLink.name }} ➡️</big>
            </div>
            <div class="card-footer">
              <div class="card-footer-item">
                <small class="has-text-weight-light has-text-grey">{{ tzLink.descr }}</small>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

  </section>
</template>
<style lang="scss" scoped>
.container > .columns {
  * {
    padding: 0 0.25rem;
  }
  h3 {
    font-size: 2rem;
  }
}
.card {
  margin: 1rem;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
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
      descr: tz.text,
      link: `/${tz.utc[0]}/${this.time}`
    }))
  }
}
</script>
