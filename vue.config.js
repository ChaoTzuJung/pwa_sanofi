const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
    name: 'Azchao Fitness',
    msTileColor: '#ffffff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
    manifestOptions: {
      short_name: 'Azchao',
      start_url: './?utm_source=web_app_manifest',
      display: 'standalone',
      background_color: '#FBB63F',
      orientation: 'portrait',
      gcm_sender_id: '103953800507',
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
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: './src/assets/firebase-messaging-sw.js',
          to: './firebase-messaging-sw.js',
        },
      ]),
    ],
  },
};
