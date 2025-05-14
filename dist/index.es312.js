import { __require as C } from "./index.es253.js";
import { __require as D } from "./index.es324.js";
var m, _;
function N() {
  if (_) return m;
  _ = 1;
  var p = C().Buffer, y = D(), v = 128, u = 0, B = 32, S = 16, b = 2, g = S | B | u << 6, E = b | u << 6;
  function A(e) {
    return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function x(e) {
    if (p.isBuffer(e))
      return e;
    if (typeof e == "string")
      return p.from(e, "base64");
    throw new TypeError("ECDSA signature must be a Base64 string or a Buffer");
  }
  function q(e, c) {
    e = x(e);
    var t = y(c), a = t + 1, n = e.length, r = 0;
    if (e[r++] !== g)
      throw new Error('Could not find expected "seq"');
    var h = e[r++];
    if (h === (v | 1) && (h = e[r++]), n - r < h)
      throw new Error('"seq" specified length of "' + h + '", only "' + (n - r) + '" remaining');
    if (e[r++] !== E)
      throw new Error('Could not find expected "int" for "r"');
    var i = e[r++];
    if (n - r - 2 < i)
      throw new Error('"r" specified length of "' + i + '", only "' + (n - r - 2) + '" available');
    if (a < i)
      throw new Error('"r" specified length of "' + i + '", max of "' + a + '" is acceptable');
    var l = r;
    if (r += i, e[r++] !== E)
      throw new Error('Could not find expected "int" for "s"');
    var s = e[r++];
    if (n - r !== s)
      throw new Error('"s" specified length of "' + s + '", expected "' + (n - r) + '"');
    if (a < s)
      throw new Error('"s" specified length of "' + s + '", max of "' + a + '" is acceptable');
    var f = r;
    if (r += s, r !== n)
      throw new Error('Expected to consume entire buffer, but "' + (n - r) + '" bytes remain');
    var o = t - i, w = t - s, d = p.allocUnsafe(o + i + w + s);
    for (r = 0; r < o; ++r)
      d[r] = 0;
    e.copy(d, r, l + Math.max(-o, 0), l + i), r = t;
    for (var P = r; r < P + w; ++r)
      d[r] = 0;
    return e.copy(d, r, f + Math.max(-w, 0), f + s), d = d.toString("base64"), d = A(d), d;
  }
  function T(e, c, t) {
    for (var a = 0; c + a < t && e[c + a] === 0; )
      ++a;
    var n = e[c + a] >= v;
    return n && --a, a;
  }
  function L(e, c) {
    e = x(e);
    var t = y(c), a = e.length;
    if (a !== t * 2)
      throw new TypeError('"' + c + '" signatures must be "' + t * 2 + '" bytes, saw "' + a + '"');
    var n = T(e, 0, t), r = T(e, t, e.length), h = t - n, i = t - r, l = 2 + h + 1 + 1 + i, s = l < v, f = p.allocUnsafe((s ? 2 : 3) + l), o = 0;
    return f[o++] = g, s ? f[o++] = l : (f[o++] = v | 1, f[o++] = l & 255), f[o++] = E, f[o++] = h, n < 0 ? (f[o++] = 0, o += e.copy(f, o, 0, t)) : o += e.copy(f, o, n, t), f[o++] = E, f[o++] = i, r < 0 ? (f[o++] = 0, e.copy(f, o, t)) : e.copy(f, o, t + r), f;
  }
  return m = {
    derToJose: q,
    joseToDer: L
  }, m;
}
export {
  N as __require
};
//# sourceMappingURL=index.es312.js.map
