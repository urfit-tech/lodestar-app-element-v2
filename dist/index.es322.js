import { __exports as F } from "./index.es326.js";
var A;
function _() {
  if (A) return F;
  A = 1, F.byteLength = y, F.toByteArray = C, F.fromByteArray = B;
  for (var c = [], n = [], l = typeof Uint8Array < "u" ? Uint8Array : Array, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, p = d.length; s < p; ++s)
    c[s] = d[s], n[d.charCodeAt(s)] = s;
  n[45] = 62, n[95] = 63;
  function x(r) {
    var e = r.length;
    if (e % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var a = r.indexOf("=");
    a === -1 && (a = e);
    var o = a === e ? 0 : 4 - a % 4;
    return [a, o];
  }
  function y(r) {
    var e = x(r), a = e[0], o = e[1];
    return (a + o) * 3 / 4 - o;
  }
  function i(r, e, a) {
    return (e + a) * 3 / 4 - a;
  }
  function C(r) {
    var e, a = x(r), o = a[0], v = a[1], t = new l(i(r, o, v)), h = 0, u = v > 0 ? o - 4 : o, f;
    for (f = 0; f < u; f += 4)
      e = n[r.charCodeAt(f)] << 18 | n[r.charCodeAt(f + 1)] << 12 | n[r.charCodeAt(f + 2)] << 6 | n[r.charCodeAt(f + 3)], t[h++] = e >> 16 & 255, t[h++] = e >> 8 & 255, t[h++] = e & 255;
    return v === 2 && (e = n[r.charCodeAt(f)] << 2 | n[r.charCodeAt(f + 1)] >> 4, t[h++] = e & 255), v === 1 && (e = n[r.charCodeAt(f)] << 10 | n[r.charCodeAt(f + 1)] << 4 | n[r.charCodeAt(f + 2)] >> 2, t[h++] = e >> 8 & 255, t[h++] = e & 255), t;
  }
  function L(r) {
    return c[r >> 18 & 63] + c[r >> 12 & 63] + c[r >> 6 & 63] + c[r & 63];
  }
  function g(r, e, a) {
    for (var o, v = [], t = e; t < a; t += 3)
      o = (r[t] << 16 & 16711680) + (r[t + 1] << 8 & 65280) + (r[t + 2] & 255), v.push(L(o));
    return v.join("");
  }
  function B(r) {
    for (var e, a = r.length, o = a % 3, v = [], t = 16383, h = 0, u = a - o; h < u; h += t)
      v.push(g(r, h, h + t > u ? u : h + t));
    return o === 1 ? (e = r[a - 1], v.push(
      c[e >> 2] + c[e << 4 & 63] + "=="
    )) : o === 2 && (e = (r[a - 2] << 8) + r[a - 1], v.push(
      c[e >> 10] + c[e >> 4 & 63] + c[e << 2 & 63] + "="
    )), v.join("");
  }
  return F;
}
export {
  _ as __require
};
//# sourceMappingURL=index.es322.js.map
