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
      .set('utils', resolve('src/utils'));
    config.resolve.extensions.merge(['.js', '.vue', '.json']);
  },
};
