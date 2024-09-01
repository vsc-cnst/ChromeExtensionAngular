module.exports = {
  entry: {
    'service-worker': 'src/chrome-extension/service-worker.ts',
    'content-script': 'src/chrome-extension/content-script.ts',
  },
  optimization: {
    runtimeChunk: false,
  },
  cache: false,
}
