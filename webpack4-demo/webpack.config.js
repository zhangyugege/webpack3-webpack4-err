const path = require('path')

function getPath(tsPath) {
  return path.join(__dirname, tsPath)
}
console.log(getPath('/src/index.js'))
exports.default = {
  entry: {
    main: getPath('/src/index.js')
  },
  output: {
    path: getPath('./dist/'),
    publicPath: getPath('./dist/'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    library: ''
  },
  resolve: {
    alias: {
      '@': getPath('src'),
    }
  },
  module: {
    rules: [
      {
        test: '/\.js$/',
        loader: 'babel-loader'
      }
    ]
  }
}