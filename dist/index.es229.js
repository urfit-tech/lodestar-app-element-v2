import { commonjsGlobal as O } from "./index.es62.js";
import { __exports as S } from "./index.es242.js";
import { __require as mr } from "./index.es243.js";
import { __require as yr } from "./index.es244.js";
import { __require as Ar } from "./index.es245.js";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var z;
function Tr() {
  return z ? S : (z = 1, function(m) {
    var U = mr(), _ = yr(), Y = Ar();
    m.Buffer = u, m.SlowBuffer = b, m.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = O.TYPED_ARRAY_SUPPORT !== void 0 ? O.TYPED_ARRAY_SUPPORT : Z(), m.kMaxLength = y();
    function Z() {
      try {
        var n = new Uint8Array(1);
        return n.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
          return 42;
        } }, n.foo() === 42 && // typed array instances can be augmented
        typeof n.subarray == "function" && // chrome 9-10 lack `subarray`
        n.subarray(1, 1).byteLength === 0;
      } catch {
        return !1;
      }
    }
    function y() {
      return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }
    function x(n, r) {
      if (y() < r)
        throw new RangeError("Invalid typed array length");
      return u.TYPED_ARRAY_SUPPORT ? (n = new Uint8Array(r), n.__proto__ = u.prototype) : (n === null && (n = new u(r)), n.length = r), n;
    }
    function u(n, r, i) {
      if (!u.TYPED_ARRAY_SUPPORT && !(this instanceof u))
        return new u(n, r, i);
      if (typeof n == "number") {
        if (typeof r == "string")
          throw new Error(
            "If encoding is specified then the first argument must be a string"
          );
        return T(this, n);
      }
      return P(this, n, r, i);
    }
    u.poolSize = 8192, u._augment = function(n) {
      return n.__proto__ = u.prototype, n;
    };
    function P(n, r, i, e) {
      if (typeof r == "number")
        throw new TypeError('"value" argument must not be a number');
      return typeof ArrayBuffer < "u" && r instanceof ArrayBuffer ? Q(n, r, i, e) : typeof r == "string" ? K(n, r, i) : d(n, r);
    }
    u.from = function(n, r, i) {
      return P(null, n, r, i);
    }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
      value: null,
      configurable: !0
    }));
    function C(n) {
      if (typeof n != "number")
        throw new TypeError('"size" argument must be a number');
      if (n < 0)
        throw new RangeError('"size" argument must not be negative');
    }
    function $(n, r, i, e) {
      return C(r), r <= 0 ? x(n, r) : i !== void 0 ? typeof e == "string" ? x(n, r).fill(i, e) : x(n, r).fill(i) : x(n, r);
    }
    u.alloc = function(n, r, i) {
      return $(null, n, r, i);
    };
    function T(n, r) {
      if (C(r), n = x(n, r < 0 ? 0 : D(r) | 0), !u.TYPED_ARRAY_SUPPORT)
        for (var i = 0; i < r; ++i)
          n[i] = 0;
      return n;
    }
    u.allocUnsafe = function(n) {
      return T(null, n);
    }, u.allocUnsafeSlow = function(n) {
      return T(null, n);
    };
    function K(n, r, i) {
      if ((typeof i != "string" || i === "") && (i = "utf8"), !u.isEncoding(i))
        throw new TypeError('"encoding" must be a valid string encoding');
      var e = k(r, i) | 0;
      n = x(n, e);
      var t = n.write(r, i);
      return t !== e && (n = n.slice(0, t)), n;
    }
    function g(n, r) {
      var i = r.length < 0 ? 0 : D(r.length) | 0;
      n = x(n, i);
      for (var e = 0; e < i; e += 1)
        n[e] = r[e] & 255;
      return n;
    }
    function Q(n, r, i, e) {
      if (r.byteLength, i < 0 || r.byteLength < i)
        throw new RangeError("'offset' is out of bounds");
      if (r.byteLength < i + (e || 0))
        throw new RangeError("'length' is out of bounds");
      return i === void 0 && e === void 0 ? r = new Uint8Array(r) : e === void 0 ? r = new Uint8Array(r, i) : r = new Uint8Array(r, i, e), u.TYPED_ARRAY_SUPPORT ? (n = r, n.__proto__ = u.prototype) : n = g(n, r), n;
    }
    function d(n, r) {
      if (u.isBuffer(r)) {
        var i = D(r.length) | 0;
        return n = x(n, i), n.length === 0 || r.copy(n, 0, 0, i), n;
      }
      if (r) {
        if (typeof ArrayBuffer < "u" && r.buffer instanceof ArrayBuffer || "length" in r)
          return typeof r.length != "number" || _r(r.length) ? x(n, 0) : g(n, r);
        if (r.type === "Buffer" && Y(r.data))
          return g(n, r.data);
      }
      throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }
    function D(n) {
      if (n >= y())
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + y().toString(16) + " bytes");
      return n | 0;
    }
    function b(n) {
      return +n != n && (n = 0), u.alloc(+n);
    }
    u.isBuffer = function(r) {
      return !!(r != null && r._isBuffer);
    }, u.compare = function(r, i) {
      if (!u.isBuffer(r) || !u.isBuffer(i))
        throw new TypeError("Arguments must be Buffers");
      if (r === i) return 0;
      for (var e = r.length, t = i.length, f = 0, o = Math.min(e, t); f < o; ++f)
        if (r[f] !== i[f]) {
          e = r[f], t = i[f];
          break;
        }
      return e < t ? -1 : t < e ? 1 : 0;
    }, u.isEncoding = function(r) {
      switch (String(r).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }, u.concat = function(r, i) {
      if (!Y(r))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (r.length === 0)
        return u.alloc(0);
      var e;
      if (i === void 0)
        for (i = 0, e = 0; e < r.length; ++e)
          i += r[e].length;
      var t = u.allocUnsafe(i), f = 0;
      for (e = 0; e < r.length; ++e) {
        var o = r[e];
        if (!u.isBuffer(o))
          throw new TypeError('"list" argument must be an Array of Buffers');
        o.copy(t, f), f += o.length;
      }
      return t;
    };
    function k(n, r) {
      if (u.isBuffer(n))
        return n.length;
      if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(n) || n instanceof ArrayBuffer))
        return n.byteLength;
      typeof n != "string" && (n = "" + n);
      var i = n.length;
      if (i === 0) return 0;
      for (var e = !1; ; )
        switch (r) {
          case "ascii":
          case "latin1":
          case "binary":
            return i;
          case "utf8":
          case "utf-8":
          case void 0:
            return R(n).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return i * 2;
          case "hex":
            return i >>> 1;
          case "base64":
            return V(n).length;
          default:
            if (e) return R(n).length;
            r = ("" + r).toLowerCase(), e = !0;
        }
    }
    u.byteLength = k;
    function j(n, r, i) {
      var e = !1;
      if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((i === void 0 || i > this.length) && (i = this.length), i <= 0) || (i >>>= 0, r >>>= 0, i <= r))
        return "";
      for (n || (n = "utf8"); ; )
        switch (n) {
          case "hex":
            return pr(this, r, i);
          case "utf8":
          case "utf-8":
            return N(this, r, i);
          case "ascii":
            return or(this, r, i);
          case "latin1":
          case "binary":
            return hr(this, r, i);
          case "base64":
            return ur(this, r, i);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ar(this, r, i);
          default:
            if (e) throw new TypeError("Unknown encoding: " + n);
            n = (n + "").toLowerCase(), e = !0;
        }
    }
    u.prototype._isBuffer = !0;
    function E(n, r, i) {
      var e = n[r];
      n[r] = n[i], n[i] = e;
    }
    u.prototype.swap16 = function() {
      var r = this.length;
      if (r % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var i = 0; i < r; i += 2)
        E(this, i, i + 1);
      return this;
    }, u.prototype.swap32 = function() {
      var r = this.length;
      if (r % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var i = 0; i < r; i += 4)
        E(this, i, i + 3), E(this, i + 1, i + 2);
      return this;
    }, u.prototype.swap64 = function() {
      var r = this.length;
      if (r % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var i = 0; i < r; i += 8)
        E(this, i, i + 7), E(this, i + 1, i + 6), E(this, i + 2, i + 5), E(this, i + 3, i + 4);
      return this;
    }, u.prototype.toString = function() {
      var r = this.length | 0;
      return r === 0 ? "" : arguments.length === 0 ? N(this, 0, r) : j.apply(this, arguments);
    }, u.prototype.equals = function(r) {
      if (!u.isBuffer(r)) throw new TypeError("Argument must be a Buffer");
      return this === r ? !0 : u.compare(this, r) === 0;
    }, u.prototype.inspect = function() {
      var r = "", i = m.INSPECT_MAX_BYTES;
      return this.length > 0 && (r = this.toString("hex", 0, i).match(/.{2}/g).join(" "), this.length > i && (r += " ... ")), "<Buffer " + r + ">";
    }, u.prototype.compare = function(r, i, e, t, f) {
      if (!u.isBuffer(r))
        throw new TypeError("Argument must be a Buffer");
      if (i === void 0 && (i = 0), e === void 0 && (e = r ? r.length : 0), t === void 0 && (t = 0), f === void 0 && (f = this.length), i < 0 || e > r.length || t < 0 || f > this.length)
        throw new RangeError("out of range index");
      if (t >= f && i >= e)
        return 0;
      if (t >= f)
        return -1;
      if (i >= e)
        return 1;
      if (i >>>= 0, e >>>= 0, t >>>= 0, f >>>= 0, this === r) return 0;
      for (var o = f - t, h = e - i, p = Math.min(o, h), a = this.slice(t, f), s = r.slice(i, e), c = 0; c < p; ++c)
        if (a[c] !== s[c]) {
          o = a[c], h = s[c];
          break;
        }
      return o < h ? -1 : h < o ? 1 : 0;
    };
    function M(n, r, i, e, t) {
      if (n.length === 0) return -1;
      if (typeof i == "string" ? (e = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, isNaN(i) && (i = t ? 0 : n.length - 1), i < 0 && (i = n.length + i), i >= n.length) {
        if (t) return -1;
        i = n.length - 1;
      } else if (i < 0)
        if (t) i = 0;
        else return -1;
      if (typeof r == "string" && (r = u.from(r, e)), u.isBuffer(r))
        return r.length === 0 ? -1 : L(n, r, i, e, t);
      if (typeof r == "number")
        return r = r & 255, u.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? t ? Uint8Array.prototype.indexOf.call(n, r, i) : Uint8Array.prototype.lastIndexOf.call(n, r, i) : L(n, [r], i, e, t);
      throw new TypeError("val must be string, number or Buffer");
    }
    function L(n, r, i, e, t) {
      var f = 1, o = n.length, h = r.length;
      if (e !== void 0 && (e = String(e).toLowerCase(), e === "ucs2" || e === "ucs-2" || e === "utf16le" || e === "utf-16le")) {
        if (n.length < 2 || r.length < 2)
          return -1;
        f = 2, o /= 2, h /= 2, i /= 2;
      }
      function p(X, H) {
        return f === 1 ? X[H] : X.readUInt16BE(H * f);
      }
      var a;
      if (t) {
        var s = -1;
        for (a = i; a < o; a++)
          if (p(n, a) === p(r, s === -1 ? 0 : a - s)) {
            if (s === -1 && (s = a), a - s + 1 === h) return s * f;
          } else
            s !== -1 && (a -= a - s), s = -1;
      } else
        for (i + h > o && (i = o - h), a = i; a >= 0; a--) {
          for (var c = !0, I = 0; I < h; I++)
            if (p(n, a + I) !== p(r, I)) {
              c = !1;
              break;
            }
          if (c) return a;
        }
      return -1;
    }
    u.prototype.includes = function(r, i, e) {
      return this.indexOf(r, i, e) !== -1;
    }, u.prototype.indexOf = function(r, i, e) {
      return M(this, r, i, e, !0);
    }, u.prototype.lastIndexOf = function(r, i, e) {
      return M(this, r, i, e, !1);
    };
    function rr(n, r, i, e) {
      i = Number(i) || 0;
      var t = n.length - i;
      e ? (e = Number(e), e > t && (e = t)) : e = t;
      var f = r.length;
      if (f % 2 !== 0) throw new TypeError("Invalid hex string");
      e > f / 2 && (e = f / 2);
      for (var o = 0; o < e; ++o) {
        var h = parseInt(r.substr(o * 2, 2), 16);
        if (isNaN(h)) return o;
        n[i + o] = h;
      }
      return o;
    }
    function ir(n, r, i, e) {
      return B(R(r, n.length - i), n, i, e);
    }
    function v(n, r, i, e) {
      return B(xr(r), n, i, e);
    }
    function nr(n, r, i, e) {
      return v(n, r, i, e);
    }
    function er(n, r, i, e) {
      return B(V(r), n, i, e);
    }
    function tr(n, r, i, e) {
      return B(Er(r, n.length - i), n, i, e);
    }
    u.prototype.write = function(r, i, e, t) {
      if (i === void 0)
        t = "utf8", e = this.length, i = 0;
      else if (e === void 0 && typeof i == "string")
        t = i, e = this.length, i = 0;
      else if (isFinite(i))
        i = i | 0, isFinite(e) ? (e = e | 0, t === void 0 && (t = "utf8")) : (t = e, e = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      var f = this.length - i;
      if ((e === void 0 || e > f) && (e = f), r.length > 0 && (e < 0 || i < 0) || i > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      t || (t = "utf8");
      for (var o = !1; ; )
        switch (t) {
          case "hex":
            return rr(this, r, i, e);
          case "utf8":
          case "utf-8":
            return ir(this, r, i, e);
          case "ascii":
            return v(this, r, i, e);
          case "latin1":
          case "binary":
            return nr(this, r, i, e);
          case "base64":
            return er(this, r, i, e);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return tr(this, r, i, e);
          default:
            if (o) throw new TypeError("Unknown encoding: " + t);
            t = ("" + t).toLowerCase(), o = !0;
        }
    }, u.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function ur(n, r, i) {
      return r === 0 && i === n.length ? U.fromByteArray(n) : U.fromByteArray(n.slice(r, i));
    }
    function N(n, r, i) {
      i = Math.min(n.length, i);
      for (var e = [], t = r; t < i; ) {
        var f = n[t], o = null, h = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
        if (t + h <= i) {
          var p, a, s, c;
          switch (h) {
            case 1:
              f < 128 && (o = f);
              break;
            case 2:
              p = n[t + 1], (p & 192) === 128 && (c = (f & 31) << 6 | p & 63, c > 127 && (o = c));
              break;
            case 3:
              p = n[t + 1], a = n[t + 2], (p & 192) === 128 && (a & 192) === 128 && (c = (f & 15) << 12 | (p & 63) << 6 | a & 63, c > 2047 && (c < 55296 || c > 57343) && (o = c));
              break;
            case 4:
              p = n[t + 1], a = n[t + 2], s = n[t + 3], (p & 192) === 128 && (a & 192) === 128 && (s & 192) === 128 && (c = (f & 15) << 18 | (p & 63) << 12 | (a & 63) << 6 | s & 63, c > 65535 && c < 1114112 && (o = c));
          }
        }
        o === null ? (o = 65533, h = 1) : o > 65535 && (o -= 65536, e.push(o >>> 10 & 1023 | 55296), o = 56320 | o & 1023), e.push(o), t += h;
      }
      return fr(e);
    }
    var q = 4096;
    function fr(n) {
      var r = n.length;
      if (r <= q)
        return String.fromCharCode.apply(String, n);
      for (var i = "", e = 0; e < r; )
        i += String.fromCharCode.apply(
          String,
          n.slice(e, e += q)
        );
      return i;
    }
    function or(n, r, i) {
      var e = "";
      i = Math.min(n.length, i);
      for (var t = r; t < i; ++t)
        e += String.fromCharCode(n[t] & 127);
      return e;
    }
    function hr(n, r, i) {
      var e = "";
      i = Math.min(n.length, i);
      for (var t = r; t < i; ++t)
        e += String.fromCharCode(n[t]);
      return e;
    }
    function pr(n, r, i) {
      var e = n.length;
      (!r || r < 0) && (r = 0), (!i || i < 0 || i > e) && (i = e);
      for (var t = "", f = r; f < i; ++f)
        t += wr(n[f]);
      return t;
    }
    function ar(n, r, i) {
      for (var e = n.slice(r, i), t = "", f = 0; f < e.length; f += 2)
        t += String.fromCharCode(e[f] + e[f + 1] * 256);
      return t;
    }
    u.prototype.slice = function(r, i) {
      var e = this.length;
      r = ~~r, i = i === void 0 ? e : ~~i, r < 0 ? (r += e, r < 0 && (r = 0)) : r > e && (r = e), i < 0 ? (i += e, i < 0 && (i = 0)) : i > e && (i = e), i < r && (i = r);
      var t;
      if (u.TYPED_ARRAY_SUPPORT)
        t = this.subarray(r, i), t.__proto__ = u.prototype;
      else {
        var f = i - r;
        t = new u(f, void 0);
        for (var o = 0; o < f; ++o)
          t[o] = this[o + r];
      }
      return t;
    };
    function l(n, r, i) {
      if (n % 1 !== 0 || n < 0) throw new RangeError("offset is not uint");
      if (n + r > i) throw new RangeError("Trying to access beyond buffer length");
    }
    u.prototype.readUIntLE = function(r, i, e) {
      r = r | 0, i = i | 0, e || l(r, i, this.length);
      for (var t = this[r], f = 1, o = 0; ++o < i && (f *= 256); )
        t += this[r + o] * f;
      return t;
    }, u.prototype.readUIntBE = function(r, i, e) {
      r = r | 0, i = i | 0, e || l(r, i, this.length);
      for (var t = this[r + --i], f = 1; i > 0 && (f *= 256); )
        t += this[r + --i] * f;
      return t;
    }, u.prototype.readUInt8 = function(r, i) {
      return i || l(r, 1, this.length), this[r];
    }, u.prototype.readUInt16LE = function(r, i) {
      return i || l(r, 2, this.length), this[r] | this[r + 1] << 8;
    }, u.prototype.readUInt16BE = function(r, i) {
      return i || l(r, 2, this.length), this[r] << 8 | this[r + 1];
    }, u.prototype.readUInt32LE = function(r, i) {
      return i || l(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
    }, u.prototype.readUInt32BE = function(r, i) {
      return i || l(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
    }, u.prototype.readIntLE = function(r, i, e) {
      r = r | 0, i = i | 0, e || l(r, i, this.length);
      for (var t = this[r], f = 1, o = 0; ++o < i && (f *= 256); )
        t += this[r + o] * f;
      return f *= 128, t >= f && (t -= Math.pow(2, 8 * i)), t;
    }, u.prototype.readIntBE = function(r, i, e) {
      r = r | 0, i = i | 0, e || l(r, i, this.length);
      for (var t = i, f = 1, o = this[r + --t]; t > 0 && (f *= 256); )
        o += this[r + --t] * f;
      return f *= 128, o >= f && (o -= Math.pow(2, 8 * i)), o;
    }, u.prototype.readInt8 = function(r, i) {
      return i || l(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
    }, u.prototype.readInt16LE = function(r, i) {
      i || l(r, 2, this.length);
      var e = this[r] | this[r + 1] << 8;
      return e & 32768 ? e | 4294901760 : e;
    }, u.prototype.readInt16BE = function(r, i) {
      i || l(r, 2, this.length);
      var e = this[r + 1] | this[r] << 8;
      return e & 32768 ? e | 4294901760 : e;
    }, u.prototype.readInt32LE = function(r, i) {
      return i || l(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
    }, u.prototype.readInt32BE = function(r, i) {
      return i || l(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
    }, u.prototype.readFloatLE = function(r, i) {
      return i || l(r, 4, this.length), _.read(this, r, !0, 23, 4);
    }, u.prototype.readFloatBE = function(r, i) {
      return i || l(r, 4, this.length), _.read(this, r, !1, 23, 4);
    }, u.prototype.readDoubleLE = function(r, i) {
      return i || l(r, 8, this.length), _.read(this, r, !0, 52, 8);
    }, u.prototype.readDoubleBE = function(r, i) {
      return i || l(r, 8, this.length), _.read(this, r, !1, 52, 8);
    };
    function w(n, r, i, e, t, f) {
      if (!u.isBuffer(n)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (r > t || r < f) throw new RangeError('"value" argument is out of bounds');
      if (i + e > n.length) throw new RangeError("Index out of range");
    }
    u.prototype.writeUIntLE = function(r, i, e, t) {
      if (r = +r, i = i | 0, e = e | 0, !t) {
        var f = Math.pow(2, 8 * e) - 1;
        w(this, r, i, e, f, 0);
      }
      var o = 1, h = 0;
      for (this[i] = r & 255; ++h < e && (o *= 256); )
        this[i + h] = r / o & 255;
      return i + e;
    }, u.prototype.writeUIntBE = function(r, i, e, t) {
      if (r = +r, i = i | 0, e = e | 0, !t) {
        var f = Math.pow(2, 8 * e) - 1;
        w(this, r, i, e, f, 0);
      }
      var o = e - 1, h = 1;
      for (this[i + o] = r & 255; --o >= 0 && (h *= 256); )
        this[i + o] = r / h & 255;
      return i + e;
    }, u.prototype.writeUInt8 = function(r, i, e) {
      return r = +r, i = i | 0, e || w(this, r, i, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (r = Math.floor(r)), this[i] = r & 255, i + 1;
    };
    function A(n, r, i, e) {
      r < 0 && (r = 65535 + r + 1);
      for (var t = 0, f = Math.min(n.length - i, 2); t < f; ++t)
        n[i + t] = (r & 255 << 8 * (e ? t : 1 - t)) >>> (e ? t : 1 - t) * 8;
    }
    u.prototype.writeUInt16LE = function(r, i, e) {
      return r = +r, i = i | 0, e || w(this, r, i, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[i] = r & 255, this[i + 1] = r >>> 8) : A(this, r, i, !0), i + 2;
    }, u.prototype.writeUInt16BE = function(r, i, e) {
      return r = +r, i = i | 0, e || w(this, r, i, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[i] = r >>> 8, this[i + 1] = r & 255) : A(this, r, i, !1), i + 2;
    };
    function F(n, r, i, e) {
      r < 0 && (r = 4294967295 + r + 1);
      for (var t = 0, f = Math.min(n.length - i, 4); t < f; ++t)
        n[i + t] = r >>> (e ? t : 3 - t) * 8 & 255;
    }
    u.prototype.writeUInt32LE = function(r, i, e) {
      return r = +r, i = i | 0, e || w(this, r, i, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[i + 3] = r >>> 24, this[i + 2] = r >>> 16, this[i + 1] = r >>> 8, this[i] = r & 255) : F(this, r, i, !0), i + 4;
    }, u.prototype.writeUInt32BE = function(r, i, e) {
      return r = +r, i = i | 0, e || w(this, r, i, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[i] = r >>> 24, this[i + 1] = r >>> 16, this[i + 2] = r >>> 8, this[i + 3] = r & 255) : F(this, r, i, !1), i + 4;
    }, u.prototype.writeIntLE = function(r, i, e, t) {
      if (r = +r, i = i | 0, !t) {
        var f = Math.pow(2, 8 * e - 1);
        w(this, r, i, e, f - 1, -f);
      }
      var o = 0, h = 1, p = 0;
      for (this[i] = r & 255; ++o < e && (h *= 256); )
        r < 0 && p === 0 && this[i + o - 1] !== 0 && (p = 1), this[i + o] = (r / h >> 0) - p & 255;
      return i + e;
    }, u.prototype.writeIntBE = function(r, i, e, t) {
      if (r = +r, i = i | 0, !t) {
        var f = Math.pow(2, 8 * e - 1);
        w(this, r, i, e, f - 1, -f);
      }
      var o = e - 1, h = 1, p = 0;
      for (this[i + o] = r & 255; --o >= 0 && (h *= 256); )
        r < 0 && p === 0 && this[i + o + 1] !== 0 && (p = 1), this[i + o] = (r / h >> 0) - p & 255;
      return i + e;
    }, u.prototype.writeInt8 = function(r, i, e) {
      return r = +r, i = i | 0, e || w(this, r, i, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (r = Math.floor(r)), r < 0 && (r = 255 + r + 1), this[i] = r & 255, i + 1;
    }, u.prototype.writeInt16LE = function(r, i, e) {
      return r = +r, i = i | 0, e || w(this, r, i, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[i] = r & 255, this[i + 1] = r >>> 8) : A(this, r, i, !0), i + 2;
    }, u.prototype.writeInt16BE = function(r, i, e) {
      return r = +r, i = i | 0, e || w(this, r, i, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[i] = r >>> 8, this[i + 1] = r & 255) : A(this, r, i, !1), i + 2;
    }, u.prototype.writeInt32LE = function(r, i, e) {
      return r = +r, i = i | 0, e || w(this, r, i, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[i] = r & 255, this[i + 1] = r >>> 8, this[i + 2] = r >>> 16, this[i + 3] = r >>> 24) : F(this, r, i, !0), i + 4;
    }, u.prototype.writeInt32BE = function(r, i, e) {
      return r = +r, i = i | 0, e || w(this, r, i, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), u.TYPED_ARRAY_SUPPORT ? (this[i] = r >>> 24, this[i + 1] = r >>> 16, this[i + 2] = r >>> 8, this[i + 3] = r & 255) : F(this, r, i, !1), i + 4;
    };
    function W(n, r, i, e, t, f) {
      if (i + e > n.length) throw new RangeError("Index out of range");
      if (i < 0) throw new RangeError("Index out of range");
    }
    function G(n, r, i, e, t) {
      return t || W(n, r, i, 4), _.write(n, r, i, e, 23, 4), i + 4;
    }
    u.prototype.writeFloatLE = function(r, i, e) {
      return G(this, r, i, !0, e);
    }, u.prototype.writeFloatBE = function(r, i, e) {
      return G(this, r, i, !1, e);
    };
    function J(n, r, i, e, t) {
      return t || W(n, r, i, 8), _.write(n, r, i, e, 52, 8), i + 8;
    }
    u.prototype.writeDoubleLE = function(r, i, e) {
      return J(this, r, i, !0, e);
    }, u.prototype.writeDoubleBE = function(r, i, e) {
      return J(this, r, i, !1, e);
    }, u.prototype.copy = function(r, i, e, t) {
      if (e || (e = 0), !t && t !== 0 && (t = this.length), i >= r.length && (i = r.length), i || (i = 0), t > 0 && t < e && (t = e), t === e || r.length === 0 || this.length === 0) return 0;
      if (i < 0)
        throw new RangeError("targetStart out of bounds");
      if (e < 0 || e >= this.length) throw new RangeError("sourceStart out of bounds");
      if (t < 0) throw new RangeError("sourceEnd out of bounds");
      t > this.length && (t = this.length), r.length - i < t - e && (t = r.length - i + e);
      var f = t - e, o;
      if (this === r && e < i && i < t)
        for (o = f - 1; o >= 0; --o)
          r[o + i] = this[o + e];
      else if (f < 1e3 || !u.TYPED_ARRAY_SUPPORT)
        for (o = 0; o < f; ++o)
          r[o + i] = this[o + e];
      else
        Uint8Array.prototype.set.call(
          r,
          this.subarray(e, e + f),
          i
        );
      return f;
    }, u.prototype.fill = function(r, i, e, t) {
      if (typeof r == "string") {
        if (typeof i == "string" ? (t = i, i = 0, e = this.length) : typeof e == "string" && (t = e, e = this.length), r.length === 1) {
          var f = r.charCodeAt(0);
          f < 256 && (r = f);
        }
        if (t !== void 0 && typeof t != "string")
          throw new TypeError("encoding must be a string");
        if (typeof t == "string" && !u.isEncoding(t))
          throw new TypeError("Unknown encoding: " + t);
      } else typeof r == "number" && (r = r & 255);
      if (i < 0 || this.length < i || this.length < e)
        throw new RangeError("Out of range index");
      if (e <= i)
        return this;
      i = i >>> 0, e = e === void 0 ? this.length : e >>> 0, r || (r = 0);
      var o;
      if (typeof r == "number")
        for (o = i; o < e; ++o)
          this[o] = r;
      else {
        var h = u.isBuffer(r) ? r : R(new u(r, t).toString()), p = h.length;
        for (o = 0; o < e - i; ++o)
          this[o + i] = h[o % p];
      }
      return this;
    };
    var cr = /[^+\/0-9A-Za-z-_]/g;
    function lr(n) {
      if (n = sr(n).replace(cr, ""), n.length < 2) return "";
      for (; n.length % 4 !== 0; )
        n = n + "=";
      return n;
    }
    function sr(n) {
      return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "");
    }
    function wr(n) {
      return n < 16 ? "0" + n.toString(16) : n.toString(16);
    }
    function R(n, r) {
      r = r || 1 / 0;
      for (var i, e = n.length, t = null, f = [], o = 0; o < e; ++o) {
        if (i = n.charCodeAt(o), i > 55295 && i < 57344) {
          if (!t) {
            if (i > 56319) {
              (r -= 3) > -1 && f.push(239, 191, 189);
              continue;
            } else if (o + 1 === e) {
              (r -= 3) > -1 && f.push(239, 191, 189);
              continue;
            }
            t = i;
            continue;
          }
          if (i < 56320) {
            (r -= 3) > -1 && f.push(239, 191, 189), t = i;
            continue;
          }
          i = (t - 55296 << 10 | i - 56320) + 65536;
        } else t && (r -= 3) > -1 && f.push(239, 191, 189);
        if (t = null, i < 128) {
          if ((r -= 1) < 0) break;
          f.push(i);
        } else if (i < 2048) {
          if ((r -= 2) < 0) break;
          f.push(
            i >> 6 | 192,
            i & 63 | 128
          );
        } else if (i < 65536) {
          if ((r -= 3) < 0) break;
          f.push(
            i >> 12 | 224,
            i >> 6 & 63 | 128,
            i & 63 | 128
          );
        } else if (i < 1114112) {
          if ((r -= 4) < 0) break;
          f.push(
            i >> 18 | 240,
            i >> 12 & 63 | 128,
            i >> 6 & 63 | 128,
            i & 63 | 128
          );
        } else
          throw new Error("Invalid code point");
      }
      return f;
    }
    function xr(n) {
      for (var r = [], i = 0; i < n.length; ++i)
        r.push(n.charCodeAt(i) & 255);
      return r;
    }
    function Er(n, r) {
      for (var i, e, t, f = [], o = 0; o < n.length && !((r -= 2) < 0); ++o)
        i = n.charCodeAt(o), e = i >> 8, t = i % 256, f.push(t), f.push(e);
      return f;
    }
    function V(n) {
      return U.toByteArray(lr(n));
    }
    function B(n, r, i, e) {
      for (var t = 0; t < e && !(t + i >= r.length || t >= n.length); ++t)
        r[t + i] = n[t];
      return t;
    }
    function _r(n) {
      return n !== n;
    }
  }(S), S);
}
export {
  Tr as __require
};
//# sourceMappingURL=index.es229.js.map
