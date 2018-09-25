<template>
  <div class="columns is-tablet">
    <div class="content column is-three-fifths-tablet is-offset-one-fifth-tablet has-text-centered">
      <h1>How does it work ?</h1>
      <h2>Mode 1: Share time in your timezone</h2>
      <p>
        Simply share a link of this format
        <code class="is-size-5">sharetime.in/{TZ}/{HHmm}</code>
        <br>
        <code>{TZ}</code> → timezone abbreviation 
        <br>
        <code>{HHmm}</code> → time in 24-hr format
        <br>
      </p>
      <p>
        For example, right now you can share
        <br>
        <code>sharetime.in/{{zone.abbr}}/{{timeNow.toFormat('HHmm')}}</code>
        <button class="button is-small copy-button" @click="copyUrl">
          <span class="icon is-small">
            <i class="fas fa-copy"></i>
          </span>
        </button>
        <br>
        with someone not in the same timezone
      </p>
      <p>
        They will see the time in their own timezone
        when they open the link
      </p>

      <h2>Mode 2: View current time (now) in any timezone</h2>
      <p>
        If you want to check the time in any timezone, go to the URL
        <br>
        <code>sharetime.in/{TZ}/now</code>
        <br>
        where <code>{TZ}</code> is the timezone codename
      </p>
      <p>
        For example try out any the following links
        <br>
        <router-link class="tz-link" to="/IST/now">
          <span class="tag is-small color-1">Indian Standard Time</span>
          <code>sharetime.in/IST/now</code>
        </router-link>
        <br>
        <router-link class="tz-link" to="/EDT/now">
          <span class="tag is-small color-2">Eastern Daylight Time</span>
          <code>sharetime.in/EDT/now</code>
        </router-link>
        <br>
        <router-link class="tz-link" to="/KST/now">
          <span class="tag is-small color-3">Korea Standard Time</span>
          <code>sharetime.in/KST/now</code>
        </router-link>
        <br>
        <small class="is-size-7">
          (You'll notice in last link, <b><u>KST</u></b> is ambiguous and we'll ask you
          which timezone you really mean)
        </small>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.tz-link {
  display: inline-block;
  padding: 0.5rem;
  .tag {
    font-weight: bold;
    color: white;
    &.color-1 {
      background-color: $sharetimeColor1;
    }
    &.color-2 {
      background-color: $sharetimeColor2;
    }
    &.color-3 {
      background-color: $sharetimeColor3;
    }
  }
}
.copy-button {
  border: none;
}
.content {
  padding: 1em;
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Settings, Zone, DateTime } from 'luxon'
import timezones, { TimeZone } from '@/assets/timezones'

@Component
export default class How extends Vue {
  zone?: TimeZone = timezones.find((zone) => zone.utc.includes(Settings.defaultZoneName))
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
  created() {}
}
</script>
