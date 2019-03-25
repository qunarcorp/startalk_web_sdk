/**
 * 这个文件可以修改build的默认设置
 * 默认配置请看 `node_modules/packing/config/webpack.build.babel.js`
 *
 * @param object webpackConfig 默认配置对象
 * @param object program packing-cli程序对象
 * @param object appConfig config/packing.js中的配置
 */

export default (webpackConfig/* , program, appConfig */) => {
  const config = webpackConfig;

  // 文件名
  const libName = 'qtalk_web_sdk';

  // 版本号
  const libVersion = process.env.npm_package_version;

  // 文件名@版本号
  const filename = `${libName}@${libVersion}`;

  config.output.filename = `${filename}.js`;

  if (!config.resolve.alias) {
    config.resolve.alias = {};
  }
  config.resolve.alias.strophe = 'strophe.js';
  // config.resolve.alias['strophe.js'] = 'strophe.js';

  // lib暴露在 window 下的名称
  // config.output.library = 'qtalkSDK';

  return config;
};
