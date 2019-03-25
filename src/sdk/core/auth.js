import dayjs from 'dayjs';
import publicEncrypt from '../common/utils/publicEncrypt';
import sdkConfig from '../../../sdk_config';

/**
 * 密码加密
 */

// 公钥 sdkConfig.pub_key_fullkey

const encrypt = raw => (
  publicEncrypt({
    key: sdkConfig.pub_key_fullkey,
    padding: 1
  }, raw).toString('base64')
);

export default (username, password) => {
  const uinfo = {
    p: password,
    a: 'testapp',
    u: username,
    d: dayjs().format('YYYY-MM-DD HH:mm:ss')
  };

  // eslint-disable-next-line
  const encrypted = encrypt(new Buffer(JSON.stringify(uinfo)));

  return encrypted.toString('base64');
};
