var n, i;
function y() {
  if (i) return n;
  i = 1;
  var a = "[object Object]";
  function u(t) {
    var r = !1;
    if (t != null && typeof t.toString != "function")
      try {
        r = !!(t + "");
      } catch {
      }
    return r;
  }
  function f(t, r) {
    return function(o) {
      return t(r(o));
    };
  }
  var s = Function.prototype, e = Object.prototype, c = s.toString, b = e.hasOwnProperty, j = c.call(Object), p = e.toString, l = f(Object.getPrototypeOf, Object);
  function O(t) {
    return !!t && typeof t == "object";
  }
  function g(t) {
    if (!O(t) || p.call(t) != a || u(t))
      return !1;
    var r = l(t);
    if (r === null)
      return !0;
    var o = b.call(r, "constructor") && r.constructor;
    return typeof o == "function" && o instanceof o && c.call(o) == j;
  }
  return n = g, n;
}
export {
  y as __require
};
//# sourceMappingURL=index.es159.js.map
