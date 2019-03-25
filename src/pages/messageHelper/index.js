import {
  encode,
  decode
} from '../../sdk/common/utils/messageHelper';
import sdkConfig from '../../../sdk_config';
const cnt = [];
cnt.push('243244<br>');
cnt.push('<div>dfdsfsf</div>');
cnt.push(' '+sdkConfig.fileurl+' ');
cnt.push('<img src="'+sdkConfig.fileurl+'/file/v1/emo/d/e/4018/163eb085e8018beff9a717fca4a5224d/fixed" data-emoticon="4018" />');
cnt.push('<img src="'+sdkConfig.fileurl+'/file/v1/emo/d/e/4018/163eb085e8018beff9a717fca4a5224d/fixed" />');

const test = encode(cnt.join(''));

console.log(test);

