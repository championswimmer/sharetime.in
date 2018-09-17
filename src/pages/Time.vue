<template>
  <div class="about">
    <h2>Timezone: {{tz}}</h2>
    <h3>Time: {{time}}</h3>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Time extends Vue {
  tz = this.$store.state.route.params.tz
  time = this.$store.state.route.params.time
  mounted() {}
}
</script>
