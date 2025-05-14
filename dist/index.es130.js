import { __assign as c, __spreadArray as y } from "./index.es63.js";
import { invariant as V } from "./index.es116.js";
import "./index.es117.js";
import { visit as _, Kind as o } from "graphql";
import { checkDocument as b, getFragmentDefinitions as R, getOperationDefinition as w, getFragmentDefinition as P, getMainDefinition as G } from "./index.es36.js";
import { isField as S } from "./index.es126.js";
import { createFragmentMap as B } from "./index.es125.js";
import { isNonEmptyArray as x, isArray as C } from "./index.es131.js";
var T = {
  kind: o.FIELD,
  name: {
    kind: o.NAME,
    value: "__typename"
  }
};
function A(r, t) {
  return !r || r.selectionSet.selections.every(function(a) {
    return a.kind === o.FRAGMENT_SPREAD && A(t[a.name.value], t);
  });
}
function L(r) {
  return A(w(r) || P(r), B(R(r))) ? null : r;
}
function U(r) {
  var t = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  return r.forEach(function(n) {
    n && (n.name ? t.set(n.name, n) : n.test && a.set(n.test, n));
  }), function(n) {
    var u = t.get(n.name.value);
    return !u && a.size && a.forEach(function(s, v) {
      v(n) && (u = s);
    }), u;
  };
}
function k(r) {
  var t = /* @__PURE__ */ new Map();
  return function(n) {
    n === void 0 && (n = r);
    var u = t.get(n);
    return u || t.set(n, u = {
      // Variable and fragment spread names used directly within this
      // operation or fragment definition, as identified by key. These sets
      // will be populated during the first traversal of the document in
      // removeDirectivesFromDocument below.
      variables: /* @__PURE__ */ new Set(),
      fragmentSpreads: /* @__PURE__ */ new Set()
    }), u;
  };
}
function q(r, t) {
  b(t);
  for (var a = k(""), n = k(""), u = function(e) {
    for (var i = 0, f = void 0; i < e.length && (f = e[i]); ++i)
      if (!C(f)) {
        if (f.kind === o.OPERATION_DEFINITION)
          return a(f.name && f.name.value);
        if (f.kind === o.FRAGMENT_DEFINITION)
          return n(f.name.value);
      }
    return globalThis.__DEV__ !== !1 && V.error(85), null;
  }, s = 0, v = t.definitions.length - 1; v >= 0; --v)
    t.definitions[v].kind === o.OPERATION_DEFINITION && ++s;
  var m = U(r), E = function(e) {
    return x(e) && e.map(m).some(function(i) {
      return i && i.remove;
    });
  }, F = /* @__PURE__ */ new Map(), p = !1, N = {
    enter: function(e) {
      if (E(e.directives))
        return p = !0, null;
    }
  }, O = _(t, {
    // These two AST node types share the same implementation, defined above.
    Field: N,
    InlineFragment: N,
    VariableDefinition: {
      enter: function() {
        return !1;
      }
    },
    Variable: {
      enter: function(e, i, f, d, D) {
        var l = u(D);
        l && l.variables.add(e.name.value);
      }
    },
    FragmentSpread: {
      enter: function(e, i, f, d, D) {
        if (E(e.directives))
          return p = !0, null;
        var l = u(D);
        l && l.fragmentSpreads.add(e.name.value);
      }
    },
    FragmentDefinition: {
      enter: function(e, i, f, d) {
        F.set(JSON.stringify(d), e);
      },
      leave: function(e, i, f, d) {
        var D = F.get(JSON.stringify(d));
        if (e === D)
          return e;
        if (
          // This logic applies only if the document contains one or more
          // operations, since removing all fragments from a document containing
          // only fragments makes the document useless.
          s > 0 && e.selectionSet.selections.every(function(l) {
            return l.kind === o.FIELD && l.name.value === "__typename";
          })
        )
          return n(e.name.value).removed = !0, p = !0, null;
      }
    },
    Directive: {
      leave: function(e) {
        if (m(e))
          return p = !0, null;
      }
    }
  });
  if (!p)
    return t;
  var I = function(e) {
    return e.transitiveVars || (e.transitiveVars = new Set(e.variables), e.removed || e.fragmentSpreads.forEach(function(i) {
      I(n(i)).transitiveVars.forEach(function(f) {
        e.transitiveVars.add(f);
      });
    })), e;
  }, g = /* @__PURE__ */ new Set();
  O.definitions.forEach(function(e) {
    e.kind === o.OPERATION_DEFINITION ? I(a(e.name && e.name.value)).fragmentSpreads.forEach(function(i) {
      g.add(i);
    }) : e.kind === o.FRAGMENT_DEFINITION && // If there are no operations in the document, then all fragment
    // definitions count as usages of their own fragment names. This heuristic
    // prevents accidentally removing all fragment definitions from the
    // document just because it contains no operations that use the fragments.
    s === 0 && !n(e.name.value).removed && g.add(e.name.value);
  }), g.forEach(function(e) {
    I(n(e)).fragmentSpreads.forEach(function(i) {
      g.add(i);
    });
  });
  var M = function(e) {
    return !!// A fragment definition will be removed if there are no spreads that refer
    // to it, or the fragment was explicitly removed because it had no fields
    // other than __typename.
    (!g.has(e) || n(e).removed);
  }, h = {
    enter: function(e) {
      if (M(e.name.value))
        return null;
    }
  };
  return L(_(O, {
    // If the fragment is going to be removed, then leaving any dangling
    // FragmentSpread nodes with the same name would be a mistake.
    FragmentSpread: h,
    // This is where the fragment definition is actually removed.
    FragmentDefinition: h,
    OperationDefinition: {
      leave: function(e) {
        if (e.variableDefinitions) {
          var i = I(
            // If an operation is anonymous, we use the empty string as its key.
            a(e.name && e.name.value)
          ).transitiveVars;
          if (i.size < e.variableDefinitions.length)
            return c(c({}, e), { variableDefinitions: e.variableDefinitions.filter(function(f) {
              return i.has(f.variable.name.value);
            }) });
        }
      }
    }
  }));
}
var X = Object.assign(function(r) {
  return _(r, {
    SelectionSet: {
      enter: function(t, a, n) {
        if (!(n && n.kind === o.OPERATION_DEFINITION)) {
          var u = t.selections;
          if (u) {
            var s = u.some(function(m) {
              return S(m) && (m.name.value === "__typename" || m.name.value.lastIndexOf("__", 0) === 0);
            });
            if (!s) {
              var v = n;
              if (!(S(v) && v.directives && v.directives.some(function(m) {
                return m.name.value === "export";
              })))
                return c(c({}, t), { selections: y(y([], u, !0), [T], !1) });
            }
          }
        }
      }
    }
  });
}, {
  added: function(r) {
    return r === T;
  }
});
function Z(r) {
  var t = G(r), a = t.operation;
  if (a === "query")
    return r;
  var n = _(r, {
    OperationDefinition: {
      enter: function(u) {
        return c(c({}, u), { operation: "query" });
      }
    }
  });
  return n;
}
function $(r) {
  b(r);
  var t = q([
    {
      test: function(a) {
        return a.name.value === "client";
      },
      remove: !0
    }
  ], r);
  return t;
}
export {
  X as addTypenameToDocument,
  Z as buildQueryFromSelectionSet,
  $ as removeClientSetsFromDocument,
  q as removeDirectivesFromDocument
};
//# sourceMappingURL=index.es130.js.map
