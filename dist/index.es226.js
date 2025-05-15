import { __module as a } from "./index.es300.js";
import { __require as s } from "./index.es301.js";
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var l;
function w() {
  return l ? a.exports : (l = 1, function(p, i) {
    var n = s(), e = n.Buffer;
    function m(r, f) {
      for (var u in r)
        f[u] = r[u];
    }
    e.from && e.alloc && e.allocUnsafe && e.allocUnsafeSlow ? p.exports = n : (m(n, i), i.Buffer = o);
    function o(r, f, u) {
      return e(r, f, u);
    }
    o.prototype = Object.create(e.prototype), m(e, o), o.from = function(r, f, u) {
      if (typeof r == "number")
        throw new TypeError("Argument must not be a number");
      return e(r, f, u);
    }, o.alloc = function(r, f, u) {
      if (typeof r != "number")
        throw new TypeError("Argument must be a number");
      var t = e(r);
      return f !== void 0 ? typeof u == "string" ? t.fill(f, u) : t.fill(f) : t.fill(0), t;
    }, o.allocUnsafe = function(r) {
      if (typeof r != "number")
        throw new TypeError("Argument must be a number");
      return e(r);
    }, o.allocUnsafeSlow = function(r) {
      if (typeof r != "number")
        throw new TypeError("Argument must be a number");
      return n.SlowBuffer(r);
    };
  }(a, a.exports), a.exports);
}
export {
  w as __require
};
//# sourceMappingURL=index.es226.js.map
