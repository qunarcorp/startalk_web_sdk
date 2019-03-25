/**
 * 这个文件可以修改serve的默认设置
 * 默认配置请看 `node_modules/packing/config/webpack.serve.babel.js`
 *
 * @param object webpackConfig 默认配置对象
 * @param object program packing-cli程序对象
 * @param object appConfig config/packing.js中的配置
 */

export default (webpackConfig/* , program, appConfig */) => {
  const config = webpackConfig;
  if (!config.resolve.alias) {
    config.resolve.alias = {};
  }
  config.resolve.alias.strophe = 'strophe.js';
  // config.resolve.alias['strophe.js'] = 'strophe.js';
  // console.log(config);
  // config.output.filename = `${filename}.js`;
  // console.log(config);
  // lib暴露在 window 下的名称
  // config.output.library = 'qtalkSDK';

  return config;
};
