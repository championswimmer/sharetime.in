// Only to resolve in Webstorm (not actually used)
module.exports = {
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src'),
      '~*': require('path').resolve(__dirname, 'node_modules/$1')
    }
  }
}
