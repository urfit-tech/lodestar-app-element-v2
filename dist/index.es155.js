var y, A;
function tr() {
  if (A) return y;
  A = 1;
  var O = 1 / 0, b = 9007199254740991, d = 17976931348623157e292, a = NaN, I = "[object Arguments]", T = "[object Function]", j = "[object GeneratorFunction]", N = "[object String]", m = "[object Symbol]", S = /^\s+|\s+$/g, _ = /^[-+]0x[0-9a-f]+$/i, E = /^0b[01]+$/i, F = /^0o[0-7]+$/i, L = /^(?:0|[1-9]\d*)$/, w = parseInt;
  function x(r, n) {
    for (var t = -1, i = r ? r.length : 0, e = Array(i); ++t < i; )
      e[t] = n(r[t], t, r);
    return e;
  }
  function M(r, n, t, i) {
    for (var e = r.length, s = t + -1; ++s < e; )
      if (n(r[s], s, r))
        return s;
    return -1;
  }
  function P(r, n, t) {
    if (n !== n)
      return M(r, $, t);
    for (var i = t - 1, e = r.length; ++i < e; )
      if (r[i] === n)
        return i;
    return -1;
  }
  function $(r) {
    return r !== r;
  }
  function R(r, n) {
    for (var t = -1, i = Array(r); ++t < r; )
      i[t] = n(t);
    return i;
  }
  function q(r, n) {
    return x(n, function(t) {
      return r[t];
    });
  }
  function B(r, n) {
    return function(t) {
      return r(n(t));
    };
  }
  var o = Object.prototype, c = o.hasOwnProperty, f = o.toString, G = o.propertyIsEnumerable, K = B(Object.keys, Object), k = Math.max;
  function X(r, n) {
    var t = h(r) || Y(r) ? R(r.length, String) : [], i = t.length, e = !!i;
    for (var s in r)
      c.call(r, s) && !(e && (s == "length" || H(s, i))) && t.push(s);
    return t;
  }
  function C(r) {
    if (!U(r))
      return K(r);
    var n = [];
    for (var t in Object(r))
      c.call(r, t) && t != "constructor" && n.push(t);
    return n;
  }
  function H(r, n) {
    return n = n ?? b, !!n && (typeof r == "number" || L.test(r)) && r > -1 && r % 1 == 0 && r < n;
  }
  function U(r) {
    var n = r && r.constructor, t = typeof n == "function" && n.prototype || o;
    return r === t;
  }
  function V(r, n, t, i) {
    r = u(r) ? r : nr(r), t = t && !i ? l(t) : 0;
    var e = r.length;
    return t < 0 && (t = k(e + t, 0)), Q(r) ? t <= e && r.indexOf(n, t) > -1 : !!e && P(r, n, t) > -1;
  }
  function Y(r) {
    return z(r) && c.call(r, "callee") && (!G.call(r, "callee") || f.call(r) == I);
  }
  var h = Array.isArray;
  function u(r) {
    return r != null && J(r.length) && !D(r);
  }
  function z(r) {
    return p(r) && u(r);
  }
  function D(r) {
    var n = g(r) ? f.call(r) : "";
    return n == T || n == j;
  }
  function J(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= b;
  }
  function g(r) {
    var n = typeof r;
    return !!r && (n == "object" || n == "function");
  }
  function p(r) {
    return !!r && typeof r == "object";
  }
  function Q(r) {
    return typeof r == "string" || !h(r) && p(r) && f.call(r) == N;
  }
  function W(r) {
    return typeof r == "symbol" || p(r) && f.call(r) == m;
  }
  function Z(r) {
    if (!r)
      return r === 0 ? r : 0;
    if (r = v(r), r === O || r === -1 / 0) {
      var n = r < 0 ? -1 : 1;
      return n * d;
    }
    return r === r ? r : 0;
  }
  function l(r) {
    var n = Z(r), t = n % 1;
    return n === n ? t ? n - t : n : 0;
  }
  function v(r) {
    if (typeof r == "number")
      return r;
    if (W(r))
      return a;
    if (g(r)) {
      var n = typeof r.valueOf == "function" ? r.valueOf() : r;
      r = g(n) ? n + "" : n;
    }
    if (typeof r != "string")
      return r === 0 ? r : +r;
    r = r.replace(S, "");
    var t = E.test(r);
    return t || F.test(r) ? w(r.slice(2), t ? 2 : 8) : _.test(r) ? a : +r;
  }
  function rr(r) {
    return u(r) ? X(r) : C(r);
  }
  function nr(r) {
    return r ? q(r, rr(r)) : [];
  }
  return y = V, y;
}
export {
  tr as __require
};
//# sourceMappingURL=index.es155.js.map
