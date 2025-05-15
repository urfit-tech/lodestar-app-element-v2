import { newInvariantError as s } from "./index.es93.js";
import "./index.es94.js";
import { isNonNullObject as v } from "./index.es113.js";
import { getFragmentFromSelection as g } from "./index.es167.js";
import { canonicalStringify as p } from "./index.es162.js";
function d(n) {
  return { __ref: String(n) };
}
function j(n) {
  return !!(n && typeof n == "object" && typeof n.__ref == "string");
}
function C(n) {
  return v(n) && n.kind === "Document" && Array.isArray(n.definitions);
}
function V(n) {
  return n.kind === "StringValue";
}
function F(n) {
  return n.kind === "BooleanValue";
}
function y(n) {
  return n.kind === "IntValue";
}
function h(n) {
  return n.kind === "FloatValue";
}
function k(n) {
  return n.kind === "Variable";
}
function N(n) {
  return n.kind === "ObjectValue";
}
function E(n) {
  return n.kind === "ListValue";
}
function S(n) {
  return n.kind === "EnumValue";
}
function I(n) {
  return n.kind === "NullValue";
}
function f(n, t, e, r) {
  if (y(e) || h(e))
    n[t.value] = Number(e.value);
  else if (F(e) || V(e))
    n[t.value] = e.value;
  else if (N(e)) {
    var u = {};
    e.fields.map(function(o) {
      return f(u, o.name, o.value, r);
    }), n[t.value] = u;
  } else if (k(e)) {
    var a = (r || {})[e.name.value];
    n[t.value] = a;
  } else if (E(e))
    n[t.value] = e.values.map(function(o) {
      var i = {};
      return f(i, t, o, r), i[t.value];
    });
  else if (S(e))
    n[t.value] = e.value;
  else if (I(e))
    n[t.value] = null;
  else
    throw s(84, t.value, e.kind);
}
function W(n, t) {
  var e = null;
  n.directives && (e = {}, n.directives.forEach(function(u) {
    e[u.name.value] = {}, u.arguments && u.arguments.forEach(function(a) {
      var o = a.name, i = a.value;
      return f(e[u.name.value], o, i, t);
    });
  }));
  var r = null;
  return n.arguments && n.arguments.length && (r = {}, n.arguments.forEach(function(u) {
    var a = u.name, o = u.value;
    return f(r, a, o, t);
  })), R(n.name.value, r, e);
}
var O = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export",
  "nonreactive"
], c = p, R = Object.assign(function(n, t, e) {
  if (t && e && e.connection && e.connection.key)
    if (e.connection.filter && e.connection.filter.length > 0) {
      var r = e.connection.filter ? e.connection.filter : [];
      r.sort();
      var u = {};
      return r.forEach(function(i) {
        u[i] = t[i];
      }), "".concat(e.connection.key, "(").concat(c(u), ")");
    } else
      return e.connection.key;
  var a = n;
  if (t) {
    var o = c(t);
    a += "(".concat(o, ")");
  }
  return e && Object.keys(e).forEach(function(i) {
    O.indexOf(i) === -1 && (e[i] && Object.keys(e[i]).length ? a += "@".concat(i, "(").concat(c(e[i]), ")") : a += "@".concat(i));
  }), a;
}, {
  setStringify: function(n) {
    var t = c;
    return c = n, t;
  }
});
function q(n, t) {
  if (n.arguments && n.arguments.length) {
    var e = {};
    return n.arguments.forEach(function(r) {
      var u = r.name, a = r.value;
      return f(e, u, a, t);
    }), e;
  }
  return null;
}
function K(n) {
  return n.alias ? n.alias.value : n.name.value;
}
function x(n, t, e) {
  for (var r, u = 0, a = t.selections; u < a.length; u++) {
    var o = a[u];
    if (B(o)) {
      if (o.name.value === "__typename")
        return n[K(o)];
    } else r ? r.push(o) : r = [o];
  }
  if (typeof n.__typename == "string")
    return n.__typename;
  if (r)
    for (var i = 0, l = r; i < l.length; i++) {
      var o = l[i], m = x(n, g(o, e).selectionSet, e);
      if (typeof m == "string")
        return m;
    }
}
function B(n) {
  return n.kind === "Field";
}
function z(n) {
  return n.kind === "InlineFragment";
}
export {
  q as argumentsObjectFromField,
  R as getStoreKeyName,
  x as getTypenameFromResult,
  C as isDocumentNode,
  B as isField,
  z as isInlineFragment,
  j as isReference,
  d as makeReference,
  K as resultKeyNameFromField,
  W as storeKeyNameFromField,
  f as valueToObjectRepresentation
};
//# sourceMappingURL=index.es160.js.map
