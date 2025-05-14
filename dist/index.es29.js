import { newInvariantError as u, invariant as o } from "./index.es72.js";
import "./index.es73.js";
function f(t) {
  o(t && t.kind === "Document", 76);
  var n = t.definitions.filter(function(r) {
    return r.kind !== "FragmentDefinition";
  }).map(function(r) {
    if (r.kind !== "OperationDefinition")
      throw u(77, r.kind);
    return r;
  });
  return o(n.length <= 1, 78, n.length), t;
}
function c(t) {
  return t.definitions.filter(function(n) {
    return n.kind === "OperationDefinition" && !!n.name;
  }).map(function(n) {
    return n.name.value;
  })[0] || null;
}
function g(t) {
  f(t);
  for (var n, r = 0, a = t.definitions; r < a.length; r++) {
    var i = a[r];
    if (i.kind === "OperationDefinition") {
      var e = i.operation;
      if (e === "query" || e === "mutation" || e === "subscription")
        return i;
    }
    i.kind === "FragmentDefinition" && !n && (n = i);
  }
  if (n)
    return n;
  throw u(83);
}
export {
  f as checkDocument,
  g as getMainDefinition,
  c as getOperationName
};
//# sourceMappingURL=index.es29.js.map
