var t, n;
function i() {
  if (n) return t;
  n = 1;
  function e(r) {
    var a = (r / 8 | 0) + (r % 8 === 0 ? 0 : 1);
    return a;
  }
  var o = {
    ES256: e(256),
    ES384: e(384),
    ES512: e(521)
  };
  function u(r) {
    var a = o[r];
    if (a)
      return a;
    throw new Error('Unknown algorithm "' + r + '"');
  }
  return t = u, t;
}
export {
  i as __require
};
//# sourceMappingURL=index.es320.js.map
