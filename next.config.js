module.exports = {
    exportPathMap: function () {
      return {
        '/': { page: '/' }
      }
    },
    // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      // Important: return the modified config
      // config.externals = {
      //   fs: 'fs',
      //   net: 'net',
      // };
      //config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
      // return config
    // },
    // webpackDevMiddleware: (config) => {
    //   // Perform customizations to webpack dev middleware config
    //   // Important: return the modified config
    //   return config
    // },
  }