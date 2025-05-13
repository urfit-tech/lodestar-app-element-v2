var i, f;
function q() {
  if (f) return i;
  f = 1;
  var s = 1 / 0, c = 17976931348623157e292, e = NaN, b = "[object Symbol]", y = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, I = /^0b[01]+$/i, g = /^0o[0-7]+$/i, m = parseInt, j = Object.prototype, d = j.toString;
  function N(r) {
    return typeof r == "number" && r == S(r);
  }
  function o(r) {
    var t = typeof r;
    return !!r && (t == "object" || t == "function");
  }
  function O(r) {
    return !!r && typeof r == "object";
  }
  function _(r) {
    return typeof r == "symbol" || O(r) && d.call(r) == b;
  }
  function T(r) {
    if (!r)
      return r === 0 ? r : 0;
    if (r = $(r), r === s || r === -1 / 0) {
      var t = r < 0 ? -1 : 1;
      return t * c;
    }
    return r === r ? r : 0;
  }
  function S(r) {
    var t = T(r), n = t % 1;
    return t === t ? n ? t - n : t : 0;
  }
  function $(r) {
    if (typeof r == "number")
      return r;
    if (_(r))
      return e;
    if (o(r)) {
      var t = typeof r.valueOf == "function" ? r.valueOf() : r;
      r = o(t) ? t + "" : t;
    }
    if (typeof r != "string")
      return r === 0 ? r : +r;
    r = r.replace(y, "");
    var n = I.test(r);
    return n || g.test(r) ? m(r.slice(2), n ? 2 : 8) : p.test(r) ? e : +r;
  }
  return i = N, i;
}
export {
  q as __require
};
//# sourceMappingURL=index.es74.js.map
