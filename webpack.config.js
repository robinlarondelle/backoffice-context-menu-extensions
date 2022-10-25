const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = ({mode}) => {
  return {
    mode,
    devtool: mode === 'development' ? 'inline-source-map' : 'none',
    entry: {
      background: path.resolve(__dirname, 'src/background/index')
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false
      }),
      new CopyPlugin({
        patterns: [
          { from: 'images/*' },
          { from: 'manifest.json' }
        ]
      })
    ],
    output: {
      clean: true
    },
    watch: true
  }
};
