import { __rest as D } from "./index.es92.js";
import { equal as M } from "./index.es103.js";
import { createFragmentMap as S, getFragmentFromSelection as N } from "./index.es167.js";
import { getFragmentDefinitions as q, getMainDefinition as A } from "./index.es36.js";
import { shouldInclude as B } from "./index.es159.js";
import { isField as d, resultKeyNameFromField as w } from "./index.es160.js";
function I(e, a, t, n) {
  var v = a.data, r = D(a, ["data"]), o = t.data, i = D(t, ["data"]);
  return M(r, i) && u(A(e).selectionSet, v, o, {
    fragmentMap: S(q(e)),
    variables: n
  });
}
function u(e, a, t, n) {
  if (a === t)
    return !0;
  var v = /* @__PURE__ */ new Set();
  return e.selections.every(function(r) {
    if (v.has(r) || (v.add(r), !B(r, n.variables)) || s(r))
      return !0;
    if (d(r)) {
      var o = w(r), i = a && a[o], f = t && t[o], p = r.selectionSet;
      if (!p)
        return M(i, f);
      var F = Array.isArray(i), c = Array.isArray(f);
      if (F !== c)
        return !1;
      if (F && c) {
        var y = i.length;
        if (f.length !== y)
          return !1;
        for (var m = 0; m < y; ++m)
          if (!u(p, i[m], f[m], n))
            return !1;
        return !0;
      }
      return u(p, i, f, n);
    } else {
      var g = N(r, n.fragmentMap);
      if (g)
        return s(g) ? !0 : u(
          g.selectionSet,
          // Notice that we reuse the same aResult and bResult values here,
          // since the fragment ...spread does not specify a field name, but
          // consists of multiple fields (within the fragment's selection set)
          // that should be applied to the current result value(s).
          a,
          t,
          n
        );
    }
  });
}
function s(e) {
  return !!e.directives && e.directives.some(H);
}
function H(e) {
  return e.name.value === "nonreactive";
}
export {
  I as equalByQuery
};
//# sourceMappingURL=index.es105.js.map
