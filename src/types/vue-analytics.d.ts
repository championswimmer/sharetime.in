declare module 'vue-analytics' {
  import { PluginObject } from 'vue/types/plugin'
  import { VueRouter } from 'vue-router/types/router'
  interface VueAnalyticsOptions {
    id: string
    router?: VueRouter
    autoTracking?: {
      screenview?: boolean
    }
  }
  const VueAnalytics: PluginObject<VueAnalyticsOptions>
  export default VueAnalytics
}
