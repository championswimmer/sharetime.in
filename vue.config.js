module.exports = {
  pwa: {
    themeColor: '#7d65ca',
    workboxOptions: {
      offlineGoogleAnalytics: true,
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'staleWhileRevalidate',
          options: {
            cacheName: 'sharetime.in',
            expiration: {
              maxAgeSeconds: 60 * 60 * 12 // 12 hour cache
            }
          }
        }
      ]
    }
  }
}
