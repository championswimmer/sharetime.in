<template>
  <div id="app">
    <nav class="navbar is-fixed-top">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img width="60" src="@/assets/logo.svg">
          <img width="200" src="@/assets/wordmark.svg">
        </router-link>
        <router-link class="navbar-item is-size-4" to="/">
          About
        </router-link>
        <router-link class="navbar-item is-size-4" to="/IST/0900">
          Example
        </router-link>
      </div>

    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
</style>
