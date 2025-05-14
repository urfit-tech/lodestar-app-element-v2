import { __require as l } from "./index.es219.js";
var a, i;
function B() {
  if (i) return a;
  i = 1;
  var r = l().Buffer, o = l().SlowBuffer;
  a = t;
  function t(e, u) {
    if (!r.isBuffer(e) || !r.isBuffer(u) || e.length !== u.length)
      return !1;
    for (var n = 0, f = 0; f < e.length; f++)
      n |= e[f] ^ u[f];
    return n === 0;
  }
  t.install = function() {
    r.prototype.equal = o.prototype.equal = function(u) {
      return t(this, u);
    };
  };
  var q = r.prototype.equal, p = o.prototype.equal;
  return t.restore = function() {
    r.prototype.equal = q, o.prototype.equal = p;
  }, a;
}
export {
  B as __require
};
//# sourceMappingURL=index.es220.js.map
