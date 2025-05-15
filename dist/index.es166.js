import { __spreadArray as h, __assign as m } from "./index.es92.js";
import { isNonNullObject as f } from "./index.es113.js";
var g = Object.prototype.hasOwnProperty;
function v() {
  for (var n = [], r = 0; r < arguments.length; r++)
    n[r] = arguments[r];
  return l(n);
}
function l(n) {
  var r = n[0] || {}, t = n.length;
  if (t > 1)
    for (var o = new y(), i = 1; i < t; ++i)
      r = o.merge(r, n[i]);
  return r;
}
var c = function(n, r, t) {
  return this.merge(n[t], r[t]);
}, y = (
  /** @class */
  function() {
    function n(r) {
      r === void 0 && (r = c), this.reconciler = r, this.isObject = f, this.pastCopies = /* @__PURE__ */ new Set();
    }
    return n.prototype.merge = function(r, t) {
      for (var o = this, i = [], p = 2; p < arguments.length; p++)
        i[p - 2] = arguments[p];
      return f(t) && f(r) ? (Object.keys(t).forEach(function(e) {
        if (g.call(r, e)) {
          var s = r[e];
          if (t[e] !== s) {
            var a = o.reconciler.apply(o, h([
              r,
              t,
              e
            ], i, !1));
            a !== s && (r = o.shallowCopyForMerge(r), r[e] = a);
          }
        } else
          r = o.shallowCopyForMerge(r), r[e] = t[e];
      }), r) : t;
    }, n.prototype.shallowCopyForMerge = function(r) {
      return f(r) && (this.pastCopies.has(r) || (Array.isArray(r) ? r = r.slice(0) : r = m({ __proto__: Object.getPrototypeOf(r) }, r), this.pastCopies.add(r))), r;
    }, n;
  }()
);
export {
  y as DeepMerger,
  v as mergeDeep,
  l as mergeDeepArray
};
//# sourceMappingURL=index.es166.js.map
