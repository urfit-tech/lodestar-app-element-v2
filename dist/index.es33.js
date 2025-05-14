import { __extends as C, __assign as o } from "./index.es54.js";
import { invariant as b } from "./index.es70.js";
import "./index.es71.js";
import { wrap as T } from "./index.es76.js";
import { equal as W } from "./index.es135.js";
import { ApolloCache as R } from "./index.es184.js";
import { MissingFieldError as _ } from "./index.es185.js";
import { StoreReader as x } from "./index.es189.js";
import { StoreWriter as w } from "./index.es190.js";
import { EntityStore as S, supportsResultCaching as O } from "./index.es186.js";
import { makeVar as z, recallCache as E, forgetCache as g } from "./index.es183.js";
import { Policies as I } from "./index.es191.js";
import { normalizeConfig as M, shouldCanonizeResults as U, hasOwn as v } from "./index.es188.js";
import { getInMemoryCacheMemoryInternals as B } from "./index.es81.js";
import { DocumentTransform as P } from "./index.es73.js";
import { addTypenameToDocument as k } from "./index.es84.js";
import { cacheSizes as F } from "./index.es77.js";
import { canonicalStringify as l } from "./index.es83.js";
import { print as Q } from "./index.es59.js";
import { isReference as V } from "./index.es80.js";
var A = (
  /** @class */
  function(y) {
    C(e, y);
    function e(t) {
      t === void 0 && (t = {});
      var i = y.call(this) || this;
      return i.watches = /* @__PURE__ */ new Set(), i.addTypenameTransform = new P(k), i.assumeImmutableResults = !0, i.makeVar = z, i.txCount = 0, i.config = M(t), i.addTypename = !!i.config.addTypename, i.policies = new I({
        cache: i,
        dataIdFromObject: i.config.dataIdFromObject,
        possibleTypes: i.config.possibleTypes,
        typePolicies: i.config.typePolicies
      }), i.init(), i;
    }
    return e.prototype.init = function() {
      var t = this.data = new S.Root({
        policies: this.policies,
        resultCaching: this.config.resultCaching
      });
      this.optimisticData = t.stump, this.resetResultCache();
    }, e.prototype.resetResultCache = function(t) {
      var i = this, a = this.storeReader, s = this.config.fragments;
      this.storeWriter = new w(this, this.storeReader = new x({
        cache: this,
        addTypename: this.addTypename,
        resultCacheMaxSize: this.config.resultCacheMaxSize,
        canonizeResults: U(this.config),
        canon: t ? void 0 : a && a.canon,
        fragments: s
      }), s), this.maybeBroadcastWatch = T(function(r, c) {
        return i.broadcastWatch(r, c);
      }, {
        max: this.config.resultCacheMaxSize || F["inMemoryCache.maybeBroadcastWatch"] || 5e3,
        makeCacheKey: function(r) {
          var c = r.optimistic ? i.optimisticData : i.data;
          if (O(c)) {
            var f = r.optimistic, d = r.id, h = r.variables;
            return c.makeCacheKey(
              r.query,
              // Different watches can have the same query, optimistic
              // status, rootId, and variables, but if their callbacks are
              // different, the (identical) result needs to be delivered to
              // each distinct callback. The easiest way to achieve that
              // separation is to include c.callback in the cache key for
              // maybeBroadcastWatch calls. See issue #5733.
              r.callback,
              l({ optimistic: f, id: d, variables: h })
            );
          }
        }
      }), (/* @__PURE__ */ new Set([this.data.group, this.optimisticData.group])).forEach(function(r) {
        return r.resetCaching();
      });
    }, e.prototype.restore = function(t) {
      return this.init(), t && this.data.replace(t), this;
    }, e.prototype.extract = function(t) {
      return t === void 0 && (t = !1), (t ? this.optimisticData : this.data).extract();
    }, e.prototype.read = function(t) {
      var i = t.returnPartialData, a = i === void 0 ? !1 : i;
      try {
        return this.storeReader.diffQueryAgainstStore(o(o({}, t), { store: t.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: a })).result || null;
      } catch (s) {
        if (s instanceof _)
          return null;
        throw s;
      }
    }, e.prototype.write = function(t) {
      try {
        return ++this.txCount, this.storeWriter.writeToStore(this.data, t);
      } finally {
        !--this.txCount && t.broadcast !== !1 && this.broadcastWatches();
      }
    }, e.prototype.modify = function(t) {
      if (v.call(t, "id") && !t.id)
        return !1;
      var i = t.optimistic ? this.optimisticData : this.data;
      try {
        return ++this.txCount, i.modify(t.id || "ROOT_QUERY", t.fields);
      } finally {
        !--this.txCount && t.broadcast !== !1 && this.broadcastWatches();
      }
    }, e.prototype.diff = function(t) {
      return this.storeReader.diffQueryAgainstStore(o(o({}, t), { store: t.optimistic ? this.optimisticData : this.data, rootId: t.id || "ROOT_QUERY", config: this.config }));
    }, e.prototype.watch = function(t) {
      var i = this;
      return this.watches.size || E(this), this.watches.add(t), t.immediate && this.maybeBroadcastWatch(t), function() {
        i.watches.delete(t) && !i.watches.size && g(i), i.maybeBroadcastWatch.forget(t);
      };
    }, e.prototype.gc = function(t) {
      var i;
      l.reset(), Q.reset(), this.addTypenameTransform.resetCache(), (i = this.config.fragments) === null || i === void 0 || i.resetCaches();
      var a = this.optimisticData.gc();
      return t && !this.txCount && (t.resetResultCache ? this.resetResultCache(t.resetResultIdentities) : t.resetResultIdentities && this.storeReader.resetCanon()), a;
    }, e.prototype.retain = function(t, i) {
      return (i ? this.optimisticData : this.data).retain(t);
    }, e.prototype.release = function(t, i) {
      return (i ? this.optimisticData : this.data).release(t);
    }, e.prototype.identify = function(t) {
      if (V(t))
        return t.__ref;
      try {
        return this.policies.identify(t)[0];
      } catch (i) {
        globalThis.__DEV__ !== !1 && b.warn(i);
      }
    }, e.prototype.evict = function(t) {
      if (!t.id) {
        if (v.call(t, "id"))
          return !1;
        t = o(o({}, t), { id: "ROOT_QUERY" });
      }
      try {
        return ++this.txCount, this.optimisticData.evict(t, this.data);
      } finally {
        !--this.txCount && t.broadcast !== !1 && this.broadcastWatches();
      }
    }, e.prototype.reset = function(t) {
      var i = this;
      return this.init(), l.reset(), t && t.discardWatches ? (this.watches.forEach(function(a) {
        return i.maybeBroadcastWatch.forget(a);
      }), this.watches.clear(), g(this)) : this.broadcastWatches(), Promise.resolve();
    }, e.prototype.removeOptimistic = function(t) {
      var i = this.optimisticData.removeLayer(t);
      i !== this.optimisticData && (this.optimisticData = i, this.broadcastWatches());
    }, e.prototype.batch = function(t) {
      var i = this, a = t.update, s = t.optimistic, r = s === void 0 ? !0 : s, c = t.removeOptimistic, f = t.onWatchUpdated, d, h = function(n) {
        var u = i, p = u.data, D = u.optimisticData;
        ++i.txCount, n && (i.data = i.optimisticData = n);
        try {
          return d = a(i);
        } finally {
          --i.txCount, i.data = p, i.optimisticData = D;
        }
      }, m = /* @__PURE__ */ new Set();
      return f && !this.txCount && this.broadcastWatches(o(o({}, t), { onWatchUpdated: function(n) {
        return m.add(n), !1;
      } })), typeof r == "string" ? this.optimisticData = this.optimisticData.addLayer(r, h) : r === !1 ? h(this.data) : h(), typeof c == "string" && (this.optimisticData = this.optimisticData.removeLayer(c)), f && m.size ? (this.broadcastWatches(o(o({}, t), { onWatchUpdated: function(n, u) {
        var p = f.call(this, n, u);
        return p !== !1 && m.delete(n), p;
      } })), m.size && m.forEach(function(n) {
        return i.maybeBroadcastWatch.dirty(n);
      })) : this.broadcastWatches(t), d;
    }, e.prototype.performTransaction = function(t, i) {
      return this.batch({
        update: t,
        optimistic: i || i !== null
      });
    }, e.prototype.transformDocument = function(t) {
      return this.addTypenameToDocument(this.addFragmentsToDocument(t));
    }, e.prototype.broadcastWatches = function(t) {
      var i = this;
      this.txCount || this.watches.forEach(function(a) {
        return i.maybeBroadcastWatch(a, t);
      });
    }, e.prototype.addFragmentsToDocument = function(t) {
      var i = this.config.fragments;
      return i ? i.transform(t) : t;
    }, e.prototype.addTypenameToDocument = function(t) {
      return this.addTypename ? this.addTypenameTransform.transformDocument(t) : t;
    }, e.prototype.broadcastWatch = function(t, i) {
      var a = t.lastDiff, s = this.diff(t);
      i && (t.optimistic && typeof i.optimistic == "string" && (s.fromOptimisticTransaction = !0), i.onWatchUpdated && i.onWatchUpdated.call(this, t, s, a) === !1) || (!a || !W(a.result, s.result)) && t.callback(t.lastDiff = s, a);
    }, e;
  }(R)
);
globalThis.__DEV__ !== !1 && (A.prototype.getMemoryInternals = B);
export {
  A as InMemoryCache
};
//# sourceMappingURL=index.es33.js.map
