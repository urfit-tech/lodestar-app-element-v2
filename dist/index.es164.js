import { isNonEmptyArray as n } from "./index.es165.js";
import { isExecutionPatchIncrementalResult as a } from "./index.es153.js";
function s(r) {
  var o = i(r);
  return n(o);
}
function i(r) {
  var o = n(r.errors) ? r.errors.slice(0) : [];
  return a(r) && n(r.incremental) && r.incremental.forEach(function(e) {
    e.errors && o.push.apply(o, e.errors);
  }), o;
}
export {
  i as getGraphQLErrorsFromResult,
  s as graphQLResultHasError
};
//# sourceMappingURL=index.es164.js.map
