'use strict';
const _0x57ba = [
  'querySelectorAll',
  'active',
  '198602urEmiO',
  '27875BmtkIm',
  'add',
  '1PEgNZr',
  'click',
  '45145qzrAFO',
  'classList',
  '7ZqDjid',
  '83TABNwA',
  'remove',
  '310889YpDmau',
  '3493GTCNSO',
  '163811hJYfOz',
  '472893UtleSA',
];
const _0x283d6b = _0xd6fc;
(function (_0x5bfa3a, _0x2fb919) {
  const _0x4987ed = _0xd6fc;
  while (!![]) {
    try {
      const _0x5adffc =
        parseInt(_0x4987ed(0x137)) +
        -parseInt(_0x4987ed(0x136)) * -parseInt(_0x4987ed(0x133)) +
        -parseInt(_0x4987ed(0x135)) +
        -parseInt(_0x4987ed(0x13b)) +
        parseInt(_0x4987ed(0x138)) +
        -parseInt(_0x4987ed(0x13c)) * parseInt(_0x4987ed(0x132)) +
        -parseInt(_0x4987ed(0x12e)) * -parseInt(_0x4987ed(0x130));
      if (_0x5adffc === _0x2fb919) break;
      else _0x5bfa3a['push'](_0x5bfa3a['shift']());
    } catch (_0x388bc1) {
      _0x5bfa3a['push'](_0x5bfa3a['shift']());
    }
  }
})(_0x57ba, 0x41390);
const allLiEl = document[_0x283d6b(0x139)]('li'),
  allImgEl = document[_0x283d6b(0x139)]('img');
function showActive(_0x2744f8) {
  const _0x1e1d26 = _0x283d6b;
  allLiEl['forEach']((_0x35f3b9) =>
    _0x35f3b9[_0x1e1d26(0x131)][_0x1e1d26(0x134)](_0x1e1d26(0x13a))
  ),
    allImgEl['forEach']((_0x2e193a) =>
      _0x2e193a[_0x1e1d26(0x131)]['remove'](_0x1e1d26(0x13a))
    ),
    allImgEl[_0x2744f8]['classList'][_0x1e1d26(0x12d)]('active'),
    allLiEl[_0x2744f8][_0x1e1d26(0x131)][_0x1e1d26(0x12d)](_0x1e1d26(0x13a));
}
function _0xd6fc(_0x5aeb12, _0x2fbb4b) {
  _0x5aeb12 = _0x5aeb12 - 0x12d;
  let _0x57ba83 = _0x57ba[_0x5aeb12];
  return _0x57ba83;
}
allLiEl['forEach']((_0x712107, _0x21128c) => {
  const _0x435bb1 = _0x283d6b;
  _0x712107['addEventListener'](_0x435bb1(0x12f), () => showActive(_0x21128c));
});
