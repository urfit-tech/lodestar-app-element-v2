import { __exports as n } from "./index.es254.js";
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var d;
function q() {
  return d ? n : (d = 1, n.read = function(s, a, N, w, M) {
    var t, r, h = M * 8 - w - 1, e = (1 << h) - 1, f = e >> 1, i = -7, o = N ? M - 1 : 0, x = N ? -1 : 1, p = s[a + o];
    for (o += x, t = p & (1 << -i) - 1, p >>= -i, i += h; i > 0; t = t * 256 + s[a + o], o += x, i -= 8)
      ;
    for (r = t & (1 << -i) - 1, t >>= -i, i += w; i > 0; r = r * 256 + s[a + o], o += x, i -= 8)
      ;
    if (t === 0)
      t = 1 - f;
    else {
      if (t === e)
        return r ? NaN : (p ? -1 : 1) * (1 / 0);
      r = r + Math.pow(2, w), t = t - f;
    }
    return (p ? -1 : 1) * r * Math.pow(2, t - w);
  }, n.write = function(s, a, N, w, M, t) {
    var r, h, e, f = t * 8 - M - 1, i = (1 << f) - 1, o = i >> 1, x = M === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = w ? 0 : t - 1, c = w ? 1 : -1, I = a < 0 || a === 0 && 1 / a < 0 ? 1 : 0;
    for (a = Math.abs(a), isNaN(a) || a === 1 / 0 ? (h = isNaN(a) ? 1 : 0, r = i) : (r = Math.floor(Math.log(a) / Math.LN2), a * (e = Math.pow(2, -r)) < 1 && (r--, e *= 2), r + o >= 1 ? a += x / e : a += x * Math.pow(2, 1 - o), a * e >= 2 && (r++, e /= 2), r + o >= i ? (h = 0, r = i) : r + o >= 1 ? (h = (a * e - 1) * Math.pow(2, M), r = r + o) : (h = a * Math.pow(2, o - 1) * Math.pow(2, M), r = 0)); M >= 8; s[N + p] = h & 255, p += c, h /= 256, M -= 8)
      ;
    for (r = r << M | h, f += M; f > 0; s[N + p] = r & 255, p += c, r /= 256, f -= 8)
      ;
    s[N + p - c] |= I * 128;
  }, n);
}
export {
  q as __require
};
//# sourceMappingURL=index.es249.js.map
