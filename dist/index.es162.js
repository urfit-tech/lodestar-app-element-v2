import { __extends as M, __assign as l } from "./index.es63.js";
import { invariant as _ } from "./index.es117.js";
import "./index.es118.js";
import { equal as v } from "./index.es163.js";
import { NetworkStatus as f, isNetworkRequestInFlight as w } from "./index.es164.js";
import { equalByQuery as R } from "./index.es165.js";
import { getOperationDefinition as O, getQueryDefinition as k } from "./index.es36.js";
import { iterateObserversSafely as I } from "./index.es136.js";
import { Observable as E } from "./index.es65.js";
import "./index.es66.js";
import { fixObservableSubclass as L } from "./index.es139.js";
import { compact as F } from "./index.es143.js";
import { cloneDeep as S } from "./index.es134.js";
var Q = Object.assign, T = Object.hasOwnProperty, V = (
  /** @class */
  function(c) {
    M(o, c);
    function o(t) {
      var e = t.queryManager, r = t.queryInfo, i = t.options, s = c.call(this, function(p) {
        try {
          var d = p._subscription._observer;
          d && !d.error && (d.error = z);
        } catch {
        }
        var x = !s.observers.size;
        s.observers.add(p);
        var m = s.last;
        return m && m.error ? p.error && p.error(m.error) : m && m.result && p.next && p.next(m.result), x && s.reobserve().catch(function() {
        }), function() {
          s.observers.delete(p) && !s.observers.size && s.tearDownQuery();
        };
      }) || this;
      s.observers = /* @__PURE__ */ new Set(), s.subscriptions = /* @__PURE__ */ new Set(), s.queryInfo = r, s.queryManager = e, s.waitForOwnResult = D(i.fetchPolicy), s.isTornDown = !1, s.subscribeToMore = s.subscribeToMore.bind(s);
      var u = e.defaultOptions.watchQuery, n = u === void 0 ? {} : u, a = n.fetchPolicy, h = a === void 0 ? "cache-first" : a, b = i.fetchPolicy, y = b === void 0 ? h : b, q = i.initialFetchPolicy, g = q === void 0 ? y === "standby" ? h : y : q;
      s.options = l(l({}, i), {
        // Remember the initial options.fetchPolicy so we can revert back to this
        // policy when variables change. This information can also be specified
        // (or overridden) by providing options.initialFetchPolicy explicitly.
        initialFetchPolicy: g,
        // This ensures this.options.fetchPolicy always has a string value, in
        // case options.fetchPolicy was not provided.
        fetchPolicy: y
      }), s.queryId = r.queryId || e.generateQueryId();
      var P = O(s.query);
      return s.queryName = P && P.name && P.name.value, s;
    }
    return Object.defineProperty(o.prototype, "query", {
      // The `query` computed property will always reflect the document transformed
      // by the last run query. `this.options.query` will always reflect the raw
      // untransformed query to ensure document transforms with runtime conditionals
      // are run on the original document.
      get: function() {
        return this.lastQuery || this.options.query;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "variables", {
      // Computed shorthand for this.options.variables, preserved for
      // backwards compatibility.
      /**
       * An object containing the variables that were provided for the query.
       */
      get: function() {
        return this.options.variables;
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.result = function() {
      var t = this;
      return new Promise(function(e, r) {
        var i = {
          next: function(u) {
            e(u), t.observers.delete(i), t.observers.size || t.queryManager.removeQuery(t.queryId), setTimeout(function() {
              s.unsubscribe();
            }, 0);
          },
          error: r
        }, s = t.subscribe(i);
      });
    }, o.prototype.resetDiff = function() {
      this.queryInfo.resetDiff();
    }, o.prototype.getCurrentResult = function(t) {
      t === void 0 && (t = !0);
      var e = this.getLastResult(!0), r = this.queryInfo.networkStatus || e && e.networkStatus || f.ready, i = l(l({}, e), { loading: w(r), networkStatus: r }), s = this.options.fetchPolicy, u = s === void 0 ? "cache-first" : s;
      if (
        // These fetch policies should never deliver data from the cache, unless
        // redelivering a previously delivered result.
        !(D(u) || // If this.options.query has @client(always: true) fields, we cannot
        // trust diff.result, since it was read from the cache without running
        // local resolvers (and it's too late to run resolvers now, since we must
        // return a result synchronously).
        this.queryManager.getDocumentInfo(this.query).hasForcedResolvers)
      ) if (this.waitForOwnResult)
        this.queryInfo.updateWatch();
      else {
        var n = this.queryInfo.getDiff();
        (n.complete || this.options.returnPartialData) && (i.data = n.result), v(i.data, {}) && (i.data = void 0), n.complete ? (delete i.partial, n.complete && i.networkStatus === f.loading && (u === "cache-first" || u === "cache-only") && (i.networkStatus = f.ready, i.loading = !1)) : i.partial = !0, globalThis.__DEV__ !== !1 && !n.complete && !this.options.partialRefetch && !i.loading && !i.data && !i.error && W(n.missing);
      }
      return t && this.updateLastResult(i), i;
    }, o.prototype.isDifferentFromLastResult = function(t, e) {
      if (!this.last)
        return !0;
      var r = this.queryManager.getDocumentInfo(this.query).hasNonreactiveDirective ? !R(this.query, this.last.result, t, this.variables) : !v(this.last.result, t);
      return r || e && !v(this.last.variables, e);
    }, o.prototype.getLast = function(t, e) {
      var r = this.last;
      if (r && r[t] && (!e || v(r.variables, this.variables)))
        return r[t];
    }, o.prototype.getLastResult = function(t) {
      return this.getLast("result", t);
    }, o.prototype.getLastError = function(t) {
      return this.getLast("error", t);
    }, o.prototype.resetLastResults = function() {
      delete this.last, this.isTornDown = !1;
    }, o.prototype.resetQueryStoreErrors = function() {
      this.queryManager.resetErrors(this.queryId);
    }, o.prototype.refetch = function(t) {
      var e, r = {
        // Always disable polling for refetches.
        pollInterval: 0
      }, i = this.options.fetchPolicy;
      if (i === "cache-and-network" ? r.fetchPolicy = i : i === "no-cache" ? r.fetchPolicy = "no-cache" : r.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && t && T.call(t, "variables")) {
        var s = k(this.query), u = s.variableDefinitions;
        (!u || !u.some(function(n) {
          return n.variable.name.value === "variables";
        })) && globalThis.__DEV__ !== !1 && _.warn(
          20,
          t,
          ((e = s.name) === null || e === void 0 ? void 0 : e.value) || s
        );
      }
      return t && !v(this.options.variables, t) && (r.variables = this.options.variables = l(l({}, this.options.variables), t)), this.queryInfo.resetLastWrite(), this.reobserve(r, f.refetch);
    }, o.prototype.fetchMore = function(t) {
      var e = this, r = l(l({}, t.query ? t : l(l(l(l({}, this.options), { query: this.options.query }), t), { variables: l(l({}, this.options.variables), t.variables) })), {
        // The fetchMore request goes immediately to the network and does
        // not automatically write its result to the cache (hence no-cache
        // instead of network-only), because we allow the caller of
        // fetchMore to provide an updateQuery callback that determines how
        // the data gets written to the cache.
        fetchPolicy: "no-cache"
      });
      r.query = this.transformDocument(r.query);
      var i = this.queryManager.generateQueryId();
      this.lastQuery = t.query ? this.transformDocument(this.options.query) : r.query;
      var s = this.queryInfo, u = s.networkStatus;
      s.networkStatus = f.fetchMore, r.notifyOnNetworkStatusChange && this.observe();
      var n = /* @__PURE__ */ new Set();
      return this.queryManager.fetchQuery(i, r, f.fetchMore).then(function(a) {
        return e.queryManager.removeQuery(i), s.networkStatus === f.fetchMore && (s.networkStatus = u), e.queryManager.cache.batch({
          update: function(h) {
            var b = t.updateQuery;
            b ? h.updateQuery({
              query: e.query,
              variables: e.variables,
              returnPartialData: !0,
              optimistic: !1
            }, function(y) {
              return b(y, {
                fetchMoreResult: a.data,
                variables: r.variables
              });
            }) : h.writeQuery({
              query: r.query,
              variables: r.variables,
              data: a.data
            });
          },
          onWatchUpdated: function(h) {
            n.add(h.query);
          }
        }), a;
      }).finally(function() {
        n.has(e.query) || C(e);
      });
    }, o.prototype.subscribeToMore = function(t) {
      var e = this, r = this.queryManager.startGraphQLSubscription({
        query: t.document,
        variables: t.variables,
        context: t.context
      }).subscribe({
        next: function(i) {
          var s = t.updateQuery;
          s && e.updateQuery(function(u, n) {
            var a = n.variables;
            return s(u, {
              subscriptionData: i,
              variables: a
            });
          });
        },
        error: function(i) {
          if (t.onError) {
            t.onError(i);
            return;
          }
          globalThis.__DEV__ !== !1 && _.error(21, i);
        }
      });
      return this.subscriptions.add(r), function() {
        e.subscriptions.delete(r) && r.unsubscribe();
      };
    }, o.prototype.setOptions = function(t) {
      return this.reobserve(t);
    }, o.prototype.silentSetOptions = function(t) {
      var e = F(this.options, t || {});
      Q(this.options, e);
    }, o.prototype.setVariables = function(t) {
      return v(this.variables, t) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = t, this.observers.size ? this.reobserve({
        // Reset options.fetchPolicy to its original value.
        fetchPolicy: this.options.initialFetchPolicy,
        variables: t
      }, f.setVariables) : Promise.resolve());
    }, o.prototype.updateQuery = function(t) {
      var e = this.queryManager, r = e.cache.diff({
        query: this.options.query,
        variables: this.variables,
        returnPartialData: !0,
        optimistic: !1
      }).result, i = t(r, {
        variables: this.variables
      });
      i && (e.cache.writeQuery({
        query: this.options.query,
        data: i,
        variables: this.variables
      }), e.broadcastQueries());
    }, o.prototype.startPolling = function(t) {
      this.options.pollInterval = t, this.updatePolling();
    }, o.prototype.stopPolling = function() {
      this.options.pollInterval = 0, this.updatePolling();
    }, o.prototype.applyNextFetchPolicy = function(t, e) {
      if (e.nextFetchPolicy) {
        var r = e.fetchPolicy, i = r === void 0 ? "cache-first" : r, s = e.initialFetchPolicy, u = s === void 0 ? i : s;
        i === "standby" || (typeof e.nextFetchPolicy == "function" ? e.fetchPolicy = e.nextFetchPolicy(i, {
          reason: t,
          options: e,
          observable: this,
          initialFetchPolicy: u
        }) : t === "variables-changed" ? e.fetchPolicy = u : e.fetchPolicy = e.nextFetchPolicy);
      }
      return e.fetchPolicy;
    }, o.prototype.fetch = function(t, e, r) {
      return this.queryManager.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(this.queryId, t, e, r);
    }, o.prototype.updatePolling = function() {
      var t = this;
      if (!this.queryManager.ssrMode) {
        var e = this, r = e.pollingInfo, i = e.options.pollInterval;
        if (!i || !this.hasObservers()) {
          r && (clearTimeout(r.timeout), delete this.pollingInfo);
          return;
        }
        if (!(r && r.interval === i)) {
          _(i, 22);
          var s = r || (this.pollingInfo = {});
          s.interval = i;
          var u = function() {
            var a, h;
            t.pollingInfo && (!w(t.queryInfo.networkStatus) && !(!((h = (a = t.options).skipPollAttempt) === null || h === void 0) && h.call(a)) ? t.reobserve({
              // Most fetchPolicy options don't make sense to use in a polling context, as
              // users wouldn't want to be polling the cache directly. However, network-only and
              // no-cache are both useful for when the user wants to control whether or not the
              // polled results are written to the cache.
              fetchPolicy: t.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
            }, f.poll).then(n, n) : n());
          }, n = function() {
            var a = t.pollingInfo;
            a && (clearTimeout(a.timeout), a.timeout = setTimeout(u, a.interval));
          };
          n();
        }
      }
    }, o.prototype.updateLastResult = function(t, e) {
      e === void 0 && (e = this.variables);
      var r = this.getLastError();
      return r && this.last && !v(e, this.last.variables) && (r = void 0), this.last = l({ result: this.queryManager.assumeImmutableResults ? t : S(t), variables: e }, r ? { error: r } : null);
    }, o.prototype.reobserveAsConcast = function(t, e) {
      var r = this;
      this.isTornDown = !1;
      var i = (
        // Refetching uses a disposable Concast to allow refetches using different
        // options/variables, without permanently altering the options of the
        // original ObservableQuery.
        e === f.refetch || // The fetchMore method does not actually call the reobserve method, but,
        // if it did, it would definitely use a disposable Concast.
        e === f.fetchMore || // Polling uses a disposable Concast so the polling options (which force
        // fetchPolicy to be "network-only" or "no-cache") won't override the original options.
        e === f.poll
      ), s = this.options.variables, u = this.options.fetchPolicy, n = F(this.options, t || {}), a = i ? (
        // Disposable Concast fetches receive a shallow copy of this.options
        // (merged with newOptions), leaving this.options unmodified.
        n
      ) : Q(this.options, n), h = this.transformDocument(a.query);
      this.lastQuery = h, i || (this.updatePolling(), t && t.variables && !v(t.variables, s) && // Don't mess with the fetchPolicy if it's currently "standby".
      a.fetchPolicy !== "standby" && // If we're changing the fetchPolicy anyway, don't try to change it here
      // using applyNextFetchPolicy. The explicit options.fetchPolicy wins.
      (a.fetchPolicy === u || // A `nextFetchPolicy` function has even higher priority, though,
      // so in that case `applyNextFetchPolicy` must be called.
      typeof a.nextFetchPolicy == "function") && (this.applyNextFetchPolicy("variables-changed", a), e === void 0 && (e = f.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = D(a.fetchPolicy));
      var b = function() {
        r.concast === g && (r.waitForOwnResult = !1);
      }, y = a.variables && l({}, a.variables), q = this.fetch(a, e, h), g = q.concast, P = q.fromLink, p = {
        next: function(d) {
          v(r.variables, y) && (b(), r.reportResult(d, y));
        },
        error: function(d) {
          v(r.variables, y) && (b(), r.reportError(d, y));
        }
      };
      return !i && (P || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = g, this.observer = p), g.addObserver(p), g;
    }, o.prototype.reobserve = function(t, e) {
      return this.reobserveAsConcast(t, e).promise;
    }, o.prototype.resubscribeAfterError = function() {
      for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
      var r = this.last;
      this.resetLastResults();
      var i = this.subscribe.apply(this, t);
      return this.last = r, i;
    }, o.prototype.observe = function() {
      this.reportResult(
        // Passing false is important so that this.getCurrentResult doesn't
        // save the fetchMore result as this.lastResult, causing it to be
        // ignored due to the this.isDifferentFromLastResult check in
        // this.reportResult.
        this.getCurrentResult(!1),
        this.variables
      );
    }, o.prototype.reportResult = function(t, e) {
      var r = this.getLastError(), i = this.isDifferentFromLastResult(t, e);
      (r || !t.partial || this.options.returnPartialData) && this.updateLastResult(t, e), (r || i) && I(this.observers, "next", t);
    }, o.prototype.reportError = function(t, e) {
      var r = l(l({}, this.getLastResult()), { error: t, errors: t.graphQLErrors, networkStatus: f.error, loading: !1 });
      this.updateLastResult(r, e), I(this.observers, "error", this.last.error = t);
    }, o.prototype.hasObservers = function() {
      return this.observers.size > 0;
    }, o.prototype.tearDownQuery = function() {
      this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(t) {
        return t.unsubscribe();
      }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
    }, o.prototype.transformDocument = function(t) {
      return this.queryManager.transform(t);
    }, o;
  }(E)
);
L(V);
function C(c) {
  var o = c.options, t = o.fetchPolicy, e = o.nextFetchPolicy;
  return t === "cache-and-network" || t === "network-only" ? c.reobserve({
    fetchPolicy: "cache-first",
    // Use a temporary nextFetchPolicy function that replaces itself with the
    // previous nextFetchPolicy value and returns the original fetchPolicy.
    nextFetchPolicy: function(r, i) {
      return this.nextFetchPolicy = e, typeof this.nextFetchPolicy == "function" ? this.nextFetchPolicy(r, i) : t;
    }
  }) : c.reobserve();
}
function z(c) {
  globalThis.__DEV__ !== !1 && _.error(23, c.message, c.stack);
}
function W(c) {
  globalThis.__DEV__ !== !1 && c && globalThis.__DEV__ !== !1 && _.debug(24, c);
}
function D(c) {
  return c === "network-only" || c === "no-cache" || c === "standby";
}
export {
  V as ObservableQuery,
  W as logMissingFieldErrors,
  C as reobserveCacheFirst
};
//# sourceMappingURL=index.es162.js.map
