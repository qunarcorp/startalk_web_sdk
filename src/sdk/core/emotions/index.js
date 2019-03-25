import { oneEmotions } from './oneEmotions';
import sdkConfig from '../../../../sdk_config';

const emotions = [
  oneEmotions
];

function getEmoticons() {
  const ret = [];
  emotions.forEach((item) => {
    const df = item.FACESETTING.DEFAULTFACE;
    const ns = df.categoryNew || df['-categery'];
    const child = {
      name: df['-name'],
      width: df['-width'],
      height: df['-height'],
      categery: ns,
      faces: []
    };
    df.FACE.forEach((f) => {
      const shortcut = f['-shortcut'];
      child.faces.push({
        url: sdkConfig.fileurl+`/file/v1/emo/d/e/${ns}/${shortcut.replace('/', '')}/fixed`,
        shortcut,
        tip: f['-tip']
      });
    });
    ret.push(child);
  });
  return ret;
}

module.exports = getEmoticons();
