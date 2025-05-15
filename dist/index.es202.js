import { __assign as o } from "./index.es92.js";
import { visit as f } from "graphql";
function m(i, a) {
  var t = o({}, i), n = new Set(Object.keys(i));
  return f(a, {
    Variable: function(e, u, r) {
      r && r.kind !== "VariableDefinition" && n.delete(e.name.value);
    }
  }), n.forEach(function(e) {
    delete t[e];
  }), t;
}
export {
  m as filterOperationVariables
};
//# sourceMappingURL=index.es202.js.map
