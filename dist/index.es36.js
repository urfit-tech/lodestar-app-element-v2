import { newInvariantError as u, invariant as r } from "./index.es116.js";
import "./index.es117.js";
import { valueToObjectRepresentation as l } from "./index.es126.js";
function o(t) {
  r(t && t.kind === "Document", 76);
  var n = t.definitions.filter(function(i) {
    return i.kind !== "FragmentDefinition";
  }).map(function(i) {
    if (i.kind !== "OperationDefinition")
      throw u(77, i.kind);
    return i;
  });
  return r(n.length <= 1, 78, n.length), t;
}
function m(t) {
  return o(t), t.definitions.filter(function(n) {
    return n.kind === "OperationDefinition";
  })[0];
}
function s(t) {
  return t.definitions.filter(function(n) {
    return n.kind === "OperationDefinition" && !!n.name;
  }).map(function(n) {
    return n.name.value;
  })[0] || null;
}
function p(t) {
  return t.definitions.filter(function(n) {
    return n.kind === "FragmentDefinition";
  });
}
function v(t) {
  var n = m(t);
  return r(n && n.operation === "query", 79), n;
}
function k(t) {
  r(t.kind === "Document", 80), r(t.definitions.length <= 1, 81);
  var n = t.definitions[0];
  return r(n.kind === "FragmentDefinition", 82), n;
}
function h(t) {
  o(t);
  for (var n, i = 0, e = t.definitions; i < e.length; i++) {
    var a = e[i];
    if (a.kind === "OperationDefinition") {
      var f = a.operation;
      if (f === "query" || f === "mutation" || f === "subscription")
        return a;
    }
    a.kind === "FragmentDefinition" && !n && (n = a);
  }
  if (n)
    return n;
  throw u(83);
}
function O(t) {
  var n = /* @__PURE__ */ Object.create(null), i = t && t.variableDefinitions;
  return i && i.length && i.forEach(function(e) {
    e.defaultValue && l(n, e.variable.name, e.defaultValue);
  }), n;
}
export {
  o as checkDocument,
  O as getDefaultValues,
  k as getFragmentDefinition,
  p as getFragmentDefinitions,
  h as getMainDefinition,
  m as getOperationDefinition,
  s as getOperationName,
  v as getQueryDefinition
};
//# sourceMappingURL=index.es36.js.map
