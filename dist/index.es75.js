import { __assign as c, __spreadArray as i } from "./index.es56.js";
import { cacheSizes as g } from "./index.es71.js";
var t = {};
function M(e, r) {
  t[e] = r;
}
var b = globalThis.__DEV__ !== !1 ? h : void 0, I = globalThis.__DEV__ !== !1 ? v : void 0, C = globalThis.__DEV__ !== !1 ? d : void 0;
function y() {
  var e = {
    parser: 1e3,
    canonicalStringify: 1e3,
    print: 2e3,
    "documentTransform.cache": 2e3,
    "queryManager.getDocumentInfo": 2e3,
    "PersistedQueryLink.persistedQueryHashes": 2e3,
    "fragmentRegistry.transform": 2e3,
    "fragmentRegistry.lookup": 1e3,
    "fragmentRegistry.findFragmentSpreads": 4e3,
    "cache.fragmentQueryDocuments": 1e3,
    "removeTypenameFromVariables.getVariableDefinitions": 2e3,
    "inMemoryCache.maybeBroadcastWatch": 5e3,
    "inMemoryCache.executeSelectionSet": 5e4,
    "inMemoryCache.executeSubSelectedArray": 1e4
  };
  return Object.fromEntries(Object.entries(e).map(function(r) {
    var a = r[0], o = r[1];
    return [
      a,
      g[a] || o
    ];
  }));
}
function h() {
  var e, r, a, o, l;
  if (globalThis.__DEV__ === !1)
    throw new Error("only supported in development mode");
  return {
    limits: y(),
    sizes: c({ print: (e = t.print) === null || e === void 0 ? void 0 : e.call(t), parser: (r = t.parser) === null || r === void 0 ? void 0 : r.call(t), canonicalStringify: (a = t.canonicalStringify) === null || a === void 0 ? void 0 : a.call(t), links: s(this.link), queryManager: {
      getDocumentInfo: this.queryManager.transformCache.size,
      documentTransforms: f(this.queryManager.documentTransform)
    } }, (l = (o = this.cache).getMemoryInternals) === null || l === void 0 ? void 0 : l.call(o))
  };
}
function d() {
  return {
    cache: {
      fragmentQueryDocuments: n(this.getFragmentDoc)
    }
  };
}
function v() {
  var e = this.config.fragments;
  return c(c({}, d.apply(this)), { addTypenameDocumentTransform: f(this.addTypenameTransform), inMemoryCache: {
    executeSelectionSet: n(this.storeReader.executeSelectionSet),
    executeSubSelectedArray: n(this.storeReader.executeSubSelectedArray),
    maybeBroadcastWatch: n(this.maybeBroadcastWatch)
  }, fragmentRegistry: {
    findFragmentSpreads: n(e?.findFragmentSpreads),
    lookup: n(e?.lookup),
    transform: n(e?.transform)
  } });
}
function p(e) {
  return !!e && "dirtyKey" in e;
}
function n(e) {
  return p(e) ? e.size : void 0;
}
function m(e) {
  return e != null;
}
function f(e) {
  return u(e).map(function(r) {
    return { cache: r };
  });
}
function u(e) {
  return e ? i(i([
    n(e?.performWork)
  ], u(e?.left), !0), u(e?.right), !0).filter(m) : [];
}
function s(e) {
  var r;
  return e ? i(i([
    (r = e?.getMemoryInternals) === null || r === void 0 ? void 0 : r.call(e)
  ], s(e?.left), !0), s(e?.right), !0).filter(m) : [];
}
export {
  C as getApolloCacheMemoryInternals,
  b as getApolloClientMemoryInternals,
  I as getInMemoryCacheMemoryInternals,
  M as registerGlobalCache
};
//# sourceMappingURL=index.es75.js.map
