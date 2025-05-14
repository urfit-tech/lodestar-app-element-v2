import { __assign as o, __rest as c } from "./index.es54.js";
import { wrap as v } from "./index.es76.js";
import { getApolloCacheMemoryInternals as F } from "./index.es81.js";
import { equalByQuery as b } from "./index.es137.js";
import { Observable as D } from "./index.es56.js";
import "./index.es57.js";
import { mergeDeepArray as w } from "./index.es87.js";
import { cacheSizes as O } from "./index.es77.js";
import { WeakCache as Q } from "./index.es78.js";
import { getFragmentQueryDocument as I } from "./index.es79.js";
var N = (
  /** @class */
  function() {
    function e() {
      this.assumeImmutableResults = !1, this.getFragmentDoc = v(I, {
        max: O["cache.fragmentQueryDocuments"] || 1e3,
        cache: Q
      });
    }
    return e.prototype.batch = function(t) {
      var r = this, n = typeof t.optimistic == "string" ? t.optimistic : t.optimistic === !1 ? null : void 0, i;
      return this.performTransaction(function() {
        return i = t.update(r);
      }, n), i;
    }, e.prototype.recordOptimisticTransaction = function(t, r) {
      this.performTransaction(t, r);
    }, e.prototype.transformDocument = function(t) {
      return t;
    }, e.prototype.transformForLink = function(t) {
      return t;
    }, e.prototype.identify = function(t) {
    }, e.prototype.gc = function() {
      return [];
    }, e.prototype.modify = function(t) {
      return !1;
    }, e.prototype.readQuery = function(t, r) {
      return r === void 0 && (r = !!t.optimistic), this.read(o(o({}, t), { rootId: t.id || "ROOT_QUERY", optimistic: r }));
    }, e.prototype.watchFragment = function(t) {
      var r = this, n = t.fragment, i = t.fragmentName, a = t.from, f = t.optimistic, d = f === void 0 ? !0 : f, g = c(t, ["fragment", "fragmentName", "from", "optimistic"]), s = this.getFragmentDoc(n, i), l = o(o({}, g), { returnPartialData: !0, id: typeof a == "string" ? a : this.identify(a), query: s, optimistic: d }), u;
      return new D(function(y) {
        return r.watch(o(o({}, l), { immediate: !0, callback: function(m) {
          if (
            // Always ensure we deliver the first result
            !(u && b(s, { data: u?.result }, { data: m.result }))
          ) {
            var p = {
              data: m.result,
              complete: !!m.complete
            };
            m.missing && (p.missing = w(m.missing.map(function(h) {
              return h.missing;
            }))), u = m, y.next(p);
          }
        } }));
      });
    }, e.prototype.readFragment = function(t, r) {
      return r === void 0 && (r = !!t.optimistic), this.read(o(o({}, t), { query: this.getFragmentDoc(t.fragment, t.fragmentName), rootId: t.id, optimistic: r }));
    }, e.prototype.writeQuery = function(t) {
      var r = t.id, n = t.data, i = c(t, ["id", "data"]);
      return this.write(Object.assign(i, {
        dataId: r || "ROOT_QUERY",
        result: n
      }));
    }, e.prototype.writeFragment = function(t) {
      var r = t.id, n = t.data, i = t.fragment, a = t.fragmentName, f = c(t, ["id", "data", "fragment", "fragmentName"]);
      return this.write(Object.assign(f, {
        query: this.getFragmentDoc(i, a),
        dataId: r,
        result: n
      }));
    }, e.prototype.updateQuery = function(t, r) {
      return this.batch({
        update: function(n) {
          var i = n.readQuery(t), a = r(i);
          return a == null ? i : (n.writeQuery(o(o({}, t), { data: a })), a);
        }
      });
    }, e.prototype.updateFragment = function(t, r) {
      return this.batch({
        update: function(n) {
          var i = n.readFragment(t), a = r(i);
          return a == null ? i : (n.writeFragment(o(o({}, t), { data: a })), a);
        }
      });
    }, e;
  }()
);
globalThis.__DEV__ !== !1 && (N.prototype.getMemoryInternals = F);
export {
  N as ApolloCache
};
//# sourceMappingURL=index.es184.js.map
