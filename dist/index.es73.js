import { __assign as i, __spreadArray as l } from "./index.es56.js";
import { newInvariantError as c, invariant as o } from "./index.es65.js";
import "./index.es66.js";
function p(n, r) {
  var e = r, a = [];
  n.definitions.forEach(function(t) {
    if (t.kind === "OperationDefinition")
      throw c(
        73,
        t.operation,
        t.name ? " named '".concat(t.name.value, "'") : ""
      );
    t.kind === "FragmentDefinition" && a.push(t);
  }), typeof e > "u" && (o(a.length === 1, 74, a.length), e = a[0].name.value);
  var u = i(i({}, n), { definitions: l([
    {
      kind: "OperationDefinition",
      // OperationTypeNode is an enum
      operation: "query",
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: {
              kind: "Name",
              value: e
            }
          }
        ]
      }
    }
  ], n.definitions, !0) });
  return u;
}
function d(n) {
  n === void 0 && (n = []);
  var r = {};
  return n.forEach(function(e) {
    r[e.name.value] = e;
  }), r;
}
function s(n, r) {
  switch (n.kind) {
    case "InlineFragment":
      return n;
    case "FragmentSpread": {
      var e = n.name.value;
      if (typeof r == "function")
        return r(e);
      var a = r && r[e];
      return o(a, 75, e), a || null;
    }
    default:
      return null;
  }
}
export {
  d as createFragmentMap,
  s as getFragmentFromSelection,
  p as getFragmentQueryDocument
};
//# sourceMappingURL=index.es73.js.map
