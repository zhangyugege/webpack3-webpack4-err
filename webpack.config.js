const path = require('path')

function getPath(tsPath) {
  return path.join(__dirname, tsPath)
}
module.exports = {
  entry: {
    index: getPath('index.js'),
  },
  resolve: {
    alias: {
      '@': getPath('src'),
    }
  },
  output: {
    path: getPath('/dist'),
    filename: '[name].js',
    publicPath: getPath('./dist/'),
    chunkFilename: '[name].js',

  }
}