<template>
  <div class="about">
    <section class="section">
      <div class="container has-text-centered">
        <div class="content">
          <img src="@/assets/logo.svg" width="30%" alt="logo">
          <h4>Ever had a conference with people from across the globe ?</h4>
          <p>Then I bet you want an easy way to <b>sharetime.in</b> your timezone</p>

          <h4>Had an interview scheduled with someone from the other end of the world ?</h4>
          <p>You must want to <b>sharetime.in</b> your timezone with the candidate</p>

          <h4>Asking <i>"in your time or mine"</i> all the time? </h4>
          <p>Won't it be so much better if they all <b>sharetime.in</b> their timezone?</p>
        </div>
        <div class="content">
          <h1>Try it now</h1>
          <p>Send the following URL to your friend in a different timezone</p>
          <div class="tags has-addons is-narrow">
            <code class="tag is-medium">sharetime.in/{{zone.abbr}}/{{timeNow.toFormat('HHmm')}}</code>
            <a @click="copyUrl" class="tag is-medium is-info"><i class="fas fa-copy"></i></a>
          </div>
          <p>(They should see the corresponding time in their timezone)</p>

          <router-link to="/how">
            <h6 class="has-text-link">Read more how it works 👉</h6>
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<style lang="scss" scoped>
.tags {
  justify-content: center;
}
.content h6 {
  margin: 1em;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Settings, Zone, DateTime } from 'luxon'
import timezones, { TimeZone } from '@/assets/timezones'

@Component
export default class About extends Vue {
  zone = timezones.find((zone) => zone.offset * 60 === Settings.defaultZone.offset(0))
  timeNow = DateTime.fromJSDate(new Date())
  get timeNowShareUrl() {
    return `https://sharetime.in/${this.zone!.abbr}/${this.timeNow.toFormat('HHmm')}`
  }
  async copyUrl() {
    // @ts-ignore
    await this.$copyText(this.timeNowShareUrl)
    this.$toast.open({
      message: 'Link Copied',
      container: '.content'
    })
  }
}
</script>
