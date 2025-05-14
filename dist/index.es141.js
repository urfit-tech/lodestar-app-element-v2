import { isNonNullObject as s } from "./index.es69.js";
import { isNonEmptyArray as p } from "./index.es131.js";
import { DeepMerger as h } from "./index.es133.js";
function u(t) {
  return "incremental" in t;
}
function d(t) {
  return "hasNext" in t && "data" in t;
}
function E(t) {
  return u(t) || d(t);
}
function v(t) {
  return s(t) && "payload" in t;
}
function P(t, n) {
  var r = t, f = new h();
  return u(n) && p(n.incremental) && n.incremental.forEach(function(i) {
    for (var e = i.data, o = i.path, a = o.length - 1; a >= 0; --a) {
      var c = o[a], l = !isNaN(+c), m = l ? [] : {};
      m[c] = e, e = m;
    }
    r = f.merge(r, e);
  }), r;
}
export {
  v as isApolloPayloadResult,
  u as isExecutionPatchIncrementalResult,
  d as isExecutionPatchInitialResult,
  E as isExecutionPatchResult,
  P as mergeIncrementalData
};
//# sourceMappingURL=index.es141.js.map
