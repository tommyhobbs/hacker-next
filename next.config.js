const swPrecachewebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  webpack: config => {
    config.plugins.push(
      new swPrecachewebpackPlugin({
        minify: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/
          }
        ]
      })
    );

    return config;
  }
};
