import { __assign as m } from "./index.es92.js";
import { Trie as b } from "./index.es155.js";
import { canUseWeakSet as d, canUseWeakMap as w } from "./index.es179.js";
import { isNonNullObject as p } from "./index.es113.js";
import { isArray as j } from "./index.es165.js";
function g(r) {
  return p(r) ? j(r) ? r.slice(0) : m({ __proto__: Object.getPrototypeOf(r) }, r) : r;
}
var E = (
  /** @class */
  function() {
    function r() {
      this.known = new (d ? WeakSet : Set)(), this.pool = new b(w), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
    }
    return r.prototype.isKnown = function(t) {
      return p(t) && this.known.has(t);
    }, r.prototype.pass = function(t) {
      if (p(t)) {
        var s = g(t);
        return this.passes.set(s, t), s;
      }
      return t;
    }, r.prototype.admit = function(t) {
      var s = this;
      if (p(t)) {
        var o = this.passes.get(t);
        if (o)
          return o;
        var i = Object.getPrototypeOf(t);
        switch (i) {
          case Array.prototype: {
            if (this.known.has(t))
              return t;
            var f = t.map(this.admit, this), e = this.pool.lookupArray(f);
            return e.array || (this.known.add(e.array = f), globalThis.__DEV__ !== !1 && Object.freeze(f)), e.array;
          }
          case null:
          case Object.prototype: {
            if (this.known.has(t))
              return t;
            var y = Object.getPrototypeOf(t), n = [y], h = this.sortedKeys(t);
            n.push(h.json);
            var k = n.length;
            h.sorted.forEach(function(a) {
              n.push(s.admit(t[a]));
            });
            var e = this.pool.lookupArray(n);
            if (!e.object) {
              var c = e.object = Object.create(y);
              this.known.add(c), h.sorted.forEach(function(a, O) {
                c[a] = n[k + O];
              }), globalThis.__DEV__ !== !1 && Object.freeze(c);
            }
            return e.object;
          }
        }
      }
      return t;
    }, r.prototype.sortedKeys = function(t) {
      var s = Object.keys(t), o = this.pool.lookupArray(s);
      if (!o.keys) {
        s.sort();
        var i = JSON.stringify(s);
        (o.keys = this.keysByJSON.get(i)) || this.keysByJSON.set(i, o.keys = { sorted: s, json: i });
      }
      return o.keys;
    }, r;
  }()
);
export {
  E as ObjectCanon
};
//# sourceMappingURL=index.es279.js.map
