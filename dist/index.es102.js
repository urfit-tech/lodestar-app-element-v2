import { __awaiter as X, __generator as Z, __assign as g } from "./index.es56.js";
import { newInvariantError as A, invariant as D } from "./index.es65.js";
import "./index.es66.js";
import { equal as $ } from "./index.es106.js";
import { isExecutionPatchIncrementalResult as F, mergeIncrementalData as J, isExecutionPatchResult as ee } from "./index.es89.js";
import { ApolloError as N, graphQLResultHasProtocolErrors as re, PROTOCOL_ERRORS_SYMBOL as te, isApolloError as ie } from "./index.es60.js";
import { ObservableQuery as U, logMissingFieldErrors as ae } from "./index.es105.js";
import { NetworkStatus as C, isNetworkRequestInFlight as V } from "./index.es107.js";
import { shouldWriteResult as B, QueryInfo as S } from "./index.es150.js";
import { Trie as oe } from "./index.es68.js";
import { AutoCleanedWeakCache as se } from "./index.es76.js";
import { cacheSizes as ne } from "./index.es71.js";
import { DocumentTransform as ue } from "./index.es67.js";
import { asyncMap as T } from "./index.es85.js";
import { getOperationName as W, getDefaultValues as ce, getOperationDefinition as fe } from "./index.es36.js";
import { removeDirectivesFromDocument as le } from "./index.es78.js";
import { hasDirectives as he, hasClientExports as ve } from "./index.es64.js";
import { isDocumentNode as pe } from "./index.es74.js";
import { makeUniqueId as j } from "./index.es92.js";
import { Observable as M } from "./index.es58.js";
import "./index.es59.js";
import { print as me } from "./index.es61.js";
import { canonicalStringify as ye } from "./index.es77.js";
import { Concast as I } from "./index.es86.js";
import { execute as z } from "./index.es104.js";
import { graphQLResultHasError as _, getGraphQLErrorsFromResult as G } from "./index.es88.js";
import { isNonEmptyArray as de } from "./index.es79.js";
import { isNonNullObject as be } from "./index.es62.js";
var ge = Object.prototype.hasOwnProperty, H = /* @__PURE__ */ Object.create(null), Ye = (
  /** @class */
  function() {
    function l(e) {
      var r = this;
      this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new se(
        ne["queryManager.getDocumentInfo"] || 2e3
        /* defaultCacheSizes["queryManager.getDocumentInfo"] */
      ), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new oe(!1);
      var i = new ue(
        function(n) {
          return r.cache.transformDocument(n);
        },
        // Allow the apollo cache to manage its own transform caches
        { cache: !1 }
      );
      this.cache = e.cache, this.link = e.link, this.defaultOptions = e.defaultOptions, this.queryDeduplication = e.queryDeduplication, this.clientAwareness = e.clientAwareness, this.localState = e.localState, this.ssrMode = e.ssrMode, this.assumeImmutableResults = e.assumeImmutableResults;
      var t = e.documentTransform;
      this.documentTransform = t ? i.concat(t).concat(i) : i, this.defaultContext = e.defaultContext || /* @__PURE__ */ Object.create(null), (this.onBroadcast = e.onBroadcast) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
    }
    return l.prototype.stop = function() {
      var e = this;
      this.queries.forEach(function(r, i) {
        e.stopQueryNoBroadcast(i);
      }), this.cancelPendingFetches(A(25));
    }, l.prototype.cancelPendingFetches = function(e) {
      this.fetchCancelFns.forEach(function(r) {
        return r(e);
      }), this.fetchCancelFns.clear();
    }, l.prototype.mutate = function(e) {
      return X(this, arguments, void 0, function(r) {
        var i, t, n, a, s, u, c, f = r.mutation, h = r.variables, d = r.optimisticResponse, y = r.updateQueries, v = r.refetchQueries, o = v === void 0 ? [] : v, m = r.awaitRefetchQueries, p = m === void 0 ? !1 : m, b = r.update, Q = r.onQueryUpdated, k = r.fetchPolicy, O = k === void 0 ? ((u = this.defaultOptions.mutate) === null || u === void 0 ? void 0 : u.fetchPolicy) || "network-only" : k, w = r.errorPolicy, P = w === void 0 ? ((c = this.defaultOptions.mutate) === null || c === void 0 ? void 0 : c.errorPolicy) || "none" : w, q = r.keepRootFields, R = r.context;
        return Z(this, function(x) {
          switch (x.label) {
            case 0:
              return D(f, 26), D(O === "network-only" || O === "no-cache", 27), i = this.generateMutationId(), f = this.cache.transformForLink(this.transform(f)), t = this.getDocumentInfo(f).hasClientExports, h = this.getVariables(f, h), t ? [4, this.localState.addExportedVariables(f, h, R)] : [3, 2];
            case 1:
              h = x.sent(), x.label = 2;
            case 2:
              return n = this.mutationStore && (this.mutationStore[i] = {
                mutation: f,
                variables: h,
                loading: !0,
                error: null
              }), a = d && this.markMutationOptimistic(d, {
                mutationId: i,
                document: f,
                variables: h,
                fetchPolicy: O,
                errorPolicy: P,
                context: R,
                updateQueries: y,
                update: b,
                keepRootFields: q
              }), this.broadcastQueries(), s = this, [2, new Promise(function(Y, K) {
                return T(s.getObservableFromLink(f, g(g({}, R), { optimisticResponse: a ? d : void 0 }), h, {}, !1), function(E) {
                  if (_(E) && P === "none")
                    throw new N({
                      graphQLErrors: G(E)
                    });
                  n && (n.loading = !1, n.error = null);
                  var L = g({}, E);
                  return typeof o == "function" && (o = o(L)), P === "ignore" && _(L) && delete L.errors, s.markMutationResult({
                    mutationId: i,
                    result: L,
                    document: f,
                    variables: h,
                    fetchPolicy: O,
                    errorPolicy: P,
                    context: R,
                    update: b,
                    updateQueries: y,
                    awaitRefetchQueries: p,
                    refetchQueries: o,
                    removeOptimistic: a ? i : void 0,
                    onQueryUpdated: Q,
                    keepRootFields: q
                  });
                }).subscribe({
                  next: function(E) {
                    s.broadcastQueries(), (!("hasNext" in E) || E.hasNext === !1) && Y(E);
                  },
                  error: function(E) {
                    n && (n.loading = !1, n.error = E), a && s.cache.removeOptimistic(i), s.broadcastQueries(), K(E instanceof N ? E : new N({
                      networkError: E
                    }));
                  }
                });
              })];
          }
        });
      });
    }, l.prototype.markMutationResult = function(e, r) {
      var i = this;
      r === void 0 && (r = this.cache);
      var t = e.result, n = [], a = e.fetchPolicy === "no-cache";
      if (!a && B(t, e.errorPolicy)) {
        if (F(t) || n.push({
          result: t.data,
          dataId: "ROOT_MUTATION",
          query: e.document,
          variables: e.variables
        }), F(t) && de(t.incremental)) {
          var s = r.diff({
            id: "ROOT_MUTATION",
            // The cache complains if passed a mutation where it expects a
            // query, so we transform mutations and subscriptions to queries
            // (only once, thanks to this.transformCache).
            query: this.getDocumentInfo(e.document).asQuery,
            variables: e.variables,
            optimistic: !1,
            returnPartialData: !0
          }), u = void 0;
          s.result && (u = J(s.result, t)), typeof u < "u" && (t.data = u, n.push({
            result: u,
            dataId: "ROOT_MUTATION",
            query: e.document,
            variables: e.variables
          }));
        }
        var c = e.updateQueries;
        c && this.queries.forEach(function(h, d) {
          var y = h.observableQuery, v = y && y.queryName;
          if (!(!v || !ge.call(c, v))) {
            var o = c[v], m = i.queries.get(d), p = m.document, b = m.variables, Q = r.diff({
              query: p,
              variables: b,
              returnPartialData: !0,
              optimistic: !1
            }), k = Q.result, O = Q.complete;
            if (O && k) {
              var w = o(k, {
                mutationResult: t,
                queryName: p && W(p) || void 0,
                queryVariables: b
              });
              w && n.push({
                result: w,
                dataId: "ROOT_QUERY",
                query: p,
                variables: b
              });
            }
          }
        });
      }
      if (n.length > 0 || (e.refetchQueries || "").length > 0 || e.update || e.onQueryUpdated || e.removeOptimistic) {
        var f = [];
        if (this.refetchQueries({
          updateCache: function(h) {
            a || n.forEach(function(o) {
              return h.write(o);
            });
            var d = e.update, y = !ee(t) || F(t) && !t.hasNext;
            if (d) {
              if (!a) {
                var v = h.diff({
                  id: "ROOT_MUTATION",
                  // The cache complains if passed a mutation where it expects a
                  // query, so we transform mutations and subscriptions to queries
                  // (only once, thanks to this.transformCache).
                  query: i.getDocumentInfo(e.document).asQuery,
                  variables: e.variables,
                  optimistic: !1,
                  returnPartialData: !0
                });
                v.complete && (t = g(g({}, t), { data: v.result }), "incremental" in t && delete t.incremental, "hasNext" in t && delete t.hasNext);
              }
              y && d(h, t, {
                context: e.context,
                variables: e.variables
              });
            }
            !a && !e.keepRootFields && y && h.modify({
              id: "ROOT_MUTATION",
              fields: function(o, m) {
                var p = m.fieldName, b = m.DELETE;
                return p === "__typename" ? o : b;
              }
            });
          },
          include: e.refetchQueries,
          // Write the final mutation.result to the root layer of the cache.
          optimistic: !1,
          // Remove the corresponding optimistic layer at the same time as we
          // write the final non-optimistic result.
          removeOptimistic: e.removeOptimistic,
          // Let the caller of client.mutate optionally determine the refetching
          // behavior for watched queries after the mutation.update function runs.
          // If no onQueryUpdated function was provided for this mutation, pass
          // null instead of undefined to disable the default refetching behavior.
          onQueryUpdated: e.onQueryUpdated || null
        }).forEach(function(h) {
          return f.push(h);
        }), e.awaitRefetchQueries || e.onQueryUpdated)
          return Promise.all(f).then(function() {
            return t;
          });
      }
      return Promise.resolve(t);
    }, l.prototype.markMutationOptimistic = function(e, r) {
      var i = this, t = typeof e == "function" ? e(r.variables, { IGNORE: H }) : e;
      return t === H ? !1 : (this.cache.recordOptimisticTransaction(function(n) {
        try {
          i.markMutationResult(g(g({}, r), { result: { data: t } }), n);
        } catch (a) {
          globalThis.__DEV__ !== !1 && D.error(a);
        }
      }, r.mutationId), !0);
    }, l.prototype.fetchQuery = function(e, r, i) {
      return this.fetchConcastWithInfo(e, r, i).concast.promise;
    }, l.prototype.getQueryStore = function() {
      var e = /* @__PURE__ */ Object.create(null);
      return this.queries.forEach(function(r, i) {
        e[i] = {
          variables: r.variables,
          networkStatus: r.networkStatus,
          networkError: r.networkError,
          graphQLErrors: r.graphQLErrors
        };
      }), e;
    }, l.prototype.resetErrors = function(e) {
      var r = this.queries.get(e);
      r && (r.networkError = void 0, r.graphQLErrors = []);
    }, l.prototype.transform = function(e) {
      return this.documentTransform.transformDocument(e);
    }, l.prototype.getDocumentInfo = function(e) {
      var r = this.transformCache;
      if (!r.has(e)) {
        var i = {
          // TODO These three calls (hasClientExports, shouldForceResolvers, and
          // usesNonreactiveDirective) are performing independent full traversals
          // of the transformed document. We should consider merging these
          // traversals into a single pass in the future, though the work is
          // cached after the first time.
          hasClientExports: ve(e),
          hasForcedResolvers: this.localState.shouldForceResolvers(e),
          hasNonreactiveDirective: he(["nonreactive"], e),
          clientQuery: this.localState.clientQuery(e),
          serverQuery: le([
            { name: "client", remove: !0 },
            { name: "connection" },
            { name: "nonreactive" }
          ], e),
          defaultVars: ce(fe(e)),
          // Transform any mutation or subscription operations to query operations
          // so we can read/write them from/to the cache.
          asQuery: g(g({}, e), { definitions: e.definitions.map(function(t) {
            return t.kind === "OperationDefinition" && t.operation !== "query" ? g(g({}, t), { operation: "query" }) : t;
          }) })
        };
        r.set(e, i);
      }
      return r.get(e);
    }, l.prototype.getVariables = function(e, r) {
      return g(g({}, this.getDocumentInfo(e).defaultVars), r);
    }, l.prototype.watchQuery = function(e) {
      var r = this.transform(e.query);
      e = g(g({}, e), { variables: this.getVariables(r, e.variables) }), typeof e.notifyOnNetworkStatusChange > "u" && (e.notifyOnNetworkStatusChange = !1);
      var i = new S(this), t = new U({
        queryManager: this,
        queryInfo: i,
        options: e
      });
      return t.lastQuery = r, this.queries.set(t.queryId, i), i.init({
        document: r,
        observableQuery: t,
        variables: t.variables
      }), t;
    }, l.prototype.query = function(e, r) {
      var i = this;
      return r === void 0 && (r = this.generateQueryId()), D(e.query, 28), D(e.query.kind === "Document", 29), D(!e.returnPartialData, 30), D(!e.pollInterval, 31), this.fetchQuery(r, g(g({}, e), { query: this.transform(e.query) })).finally(function() {
        return i.stopQuery(r);
      });
    }, l.prototype.generateQueryId = function() {
      return String(this.queryIdCounter++);
    }, l.prototype.generateRequestId = function() {
      return this.requestIdCounter++;
    }, l.prototype.generateMutationId = function() {
      return String(this.mutationIdCounter++);
    }, l.prototype.stopQueryInStore = function(e) {
      this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
    }, l.prototype.stopQueryInStoreNoBroadcast = function(e) {
      var r = this.queries.get(e);
      r && r.stop();
    }, l.prototype.clearStore = function(e) {
      return e === void 0 && (e = {
        discardWatches: !0
      }), this.cancelPendingFetches(A(32)), this.queries.forEach(function(r) {
        r.observableQuery ? r.networkStatus = C.loading : r.stop();
      }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(e);
    }, l.prototype.getObservableQueries = function(e) {
      var r = this;
      e === void 0 && (e = "active");
      var i = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set();
      return Array.isArray(e) && e.forEach(function(a) {
        typeof a == "string" ? t.set(a, !1) : pe(a) ? t.set(r.transform(a), !1) : be(a) && a.query && n.add(a);
      }), this.queries.forEach(function(a, s) {
        var u = a.observableQuery, c = a.document;
        if (u) {
          if (e === "all") {
            i.set(s, u);
            return;
          }
          var f = u.queryName, h = u.options.fetchPolicy;
          if (h === "standby" || e === "active" && !u.hasObservers())
            return;
          (e === "active" || f && t.has(f) || c && t.has(c)) && (i.set(s, u), f && t.set(f, !0), c && t.set(c, !0));
        }
      }), n.size && n.forEach(function(a) {
        var s = j("legacyOneTimeQuery"), u = r.getQuery(s).init({
          document: a.query,
          variables: a.variables
        }), c = new U({
          queryManager: r,
          queryInfo: u,
          options: g(g({}, a), { fetchPolicy: "network-only" })
        });
        D(c.queryId === s), u.setObservableQuery(c), i.set(s, c);
      }), globalThis.__DEV__ !== !1 && t.size && t.forEach(function(a, s) {
        a || globalThis.__DEV__ !== !1 && D.warn(typeof s == "string" ? 33 : 34, s);
      }), i;
    }, l.prototype.reFetchObservableQueries = function(e) {
      var r = this;
      e === void 0 && (e = !1);
      var i = [];
      return this.getObservableQueries(e ? "all" : "active").forEach(function(t, n) {
        var a = t.options.fetchPolicy;
        t.resetLastResults(), (e || a !== "standby" && a !== "cache-only") && i.push(t.refetch()), r.getQuery(n).setDiff(null);
      }), this.broadcastQueries(), Promise.all(i);
    }, l.prototype.setObservableQuery = function(e) {
      this.getQuery(e.queryId).setObservableQuery(e);
    }, l.prototype.startGraphQLSubscription = function(e) {
      var r = this, i = e.query, t = e.fetchPolicy, n = e.errorPolicy, a = n === void 0 ? "none" : n, s = e.variables, u = e.context, c = u === void 0 ? {} : u, f = e.extensions, h = f === void 0 ? {} : f;
      i = this.transform(i), s = this.getVariables(i, s);
      var d = function(v) {
        return r.getObservableFromLink(i, c, v, h).map(function(o) {
          t !== "no-cache" && (B(o, a) && r.cache.write({
            query: i,
            result: o.data,
            dataId: "ROOT_SUBSCRIPTION",
            variables: v
          }), r.broadcastQueries());
          var m = _(o), p = re(o);
          if (m || p) {
            var b = {};
            if (m && (b.graphQLErrors = o.errors), p && (b.protocolErrors = o.extensions[te]), a === "none" || p)
              throw new N(b);
          }
          return a === "ignore" && delete o.errors, o;
        });
      };
      if (this.getDocumentInfo(i).hasClientExports) {
        var y = this.localState.addExportedVariables(i, s, c).then(d);
        return new M(function(v) {
          var o = null;
          return y.then(function(m) {
            return o = m.subscribe(v);
          }, v.error), function() {
            return o && o.unsubscribe();
          };
        });
      }
      return d(s);
    }, l.prototype.stopQuery = function(e) {
      this.stopQueryNoBroadcast(e), this.broadcastQueries();
    }, l.prototype.stopQueryNoBroadcast = function(e) {
      this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
    }, l.prototype.removeQuery = function(e) {
      this.fetchCancelFns.delete(e), this.queries.has(e) && (this.getQuery(e).stop(), this.queries.delete(e));
    }, l.prototype.broadcastQueries = function() {
      this.onBroadcast && this.onBroadcast(), this.queries.forEach(function(e) {
        return e.notify();
      });
    }, l.prototype.getLocalState = function() {
      return this.localState;
    }, l.prototype.getObservableFromLink = function(e, r, i, t, n) {
      var a = this, s;
      n === void 0 && (n = (s = r?.queryDeduplication) !== null && s !== void 0 ? s : this.queryDeduplication);
      var u, c = this.getDocumentInfo(e), f = c.serverQuery, h = c.clientQuery;
      if (f) {
        var d = this, y = d.inFlightLinkObservables, v = d.link, o = {
          query: f,
          variables: i,
          operationName: W(f) || void 0,
          context: this.prepareContext(g(g({}, r), { forceFetch: !n })),
          extensions: t
        };
        if (r = o.context, n) {
          var m = me(f), p = ye(i), b = y.lookup(m, p);
          if (u = b.observable, !u) {
            var Q = new I([
              z(v, o)
            ]);
            u = b.observable = Q, Q.beforeNext(function() {
              y.remove(m, p);
            });
          }
        } else
          u = new I([
            z(v, o)
          ]);
      } else
        u = new I([M.of({ data: {} })]), r = this.prepareContext(r);
      return h && (u = T(u, function(k) {
        return a.localState.runResolvers({
          document: h,
          remoteResult: k,
          context: r,
          variables: i
        });
      })), u;
    }, l.prototype.getResultsFromLink = function(e, r, i) {
      var t = e.lastRequestId = this.generateRequestId(), n = this.cache.transformForLink(i.query);
      return T(this.getObservableFromLink(n, i.context, i.variables), function(a) {
        var s = G(a), u = s.length > 0;
        if (t >= e.lastRequestId) {
          if (u && i.errorPolicy === "none")
            throw e.markError(new N({
              graphQLErrors: s
            }));
          e.markResult(a, n, i, r), e.markReady();
        }
        var c = {
          data: a.data,
          loading: !1,
          networkStatus: C.ready
        };
        return u && i.errorPolicy !== "ignore" && (c.errors = s, c.networkStatus = C.error), c;
      }, function(a) {
        var s = ie(a) ? a : new N({ networkError: a });
        throw t >= e.lastRequestId && e.markError(s), s;
      });
    }, l.prototype.fetchConcastWithInfo = function(e, r, i, t) {
      var n = this;
      i === void 0 && (i = C.loading), t === void 0 && (t = r.query);
      var a = this.getVariables(t, r.variables), s = this.getQuery(e), u = this.defaultOptions.watchQuery, c = r.fetchPolicy, f = c === void 0 ? u && u.fetchPolicy || "cache-first" : c, h = r.errorPolicy, d = h === void 0 ? u && u.errorPolicy || "none" : h, y = r.returnPartialData, v = y === void 0 ? !1 : y, o = r.notifyOnNetworkStatusChange, m = o === void 0 ? !1 : o, p = r.context, b = p === void 0 ? {} : p, Q = Object.assign({}, r, {
        query: t,
        variables: a,
        fetchPolicy: f,
        errorPolicy: d,
        returnPartialData: v,
        notifyOnNetworkStatusChange: m,
        context: b
      }), k = function(R) {
        Q.variables = R;
        var x = n.fetchQueryByPolicy(s, Q, i);
        return (
          // If we're in standby, postpone advancing options.fetchPolicy using
          // applyNextFetchPolicy.
          Q.fetchPolicy !== "standby" && // The "standby" policy currently returns [] from fetchQueryByPolicy, so
          // this is another way to detect when nothing was done/fetched.
          x.sources.length > 0 && s.observableQuery && s.observableQuery.applyNextFetchPolicy("after-fetch", r), x
        );
      }, O = function() {
        return n.fetchCancelFns.delete(e);
      };
      this.fetchCancelFns.set(e, function(R) {
        O(), setTimeout(function() {
          return w.cancel(R);
        });
      });
      var w, P;
      if (this.getDocumentInfo(Q.query).hasClientExports)
        w = new I(this.localState.addExportedVariables(Q.query, Q.variables, Q.context).then(k).then(function(R) {
          return R.sources;
        })), P = !0;
      else {
        var q = k(Q.variables);
        P = q.fromLink, w = new I(q.sources);
      }
      return w.promise.then(O, O), {
        concast: w,
        fromLink: P
      };
    }, l.prototype.refetchQueries = function(e) {
      var r = this, i = e.updateCache, t = e.include, n = e.optimistic, a = n === void 0 ? !1 : n, s = e.removeOptimistic, u = s === void 0 ? a ? j("refetchQueries") : void 0 : s, c = e.onQueryUpdated, f = /* @__PURE__ */ new Map();
      t && this.getObservableQueries(t).forEach(function(d, y) {
        f.set(y, {
          oq: d,
          lastDiff: r.getQuery(y).getDiff()
        });
      });
      var h = /* @__PURE__ */ new Map();
      return i && this.cache.batch({
        update: i,
        // Since you can perform any combination of cache reads and/or writes in
        // the cache.batch update function, its optimistic option can be either
        // a boolean or a string, representing three distinct modes of
        // operation:
        //
        // * false: read/write only the root layer
        // * true: read/write the topmost layer
        // * string: read/write a fresh optimistic layer with that ID string
        //
        // When typeof optimistic === "string", a new optimistic layer will be
        // temporarily created within cache.batch with that string as its ID. If
        // we then pass that same string as the removeOptimistic option, we can
        // make cache.batch immediately remove the optimistic layer after
        // running the updateCache function, triggering only one broadcast.
        //
        // However, the refetchQueries method accepts only true or false for its
        // optimistic option (not string). We interpret true to mean a temporary
        // optimistic layer should be created, to allow efficiently rolling back
        // the effect of the updateCache function, which involves passing a
        // string instead of true as the optimistic option to cache.batch, when
        // refetchQueries receives optimistic: true.
        //
        // In other words, we are deliberately not supporting the use case of
        // writing to an *existing* optimistic layer (using the refetchQueries
        // updateCache function), since that would potentially interfere with
        // other optimistic updates in progress. Instead, you can read/write
        // only the root layer by passing optimistic: false to refetchQueries,
        // or you can read/write a brand new optimistic layer that will be
        // automatically removed by passing optimistic: true.
        optimistic: a && u || !1,
        // The removeOptimistic option can also be provided by itself, even if
        // optimistic === false, to remove some previously-added optimistic
        // layer safely and efficiently, like we do in markMutationResult.
        //
        // If an explicit removeOptimistic string is provided with optimistic:
        // true, the removeOptimistic string will determine the ID of the
        // temporary optimistic layer, in case that ever matters.
        removeOptimistic: u,
        onWatchUpdated: function(d, y, v) {
          var o = d.watcher instanceof S && d.watcher.observableQuery;
          if (o) {
            if (c) {
              f.delete(o.queryId);
              var m = c(o, y, v);
              return m === !0 && (m = o.refetch()), m !== !1 && h.set(o, m), m;
            }
            c !== null && f.set(o.queryId, { oq: o, lastDiff: v, diff: y });
          }
        }
      }), f.size && f.forEach(function(d, y) {
        var v = d.oq, o = d.lastDiff, m = d.diff, p;
        if (c) {
          if (!m) {
            var b = v.queryInfo;
            b.reset(), m = b.getDiff();
          }
          p = c(v, m, o);
        }
        (!c || p === !0) && (p = v.refetch()), p !== !1 && h.set(v, p), y.indexOf("legacyOneTimeQuery") >= 0 && r.stopQueryNoBroadcast(y);
      }), u && this.cache.removeOptimistic(u), h;
    }, l.prototype.fetchQueryByPolicy = function(e, r, i) {
      var t = this, n = r.query, a = r.variables, s = r.fetchPolicy, u = r.refetchWritePolicy, c = r.errorPolicy, f = r.returnPartialData, h = r.context, d = r.notifyOnNetworkStatusChange, y = e.networkStatus;
      e.init({
        document: n,
        variables: a,
        networkStatus: i
      });
      var v = function() {
        return e.getDiff();
      }, o = function(k, O) {
        O === void 0 && (O = e.networkStatus || C.loading);
        var w = k.result;
        globalThis.__DEV__ !== !1 && !f && !$(w, {}) && ae(k.missing);
        var P = function(q) {
          return M.of(g({ data: q, loading: V(O), networkStatus: O }, k.complete ? null : { partial: !0 }));
        };
        return w && t.getDocumentInfo(n).hasForcedResolvers ? t.localState.runResolvers({
          document: n,
          remoteResult: { data: w },
          context: h,
          variables: a,
          onlyRunForcedResolvers: !0
        }).then(function(q) {
          return P(q.data || void 0);
        }) : c === "none" && O === C.refetch && Array.isArray(k.missing) ? P(void 0) : P(w);
      }, m = s === "no-cache" ? 0 : i === C.refetch && u !== "merge" ? 1 : 2, p = function() {
        return t.getResultsFromLink(e, m, {
          query: n,
          variables: a,
          context: h,
          fetchPolicy: s,
          errorPolicy: c
        });
      }, b = d && typeof y == "number" && y !== i && V(i);
      switch (s) {
        default:
        case "cache-first": {
          var Q = v();
          return Q.complete ? {
            fromLink: !1,
            sources: [o(Q, e.markReady())]
          } : f || b ? {
            fromLink: !0,
            sources: [o(Q), p()]
          } : { fromLink: !0, sources: [p()] };
        }
        case "cache-and-network": {
          var Q = v();
          return Q.complete || f || b ? {
            fromLink: !0,
            sources: [o(Q), p()]
          } : { fromLink: !0, sources: [p()] };
        }
        case "cache-only":
          return {
            fromLink: !1,
            sources: [o(v(), e.markReady())]
          };
        case "network-only":
          return b ? {
            fromLink: !0,
            sources: [o(v()), p()]
          } : { fromLink: !0, sources: [p()] };
        case "no-cache":
          return b ? {
            fromLink: !0,
            // Note that queryInfo.getDiff() for no-cache queries does not call
            // cache.diff, but instead returns a { complete: false } stub result
            // when there is no queryInfo.diff already defined.
            sources: [o(e.getDiff()), p()]
          } : { fromLink: !0, sources: [p()] };
        case "standby":
          return { fromLink: !1, sources: [] };
      }
    }, l.prototype.getQuery = function(e) {
      return e && !this.queries.has(e) && this.queries.set(e, new S(this, e)), this.queries.get(e);
    }, l.prototype.prepareContext = function(e) {
      e === void 0 && (e = {});
      var r = this.localState.prepareContext(e);
      return g(g(g({}, this.defaultContext), r), { clientAwareness: this.clientAwareness });
    }, l;
  }()
);
export {
  Ye as QueryManager
};
//# sourceMappingURL=index.es102.js.map
