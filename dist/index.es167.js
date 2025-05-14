import { invariant as f } from "./index.es117.js";
import "./index.es118.js";
import { registerGlobalCache as y } from "./index.es127.js";
import { AutoCleanedWeakCache as S } from "./index.es128.js";
import { cacheSizes as M } from "./index.es123.js";
var r;
(function(e) {
  e[e.Query = 0] = "Query", e[e.Mutation = 1] = "Mutation", e[e.Subscription = 2] = "Subscription";
})(r || (r = {}));
var s;
function k(e) {
  var i;
  switch (e) {
    case r.Query:
      i = "Query";
      break;
    case r.Mutation:
      i = "Mutation";
      break;
    case r.Subscription:
      i = "Subscription";
      break;
  }
  return i;
}
function d(e) {
  s || (s = new S(
    M.parser || 1e3
    /* defaultCacheSizes.parser */
  ));
  var i = s.get(e);
  if (i)
    return i;
  var h, o, u;
  f(!!e && !!e.kind, 61, e);
  for (var c = [], a = [], n = [], l = [], g = 0, b = e.definitions; g < b.length; g++) {
    var t = b[g];
    if (t.kind === "FragmentDefinition") {
      c.push(t);
      continue;
    }
    if (t.kind === "OperationDefinition")
      switch (t.operation) {
        case "query":
          a.push(t);
          break;
        case "mutation":
          n.push(t);
          break;
        case "subscription":
          l.push(t);
          break;
      }
  }
  f(!c.length || a.length || n.length || l.length, 62), f(
    a.length + n.length + l.length <= 1,
    63,
    e,
    a.length,
    l.length,
    n.length
  ), o = a.length ? r.Query : r.Mutation, !a.length && !n.length && (o = r.Subscription);
  var v = a.length ? a : n.length ? n : l;
  f(v.length === 1, 64, e, v.length);
  var p = v[0];
  h = p.variableDefinitions || [], p.name && p.name.kind === "Name" ? u = p.name.value : u = "data";
  var m = { name: u, type: o, variables: h };
  return s.set(e, m), m;
}
d.resetCache = function() {
  s = void 0;
};
globalThis.__DEV__ !== !1 && y("parser", function() {
  return s ? s.size : 0;
});
function O(e, i) {
  var h = d(e), o = k(i), u = k(h.type);
  f(
    h.type === i,
    65,
    o,
    o,
    u
  );
}
export {
  r as DocumentType,
  k as operationName,
  d as parser,
  O as verifyDocumentType
};
//# sourceMappingURL=index.es167.js.map
