export default function flashCheck() {
  const log = (console || {}).log || function log() {};
  let flag = false;
  if (window.ActiveXObject) {
    try {
      const swf = new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash');
      if (swf) {
        flag = true;
      }
    } catch (e) {
      log(e);
    }
  } else {
    try {
      const swf = navigator.plugins['Shockwave Flash'];
      if (swf) {
        flag = true;
      }
    } catch (e) {
      log(e);
    }
  }
  return flag;
}
