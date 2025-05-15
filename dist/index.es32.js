import { __assign as n } from "./index.es65.js";
import { invariant as f, newInvariantError as D } from "./index.es116.js";
import "./index.es117.js";
import { version as Q } from "./index.es151.js";
import { QueryManager as x } from "./index.es152.js";
import { LocalState as P } from "./index.es153.js";
import { getApolloClientMemoryInternals as L } from "./index.es127.js";
import { mergeOptions as d } from "./index.es146.js";
import { execute as R } from "./index.es154.js";
import { HttpLink as A } from "./index.es38.js";
import { ApolloLink as E } from "./index.es66.js";
var w = !1, I = (
  /** @class */
  function() {
    function r(e) {
      var t = this;
      if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !e.cache)
        throw D(15);
      var o = e.uri, i = e.credentials, a = e.headers, s = e.cache, c = e.documentTransform, y = e.ssrMode, m = y === void 0 ? !1 : y, p = e.ssrForceFetchDelay, u = p === void 0 ? 0 : p, _ = e.connectToDevTools, v = e.queryDeduplication, b = v === void 0 ? !0 : v, k = e.defaultOptions, S = e.defaultContext, g = e.assumeImmutableResults, O = g === void 0 ? s.assumeImmutableResults : g, q = e.resolvers, C = e.typeDefs, M = e.fragmentMatcher, T = e.name, F = e.version, l = e.devtools, h = e.link;
      h || (h = o ? new A({ uri: o, credentials: i, headers: a }) : E.empty()), this.link = h, this.cache = s, this.disableNetworkFetches = m || u > 0, this.queryDeduplication = b, this.defaultOptions = k || /* @__PURE__ */ Object.create(null), this.typeDefs = C, this.devtoolsConfig = n(n({}, l), { enabled: l?.enabled || _ }), this.devtoolsConfig.enabled === void 0 && (this.devtoolsConfig.enabled = globalThis.__DEV__ !== !1), u && setTimeout(function() {
        return t.disableNetworkFetches = !1;
      }, u), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = Q, this.localState = new P({
        cache: s,
        client: this,
        resolvers: q,
        fragmentMatcher: M
      }), this.queryManager = new x({
        cache: this.cache,
        link: this.link,
        defaultOptions: this.defaultOptions,
        defaultContext: S,
        documentTransform: c,
        queryDeduplication: b,
        ssrMode: m,
        clientAwareness: {
          name: T,
          version: F
        },
        localState: this.localState,
        assumeImmutableResults: O,
        onBroadcast: this.devtoolsConfig.enabled ? function() {
          t.devToolsHookCb && t.devToolsHookCb({
            action: {},
            state: {
              queries: t.queryManager.getQueryStore(),
              mutations: t.queryManager.mutationStore || {}
            },
            dataWithOptimisticResults: t.cache.extract(!0)
          });
        } : void 0
      }), this.devtoolsConfig.enabled && this.connectToDevTools();
    }
    return r.prototype.connectToDevTools = function() {
      if (!(typeof window > "u")) {
        var e = window, t = Symbol.for("apollo.devtools");
        (e[t] = e[t] || []).push(this), e.__APOLLO_CLIENT__ = this, !w && globalThis.__DEV__ !== !1 && (w = !0, window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol) && setTimeout(function() {
          if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
            var o = window.navigator, i = o && o.userAgent, a = void 0;
            typeof i == "string" && (i.indexOf("Chrome/") > -1 ? a = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : i.indexOf("Firefox/") > -1 && (a = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), a && globalThis.__DEV__ !== !1 && f.log("Download the Apollo DevTools for a better development experience: %s", a);
          }
        }, 1e4));
      }
    }, Object.defineProperty(r.prototype, "documentTransform", {
      /**
       * The `DocumentTransform` used to modify GraphQL documents before a request
       * is made. If a custom `DocumentTransform` is not provided, this will be the
       * default document transform.
       */
      get: function() {
        return this.queryManager.documentTransform;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.stop = function() {
      this.queryManager.stop();
    }, r.prototype.watchQuery = function(e) {
      return this.defaultOptions.watchQuery && (e = d(this.defaultOptions.watchQuery, e)), this.disableNetworkFetches && (e.fetchPolicy === "network-only" || e.fetchPolicy === "cache-and-network") && (e = n(n({}, e), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(e);
    }, r.prototype.query = function(e) {
      return this.defaultOptions.query && (e = d(this.defaultOptions.query, e)), f(e.fetchPolicy !== "cache-and-network", 16), this.disableNetworkFetches && e.fetchPolicy === "network-only" && (e = n(n({}, e), { fetchPolicy: "cache-first" })), this.queryManager.query(e);
    }, r.prototype.mutate = function(e) {
      return this.defaultOptions.mutate && (e = d(this.defaultOptions.mutate, e)), this.queryManager.mutate(e);
    }, r.prototype.subscribe = function(e) {
      return this.queryManager.startGraphQLSubscription(e);
    }, r.prototype.readQuery = function(e, t) {
      return t === void 0 && (t = !1), this.cache.readQuery(e, t);
    }, r.prototype.watchFragment = function(e) {
      return this.cache.watchFragment(e);
    }, r.prototype.readFragment = function(e, t) {
      return t === void 0 && (t = !1), this.cache.readFragment(e, t);
    }, r.prototype.writeQuery = function(e) {
      var t = this.cache.writeQuery(e);
      return e.broadcast !== !1 && this.queryManager.broadcastQueries(), t;
    }, r.prototype.writeFragment = function(e) {
      var t = this.cache.writeFragment(e);
      return e.broadcast !== !1 && this.queryManager.broadcastQueries(), t;
    }, r.prototype.__actionHookForDevTools = function(e) {
      this.devToolsHookCb = e;
    }, r.prototype.__requestRaw = function(e) {
      return R(this.link, e);
    }, r.prototype.resetStore = function() {
      var e = this;
      return Promise.resolve().then(function() {
        return e.queryManager.clearStore({
          discardWatches: !1
        });
      }).then(function() {
        return Promise.all(e.resetStoreCallbacks.map(function(t) {
          return t();
        }));
      }).then(function() {
        return e.reFetchObservableQueries();
      });
    }, r.prototype.clearStore = function() {
      var e = this;
      return Promise.resolve().then(function() {
        return e.queryManager.clearStore({
          discardWatches: !0
        });
      }).then(function() {
        return Promise.all(e.clearStoreCallbacks.map(function(t) {
          return t();
        }));
      });
    }, r.prototype.onResetStore = function(e) {
      var t = this;
      return this.resetStoreCallbacks.push(e), function() {
        t.resetStoreCallbacks = t.resetStoreCallbacks.filter(function(o) {
          return o !== e;
        });
      };
    }, r.prototype.onClearStore = function(e) {
      var t = this;
      return this.clearStoreCallbacks.push(e), function() {
        t.clearStoreCallbacks = t.clearStoreCallbacks.filter(function(o) {
          return o !== e;
        });
      };
    }, r.prototype.reFetchObservableQueries = function(e) {
      return this.queryManager.reFetchObservableQueries(e);
    }, r.prototype.refetchQueries = function(e) {
      var t = this.queryManager.refetchQueries(e), o = [], i = [];
      t.forEach(function(s, c) {
        o.push(c), i.push(s);
      });
      var a = Promise.all(i);
      return a.queries = o, a.results = i, a.catch(function(s) {
        globalThis.__DEV__ !== !1 && f.debug(17, s);
      }), a;
    }, r.prototype.getObservableQueries = function(e) {
      return e === void 0 && (e = "active"), this.queryManager.getObservableQueries(e);
    }, r.prototype.extract = function(e) {
      return this.cache.extract(e);
    }, r.prototype.restore = function(e) {
      return this.cache.restore(e);
    }, r.prototype.addResolvers = function(e) {
      this.localState.addResolvers(e);
    }, r.prototype.setResolvers = function(e) {
      this.localState.setResolvers(e);
    }, r.prototype.getResolvers = function() {
      return this.localState.getResolvers();
    }, r.prototype.setLocalStateFragmentMatcher = function(e) {
      this.localState.setFragmentMatcher(e);
    }, r.prototype.setLink = function(e) {
      this.link = this.queryManager.link = e;
    }, Object.defineProperty(r.prototype, "defaultContext", {
      get: function() {
        return this.queryManager.defaultContext;
      },
      enumerable: !1,
      configurable: !0
    }), r;
  }()
);
globalThis.__DEV__ !== !1 && (I.prototype.getMemoryInternals = L);
export {
  I as ApolloClient,
  d as mergeOptions
};
//# sourceMappingURL=index.es32.js.map
