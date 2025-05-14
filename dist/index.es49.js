import { __require as a } from "./index.es48.js";
var e, t;
function f() {
  if (t) return e;
  t = 1;
  var o = a(), r = function(i, n) {
    o.call(this, i), this.name = "NotBeforeError", this.date = n;
  };
  return r.prototype = Object.create(o.prototype), r.prototype.constructor = r, e = r, e;
}
export {
  f as __require
};
//# sourceMappingURL=index.es49.js.map
