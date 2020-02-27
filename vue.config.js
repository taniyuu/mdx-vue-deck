module.exports = {
  publicPath: process.env.__PUBLIC_PATH__ || '/',
  outputDir: process.env.__OUTPUT_DIR__ || 'dist',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /.mdx?$/,
          use: [
            'babel-loader',
            {
              loader: require.resolve('./markdown-loader')
            },
            '@mdx-js/vue-loader'
          ]
        }
      ]
    },
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@deck', process.env.SRC_DECK)
  }
}
