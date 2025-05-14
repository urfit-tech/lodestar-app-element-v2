var i, f;
function h() {
  if (f) return i;
  f = 1;
  var c = "Expected a function", s = 1 / 0, y = 17976931348623157e292, o = NaN, p = "[object Symbol]", b = /^\s+|\s+$/g, I = /^[-+]0x[0-9a-f]+$/i, d = /^0b[01]+$/i, m = /^0o[0-7]+$/i, j = parseInt, T = Object.prototype, _ = T.toString;
  function a(r, t) {
    var n;
    if (typeof t != "function")
      throw new TypeError(c);
    return r = E(r), function() {
      return --r > 0 && (n = t.apply(this, arguments)), r <= 1 && (t = void 0), n;
    };
  }
  function g(r) {
    return a(2, r);
  }
  function e(r) {
    var t = typeof r;
    return !!r && (t == "object" || t == "function");
  }
  function u(r) {
    return !!r && typeof r == "object";
  }
  function N(r) {
    return typeof r == "symbol" || u(r) && _.call(r) == p;
  }
  function O(r) {
    if (!r)
      return r === 0 ? r : 0;
    if (r = R(r), r === s || r === -1 / 0) {
      var t = r < 0 ? -1 : 1;
      return t * y;
    }
    return r === r ? r : 0;
  }
  function E(r) {
    var t = O(r), n = t % 1;
    return t === t ? n ? t - n : t : 0;
  }
  function R(r) {
    if (typeof r == "number")
      return r;
    if (N(r))
      return o;
    if (e(r)) {
      var t = typeof r.valueOf == "function" ? r.valueOf() : r;
      r = e(t) ? t + "" : t;
    }
    if (typeof r != "string")
      return r === 0 ? r : +r;
    r = r.replace(b, "");
    var n = d.test(r);
    return n || m.test(r) ? j(r.slice(2), n ? 2 : 8) : I.test(r) ? o : +r;
  }
  return i = g, i;
}
export {
  h as __require
};
//# sourceMappingURL=index.es161.js.map
