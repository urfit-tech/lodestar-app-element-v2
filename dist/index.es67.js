import { Trie as o } from "./index.es68.js";
import { canUseWeakSet as i, canUseWeakMap as f } from "./index.es69.js";
import { checkDocument as s } from "./index.es36.js";
import { invariant as h } from "./index.es65.js";
import "./index.es66.js";
import { wrap as m } from "./index.es70.js";
import { cacheSizes as u } from "./index.es71.js";
import { WeakCache as p } from "./index.es72.js";
function y(r) {
  return r;
}
var K = (
  /** @class */
  function() {
    function r(e, t) {
      t === void 0 && (t = /* @__PURE__ */ Object.create(null)), this.resultCache = i ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set(), this.transform = e, t.getCacheKey && (this.getCacheKey = t.getCacheKey), this.cached = t.cache !== !1, this.resetCache();
    }
    return r.prototype.getCacheKey = function(e) {
      return [e];
    }, r.identity = function() {
      return new r(y, { cache: !1 });
    }, r.split = function(e, t, n) {
      return n === void 0 && (n = r.identity()), Object.assign(new r(
        function(a) {
          var c = e(a) ? t : n;
          return c.transformDocument(a);
        },
        // Reasonably assume both `left` and `right` transforms handle their own caching
        { cache: !1 }
      ), { left: t, right: n });
    }, r.prototype.resetCache = function() {
      var e = this;
      if (this.cached) {
        var t = new o(f);
        this.performWork = m(r.prototype.performWork.bind(this), {
          makeCacheKey: function(n) {
            var a = e.getCacheKey(n);
            if (a)
              return h(Array.isArray(a), 68), t.lookupArray(a);
          },
          max: u["documentTransform.cache"],
          cache: p
        });
      }
    }, r.prototype.performWork = function(e) {
      return s(e), this.transform(e);
    }, r.prototype.transformDocument = function(e) {
      if (this.resultCache.has(e))
        return e;
      var t = this.performWork(e);
      return this.resultCache.add(t), t;
    }, r.prototype.concat = function(e) {
      var t = this;
      return Object.assign(new r(
        function(n) {
          return e.transformDocument(t.transformDocument(n));
        },
        // Reasonably assume both transforms handle their own caching
        { cache: !1 }
      ), {
        left: this,
        right: e
      });
    }, r;
  }()
);
export {
  K as DocumentTransform
};
//# sourceMappingURL=index.es67.js.map
