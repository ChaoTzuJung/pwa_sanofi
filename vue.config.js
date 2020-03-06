const path = require('path');

// module.exports = {
//   configureWebpack: {
//     resolve: {
//       components: path.resolve(__dirname, 'src/components'),
//     },
//     extensions: ['*', '.js', '.vue', '.json'],
//   },
// };

// module.exports = {
//   configureWebpack: {
//     resolve: {
//       alias: {
//         "@": resolve("src")
//       }
//     }
//   }
// };

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'))
      .set('assets', resolve('src/assets'));
    config.resolve.extensions.merge(['.js', '.vue', '.json']);
  },
  pwa: {
    name: 'Sanofi Easiscore',
    themeColor: '#525CA3',
    msTileColor: '#ffffff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
    manifestOptions: {
      short_name: 'Sanofi',
      start_url: '.',
      display: 'standalone',
      background_color: '#ffffff',
      orientation: 'portrait',
    },
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png',
    },
    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      skipWaiting: true,
    },
  },
};
