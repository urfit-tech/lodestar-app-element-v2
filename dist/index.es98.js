import { newInvariantError as a } from "./index.es72.js";
import "./index.es73.js";
function f(e) {
  for (var o = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], r = 0, t = Object.keys(e); r < t.length; r++) {
    var n = t[r];
    if (o.indexOf(n) < 0)
      throw a(43, n);
  }
  return e;
}
export {
  f as validateOperation
};
//# sourceMappingURL=index.es98.js.map
