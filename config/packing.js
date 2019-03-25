/**
 * 这个文件可以修改packing配置文件的默认设置
 * 默认配置请看 `node_modules/packing/config/packing.js`
 *
 * @param object packing 默认配置对象
 */
import path from 'path';
import packingGlob from 'packing-glob';
import sdkConfig from '../sdk_config.js';
export default (packing) => {
  const p = packing;

  p.stylelint.enable = false;
  p.eslint.enable = false;
  p.visualizer.enable = false;

  const { NODE_ENV } = process.env;

  // 网站自定义配置
  p.rewriteRules = {
    // 网站URL与模版的对应路由关系
    // '^/$': '/index',
    // '^/messageHelper$': '/messageHelper.pug',

    // http-bind接口转发
    '^/http-bind$': sdkConfig.httpurl+'/http-bind',
    // http接口
    '^/api/(.*)': sdkConfig.apiurl+'/$1',
    '^/ops/(.*)': sdkConfig.javaurl+'/ops/$1',
    '^/s/(.*)': sdkConfig.javaurl+'/s/$1',
    '^/package/(.*)': sdkConfig.javaurl+'/package/$1',
    '^/file/(.*)': sdkConfig.fileurl+'/file/$1'
  };

  p.path.entries = {
    'qtalk_web_sdk': ['babel-polyfill', path.resolve('./src/sdk/entry.js')]
  };
  // p.template.autoGeneration = false;

  p.commonChunks = {};

  if (NODE_ENV === 'local') {
    p.path.entries = () => {
      const entryFileName = 'index.js';
      const entryPath = 'src/pages';
      const entryPattern = `**/${entryFileName}`;
      const cwd = path.resolve(entryPath);

      // 文件名
      const libName = 'qtalk_web_sdk';
      // 版本号
      const libVersion = 'local';
      // 文件名@版本号
      const filename = `${libName}@${libVersion}`;

      const config = {
        [filename]: ['babel-polyfill', path.resolve('./src/sdk/entry.js')]
      };

      packingGlob(entryPattern, { cwd }).forEach((page) => {
        const key = page.replace(`/${entryFileName}`, '');
        config[key] = path.join(cwd, page);
      });

      return config;
    };
  }

  p.hot = false;
  // 开发环境端口号
  p.port.dev = 5001; 

  return p;
};
