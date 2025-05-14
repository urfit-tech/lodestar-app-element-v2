import { __assign as p } from "./index.es54.js";
import { equal as o } from "./index.es135.js";
import { reobserveCacheFirst as D } from "./index.es134.js";
import { NetworkStatus as f, isNetworkRequestInFlight as Q } from "./index.es136.js";
import { graphQLResultHasError as w } from "./index.es94.js";
import { mergeIncrementalData as k } from "./index.es95.js";
import { canUseWeakMap as E } from "./index.es75.js";
import { DeepMerger as L } from "./index.es87.js";
import { isNonEmptyArray as v } from "./index.es85.js";
var n = new (E ? WeakMap : Map)();
function l(e, t) {
  var r = e[t];
  typeof r == "function" && (e[t] = function() {
    return n.set(
      e,
      // The %1e15 allows the count to wrap around to 0 safely every
      // quadrillion evictions, so there's no risk of overflow. To be
      // clear, this is more of a pedantic principle than something
      // that matters in any conceivable practical scenario.
      (n.get(e) + 1) % 1e15
    ), r.apply(this, arguments);
  });
}
function d(e) {
  e.notifyTimeout && (clearTimeout(e.notifyTimeout), e.notifyTimeout = void 0);
}
var x = (
  /** @class */
  function() {
    function e(t, r) {
      r === void 0 && (r = t.generateQueryId()), this.queryId = r, this.listeners = /* @__PURE__ */ new Set(), this.document = null, this.lastRequestId = 1, this.stopped = !1, this.dirty = !1, this.observableQuery = null;
      var i = this.cache = t.cache;
      n.has(i) || (n.set(i, 0), l(i, "evict"), l(i, "modify"), l(i, "reset"));
    }
    return e.prototype.init = function(t) {
      var r = t.networkStatus || f.loading;
      return this.variables && this.networkStatus !== f.loading && !o(this.variables, t.variables) && (r = f.setVariables), o(t.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
        document: t.document,
        variables: t.variables,
        networkError: null,
        graphQLErrors: this.graphQLErrors || [],
        networkStatus: r
      }), t.observableQuery && this.setObservableQuery(t.observableQuery), t.lastRequestId && (this.lastRequestId = t.lastRequestId), this;
    }, e.prototype.reset = function() {
      d(this), this.dirty = !1;
    }, e.prototype.resetDiff = function() {
      this.lastDiff = void 0;
    }, e.prototype.getDiff = function() {
      var t = this.getDiffOptions();
      if (this.lastDiff && o(t, this.lastDiff.options))
        return this.lastDiff.diff;
      this.updateWatch(this.variables);
      var r = this.observableQuery;
      if (r && r.options.fetchPolicy === "no-cache")
        return { complete: !1 };
      var i = this.cache.diff(t);
      return this.updateLastDiff(i, t), i;
    }, e.prototype.updateLastDiff = function(t, r) {
      this.lastDiff = t ? {
        diff: t,
        options: r || this.getDiffOptions()
      } : void 0;
    }, e.prototype.getDiffOptions = function(t) {
      var r;
      return t === void 0 && (t = this.variables), {
        query: this.document,
        variables: t,
        returnPartialData: !0,
        optimistic: !0,
        canonizeResults: (r = this.observableQuery) === null || r === void 0 ? void 0 : r.options.canonizeResults
      };
    }, e.prototype.setDiff = function(t) {
      var r = this, i, a = this.lastDiff && this.lastDiff.diff;
      t && !t.complete && (!((i = this.observableQuery) === null || i === void 0) && i.getLastError()) || (this.updateLastDiff(t), !this.dirty && !o(a && a.result, t && t.result) && (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
        return r.notify();
      }, 0))));
    }, e.prototype.setObservableQuery = function(t) {
      var r = this;
      t !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener), this.observableQuery = t, t ? (t.queryInfo = this, this.listeners.add(this.oqListener = function() {
        var i = r.getDiff();
        i.fromOptimisticTransaction ? t.observe() : D(t);
      })) : delete this.oqListener);
    }, e.prototype.notify = function() {
      var t = this;
      d(this), this.shouldNotify() && this.listeners.forEach(function(r) {
        return r(t);
      }), this.dirty = !1;
    }, e.prototype.shouldNotify = function() {
      if (!this.dirty || !this.listeners.size)
        return !1;
      if (Q(this.networkStatus) && this.observableQuery) {
        var t = this.observableQuery.options.fetchPolicy;
        if (t !== "cache-only" && t !== "cache-and-network")
          return !1;
      }
      return !0;
    }, e.prototype.stop = function() {
      if (!this.stopped) {
        this.stopped = !0, this.reset(), this.cancel(), this.cancel = e.prototype.cancel;
        var t = this.observableQuery;
        t && t.stopPolling();
      }
    }, e.prototype.cancel = function() {
    }, e.prototype.updateWatch = function(t) {
      var r = this;
      t === void 0 && (t = this.variables);
      var i = this.observableQuery;
      if (!(i && i.options.fetchPolicy === "no-cache")) {
        var a = p(p({}, this.getDiffOptions(t)), { watcher: this, callback: function(s) {
          return r.setDiff(s);
        } });
        (!this.lastWatch || !o(a, this.lastWatch)) && (this.cancel(), this.cancel = this.cache.watch(this.lastWatch = a));
      }
    }, e.prototype.resetLastWrite = function() {
      this.lastWrite = void 0;
    }, e.prototype.shouldWrite = function(t, r) {
      var i = this.lastWrite;
      return !(i && // If cache.evict has been called since the last time we wrote this
      // data into the cache, there's a chance writing this result into
      // the cache will repair what was evicted.
      i.dmCount === n.get(this.cache) && o(r, i.variables) && o(t.data, i.result.data));
    }, e.prototype.markResult = function(t, r, i, a) {
      var s = this, y = new L(), b = v(t.errors) ? t.errors.slice(0) : [];
      if (this.reset(), "incremental" in t && v(t.incremental)) {
        var m = k(this.getDiff().result, t);
        t.data = m;
      } else if ("hasNext" in t && t.hasNext) {
        var g = this.getDiff();
        t.data = y.merge(g.result, t.data);
      }
      this.graphQLErrors = b, i.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: t.data, complete: !0 }, this.getDiffOptions(i.variables)) : a !== 0 && (W(t, i.errorPolicy) ? this.cache.performTransaction(function(u) {
        if (s.shouldWrite(t, i.variables))
          u.writeQuery({
            query: r,
            data: t.data,
            variables: i.variables,
            overwrite: a === 1
          }), s.lastWrite = {
            result: t,
            variables: i.variables,
            dmCount: n.get(s.cache)
          };
        else if (s.lastDiff && s.lastDiff.diff.complete) {
          t.data = s.lastDiff.diff.result;
          return;
        }
        var c = s.getDiffOptions(i.variables), h = u.diff(c);
        !s.stopped && o(s.variables, i.variables) && s.updateWatch(i.variables), s.updateLastDiff(h, c), h.complete && (t.data = h.result);
      }) : this.lastWrite = void 0);
    }, e.prototype.markReady = function() {
      return this.networkError = null, this.networkStatus = f.ready;
    }, e.prototype.markError = function(t) {
      return this.networkStatus = f.error, this.lastWrite = void 0, this.reset(), t.graphQLErrors && (this.graphQLErrors = t.graphQLErrors), t.networkError && (this.networkError = t.networkError), t;
    }, e;
  }()
);
function W(e, t) {
  t === void 0 && (t = "none");
  var r = t === "ignore" || t === "all", i = !w(e);
  return !i && r && e.data && (i = !0), i;
}
export {
  x as QueryInfo,
  W as shouldWriteResult
};
//# sourceMappingURL=index.es182.js.map
