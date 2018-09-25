<template>
  <nav class="navbar is-fixed-top">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img width="24" src="@/assets/logo.svg">
        <img width="200" src="@/assets/wordmark.svg">
      </router-link>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{'is-active': expanded}" @click="toggle()">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" :class="{'is-active': expanded}" @click="toggle()">
      <router-link class="navbar-item is-size-4" to="/">
        About
      </router-link>
      <router-link class="navbar-item is-size-4" to="/how">
        How?
      </router-link>
    </div>

  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NavBar extends Vue {
  expanded = false
  toggle() {
    this.expanded = !this.expanded
  }
}
</script>
