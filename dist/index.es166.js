import { newInvariantError as n } from "./index.es65.js";
import "./index.es66.js";
var s = function(a, i) {
  var r;
  try {
    r = JSON.stringify(a);
  } catch (t) {
    var e = n(39, i, t.message);
    throw e.parseError = t, e;
  }
  return r;
};
export {
  s as serializeFetchParameter
};
//# sourceMappingURL=index.es166.js.map
