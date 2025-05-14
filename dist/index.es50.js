import { __require as p } from "./index.es48.js";
var e, t;
function a() {
  if (t) return e;
  t = 1;
  var o = p(), r = function(i, n) {
    o.call(this, i), this.name = "TokenExpiredError", this.expiredAt = n;
  };
  return r.prototype = Object.create(o.prototype), r.prototype.constructor = r, e = r, e;
}
export {
  a as __require
};
//# sourceMappingURL=index.es50.js.map
