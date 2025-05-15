import { __assign as g, __rest as F } from "./index.es65.js";
import { invariant as x } from "./index.es116.js";
import "./index.es117.js";
import { r as h } from "./index.es198.js";
import { useSyncExternalStore as I } from "./index.es200.js";
import { equal as S } from "./index.es156.js";
import { ApolloError as M } from "./index.es69.js";
import { verifyDocumentType as L, DocumentType as W } from "./index.es150.js";
import { useApolloClient as _ } from "./index.es197.js";
import { wrapHook as q } from "./index.es201.js";
import { getApolloContext as z } from "./index.es199.js";
import { NetworkStatus as P } from "./index.es157.js";
import { maybeDeepFreeze as b } from "./index.es135.js";
import { compact as V } from "./index.es143.js";
import { mergeOptions as B } from "./index.es146.js";
import { isNonEmptyArray as A } from "./index.es131.js";
var G = Object.prototype.hasOwnProperty;
function E() {
}
var w = Symbol();
function Or(r, t) {
  return t === void 0 && (t = /* @__PURE__ */ Object.create(null)), q("useQuery", J, _(t && t.client))(r, t);
}
function J(r, t) {
  var e = U(r, t), i = e.result, n = e.obsQueryFields;
  return h.useMemo(function() {
    return g(g({}, i), n);
  }, [i, n]);
}
function K(r, t, e, i, n) {
  function u(c) {
    var s;
    L(t, W.Query);
    var v = {
      client: r,
      query: t,
      observable: (
        // See if there is an existing observable that was used to fetch the same
        // data and if so, use it instead since it will contain the proper queryId
        // to fetch the result set. This is used during SSR.
        i && i.getSSRObservable(n()) || r.watchQuery(j(void 0, r, e, n()))
      ),
      resultData: {
        // Reuse previousData from previous InternalState (if any) to provide
        // continuity of previousData even if/when the query or client changes.
        previousData: (s = c?.resultData.current) === null || s === void 0 ? void 0 : s.data
      }
    };
    return v;
  }
  var f = h.useState(u), o = f[0], a = f[1];
  function d(c) {
    var s, v;
    Object.assign(o.observable, (s = {}, s[w] = c, s));
    var y = o.resultData;
    a(g(g({}, o), {
      // might be a different query
      query: c.query,
      resultData: Object.assign(y, {
        // We need to modify the previous `resultData` object as we rely on the
        // object reference in other places
        previousData: ((v = y.current) === null || v === void 0 ? void 0 : v.data) || y.previousData,
        current: void 0
      })
    }));
  }
  if (r !== o.client || t !== o.query) {
    var p = u(o);
    return a(p), [p, d];
  }
  return [o, d];
}
function U(r, t) {
  var e = _(t.client), i = h.useContext(z()).renderPromises, n = !!i, u = e.disableNetworkFetches, f = t.ssr !== !1 && !t.skip, o = t.partialRefetch, a = $(e, r, t, n), d = K(e, r, t, i, a), p = d[0], c = p.observable, s = p.resultData, v = d[1], y = a(c);
  Z(
    s,
    // might get mutated during render
    c,
    // might get mutated during render
    e,
    t,
    y
  );
  var Q = h.useMemo(function() {
    return er(c);
  }, [c]);
  Y(c, i, f);
  var O = X(s, c, e, t, y, u, o, n, {
    onCompleted: t.onCompleted || E,
    onError: t.onError || E
  });
  return {
    result: O,
    obsQueryFields: Q,
    observable: c,
    resultData: s,
    client: e,
    onQueryExecuted: v
  };
}
function X(r, t, e, i, n, u, f, o, a) {
  var d = h.useRef(a);
  h.useEffect(function() {
    d.current = a;
  });
  var p = (o || u) && i.ssr === !1 && !i.skip ? (
    // If SSR has been explicitly disabled, and this function has been called
    // on the server side, return the default loading state.
    T
  ) : i.skip || n.fetchPolicy === "standby" ? (
    // When skipping a query (ie. we're not querying for data but still want to
    // render children), make sure the `data` is cleared out and `loading` is
    // set to `false` (since we aren't loading anything).
    //
    // NOTE: We no longer think this is the correct behavior. Skipping should
    // not automatically set `data` to `undefined`, but instead leave the
    // previous data in place. In other words, skipping should not mandate that
    // previously received data is all of a sudden removed. Unfortunately,
    // changing this is breaking, so we'll have to wait until Apollo Client 4.0
    // to address this.
    N
  ) : void 0, c = r.previousData, s = h.useMemo(function() {
    return p && D(p, c, t, e);
  }, [e, t, p, c]);
  return I(h.useCallback(function(v) {
    if (o)
      return function() {
      };
    var y = function() {
      var m = r.current, l = t.getCurrentResult();
      m && m.loading === l.loading && m.networkStatus === l.networkStatus && S(m.data, l.data) || k(l, r, t, e, f, v, d.current);
    }, Q = function(m) {
      if (O.current.unsubscribe(), O.current = t.resubscribeAfterError(y, Q), !G.call(m, "graphQLErrors"))
        throw m;
      var l = r.current;
      (!l || l && l.loading || !S(m, l.error)) && k({
        data: l && l.data,
        error: m,
        loading: !1,
        networkStatus: P.error
      }, r, t, e, f, v, d.current);
    }, O = { current: t.subscribe(y, Q) };
    return function() {
      setTimeout(function() {
        return O.current.unsubscribe();
      });
    };
  }, [
    u,
    o,
    t,
    r,
    f,
    e
  ]), function() {
    return s || R(r, t, d.current, f, e);
  }, function() {
    return s || R(r, t, d.current, f, e);
  });
}
function Y(r, t, e) {
  t && e && (t.registerSSRObservable(r), r.getCurrentResult().loading && t.addObservableQueryPromise(r));
}
function Z(r, t, e, i, n) {
  var u;
  t[w] && !S(t[w], n) && (t.reobserve(j(t, e, i, n)), r.previousData = ((u = r.current) === null || u === void 0 ? void 0 : u.data) || r.previousData, r.current = void 0), t[w] = n;
}
function $(r, t, e, i) {
  e === void 0 && (e = {});
  var n = e.skip;
  e.ssr, e.onCompleted, e.onError;
  var u = e.defaultOptions, f = F(e, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"]);
  return function(o) {
    var a = Object.assign(f, { query: t });
    return i && (a.fetchPolicy === "network-only" || a.fetchPolicy === "cache-and-network") && (a.fetchPolicy = "cache-first"), a.variables || (a.variables = {}), n ? (a.initialFetchPolicy = a.initialFetchPolicy || a.fetchPolicy || C(u, r.defaultOptions), a.fetchPolicy = "standby") : a.fetchPolicy || (a.fetchPolicy = o?.options.initialFetchPolicy || C(u, r.defaultOptions)), a;
  };
}
function j(r, t, e, i) {
  var n = [], u = t.defaultOptions.watchQuery;
  return u && n.push(u), e.defaultOptions && n.push(e.defaultOptions), n.push(V(r && r.options, i)), n.reduce(B);
}
function k(r, t, e, i, n, u, f) {
  var o = t.current;
  o && o.data && (t.previousData = o.data), !r.error && A(r.errors) && (r.error = new M({ graphQLErrors: r.errors })), t.current = D(tr(r, e, n), t.previousData, e, i), u(), H(r, o?.networkStatus, f);
}
function H(r, t, e) {
  if (!r.loading) {
    var i = rr(r);
    Promise.resolve().then(function() {
      i ? e.onError(i) : r.data && t !== r.networkStatus && r.networkStatus === P.ready && e.onCompleted(r.data);
    }).catch(function(n) {
      globalThis.__DEV__ !== !1 && x.warn(n);
    });
  }
}
function R(r, t, e, i, n) {
  return r.current || k(t.getCurrentResult(), r, t, n, i, function() {
  }, e), r.current;
}
function C(r, t) {
  var e;
  return r?.fetchPolicy || ((e = t?.watchQuery) === null || e === void 0 ? void 0 : e.fetchPolicy) || "cache-first";
}
function rr(r) {
  return A(r.errors) ? new M({ graphQLErrors: r.errors }) : r.error;
}
function D(r, t, e, i) {
  var n = r.data;
  r.partial;
  var u = F(r, ["data", "partial"]), f = g(g({ data: n }, u), { client: i, observable: e, variables: e.variables, called: r !== T && r !== N, previousData: t });
  return f;
}
function tr(r, t, e) {
  return r.partial && e && !r.loading && (!r.data || Object.keys(r.data).length === 0) && t.options.fetchPolicy !== "cache-only" ? (t.refetch(), g(g({}, r), { loading: !0, networkStatus: P.refetch })) : r;
}
var T = b({
  loading: !0,
  data: void 0,
  error: void 0,
  networkStatus: P.loading
}), N = b({
  loading: !1,
  data: void 0,
  error: void 0,
  networkStatus: P.ready
});
function er(r) {
  return {
    refetch: r.refetch.bind(r),
    reobserve: r.reobserve.bind(r),
    fetchMore: r.fetchMore.bind(r),
    updateQuery: r.updateQuery.bind(r),
    startPolling: r.startPolling.bind(r),
    stopPolling: r.stopPolling.bind(r),
    subscribeToMore: r.subscribeToMore.bind(r)
  };
}
export {
  $ as createMakeWatchQueryOptions,
  C as getDefaultFetchPolicy,
  j as getObsQueryOptions,
  w as lastWatchOptions,
  rr as toApolloError,
  D as toQueryResult,
  Or as useQuery,
  U as useQueryInternals
};
//# sourceMappingURL=index.es17.js.map
