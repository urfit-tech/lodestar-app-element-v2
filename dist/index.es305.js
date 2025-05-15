import { __module as t } from "./index.es325.js";
var n;
function s() {
  return n ? t.exports : (n = 1, typeof Object.create == "function" ? t.exports = function(e, r) {
    e.super_ = r, e.prototype = Object.create(r.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    });
  } : t.exports = function(e, r) {
    e.super_ = r;
    var o = function() {
    };
    o.prototype = r.prototype, e.prototype = new o(), e.prototype.constructor = e;
  }, t.exports);
}
export {
  s as __require
};
//# sourceMappingURL=index.es305.js.map
